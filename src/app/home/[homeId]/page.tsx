import AmenitiesRoomDetail from "@/components/amenities-room-detail";
import AvailabilityCalendar from "@/components/availibility-calendar";
import BookNow from "@/components/book-now";
import DescriptionRoomDetail from "@/components/description-room-detail";
import GuestReviews from "@/components/guest-view";
import RoomDetailGallery from "@/components/room-detail-gallery";
import RoomDetailHeader from "@/components/room-detail-header";

export default function RoomDetail({
  params,
}: {
  params: { homeId: string };
}) {
  return (
    <div className="bg-gray-50 min-h-screen">
      <div className="max-w-7xl mx-auto px-6 py-6 space-y-8">

        {/* ===== Room Title + Meta ===== */}
        <RoomDetailHeader />

        {/* ===== Gallery ===== */}
        <RoomDetailGallery />

        {/* ===== Main Content + Booking ===== */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">

          {/* Left Content */}
          <div className="lg:col-span-2 space-y-10">
            <DescriptionRoomDetail />
            <AmenitiesRoomDetail />
          </div>

          {/* Right Booking Card */}
          <aside className="lg:col-span-1">
            <div className="lg:sticky lg:top-24">
              <BookNow />
            </div>
          </aside>
        </div>

        {/* ===== Availability ===== */}
        {/* ===== Availability + Reviews (Left Column Only) ===== */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">

          {/* Left (col-4 style) */}
          <div className="lg:col-span-2 space-y-8">

            <section>
              <AvailabilityCalendar />
            </section>

            <section className="border-t pt-6">
              <GuestReviews />
            </section>

          </div>

          {/* Right Spacer (keeps layout aligned with BookNow) */}
          <div className="hidden lg:block" />
        </div>


      </div>
    </div>
  );
}
