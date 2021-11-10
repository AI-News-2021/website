import { Icon, IconButton } from '@mui/material'
import React from 'react'
import { getClasses } from './SocialmediaButtons.jss'
import InstagramIcon from '@mui/icons-material/Instagram';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import TwitterIcon from '@mui/icons-material/Twitter';

const SocialmediaButtons = () => {
    const classes = getClasses()

    return (
        <div className={classes.buttonsContainer}>
            <IconButton href={'https://www.instagram.com/mimirnews/'} target={'_blank'}>
                <InstagramIcon style={{ fill: 'white' }} fontSize={'large'} />
            </IconButton>
            <IconButton href={'https://www.linkedin.com/company/mimirnews/about/'} target={'_blank'}>
                <LinkedInIcon style={{ fill: 'white' }} fontSize={'large'} />
            </IconButton>
            <IconButton href={'https://twitter.com/mimirnews/'} target={'_blank'}>
                <TwitterIcon style={{ fill: 'white' }} fontSize={'large'} />
            </IconButton>
        </div>
    )
}

export default SocialmediaButtons
