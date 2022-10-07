import React, {ReactNode} from 'react';
import {
    AppBar,
    Container,
    Grid, IconButton,
    MenuItem,
    MenuList,
    Popover, useMediaQuery, useTheme
} from "@mui/material";
import header_icon_light_mob from "../../image/light/header_icon_light_mob.svg";
import header_icon_light from "../../image/light/header_icon_light.svg";
import header_icon_dark_mob from "../../image/dark/header_icon_dark_mob.svg";
import header_icon_dark from "../../image/dark/header_icon_dark.svg";
import {HamburgerIcon} from "../../icons";
import {useMainPageStyles} from "../mainPageStyles";
import HeaderNav from "../HeaderNav";

export interface IMainMenuArrayForDesktop {
    href: string;
    title: string
}


export interface IHeader {
    setThemeCurrent: (state: any) => void;
    themeCurrent: "dark" | "light";
    mainMenuArrayForDesktop: Array<IMainMenuArrayForDesktop>;
    smallMenuArray: Array<IMainMenuArrayForDesktop>;
    buttonContainer: ReactNode;
    avatarBlock: ReactNode;
    openMobileHeaderDrawer: () => void;
}

const Header = ({
                    themeCurrent,
                    mainMenuArrayForDesktop,
                    avatarBlock,
                    buttonContainer,
                    openMobileHeaderDrawer,
                    smallMenuArray
                }: IHeader) => {
    const theme = useTheme();

    const smUp = useMediaQuery(theme.breakpoints.up('sm'));
    const mdUp = useMediaQuery(theme.breakpoints.up('md'));
    const {classes} = useMainPageStyles();

    const toggleMenuBlock = React.useRef(null);

    const [anchorElPopover, setAnchorElPopover] = React.useState(toggleMenuBlock.current);


    const handleClick = () => {
        setAnchorElPopover(toggleMenuBlock.current);
    };
    const openPopover = Boolean(anchorElPopover);

    const id = openPopover ? 'simple-popover' : undefined;

    const handleClose = () => {
        setAnchorElPopover(null);
    };


    return (
        <AppBar component={"header"} position={"static"}>
            <Container>
                <Grid container alignItems={"center"} justifyContent={"space-between"}>
                    <Grid item={true} xs={"auto"}>
                        <Grid spacing={6} container alignItems={"center"}>
                            <Grid item xs={"auto"}>
                                <a href="/#">
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
                                <HeaderNav id={id} handleClick={handleClick} themeCurrent={themeCurrent}
                                           toggleMenuBlock={toggleMenuBlock} openPopover={openPopover}
                                           mainMenuArrayForDesktop={mainMenuArrayForDesktop}/>
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
    );
};


export default Header;
