import { useEffect, useState, useRef } from "react";
import { X, Upload, ImagePlus as Img } from "lucide-react";
import useRoomMutation from "@/src/hook/use-room-mutation";
import useRoomImageMutation from "@/src/hook/use-room-image-mutation";
import InputFieldWithGuide from "./input-field-with-guide";

export default function AddRoom() {
  const [open, setOpen] = useState(false);
  const [loading, setLoading] = useState(false);
  const [hasChanged, setHasChanged] = useState(false);

  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [roomType, setRoomType] = useState("");
  const [bedSize, setBedSize] = useState(0);
  const [bedType, setBedType] = useState("");
  const [maxGuests, setMaxGuests] = useState(1);
  const [pricePerNight, setPricePerNight] = useState(0);
  const [rating, setRating] = useState(0);
  const [amenities, setAmenities] = useState<string[]>([]);
  const [previews, setPreviews] = useState<string[]>([]);
  const [images, setImages] = useState<File[]>([]);
  const imagesRef = useRef<File[]>([]);
  const addRoom = useRoomMutation();
  const addImage = useRoomImageMutation();

  const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const files = Array.from(e.target.files || []);
    if (!files.length) return;

    const newPreviews = files.map((file) => URL.createObjectURL(file));

    imagesRef.current = [...imagesRef.current, ...files];
    setImages(imagesRef.current);
    setPreviews((prev) => [...prev, ...newPreviews]);

    e.target.value = "";
  };

  const removeImage = (index: number) => {
    URL.revokeObjectURL(previews[index]);

    imagesRef.current = imagesRef.current.filter((_, i) => i !== index);
    setImages(imagesRef.current);
    setPreviews((prev) => prev.filter((_, i) => i !== index));
  };

  const handleSubmit = async () => {
    try {
      setLoading(true);

      const payload: any = {
        title,
        description,
        roomType,
        bedSize,
        bedType,
        maxGuest: maxGuests,
        pricePerNight,
        rating,
        amenityIds: amenities.map(Number),
      };

      Object.keys(payload).forEach((key) => {
        if (
          payload[key] === "" ||
          payload[key] === null ||
          (Array.isArray(payload[key]) && payload[key].length === 0)
        ) {
          delete payload[key];
        }
      });

      const room = await addRoom.mutateAsync(payload);
      console.log("room", room);

      if (imagesRef.current.length > 0) {
        await addImage.mutateAsync({
          roomId: room.id,
          images: imagesRef.current,
        });
      }

      imagesRef.current.forEach((_, i) => URL.revokeObjectURL(previews[i]));
      imagesRef.current = [];
      setImages([]);
      setPreviews([]);

      setOpen(false);
      setHasChanged(false);
    } catch (error) {
      console.error("Create room failed:", error);
    } finally {
      setLoading(false);
    }
  };

  const amenityOptions = [
    { id: 1, label: "WiFi" },
    { id: 2, label: "Air Conditioner" },
    { id: 3, label: "Sea View" },
  ];

  useEffect(() => {
    if (
      title ||
      description ||
      roomType ||
      bedSize ||
      bedType ||
      maxGuests ||
      pricePerNight ||
      rating ||
      amenities.length ||
      images.length
    ) {
      setHasChanged(true);
    }
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
    images,
  ]);

  const roomTypes = ["Single", "Double", "Suite", "Deluxe"];
  const bedSizes = ["Twin", "Full", "Queen", "King"];
  const bedTypes = ["Soft", "Hard", "Memory Foam"];

  return (
    <div>
      <div className="max-w-4xl mx-auto">
        <button
          onClick={() => setOpen(true)}
          className="inline-flex items-center gap-2 bg-blue-500 text-white font-semibold px-4 py-3 rounded-2xl shadow-lg cursor-pointer hover:bg-blue-600 hover:shadow-xl transition-all duration-200 ease-in-out"
        >
          Add New Room
        </button>
      </div>

      {open && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 animate-in fade-in duration-200">
          <div className="absolute inset-0 bg-black/50 backdrop-blur-sm"></div>

          <div className="relative bg-white rounded-2xl shadow-2xl w-full max-w-3xl max-h-[90vh] flex flex-col overflow-hidden animate-in zoom-in-95 duration-200">
            <div className="sticky top-0 bg-white border-b border-slate-200 p-8 pb-4 rounded-t-2xl">
              <button
                className="absolute top-6 right-6 text-slate-400 hover:text-slate-600 hover:bg-slate-100 rounded-lg p-2 transition-colors cursor-pointer"
                onClick={() => setOpen(false)}
              >
                <X className="w-5 h-5" />
              </button>
              <h2 className="text-2xl font-bold text-slate-800">
                Create New Room
              </h2>
            </div>

            <div className="flex-1 overflow-y-auto">
              <div className="p-6 space-y-4">
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
                  guideText="Select the room type."
                  type="dropdown"
                  option={roomTypes.map((r, i) => ({ id: i, value: r }))}
                  value={roomType}
                  onChange={(e) => setRoomType(e.target.value)}
                />

                <InputFieldWithGuide
                  title="Bed Size"
                  required
                  guideText="Select the bed size."
                  type="dropdown"
                  option={bedSizes.map((label, index) => ({
                    id: index,
                    value: label,
                  }))}
                  value={bedSize.toString()}
                  onChange={(e) => setBedSize(Number(e.target.value))}
                />

                <InputFieldWithGuide
                  title="Bed Type"
                  required
                  guideText="Select the bed type."
                  type="dropdown"
                  option={bedTypes.map((r, i) => ({ id: i, value: r }))}
                  value={bedType}
                  onChange={(e) => setBedType(e.target.value)}
                />

                <InputFieldWithGuide
                  title="Max Guests"
                  required
                  guideText="Maximum number of guests."
                  type="number"
                  value={maxGuests.toString()}
                  onChange={(e) => setMaxGuests(Number(e.target.value))}
                />

                <InputFieldWithGuide
                  title="Price Per Night"
                  required
                  guideText="Set the price per night."
                  type="number"
                  value={pricePerNight.toString()}
                  onChange={(e) => setPricePerNight(Number(e.target.value))}
                />

                <InputFieldWithGuide
                  title="Rating"
                  guideText="Room rating out of 5."
                  type="number"
                  value={rating.toString()}
                  onChange={(e) => setRating(Number(e.target.value))}
                />

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

                <div className="space-y-2">
                  <label className="font-semibold flex gap-2 items-center">
                    <Img /> Room Images
                  </label>

                  <input
                    id="file-upload"
                    type="file"
                    multiple
                    accept="image/*"
                    hidden
                    onChange={handleImageChange}
                  />
                  <div className="flex gap-2 flex-wrap">
                    {previews.map((src, i) => (
                      <div key={i} className="relative w-32 h-32">
                        <button
                          type="button"
                          onClick={() => removeImage(i)}
                          className="absolute top-1 right-1 bg-black text-white rounded-full p-1"
                        >
                          <X size={14} />
                        </button>
                        <img
                          src={src}
                          alt={`preview-${i}`}
                          className="w-full h-full object-cover rounded"
                        />
                      </div>
                    ))}

                    {/* Always show an “Add more” box */}
                    <label
                      htmlFor="file-upload"
                      className="w-32 h-32 border-dashed border-2 flex items-center justify-center cursor-pointer rounded"
                    >
                      <Upload className="text-gray-400" />
                    </label>
                  </div>
                </div>
              </div>
            </div>

            <div className="shrink-0 bg-white flex items-center justify-end gap-3 p-6 border-t border-slate-200 rounded-b-2xl">
              <button
                onClick={() => setOpen(false)}
                className="px-6 py-2.5 rounded-lg border text-slate-700 font-semibold cursor-pointer hover:bg-gray-100"
              >
                Cancel
              </button>
              <button
                disabled={loading || !hasChanged}
                onClick={handleSubmit}
                className="px-6 py-2.5 rounded-lg bg-blue-500 text-white font-semibold shadow-lg hover:bg-blue-600 cursor-pointer transition disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {loading ? "Creating..." : "Create Room"}
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
