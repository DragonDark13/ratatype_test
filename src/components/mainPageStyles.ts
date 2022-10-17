import {keyframes, Theme} from "@mui/material";
import {customGridWidth} from "../utils/mixinsForStyle";
import {alpha} from "@mui/material/styles";
import themeDark from "../styles/themeDark";
import {makeStyles} from 'tss-react/mui';
import globalVariable from "../utils/globalVariable";

const myEffectTopJaw = keyframes`
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(-15deg);
  }
`;

const myEffectBottomJaw = keyframes`
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(30deg);
  }
`;

const myEffectBirdBody = keyframes`
  0% {
    transform: scale(1);
  }
  100% {
    transform: scale(1.2);
  }
`;


const albaImgSmSize = 96;
const albaContainerSmSize = albaImgSmSize + 24;
const albaImgMdSize = 176;
const albaContainerMdSize = albaImgMdSize + 24;

const animationDuration = globalVariable.animationDurationFromGlobal;
const animationFillMode = "none"


export const useMainPageStyles = makeStyles()((theme: Theme) => ({

    "drawerPaper": {
        paddingBottom: theme.spacing(7),
        width: "100vw",
    },
    "typedTextContainer": {
        ...customGridWidth(112),
        [theme.breakpoints.up('sm')]: {
            ...customGridWidth(albaContainerSmSize),
        },
        [theme.breakpoints.up('md')]: {
            ...customGridWidth(albaContainerMdSize),
        },
    },

    "typedTextElem": {
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
    "mobileButtonContainer": {
        paddingBottom: theme.spacing(3),
        paddingTop: "146px",
    },

    "albaIcon": {
        display: "block",

        "& path, & rect, & circle": {
            transition: "all 0.2s ease-out",
        },

        [theme.breakpoints.up('sm')]: {
            fontSize: albaImgSmSize,
        },
        [theme.breakpoints.up('md')]: {
            fontSize: albaImgMdSize,
        },
        "&.typeError": {
            "& path, & rect, & circle": {
                fill: "gray",
            },
        },

        "& .body,& .upperJaw,& .bottomJaw": {
            transformBox: "fill-box",
        },


        "& .body": {
            transformOrigin: "center",

            "&.bodyAnimation": {
                animation: `${myEffectBirdBody} ${animationDuration}ms ${theme.transitions.easing.easeInOut} ${animationFillMode}`,
            },
        },

        "& .upperJaw": {
            transformOrigin: "bottom left",

            "&.upperJawAnimation": {
                animation: `${myEffectTopJaw} ${animationDuration}ms ${theme.transitions.easing.easeInOut} ${animationFillMode}`,
            },
        },


        "& .bottomJaw": {
            transformOrigin: "left top",

            "&.bottomJawAnimation": {
                animation: `${myEffectBottomJaw} ${animationDuration}ms ${theme.transitions.easing.easeInOut} ${animationFillMode}`,
            },
        },


    },
    "driverAppBarContainer": {
        [theme.breakpoints.up('sm')]: {

            "&.MuiContainer-root": {
                paddingLeft: theme.spacing(5),
                paddingRight: theme.spacing(5),
            },

        },
    },
    "headerMainMenu": {
        display: "flex",
        flexGrow: 1,
    },
    "headerMainMenuItemText": {

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
    "headerMainMenuItemTextSelected": {

        "&.Mui-selected.MuiButtonBase-root": {
            background: "transparent",
        },
        "&>.MuiTypography-root": {
            color: theme.palette.primary.main,
        }
    },

    "listItemHasOpenPopover": {
        "&.MuiButtonBase-root": {
            background: "#F3F5F7",
        }
    },
    "listItemHasOpenPopoverDark": {
        "&.MuiButtonBase-root": {
            background: alpha(themeDark.palette.primary.contrastText, 0.1),
        }
    },

    "popoverListItem": {
        "&.MuiMenuItem-root": {
            color: alpha(theme.palette.primary.main, 0.64),
        }
    },

    "main": {
        paddingTop: theme.spacing(3),
    },

    "mobileListItem": {

        "&.MuiListItemButton-root": {
            paddingTop: theme.spacing(3),
            paddingBottom: theme.spacing(3),

            "&:hover": {
                background: "transparent",
            }
        },
    },


    "mobileMainMenuItemText": {

        "&, &.MuiListItemText-root": {
            margin: 0,
        },

        "&.MuiTypography-root": {
            color: theme.palette.primary.contrastText,
            fontSize: theme.spacing(5),
            fontWeight: 500,
            lineHeight: 1.33,
        }
    },

    "mobileSmallMenuItemText": {

        "&, &.MuiListItemText-root": {
            margin: 0,
        },

        "&.MuiTypography-root": {
            color: theme.palette.primary.contrastText,
            fontSize: theme.spacing(3),
            fontWeight: 500,
            lineHeight: 1.5,
        }

    },

    "hamburgerButton": {
        "&.MuiIconButton-root": {
            color: theme.palette.primary.light,
        },

        "&.MuiListItemIcon-root": {
            color: theme.palette.primary.main,
        }
    },

    "currLetter": {
        textDecoration: "underline",
    },

    "statisticListItemSecondaryProps": {
        fontWeight: 700,
    },

    "statisticListItemText": {
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
    }

}));
