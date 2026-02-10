"use client";

import { useEffect, useState, useRef } from "react";
import { X, Upload, ImagePlus as Img } from "lucide-react";
import useRoomImageMutation from "@/src/hook/use-room-image-mutation";
import InputFieldWithGuide from "./input-field-with-guide";
import { RoomBase } from "@/src/types/api";
import { updateRoom } from "@/src/hook/use-room-update";
import useUpdateRoomImage from "@/src/hook/use-update-room-image";
interface EditRoomProps {
  room: RoomBase;
  onClose: () => void;
}

type ExistingImage = {
  id: number;
  url: string;
};

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
  const [existingImages, setExistingImages] = useState<ExistingImage[]>(
    room.images?.map((img: any) => ({
      id: img.id,
      url: img.url,
    })) ?? [],
  );

  const [newFiles, setNewFiles] = useState<File[]>([]);
  const [newPreviews, setNewPreviews] = useState<string[]>([]);
  const [loading, setLoading] = useState(false);
  const [hasChanged, setHasChanged] = useState(false);

  const { mutateAsync: addRoomImages } = useRoomImageMutation();
  const { mutateAsync: updateRoomImage } = useUpdateRoomImage();
  const fileInputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    const originalImageIds = room.images?.map((i: any) => i.id).join(",") ?? "";
    const currentImageIds = existingImages.map((i) => i.id).join(",");

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
      currentImageIds !== originalImageIds ||
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
    const files = Array.from(e.target.files ?? []);
    if (!files.length) return;

    setNewFiles((prev) => [...prev, ...files]);
    setNewPreviews((prev) => [
      ...prev,
      ...files.map((f) => URL.createObjectURL(f)),
    ]);

    e.target.value = "";
  };

  const handleReplaceExistingImage = async (imageId: number, file: File) => {
    await updateRoomImage({ imageId, image: file });

    setExistingImages((prev) =>
      prev.map((img) => {
        if (img.id === imageId) {
          URL.revokeObjectURL(img.url);
          return { ...img, url: URL.createObjectURL(file) };
        }
        return img;
      }),
    );
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
      await updateRoom({
        id: room.id,
        payload: {
          title,
          description,
          roomType,
          bedSize,
          bedType,
          maxGuest: maxGuests,
          pricePerNight,
          rating,
          amenities: amenities.map((id) => ({ id: Number(id) })),
          images: existingImages.map((i) => ({ id: i.id })),
        },
      });

      if (newFiles.length) {
        await addRoomImages({
          roomId: room.id,
          images: newFiles,
        });
      }

      onClose();
    } catch (e) {
      console.error(e);
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

          <div>
            <label className="font-semibold flex items-center gap-2">
              <Img size={20} /> Room Images
            </label>

            <input
              ref={fileInputRef}
              type="file"
              multiple
              hidden
              accept="image/*"
              onChange={handleImageChange}
            />

            <div className="flex flex-wrap gap-4 mt-3">
              {existingImages.map((img) => (
                <div key={img.id} className="relative w-32 h-32 group">
                  <img
                    src={img.url}
                    className="w-full h-full object-cover rounded-lg border"
                  />

                  <label className="absolute bottom-1 left-1 bg-black/60 text-white text-xs px-2 py-1 rounded cursor-pointer opacity-0 group-hover:opacity-100">
                    Replace
                    <input
                      type="file"
                      hidden
                      accept="image/*"
                      onChange={(e) =>
                        e.target.files &&
                        handleReplaceExistingImage(img.id, e.target.files[0])
                      }
                    />
                  </label>

                  <button
                    onClick={() =>
                      setExistingImages((prev) =>
                        prev.filter((i) => i.id !== img.id),
                      )
                    }
                    className="absolute top-1 right-1 bg-red-600 text-white p-1 rounded-full opacity-0 group-hover:opacity-100"
                  >
                    <X size={14} />
                  </button>
                </div>
              ))}

              {newPreviews.map((src, i) => (
                <div key={i} className="relative w-32 h-32 group">
                  <img
                    src={src}
                    className="w-full h-full object-cover rounded-lg border"
                  />
                  <button
                    onClick={() => removeNewImage(i)}
                    className="absolute top-1 right-1 bg-red-600 text-white p-1 rounded-full"
                  >
                    <X size={14} />
                  </button>
                </div>
              ))}

              <div
                onClick={() => fileInputRef.current?.click()}
                className="w-32 h-32 border-2 border-dashed flex items-center justify-center cursor-pointer"
              >
                <Upload />
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
