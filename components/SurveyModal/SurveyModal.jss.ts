import { Theme } from "@mui/material/styles";
import { makeStyles } from "@mui/styles";

export const getClasses = makeStyles(({ breakpoints, palette }: Theme) => ({
    card: {
        width: '50vw',
        height: '80vh',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        [breakpoints.down('md')]: {
            width: '95vw',
            height: '90vh',
            padding: 0
        }
    },
    iframe: {
        width: '100%',
        height: '95%',
        border: 'none',
        position: 'relative',
        [breakpoints.down('md')]: {
            height: '100%'
        }
    },
    closeButton: {
        position: 'absolute',
        color: 'white',
        fontWeight: 700,
        minWidth: 50,
        height: 50,
        top: -25,
        right: -25,
        borderRadius: '50%',
        [breakpoints.down('md')]: {

        }
    }
}));
