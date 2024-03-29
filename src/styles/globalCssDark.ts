import themeDark from "./themeDark";

const GlobalCssDark ={
    "body": {
      background:themeDark.palette.background.default,
    },
    'html, body': {
      margin: 0,
      padding: 0,
      color: themeDark.palette.primary.contrastText,
      WebkitFontSmoothing: 'antialiased'
    },
};

export default GlobalCssDark;
