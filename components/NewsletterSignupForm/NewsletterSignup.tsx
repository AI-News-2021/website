import { Button, FormControl, InputAdornment, TextField, useMediaQuery } from '@mui/material';
import React, { useState } from 'react'
import { isEmail } from '../../functions/isEmail';
import theme from '../../theme';
import { getClasses } from './NewsletterSignup.jss';

interface INewsletterSignupState {
    isLoading: boolean,
    isSuccessful?: boolean,
    hasError: boolean,
    email: string
}

const NewsletterSignup = () => {
    const classes = getClasses();
    const isMobile = useMediaQuery(theme.breakpoints.down('md'))

    const [state, setState] = useState<INewsletterSignupState>({
        hasError: false,
        isLoading: false,
        email: ''
    });

    const handleSignupButtonClick = (evt: any) => {
        if(isEmail(state.email)) {
            // TODO: Signup for newsletter and open survey
        } else {
            setState((currentState) => ({...currentState, hasError: true}))
        }
    }

    const onEmailChange = (evt: any) => {
        const value = evt.target.value
        setState((currentState) => ({...currentState, email: value}))
    }

    return (
        <div className={classes.formContainer}>
        <FormControl fullWidth variant="outlined">
            <TextField
                name="EMAIL"
                placeholder='Enter your E-Mail'
                className={classes.emailInput}
                value={state.email}
                onChange={onEmailChange}
                error={state.hasError}
                InputProps={{ 
                    endAdornment: isMobile ? false : 
                        (<InputAdornment position={'end'}>
                            <Button variant={'contained'} color={'primary'} onClick={handleSignupButtonClick} disableElevation>Signup</Button>
                        </InputAdornment>)
                }}
            />
            {state.hasError ? <p className={classes.emailErrorMessage}>Please enter a valid E-Mail.</p> : ''}
            {isMobile ? (
                <Button variant={'contained'} color={'primary'} className={classes.signupButton} onClick={handleSignupButtonClick}>Signup</Button>
            ) : false}
        </FormControl>
        </div>
    )
}

export default NewsletterSignup
