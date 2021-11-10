import { Theme } from "@mui/material/styles";
import { makeStyles } from "@mui/styles";

export const getClasses = makeStyles(({ breakpoints, palette }: Theme) => ({
    buttonsContainer: {
        paddingTop: '3vh'
    }
}));
