import {createBreakpoints} from '@mui/system';
import {themeSpacing} from '../constants';

const breakpoints = createBreakpoints({});

export default {
    styleOverrides: {
        root: {
            paddingLeft: themeSpacing[3] + "px",
            paddingRight: themeSpacing[3] + "px",

            [breakpoints.up('sm')]: {
                paddingLeft: themeSpacing[7] + themeSpacing[1] + "px",
                paddingRight: themeSpacing[7] + themeSpacing[1] + "px",
            },
            [breakpoints.up('md')]: {
                paddingLeft: "75px",
                paddingRight: "75px",
            }
        },


    }
}
