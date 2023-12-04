import React, { forwardRef } from 'react';
import {Grid, IconButton, useMediaQuery, useTheme} from "@mui/material";
import {useMainPageStyles} from "../mainPageStyles";
import restart from "../../image/restart.svg";
import dark_mode from "../../image/dark_mode.svg";
import light_mode from "../../image/light_mode.svg";

interface IButtonContainerProps {
    resetTyping: () => void;
    onSwitchTheme: () => void;
    themeCurrent: "dark" | "light";

}

const ButtonContainer = forwardRef<HTMLButtonElement, IButtonContainerProps>(
  ({ resetTyping, onSwitchTheme, themeCurrent }, ref) => {
    const theme = useTheme();

      console.log(ref);
      const {classes} = useMainPageStyles();
    const mdUp = useMediaQuery(theme.breakpoints.up('md'));

    const handleKeyPress = (event: React.KeyboardEvent) => {
        console.log("key:", event.code);
        if (event.code === "Space") {
            event.preventDefault();
        }
    };


    const restartBtn = <IconButton
        size={"small"}
        onClick={resetTyping}
    >
        <img src={restart} alt="restart"/>
    </IconButton>;

    const SwitchThemeModeBtn =
        <IconButton
            ref={ref}
            onKeyDown={handleKeyPress}
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
});

export default ButtonContainer;
