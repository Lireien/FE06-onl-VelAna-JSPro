const now = new Date();
const isDay = now.getHours() > 8 && now.getHours() < 18;
export const theme = isDay ? { name: "light" } : { name: "dark" };
