import { withStyles } from '@mui/styles';
import themeDark from "./themeDark";

const GlobalCssDark = withStyles({
  '@global': {
    body: {
      background:themeDark.palette.background.default,
    },
    'html, body': {
      margin: 0,
      padding: 0,
      color: themeDark.palette.primary.contrastText,
      '-webkit-font-smoothing': 'antialiased'
    },
  }
})(() => null);

export default GlobalCssDark;
