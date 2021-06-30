const now = new Date();
const isDay = now.getHours() > 8 && now.getHours() < 12;
export const theme = isDay
  ? {
      mode: "light",
      mainBackgroundColor: "#767391",
      backgroundColor: "#D6D3F2",
      textColor: "#282c34",
      bordersColor: "#2c3682",
      linkColors:"#20296a",
      activeLinkColor:"white",
    }
  : {
      mode: "dark",
      mainBackgroundColor: "#282c34",
      backgroundColor: "#D6D3F2",
      textColor: "#c8f6f7",
      bordersColor: "#6e7adb",
      linkColors:"#8fcacb",
      activeLinkColor:"#875ba5",
    };
