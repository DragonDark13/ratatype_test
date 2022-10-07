import React, {ReactNode} from 'react';
import {
    AppBar,
    Container,
    Divider, Drawer,
    Grid,
    IconButton,
    Link,
    List,
    ListItemButton,
    ListItemText,
    Typography, useMediaQuery, useTheme
} from "@mui/material";
import header_icon_dark_mob from "../../image/dark/header_icon_dark_mob.svg";
import header_icon_dark from "../../image/dark/header_icon_dark.svg";
import burger_menu_close from "../../image/burger_menu_close.svg";
import gold_coin from "../../image/gold_coin.svg";
import {useMainPageStyles} from "../mainPageStyles";
import {IMainMenuArrayForDesktop} from "../Header";

interface IMobileDrawer {
    closeMobileHeaderDrawer: () => void,
    openDrawer: boolean,
    mainMenuArray: Array<IMainMenuArrayForDesktop>;
    smallMenuArray: Array<IMainMenuArrayForDesktop>;
    avatarBlock: ReactNode;
    correctChar: number;
}

const MobileDrawer = ({
                          closeMobileHeaderDrawer,
                          openDrawer,
                          mainMenuArray,
                          smallMenuArray,
                          avatarBlock,
                          correctChar
                      }: IMobileDrawer) => {
    const {classes} = useMainPageStyles();
    const theme = useTheme();
    const smUp = useMediaQuery(theme.breakpoints.up('sm'));

    return (
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
    );
};

export default MobileDrawer;
