import React, {useEffect, useState} from 'react';
import header_icon_light from '../image/light/header_icon_light.svg'
import header_icon_dark from '../image/dark/header_icon_dark.svg'
import header_icon_light_mob from '../image/light/header_icon_light_mob.svg'
import header_icon_dark_mob from '../image/dark/header_icon_dark_mob.svg'
import burger_menu_close from '../image/burger_menu_close.svg'
import restart from '../image/restart.svg'
import light_mode from '../image/light_mode.svg'
import dark_mode from '../image/dark_mode.svg'
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
    ListItemIcon,
    ListItemText,
    MenuItem,
    MenuList,
    Popover, SnackbarOrigin,
    Typography, useMediaQuery,
    useTheme
} from "@mui/material";

import {useMainPageStyles} from "./mainPageStyles";
import {ArrowDown, HamburgerIcon} from "../icons";
import useTypingGame from "react-typing-game-hook";
import SnackBarCustom from "./SnackBarCustom";


export interface IMainPage {
    setThemeCurrent: (state: any) => void;
    themeCurrent: "dark" | "light";
}

const MainPage = ({themeCurrent, setThemeCurrent}: IMainPage) => {

    const theme = useTheme();
    const classes = useMainPageStyles();

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


    const handleKey = (key: any) => {
        if (key === "Escape") {
            resetTyping();
        } else if (key === "Backspace") {
            deleteTyping(false);
        } else if (key.length === 1) {
            insertTyping(key);
        }
    };

    useEffect(() => {

        const onKeyDown = ({key}: any) => {
            handleKey(key)
        }

        window.addEventListener('keydown', onKeyDown);

        return () => {
            window.removeEventListener("keydown", onKeyDown);
        };


    }, []);


    const restartBtn = <IconButton
        size={"small"}
        onClick={resetTyping}
    >
        <img src={restart} alt="restart"/>
    </IconButton>;

    const onSwitchTheme = () => {
        if (themeCurrent === "light") {
            setThemeCurrent("dark")
        } else {
            setThemeCurrent("light")
        }
    }

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

    const buttonContainer = <Grid
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
    </Grid>;

    const toggleMenuBlock = React.useRef(null);

    const [anchorElPopover, setAnchorElPopover] = React.useState(toggleMenuBlock.current);

    const handleClick = () => {
        setAnchorElPopover(toggleMenuBlock.current);
    };

    const handleClose = () => {
        setAnchorElPopover(null);
    };

    const openPopover = Boolean(anchorElPopover);
    const id = openPopover ? 'simple-popover' : undefined;


    return (
        <React.Fragment>
            <AppBar component={"header"} position={"static"}>
                <Container>
                    <Grid container alignItems={"center"} justifyContent={"space-between"}>
                        <Grid item={true} xs={"auto"}>
                            <Grid spacing={6} container alignItems={"center"}>
                                <Grid item xs={"auto"}>
                                    <a href="#">
                                        {themeCurrent !== "dark"
                                            ? (!smUp
                                                ?
                                                <img src={header_icon_light_mob} alt="header_icon_light_mob"/>
                                                :
                                                <img src={header_icon_light} alt="header_icon_light"/>)
                                            :
                                            (!smUp
                                                ?
                                                <img src={header_icon_dark_mob} alt="header_icon_light_mob"/>
                                                :
                                                <img src={header_icon_dark} alt="header_icon_light"/>)
                                        }

                                    </a>
                                </Grid>
                                {mdUp &&
                                <Grid item xs={"auto"}>
                                    <List dense disablePadding className={classes.headerMainMenu}>
                                        {mainMenuArrayForDesktop.map(({href, title}, index) => (
                                            <ListItemButton
                                                dense
                                                href={href}
                                                key={title + index}
                                                selected={title === "Тренажер"}
                                                classes={{
                                                    root: classes.headerMainMenuItemText,
                                                    selected: classes.headerMainMenuItemTextSelected
                                                }}
                                            >
                                                <Typography
                                                >
                                                    {title}
                                                </Typography>
                                            </ListItemButton>
                                        ))}
                                        <ListItemButton
                                            className={openPopover ?
                                                (themeCurrent === "dark" ? classes.listItemHasOpenPopoverDark : classes.listItemHasOpenPopover)
                                                :
                                                undefined}
                                            ref={toggleMenuBlock}
                                            aria-describedby={id}
                                            onClick={handleClick}
                                            dense
                                            classes={{
                                                root: classes.headerMainMenuItemText,
                                                selected: classes.headerMainMenuItemTextSelected
                                            }}
                                        >
                                            <Typography>Більше</Typography>
                                            <ListItemIcon className={classes.hamburgerButton}>
                                                <ArrowDown/>
                                            </ListItemIcon>
                                        </ListItemButton>
                                    </List>
                                    <Popover
                                        PaperProps={{
                                            variant: "outlined",
                                            elevation: 0,
                                            square: false,
                                        }}
                                        id={id}
                                        open={openPopover}
                                        anchorEl={anchorElPopover}
                                        onClose={handleClose}
                                        anchorOrigin={{
                                            vertical: 'bottom',
                                            horizontal: 'left',
                                        }}
                                    >
                                        <MenuList disablePadding>
                                            {smallMenuArray.map(({title, href}, key) =>
                                                <MenuItem className={classes.popoverListItem} href={href}
                                                          onClick={handleClose}
                                                          key={title + key}>{title}</MenuItem>
                                            )}
                                        </MenuList>
                                    </Popover>
                                </Grid>
                                }
                            </Grid>
                        </Grid>

                        {mdUp
                            ?
                            <Grid item xs={"auto"} sx={{display: {xs: 'none', md: 'flex'}}}>
                                <Grid spacing={8} container alignItems={"center"}>
                                    <Grid item xs={"auto"}>
                                        {buttonContainer}
                                    </Grid>
                                    <Grid item xs={"auto"}>
                                        {avatarBlock}
                                    </Grid>
                                </Grid>
                            </Grid>
                            :
                            <Grid item xs={"auto"}>
                                {<IconButton className={classes.hamburgerButton}
                                             onClick={openMobileHeaderDrawer} size={"small"}>
                                    <HamburgerIcon/>
                                </IconButton>}
                            </Grid>
                        }
                    </Grid>
                </Container>
            </AppBar>
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
                    {!smUp && buttonContainer}
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
