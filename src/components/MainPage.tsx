import React, {useCallback, useEffect, useRef, useState} from 'react';
import avatar from '../image/avatar.png'
import Box from '@mui/material/Box';


import {
    Avatar,
    Container,
    Grid,
    Link,
    Typography, useMediaQuery,
    useTheme
} from "@mui/material";

import {useMainPageStyles} from "./mainPageStyles";
import useTypingGame from "react-typing-game-hook";
import SnackBarCustom from "./SnackBarCustom";
import Header from './Header';
import ButtonContainer from "./ButtonContainer";
import MobileDrawer from "./MobileDrawer";
import FinishedDialog from "./FinishedDialog";
import {LogoBird} from "../icons";
import globalVariable from "../utils/globalVariable";


export interface IMainPage {
    setThemeCurrent: (state: any) => void;
    themeCurrent: "dark" | "light";
}

const MainPage = ({themeCurrent, setThemeCurrent}: IMainPage) => {

    const theme = useTheme();
    const {classes} = useMainPageStyles();
    const buttonContainerRef = useRef<HTMLButtonElement | null>(null);


    const [openDrawer, setOpenDrawer] = useState<boolean>(false);
    const [endGame, setEndGame] = useState<boolean>(false);
    const [totalTimeTypeWriting, setTotalTimeTypeWriting] = useState<number | null>(null);

    const [openModal, setOpenModal] = React.useState<boolean>(false);
    const [animationBird, setAnimationBird] = useState<boolean>(false);
    const [animationBirdError, setAnimationBirdError] = useState<boolean>(false);
    const openMobileHeaderDrawer = () => {
        setOpenDrawer(true);
    };
    const closeMobileHeaderDrawer = () => {
        setOpenDrawer(false);
    };

    const mainMenuArray = [
        {title: "Тренажер", href: "#"},
        {title: "Тест", href: "#"},
        {title: "Навчання", href: "#"}
    ];
    const mainMenuArrayForDesktop = [
        {title: "Тест", href: "#"}, {title: "Тренажер", href: "#"}, {title: "Навчання", href: "#"},
    ];

    const smallMenuArray = [
        {title: "Для вчителів", href: "#"},
        {title: "Про нас", href: "#"},
        {title: "Рейтинг", href: "#"},
        {title: "Допомога", href: "#"},
        {title: "Контакти", href: "#"},
        {title: "Підтримати проєкт", href: "#"},
    ]

    const smUp = useMediaQuery(theme.breakpoints.up('sm'));
    const mdUp = useMediaQuery(theme.breakpoints.up('md'));

    const avatarBlock = <Link href={"#"}><Avatar alt={"avatar"} src={avatar}/></Link>;

    let text = "The quick brown fox jumps over the lazy dog";


    const {
        states: {
            charsState,
            length,
            currIndex,
            correctChar,
            errorChar,
            phase,
            startTime,
            endTime
        },
        actions: {insertTyping, resetTyping, deleteTyping}
    } = useTypingGame(text, {skipCurrentWordOnSpace: false, pauseOnError: true});


    const handleKey = useCallback((key: any) => {
        if (key === "Escape") {
            resetTyping();
        } else if (key === "Backspace") {
            deleteTyping(false);
        } else if (key.length === 1) {
            insertTyping(key);
        }
    }, [resetTyping, deleteTyping, insertTyping]);


    useEffect(() => {

        const onKeyDown = ({key}: any) => {
            handleKey(key)
        }

        window.addEventListener('keydown', onKeyDown);

        return () => {
            window.removeEventListener("keydown", onKeyDown);
        };


    }, [handleKey]);

    useEffect(() => {

        if (currIndex === (length - 1)) {
            setEndGame(true);
            setOpenModal(true);
            // alert("end");
        }

    }, [currIndex, length]);

    const handleCloseModal = () => {
        setOpenModal(false);
        setEndGame(false);
        resetTyping();
    };

    const onSwitchTheme = () => {
        if (themeCurrent === "light") {
            setThemeCurrent("dark")
        } else {
            setThemeCurrent("light")
        }

        if (buttonContainerRef.current) {
            console.log("buttonContainerRef.current",buttonContainerRef.current);
            buttonContainerRef.current.blur();
        }
    }

    useEffect(() => {
        if (endTime !== null && startTime !== null) {
            setTotalTimeTypeWriting((endTime - startTime) / 1000)
        }
    }, [endTime, startTime]);


    useEffect(() => {
        if (correctChar > 0) {
            setAnimationBirdError(false);

            setTimeout(() => (setAnimationBird(false)), globalVariable.animationDurationFromGlobal)
            setAnimationBird(true);
        }
    }, [correctChar]);

    useEffect(() => {
        if (errorChar > 0) {
            setTimeout(() => (setAnimationBirdError(false)), globalVariable.animationDurationFromGlobal)
            setAnimationBirdError(true);
        }
    }, [errorChar]);


    return (
        <React.Fragment>
            <Header themeCurrent={themeCurrent}
                    avatarBlock={avatarBlock}
                    buttonContainer={
                        <ButtonContainer
                            ref={buttonContainerRef}
                            onSwitchTheme={onSwitchTheme}
                            resetTyping={resetTyping}
                            themeCurrent={themeCurrent}/>
                    }
                    mainMenuArrayForDesktop={mainMenuArrayForDesktop}
                    openMobileHeaderDrawer={openMobileHeaderDrawer}
                    setThemeCurrent={setThemeCurrent}
                    smallMenuArray={smallMenuArray}
            />
            <Box className={classes.main} component={'main'}>
                <Container>
                    <Grid spacing={5} container alignItems={"center"} flexWrap={"nowrap"}>
                        <Grid item xs={'auto'}>
                            <LogoBird animationBirdError={animationBirdError} animation={animationBird}/>
                        </Grid>
                        <Grid className={classes.typedTextContainer} item>
                            <Typography
                                variant={'inherit'}
                                className={classes.typedTextElem}

                            >

                                {text.split("").map((char: string, index: number) => {
                                    let state = charsState[index];
                                    let color = state === 0 ? theme.palette.primary.main : state === 1 ? theme.palette.success.main : theme.palette.error.main;
                                    if (index > (currIndex - 1) && !endGame) {
                                        return (
                                            <span
                                                key={char + index}
                                                style={{color}}
                                                className={currIndex + 1 === index ? classes.currLetter : undefined}
                                            >
                                                  {char}
                                                </span>
                                        );

                                    } else return null
                                })}
                            </Typography>
                        </Grid>
                    </Grid>
                    {!smUp && <ButtonContainer
                        onSwitchTheme={onSwitchTheme}
                        resetTyping={resetTyping}
                        themeCurrent={themeCurrent}/>}
                </Container>
            </Box>

            {!mdUp &&
            <MobileDrawer smallMenuArray={smallMenuArray}
                          avatarBlock={avatarBlock}
                          correctChar={correctChar}
                          closeMobileHeaderDrawer={closeMobileHeaderDrawer}
                          mainMenuArray={mainMenuArray}
                          openDrawer={openDrawer}/>
            }
            <SnackBarCustom correctChar={correctChar} errorChar={errorChar}/>
            {totalTimeTypeWriting &&
            <FinishedDialog textLength={length} correctChar={correctChar} errorChar={errorChar}
                            handleCloseModal={handleCloseModal} openModal={openModal}
                            phase={phase}
                            totalTimeTypeWritting={totalTimeTypeWriting}/>
            }
        </React.Fragment>
    );
}

export default MainPage;
