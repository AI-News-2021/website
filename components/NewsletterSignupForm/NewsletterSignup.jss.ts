import { Theme } from "@mui/material/styles";
import { makeStyles } from "@mui/styles";

export const getClasses = makeStyles(({ breakpoints, palette }: Theme) => ({
    formContainer: {
        width: '40vw',
        [breakpoints.down('md')]: {
            width: '80vw'
        }
    },
    emailInput: {
        backgroundColor: '#fff',
        borderRadius: 5
    },
    emailErrorMessage: {
        color: palette.error.main,
        margin: 5
    },
    signupButton: {
        [breakpoints.down('md')]: {
            marginTop: '15px',
            width: '80vw'
        }
    }
}));
