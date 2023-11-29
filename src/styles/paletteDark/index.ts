import {alpha} from "@mui/material/styles";

export const COLORS = {
    prussianBlue: "#0A335C",
    white: "#fff"
};

const  palette ={
    primary: {
        light: COLORS.white,
        main: COLORS.white,
        contrastText: COLORS.white
    },
    divider: "#9FB8C6",
    background: {
        default: COLORS.prussianBlue,
        paper: COLORS.prussianBlue,
    },
    text:{
        primary: COLORS.white,
        secondary:alpha(COLORS.white, 0.64)
    },
    action: {
        hover: alpha(COLORS.white, 0.1),
    }
};

export default palette;
