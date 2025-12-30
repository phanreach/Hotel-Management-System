import RoomDetail from "@/components/room-detail";

export default function RoomDetailPage({
  params,
}: {
  params: { homeId: string };
}) {
  const { homeId } = params;

  return (
    <div className="p-8">
      <h1 className="text-xl font-bold mb-4">Home ID: {homeId}</h1>
      <RoomDetail homeId={homeId} />
    </div>
  );
}
