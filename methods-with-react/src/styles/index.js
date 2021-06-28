const now = new Date();
const isDay = now.getHours() > 8 && now.getHours() < 18;
export const theme = isDay
  ? {
      mode: "light",
      mainBackgroundColor: "#767391",
      backgroundColor: "#D6D3F2",
      textColor: "#282c34",
      bordersColor: "#2c3682",
    }
  : {
      mode: "dark",
      mainBackgroundColor: "#282c34",
      textColor: "#c8f6f7",
      bordersColor: "#6e7adb",
    };
