import { Theme } from "@mui/material/styles";
import { makeStyles } from "@mui/styles";

export const getClasses = makeStyles(({ breakpoints }: Theme) => ({
    logoContainer: {
        display: 'flex',
        flex: 1,
        flexDirection: 'column',
        justifyContent: 'flex-start',
        alignItems: 'center'
    },
    logoIcon: {
        display: 'block',
        width: '10vw',
        [breakpoints.down('md')]: {
            width: '40vw'
        }
    },
    logoText: {
        marginTop: 15,
        display: 'block',
        width: '20vw',
        [breakpoints.down('md')]: {
            width: '80vw'
        }
    }
}));
