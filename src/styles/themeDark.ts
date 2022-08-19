import {createTheme} from '@mui/material';
import { ThemeOptions} from '@mui/material';
import paletteDark from './paletteDark';
import { themeConfigurationLight } from './theme';


export const themeConfigurationDark: ThemeOptions | any = {
    ...themeConfigurationLight,
    palette: paletteDark,
}

const themeDark = createTheme(themeConfigurationDark);

export default themeDark;
