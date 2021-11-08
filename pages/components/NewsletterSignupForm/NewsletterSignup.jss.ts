import { Theme } from "@mui/material/styles";
import { makeStyles } from "@mui/styles";

export const getClasses = makeStyles(({ breakpoints }: Theme) => ({
    formContainer: {
        width: '40vw',
        [breakpoints.down('md')]: {
            width: '80vw'
        }
    },
    emailInput: {
        backgroundColor: '#fff'
    },
    signupButton: {
        [breakpoints.down('md')]: {
            marginTop: '15px',
            width: '80vw'
        }
    }
}));
