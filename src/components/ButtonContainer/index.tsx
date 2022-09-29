import React from 'react';
import {Grid, IconButton, useMediaQuery, useTheme} from "@mui/material";
import {useMainPageStyles} from "../mainPageStyles";
import restart from "../../image/restart.svg";
import dark_mode from "../../image/dark_mode.svg";
import light_mode from "../../image/light_mode.svg";

interface IButtonContainer {
    resetTyping: () => void;
    onSwitchTheme: () => void;
    themeCurrent: "dark" | "light";

}

const ButtonContainer = ({resetTyping, onSwitchTheme, themeCurrent}: IButtonContainer) => {
    const theme = useTheme();

    const {classes} = useMainPageStyles();
    const mdUp = useMediaQuery(theme.breakpoints.up('md'));


    const restartBtn = <IconButton
        size={"small"}
        onClick={resetTyping}
    >
        <img src={restart} alt="restart"/>
    </IconButton>;

    const SwitchThemeModeBtn =
        <IconButton
            onClick={onSwitchTheme}
            size={"small"}
        >
            {
                themeCurrent === "light"
                    ?
                    <img src={dark_mode} alt="dark_mode"/>
                    :
                    <img src={light_mode} alt="light_mode"/>
            }

        </IconButton>;


    return (
        <Grid
            className={!mdUp ? classes.mobileButtonContainer : undefined}
            spacing={6}
            container alignItems={"center"}
            justifyContent={"center"}>
            <Grid item xs={"auto"}>
                {restartBtn}
            </Grid>
            <Grid item xs={"auto"}>
                {SwitchThemeModeBtn}
            </Grid>
        </Grid>
    );
};

export default ButtonContainer;
