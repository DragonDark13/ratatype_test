import {alpha} from "@mui/material/styles";

export const COLORS = {
    prussianBlue: "#0A335C",
    white: "#fff"
};

export default {
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
    action: {
        hover: alpha(COLORS.white, 0.1),
    }
};
