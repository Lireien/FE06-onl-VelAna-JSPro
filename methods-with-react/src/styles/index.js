const now = new Date();
const isDay = now.getHours() > 6 && now.getHours() < 18;
export const theme = isDay
  ? {
      mode: "light",
      mainBackgroundColor: "#767391",
      backgroundColor: "#D6D3F2",
      textColor: "#282c34",
      bordersColor: "#1930d4",
      linkColors:"#20296a",
      activeLinkColor:"white",
      liBgColor:  "#adabc4",
    }
  : {
      mode: "dark",
      mainBackgroundColor: "#282c34",
      backgroundColor: "rgb(75,85,94)",
      textColor: "#c8f6f7",
      bordersColor: "#26bfbf",
      linkColors:"#8fcacb",
      activeLinkColor:"white",
      liBgColor:  "#706d7f",
    };
