import { withStyles } from '@mui/styles';
import themeLight from "./theme";

const GlobalCssLight = withStyles({
  '@global': {
    html: {
    },
    body: {
      background:themeLight.palette.background.default,
    },
    'html, body': {
      margin: 0,
      padding: 0,
      color: themeLight.palette.primary.contrastText,
      '-webkit-font-smoothing': 'antialiased'
    },
  }
})(() => null);

export default GlobalCssLight;
