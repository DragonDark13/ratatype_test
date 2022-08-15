import {createTheme} from '@mui/material';
import { ThemeOptions} from '@mui/material';
import components from './overrides/index';
import { themeSpacing } from './constants';
import palette from './palette';
import breakpoints from './breakpoints';


export const themeConfigurationLight: ThemeOptions | any = {
    breakpoints: breakpoints,
    palette: palette,
    components: components,
    spacing: themeSpacing,
    typography: {
    fontFamily: '"Montserrat", Helvetica, Arial, sans-serif;',
    },
}

const themeLight = createTheme(themeConfigurationLight);

export default themeLight;
