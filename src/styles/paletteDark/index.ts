import {alpha} from "@mui/material/styles";

export const COLORS = {
    LINK: '#4C7BD9',
    DEFAULT: '#2c2c2c',
    prussianBlue: "#0A335C",
};

export default {
    primary: {
        light: '#fff',
        main: '#fff',
        dark: '#186937',
        hover: '#EBF6EF',
        contrastText: '#fff'
    },
    secondary: {
        light: '#F7F9FC',
        main: '#616C7A',
        dark: '#2C2C2C',
        stroke: '#ECEDEF',
        contrastText: '#000'
    },
    error: {
        main: '#FF5252',
        light: '#FFEEEE'
    },
    divider:"#9FB8C6",
    background: {
        default: '#0A335C',
        paper: COLORS.prussianBlue,
    },
      action:{
        hover: alpha("#fff",0.1),
    }
};
