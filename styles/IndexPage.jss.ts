import { Theme } from "@mui/material/styles";
import { makeStyles } from "@mui/styles";

export const getClasses = makeStyles(({ breakpoints }: Theme) => ({
    main: {
        minHeight: '90vh',
        padding: '10vh 0',
        [breakpoints.down('md')]: {
            padding: '3vh 0'
        }
    }
}));
