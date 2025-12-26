import RoomCard from "@/components/room-card";
import Header from "@/components/header";
import PriceRange from "@/components/price-range";
import CategoriesCheck from "@/components/categories-check";

export default function Home() {
  return (
    <div className="bg-gray-100">
      <Header />
      <div className="grid grid-cols-1 lg:grid-cols-4 gap-6 p-8">
        <div className="lg:col-span-1 space-y-8">
          <PriceRange />
          <CategoriesCheck />
        </div>
        <div className="lg:col-span-3">
          <RoomCard />
        </div>
      </div>
    </div>
  );
}
