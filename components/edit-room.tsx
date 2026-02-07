import { useEffect, useState, useRef } from "react";
import { X, Upload, ImagePlus as Img } from "lucide-react";
import useRoomMutation from "@/src/hook/use-room-mutation"; // assume this has update too
import useRoomImageMutation from "@/src/hook/use-room-image-mutation";
import InputFieldWithGuide from "./input-field-with-guide";
import { RoomBase } from "@/src/types/api";

interface EditRoomProps {
  room: RoomBase;
  onClose: () => void;
}

export default function EditRoom({ room, onClose }: EditRoomProps) {
  const [title, setTitle] = useState(room.title || "");
  const [description, setDescription] = useState(room.description || "");
  const [roomType, setRoomType] = useState(room.roomType || "");
  const [bedSize, setBedSize] = useState(room.bedSize || 0);
  const [bedType, setBedType] = useState(room.bedType || "");
  const [maxGuests, setMaxGuests] = useState(room.maxGuest || 1);
  const [pricePerNight, setPricePerNight] = useState(room.pricePerNight || 0);
  const [rating, setRating] = useState(room.rating || 0);
  const [amenities, setAmenities] = useState<string[]>(
    room.amenities?.map((a) => a.id.toString()) || [],
  );
  const [existingImages, setExistingImages] = useState<string[]>(
    room.images || [],
  );
  const [newPreviews, setNewPreviews] = useState<string[]>([]);
  const [newFiles, setNewFiles] = useState<File[]>([]);
  const [loading, setLoading] = useState(false);
  const [hasChanged, setHasChanged] = useState(false);

  const { mutateAsync: updateRoom } = useRoomMutation();
  const { mutateAsync: addRoomImages } = useRoomImageMutation();

  const fileInputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    const changed =
      title !== room.title ||
      description !== room.description ||
      roomType !== room.roomType ||
      bedSize !== room.bedSize ||
      bedType !== room.bedType ||
      maxGuests !== room.maxGuest ||
      pricePerNight !== room.pricePerNight ||
      rating !== room.rating ||
      amenities.join(",") !== room.amenities?.map((a) => a.id).join(",") ||
      existingImages.join(",") !== room.images?.join(",") ||
      newFiles.length > 0;

    setHasChanged(changed);
  }, [
    title,
    description,
    roomType,
    bedSize,
    bedType,
    maxGuests,
    pricePerNight,
    rating,
    amenities,
    existingImages,
    newFiles,
    room,
  ]);

  const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const files = Array.from(e.target.files || []);
    if (!files.length) return;

    const newUrls = files.map((file) => URL.createObjectURL(file));

    setNewFiles((prev) => [...prev, ...files]);
    setNewPreviews((prev) => [...prev, ...newUrls]);
  };

  const removeExistingImage = (index: number) => {
    setExistingImages((prev) => prev.filter((_, i) => i !== index));
  };

  const removeNewImage = (index: number) => {
    URL.revokeObjectURL(newPreviews[index]);
    setNewFiles((prev) => prev.filter((_, i) => i !== index));
    setNewPreviews((prev) => prev.filter((_, i) => i !== index));
  };

  const handleSubmit = async () => {
    if (!room.id) return;

    setLoading(true);
    try {
      const payload = {
        title,
        description,
        roomType,
        bedSize,
        bedType,
        maxGuests,
        pricePerNight,
        rating,
        amenities: amenities.map((id) => ({ id: Number(id) })),
      };

      // await updateRoom({ id: room.id, payload });

      if (newFiles.length > 0) {
        await addRoomImages({ roomId: room.id, images: newFiles });
      }
      onClose();
    } catch (err) {
      console.error(err);
      alert("Failed to update room");
    } finally {
      setLoading(false);
    }
  };

  const roomTypes = ["Single", "Double", "Suite", "Deluxe"];
  const bedSizes = ["Twin", "Full", "Queen", "King"];
  const bedTypes = ["Soft", "Hard", "Memory Foam"];

  const amenityOptions = [
    { id: 1, label: "WiFi" },
    { id: 2, label: "Air Conditioner" },
    { id: 3, label: "Sea View" },
  ];

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
      <div
        className="absolute inset-0 bg-black/50 backdrop-blur-sm"
        onClick={onClose}
      />

      <div className="relative bg-white rounded-2xl shadow-2xl w-full max-w-3xl max-h-[90vh] flex flex-col overflow-hidden">
        <div className="sticky top-0 bg-white border-b border-slate-200 p-6 pb-4 rounded-t-2xl">
          <button
            className="absolute top-5 right-6 text-slate-400 hover:text-slate-700 p-2 rounded-lg hover:bg-slate-100 cursor-pointer transition-colors"
            onClick={onClose}
          >
            <X className="w-6 h-6" />
          </button>
          <h2 className="text-2xl font-bold text-slate-800">Edit Room</h2>
        </div>

        <div className="flex-1 overflow-y-auto p-6 space-y-6">
          <InputFieldWithGuide
            title="Room Name"
            required
            guideText="Enter the name of the room."
            type="text"
            maxLength={100}
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />

          <InputFieldWithGuide
            title="Description"
            required
            guideText="Describe the room."
            type="textarea"
            maxLength={500}
            value={description}
            onChange={(e) => setDescription(e.target.value)}
          />

          <InputFieldWithGuide
            title="Room Type"
            required
            guideText="Select room type"
            type="dropdown"
            option={roomTypes.map((r, i) => ({ id: i, value: r, label: r }))}
            value={roomType}
            onChange={(e) => setRoomType(e.target.value)}
          />

          <InputFieldWithGuide
            title="Bed Size"
            required
            guideText="Select bed size"
            type="dropdown"
            option={bedSizes.map((size, i) => ({
              id: i,
              value: size.toString(),
              label: `${size} m`,
            }))}
            value={bedSize.toString()}
            onChange={(e) => setBedSize(Number(e.target.value))}
          />

          <InputFieldWithGuide
            title="Bed Type"
            required
            guideText="Select bed type"
            type="dropdown"
            option={bedTypes.map((t, i) => ({ id: i, value: t, label: t }))}
            value={bedType}
            onChange={(e) => setBedType(e.target.value)}
          />

          <InputFieldWithGuide
            title="Max Guests"
            required
            guideText="Maximum number of guests"
            type="number"
            value={maxGuests.toString()}
            onChange={(e) => setMaxGuests(Number(e.target.value))}
          />

          <InputFieldWithGuide
            title="Price Per Night"
            required
            guideText="Price per night"
            type="number"
            value={pricePerNight.toString()}
            onChange={(e) => setPricePerNight(Number(e.target.value))}
          />

          <InputFieldWithGuide
            title="Rating"
            guideText="Room rating (0-5)"
            type="number"
            min={0}
            max={5}
            value={rating.toString()}
            onChange={(e) => setRating(Number(e.target.value))}
          />

          <div>
            <label className="block font-semibold mb-2">Amenities</label>
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
              {amenityOptions.map((a) => (
                <label key={a.id} className="flex items-center gap-2">
                  <input
                    type="checkbox"
                    checked={amenities.includes(a.id.toString())}
                    onChange={(e) => {
                      setAmenities((prev) =>
                        e.target.checked
                          ? [...prev, a.id.toString()]
                          : prev.filter((id) => id !== a.id.toString()),
                      );
                    }}
                  />
                  {a.label}
                </label>
              ))}
            </div>
          </div>

          <div className="space-y-3">
            <label className="font-semibold flex items-center gap-2">
              <Img size={20} /> Room Images
            </label>

            <input
              ref={fileInputRef}
              type="file"
              multiple
              accept="image/*"
              hidden
              onChange={handleImageChange}
            />

            <div className="flex flex-wrap gap-4">
              {existingImages.map((src, i) => (
                <div key={`existing-${i}`} className="relative w-32 h-32 group">
                  <img
                    src={src}
                    alt={`room image ${i + 1}`}
                    className="w-full h-full object-cover rounded-lg border"
                  />
                  <button
                    onClick={() => removeExistingImage(i)}
                    className="absolute top-1 right-1 bg-red-600 text-white rounded-full p-1.5 opacity-0 group-hover:opacity-100 transition-opacity"
                  >
                    <X size={16} />
                  </button>
                </div>
              ))}

              {newPreviews.map((src, i) => (
                <div key={`new-${i}`} className="relative w-32 h-32 group">
                  <img
                    src={src}
                    alt={`new preview ${i + 1}`}
                    className="w-full h-full object-cover rounded-lg border"
                  />
                  <button
                    onClick={() => removeNewImage(i)}
                    className="absolute top-1 right-1 bg-red-600 text-white rounded-full p-1.5 opacity-0 group-hover:opacity-100 transition-opacity"
                  >
                    <X size={16} />
                  </button>
                </div>
              ))}

              <div
                onClick={() => fileInputRef.current?.click()}
                className="w-32 h-32 border-2 border-dashed border-gray-300 rounded-lg flex items-center justify-center cursor-pointer hover:border-blue-400 transition-colors"
              >
                <Upload className="text-gray-400" size={32} />
              </div>
            </div>
          </div>
        </div>

        <div className="shrink-0 bg-white flex items-center justify-end gap-4 p-6 border-t border-gray-100">
          <button
            onClick={onClose}
            className="px-6 py-2.5 border border-slate-300 text-slate-700 rounded-lg hover:bg-slate-50 font-medium"
          >
            Cancel
          </button>
          <button
            onClick={handleSubmit}
            disabled={loading || !hasChanged}
            className="px-6 py-2.5 bg-blue-600 text-white rounded-lg font-medium hover:bg-blue-700 disabled:opacity-50 disabled:cursor-not-allowed shadow-sm transition"
          >
            {loading ? "Saving..." : "Save Changes"}
          </button>
        </div>
      </div>
    </div>
  );
}
