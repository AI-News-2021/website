import { Button, CircularProgress, FormControl, InputAdornment, TextField, useMediaQuery } from '@mui/material';
import React, { useState } from 'react'
import { isEmail } from '../../functions/isEmail';
import { useIsMobile } from '../../hooks/useIsMobile';
import theme from '../../theme';
import { getClasses } from './NewsletterSignup.jss';

interface INewsletterSignupState {
    isLoading: boolean,
    isSuccessful?: boolean,
    hasError: boolean,
    email: string
}

const NewsletterSignup = ({ onSuccess }: { onSuccess: () => void }) => {
    const classes = getClasses();
    const isMobile = useIsMobile()

    const [state, setState] = useState<INewsletterSignupState>({
        hasError: false,
        isLoading: false,
        email: ''
    });

    const handleSignupButtonClick = async (evt: any) => {
        if(isEmail(state.email)) {
            setState((currentState) => ({...currentState, hasError: false, isLoading: true}))
            
            // Send a request to our API to signup for newsletter
            const res = await fetch('/api/subscribe', {
                body: JSON.stringify({
                    email: state.email
                }),
                headers: {
                    'Content-Type': 'application/json'
                },
                method: 'POST'
            })

            const { error } = await res.json();
            setState((currentState) => ({...currentState, isSuccessful: true, isLoading: false }))
            onSuccess()
        } else {
            setState((currentState) => ({...currentState, hasError: true}))
            onSuccess()
        }
    }

    const onEmailChange = (evt: any) => {
        const value = evt.target.value
        setState((currentState) => ({...currentState, email: value}))
    }

    const SignupButton = () => (
        <Button variant={'contained'} color={'primary'} className={classes.signupButton} onClick={handleSignupButtonClick} disabled={state.isLoading} disableElevation={!isMobile}>
            {state.isLoading ? <CircularProgress style={{ width: 30, height: 30 }} /> : 'Signup'}
        </Button>
    )

    return (
        <div className={classes.formContainer}>
            {state.isSuccessful ? (
                <p className={classes.sucessMessage}>Thank you for your support!</p>
            ) : (
                <FormControl fullWidth variant="outlined">
                <TextField
                    name="EMAIL"
                    placeholder='Enter your E-Mail'
                    className={classes.emailInput}
                    value={state.email}
                    onChange={onEmailChange}
                    error={state.hasError}
                    disabled={state.isLoading}
                    InputProps={{ 
                        endAdornment: isMobile ? false : 
                            (<InputAdornment position={'end'}>
                                <SignupButton />
                            </InputAdornment>)
                    }}
                />
                {state.hasError ? <p className={classes.emailErrorMessage}>Please enter a valid E-Mail.</p> : ''}
                {isMobile ? (
                    <SignupButton />
                ) : false}
            </FormControl>
            )}
        </div>
    )
}

export default NewsletterSignup
