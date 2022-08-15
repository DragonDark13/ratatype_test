import {createBreakpoints} from '@mui/system';
import {themeSpacing} from '../constants';

const breakpoints = createBreakpoints({});

export default {
    styleOverrides: {

        root: {
            paddingTop: themeSpacing[1] + themeSpacing[5] + "px",
            paddingBottom: themeSpacing[1] + themeSpacing[5] + "px",
            background: "transparent",
            boxShadow: "none",

            [breakpoints.up('sm')]: {
                paddingTop: themeSpacing[5] + "px",
                paddingBottom: themeSpacing[5] + "px"
            },
            [breakpoints.up('md')]: {
                paddingTop: themeSpacing[3] + "px",
                paddingBottom: themeSpacing[3] + "px"
            }
        },
    }
}
