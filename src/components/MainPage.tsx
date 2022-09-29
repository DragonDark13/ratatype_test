import React, {useCallback, useEffect, useState} from 'react';
import header_icon_dark from '../image/dark/header_icon_dark.svg'
import header_icon_dark_mob from '../image/dark/header_icon_dark_mob.svg'
import burger_menu_close from '../image/burger_menu_close.svg'
import avatar from '../image/avatar.png'
import alba from '../image/alba.svg'
import gold_coin from '../image/gold_coin.svg'
import Box from '@mui/material/Box';


import {
    AppBar,
    Avatar,
    Container,
    Divider,
    Drawer,
    Grid,
    IconButton,
    Link,
    List,
    ListItemButton,
    ListItemText,
    Typography, useMediaQuery,
    useTheme
} from "@mui/material";

import {useMainPageStyles} from "./mainPageStyles";
import useTypingGame from "react-typing-game-hook";
import SnackBarCustom from "./SnackBarCustom";
import Header from './Header';
import ButtonContainer from "./ButtonContainer";


export interface IMainPage {
    setThemeCurrent: (state: any) => void;
    themeCurrent: "dark" | "light";
}

const MainPage = ({themeCurrent, setThemeCurrent}: IMainPage) => {

    const theme = useTheme();
    const {classes} = useMainPageStyles();


    const [openDrawer, setOpenDrawer] = useState<boolean>(false);

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
            currChar,
            correctChar,
            errorChar,
            phase,
            startTime,
            endTime
        },
        actions: {insertTyping, resetTyping, deleteTyping}
    } = useTypingGame(text, {skipCurrentWordOnSpace: false, pauseOnError: true});

    console.log(
        JSON.stringify(
            {
                startTime,
                endTime,
                length,
                currIndex,
                currChar,
                correctChar,
                errorChar,
                phase
            },
            null,
            2
        )
    );

     const handleKey = useCallback((key:any) => {
        if (key === "Escape") {
            resetTyping();
        } else if (key === "Backspace") {
            deleteTyping(false);
        } else if (key.length === 1) {
            insertTyping(key);
        }
    }, [resetTyping,deleteTyping,insertTyping]);



    useEffect(() => {

        const onKeyDown = ({key}: any) => {
            handleKey(key)
        }

        window.addEventListener('keydown', onKeyDown);

        return () => {
            window.removeEventListener("keydown", onKeyDown);
        };


    }, [handleKey]);

    const onSwitchTheme = () => {
        if (themeCurrent === "light") {
            setThemeCurrent("dark")
        } else {
            setThemeCurrent("light")
        }
    }




    return (
        <React.Fragment>
            <Header themeCurrent={themeCurrent}
                    avatarBlock={avatarBlock}
                    buttonContainer={
                        <ButtonContainer
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
                            <img className={classes.albaIcon} src={alba} alt="alba"/>
                        </Grid>
                        <Grid className={classes.typedTextContainer} item>
                            <Typography
                                variant={'inherit'}
                                className={classes.typedTextElem}

                            >
                                <Typography
                                    variant={'inherit'}
                                    className={classes.typedTextElem}
                                >
                                    {text.split("").map((char: string, index: number) => {
                                        let state = charsState[index];
                                        let color = state === 0 ? theme.palette.primary.main : state === 1 ? "green" : "red";
                                        if (index > (currIndex - 1)) {
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
            <Drawer
                PaperProps={{
                    className: classes.drawerPaper,
                }}
                onClose={closeMobileHeaderDrawer}
                anchor={'left'}
                open={openDrawer}>
                <AppBar component={"div"} position={"static"}>
                    <Container className={classes.driverAppBarContainer}>
                        <Grid container alignItems={"center"} justifyContent={"space-between"}>
                            <Grid item xs={"auto"}>
                                <Link href="#">
                                    {!smUp
                                        ?
                                        <img src={header_icon_dark_mob} alt="header_icon_dark_mob"/>
                                        :
                                        <img src={header_icon_dark} alt="header_icon_light"/>
                                    }
                                </Link>
                            </Grid>
                            <Grid item xs={"auto"}>
                                <IconButton onClick={closeMobileHeaderDrawer} size={"small"}>
                                    <img src={burger_menu_close} alt="burger_menu_close"/>
                                </IconButton>
                            </Grid>
                        </Grid>
                    </Container>

                </AppBar>
                <Container>
                    <nav>
                        <List disablePadding>
                            {mainMenuArray.map(({href, title}, key) => (
                                <React.Fragment key={title + key}>
                                    <ListItemButton
                                        disableGutters
                                        href={href}
                                        className={classes.mobileListItem}
                                    >
                                        <ListItemText
                                            className={classes.mobileMainMenuItemText}
                                            classes={{primary: classes.mobileMainMenuItemText}}
                                            primary={title}/>
                                    </ListItemButton>
                                    <Divider light component={"li"}/>
                                </React.Fragment>
                            ))
                            }
                        </List>

                        <List disablePadding>
                            {smallMenuArray.map(({href, title}, key) => (
                                <ListItemButton
                                    key={title}
                                    href={href}
                                    disableGutters
                                    className={classes.mobileListItem}
                                >
                                    <ListItemText
                                        className={classes.mobileSmallMenuItemText}
                                        classes={{primary: classes.mobileSmallMenuItemText}}
                                        primary={title}/>
                                </ListItemButton>
                            ))}
                        </List>
                    </nav>

                    <Grid mt={0} pb={2} spacing={3} container alignItems={"center"}>
                        <Grid item xs={"auto"}>
                            {avatarBlock}
                        </Grid>
                        <Grid item xs={"auto"}>
                            <Typography>
                                Alex
                            </Typography>
                            <Grid spacing={1} container>
                                <Grid item xs={"auto"}>
                                    <img src={gold_coin} alt="gold_coin"/>
                                </Grid>
                                <Grid item xs={"auto"}>
                                    <Typography>
                                        {correctChar}
                                    </Typography>
                                </Grid>
                            </Grid>

                        </Grid>
                    </Grid>
                </Container>
            </Drawer>
            }
            <SnackBarCustom correctChar={correctChar} errorChar={errorChar}/>
        </React.Fragment>
    );
}

export default MainPage;
