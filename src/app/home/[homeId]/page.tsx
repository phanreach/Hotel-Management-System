export default async function RoomDetail({
  params,
}: {
  params: Promise<{ homeId: string }>;
}) {
  const homeId = (await params).homeId;
  return (
    <div>
      <h1>home id {homeId}</h1>
    </div>
  );
}
