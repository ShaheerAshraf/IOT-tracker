
import { createTheme } from "@mui/material/styles";


export const Colors = {
    primary: "#2BAAE1",
    secondary: "#030303"

};

const theme = createTheme({
    palette: {
        primary: {
            main: Colors.primary,
        },
        secondary: {
            main: Colors.secondary,
        },

    },
    typography: {
        allVariants: {
            color: "#030303"
        },
    },


}
)


export default theme