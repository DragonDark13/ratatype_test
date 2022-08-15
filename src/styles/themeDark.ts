import {createTheme} from '@mui/material';
import { ThemeOptions} from '@mui/material';
import components from './overrides/index';
import { themeSpacing } from './constants';
import paletteDark from './paletteDark';
import breakpoints from './breakpoints';


export const themeConfigurationDark: ThemeOptions | any = {
    breakpoints: breakpoints,
    palette: paletteDark,
    components: components,
    spacing: themeSpacing,
    typography: {
    fontFamily: '"Montserrat", Helvetica, Arial, sans-serif;',
    },
}

const themeDark = createTheme(themeConfigurationDark);

export default themeDark;
