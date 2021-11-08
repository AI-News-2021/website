import React from 'react'
import { getClasses } from './LandingPageLogo.jss'
import Image from 'next/image'

const LandingPageLogo = () => {
    const classes = getClasses()
    return (
        <div className={classes.logoContainer}>
          <div className={classes.logoIcon}>
            <Image src={'/mimir_logo_head.svg'} alt={'Graphical illustration of the head of mimir, as the logo of Mimir News.'} width={'100%'} height={'100%'} layout={'responsive'} />
          </div>
          <div className={classes.logoText}>
            <Image src={'/mimir_logo_text.png'} alt={'Mimir'} width={'100%'} height={'32%'} layout={'responsive'} />
          </div>
        </div>
    )
}

export default LandingPageLogo
