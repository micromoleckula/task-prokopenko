export async function getAstros() {
  const res = await fetch("http://api.open-notify.org/astros.json");
  if (!res.ok) throw new Error("Failed to fetch astronauts");
  const data = await res.json();
  return data.people;
}