import { RoomBase } from "@/src/types/api";

interface DescriptionRoomDetailProps {
  room: RoomBase;
}

function DescriptionRoomDetail({ room }: DescriptionRoomDetailProps) {
  return (
    <section>
      <h3 className="text-xl font-bold mb-4">About this suite</h3>
      <p className="text-base leading-relaxed">{room.description}</p>
    </section>
  );
}

export default DescriptionRoomDetail;
