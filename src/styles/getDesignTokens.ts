import {PaletteMode} from "@mui/material";
import palette from "./palette";

const getDesignTokens = (mode: PaletteMode) => ({
  palette: {
    mode,
    ...(mode === 'light'
      ? palette
      : palette
    ),
  },
});

export default getDesignTokens;
