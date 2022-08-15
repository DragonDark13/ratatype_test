import {makeStyles} from "../utils/makeStyles";
import {createStyles} from "@mui/styles";
import {Theme} from "@mui/material";
import {customGridWidth} from "../utils/mixinsForStyle";
import {alpha} from "@mui/material/styles";


const albaImgSmSize = 96;
const albaContainerSmSize = albaImgSmSize + 24;
const albaImgMdSize = 176;
const albaContainerMdSize = albaImgMdSize + 24;

export const useMainPageStyles = makeStyles((theme: Theme) =>
    createStyles({

        drawerPaper: {
            paddingBottom: theme.spacing(7),
            width: "100vw",
        },
        typedTextContainer: {
            ...customGridWidth(112),
            [theme.breakpoints.up('sm')]: {
                ...customGridWidth(albaContainerSmSize),
            },
            [theme.breakpoints.up('md')]: {
                ...customGridWidth(albaContainerMdSize),
            },
        },

        typedTextElem: {
            width: `calc(100% + ${theme.spacing(3)})`,
            overflow: "hidden",
            whiteSpace: "nowrap",
            color: theme.palette.primary.main,
            fontSize: 48,
            lineHeight: 1.22,
            fontWeight: 700,

            [theme.breakpoints.up('sm')]: {
                width: `calc(100% + ${theme.spacing(7)} + ${theme.spacing(1)})`,
                fontSize: 98,
                lineHeight: 1.14,
            },

            [theme.breakpoints.up('sm')]: {
                width: `calc(100% + 75px)`,
                fontSize: 120,
                lineHeight: 1.13,
            },
        },
        mobileButtonContainer: {
            paddingBottom: theme.spacing(3),
            paddingTop: "146px",
        },
        albaIcon: {
            display: "block",
            [theme.breakpoints.up('sm')]: {
                width: albaImgSmSize,
            },
            [theme.breakpoints.up('md')]: {
                width: albaImgMdSize,
            },
        },
        driverAppBarContainer: {
            [theme.breakpoints.up('sm')]: {

                "&.MuiContainer-root": {
                    paddingLeft: theme.spacing(5),
                    paddingRight: theme.spacing(5),
                },

            },
        },
        headerMainMenu: {
            display: "flex",
            flexGrow: 1,
        },
        headerMainMenuItemText: {

            "&.MuiButtonBase-root": {
                padding: theme.spacing(1, 2),
                marginRight: theme.spacing(5),
                borderRadius: theme.spacing(2),

                "&:last-child": {
                    marginRight: theme.spacing(0),
                }
            },

            "&>.MuiListItemIcon-root": {
                minWidth: theme.spacing(3),
                marginLeft: theme.spacing(1),
            },

            "&>.MuiTypography-root": {
                fontWeight: 700,
                color: alpha(theme.palette.primary.main, 0.64),
            }

        },
        headerMainMenuItemTextSelected: {

            "&.Mui-selected.MuiButtonBase-root": {
                background: "transparent",
            },
            "&>.MuiTypography-root": {
                color: theme.palette.primary.main,
            }
        },

        listItemHasOpenPopover: {
            "&.MuiButtonBase-root": {
                background: "#F3F5F7",
            }
        },

        main: {
            paddingTop: theme.spacing(3),
        },

        mobileListItem: {

            "&.MuiListItemButton-root": {
                paddingTop: theme.spacing(3),
                paddingBottom: theme.spacing(3),
            },
        },


        mobileMainMenuItemText: {

            "&, &.MuiListItemText-root": {
                margin: 0,
            },

            "&.MuiTypography-root": {
                color: theme.palette.primary.contrastText,
                fontSize: theme.spacing(5),
                fontWeight: 500,
                lineHeight: 1.33,

                [theme.breakpoints.up("sm")]: {
                    // fontSize: theme.spacing(5),
                }
            }

        }

    }));
