import {alpha} from '@mui/material/styles';
import {themeSpacing} from '../constants';
import palette from "../palette"

/**
 * Sets the absolute transparency of a color.
 * Any existing alpha values are overwritten.
 * @param {string} color - CSS color, i.e. one of: #nnn, #nnnnnn, rgb(), rgba(), hsl(), hsla(), color()
 * @param {number} value - value to set the alpha channel to in the range 0 - 1
 * @returns {string} A CSS color string. Hex input values are returned as rgb
 */

export default {
    styleOverrides: {

        root: {
            paddingBottom: themeSpacing[2] + "px",
            paddingTop: themeSpacing[2] + "px",
            color: alpha(palette.primary.main, 0.64),
            "&:hover": {
                backgroundColor: "#E6EBEF",
            }
        }
    }
}
