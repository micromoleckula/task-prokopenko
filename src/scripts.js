export const getCurrentData = () => {
  const now = new Date();

  const time = now.toLocaleTimeString("en-GB", {
    hour: "2-digit",
    minute: "2-digit",
  });

  const week = now.toLocaleDateString("en-GB", { weekday: "long" });

  const date = now.toLocaleDateString("en-GB", {
    day: "numeric",
    month: "short",
    year: "numeric",
  });

  return { time, week, date };
}