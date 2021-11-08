import { Button, FormControl, InputAdornment, OutlinedInput, useMediaQuery } from '@mui/material';
import React from 'react'
import theme from '../../../theme';
import { getClasses } from './NewsletterSignup.jss';

const NewsletterSignup = () => {
    const classes = getClasses();
    const isMobile = useMediaQuery(theme.breakpoints.down('md'))

    return (
        <div className={classes.formContainer}>
        <FormControl fullWidth variant="outlined">
            <OutlinedInput
                name="EMAIL"
                placeholder='Enter your E-Mail'
                className={classes.emailInput}
                endAdornment={isMobile ? false : (
                    <InputAdornment position={'end'}>
                        <Button variant={'contained'} color={'primary'} disableElevation>
                            Signup
                        </Button>
                    </InputAdornment>
                )}
            />
            {isMobile ? (
                <Button variant={'contained'} color={'primary'} disableElevation className={classes.signupButton}>Signup</Button>
            ) : false}
        </FormControl>
        </div>
    )
}

export default NewsletterSignup
