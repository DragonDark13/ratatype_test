import {createTheme} from '@mui/material';
import { ThemeOptions} from '@mui/material';
import components from './overrides/index';
import { themeSpacing } from './constants';
import palette from './palette';
import breakpoints from './breakpoints';
import typography from './typography';


export const themeConfigurationLight: ThemeOptions | any = {
    breakpoints: breakpoints,
    palette: palette,
    components: components,
    spacing: themeSpacing,
    typography: typography,
}

const themeLight = createTheme(themeConfigurationLight);

export default themeLight;
