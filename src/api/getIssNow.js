export async function getIssNow() {
  const res = await fetch("/api/open-notify/iss-now.json");
  if (!res.ok) throw new Error("Failed to fetch ISS position");
  const data = await res.json();
  return {
    latitude: Number(data.iss_position.latitude),
    longitude: Number(data.iss_position.longitude),
  };
}
