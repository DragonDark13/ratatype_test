import {createTheme} from '@mui/material';
import {Theme, useTheme, ThemeOptions, TypographyVariantsOptions} from '@mui/material';
import components from './overrides/index';
import { themeSpacing } from './constants';
import palette from './palette';

const breakpoints = {
    values: {
        xs: 0,
        sm: 768,
        md: 992,
        lg: 1366,
        xl: 1536,
    }
};

export const themeConfigurationLight: ThemeOptions | any = {
    breakpoints: breakpoints,
    palette: palette,
    components: components,
    spacing: themeSpacing,
    typography: {
    fontFamily: '"Montserrat", Helvetica, Arial, sans-serif;',
    },
}
export const themeConfigurationDark: ThemeOptions | any = {
    breakpoints: breakpoints,
    palette: palette,
    components: components,
    spacing: themeSpacing,
    typography: {
    fontFamily: '"Montserrat", Helvetica, Arial, sans-serif;',
    },
}

const themeLight = createTheme(themeConfigurationLight);
const themeDark = createTheme(themeConfigurationDark);

export default themeLight;
