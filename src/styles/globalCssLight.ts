import themeLight from "./theme";

const GlobalCssLight ={
    "html": {
    },
    "body": {
      background:themeLight.palette.background.default,
    },
    'html, body': {
      margin: 0,
      padding: 0,
      color: themeLight.palette.primary.contrastText,
      WebkitFontSmoothing: 'antialiased'
    },

};

export default GlobalCssLight;
