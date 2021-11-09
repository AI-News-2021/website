import { Theme } from "@mui/material/styles";
import { makeStyles } from "@mui/styles";

export const getClasses = makeStyles(({ breakpoints }: Theme) => ({
    main: {
        minHeight: '90vh',
        padding: '10vh 0',
        [breakpoints.down('md')]: {
            padding: '3vh 0'
        }
    },
    contentContainer: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        marginTop: '8vh',
        margin: '0 10vw',
        [breakpoints.down('md')]: {
            marginTop: '3vh'
        }
    },
    infoText: {
        fontWeight: 400,
        textAlign: 'center',
        marginBottom: '0.5em',
        marginTop: 0,
        [breakpoints.down('md')]: {
            margin: '1em'
        }
    }
}));
