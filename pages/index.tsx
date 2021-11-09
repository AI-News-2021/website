import type { NextPage } from 'next'
import Head from 'next/head'
import styles from '../styles/Home.module.css'
import React, { useState } from 'react'
import NewsletterSignup from '../components/NewsletterSignupForm/NewsletterSignup'
import LandingPageLogo from '../components/LandingPageLogo/LandingPageLogo'
import { getClasses } from '../styles/IndexPage.jss'
import SurveyModal from '../components/SurveyModal/SurveyModal'
import { useIsMobile } from '../hooks/useIsMobile'

interface IIndexPageState {
  surveyModalOpen: boolean
}

const Home: NextPage = () => {
  const classes = getClasses()
  const isMobile = useIsMobile()

  const [state, setState] = useState<IIndexPageState>({
    surveyModalOpen: false
  })

  const handleSuccess = () => {
    setState((currentState) => ({ ...currentState, surveyModalOpen: true }))
  }

  const handleModalClose = (event?: object, reason?: string) => {
    if((reason === 'backdropClick' && isMobile) || (reason !== 'backdropClick' && !isMobile)) {
      setState((currentState) => ({ ...currentState, surveyModalOpen: false }))
    }
  }

  return (
    <div className={styles.container}>
      <Head>
        <title>Mímir News</title>
        <meta name="description" content="Mímir is a news application making use of proprietary artificial intelligence to deliver unfiltered news that is free of bias and based on fact." />
        <meta property="og:title" content="Mímir News - Signup now" />
        <meta property="og:description" content="Mímir is a news application making use of proprietary artificial intelligence to deliver unfiltered news that is free of bias and based on fact." />
        <meta property="og:image" content="https://www.mimirnews.com/thumbnail.png" />
        <meta property="og:url" content="https://www.mimirnews.com/" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={classes.main}>
        <LandingPageLogo />
        <div className={classes.contentContainer}>
          {/* Info text */}
          <p className={classes.infoText}>Mímir is a news application making use of proprietary artificial intelligence to deliver unfiltered news that is free of bias and based on fact.</p>
          <p className={classes.infoText}>Let’s work together to create less division. Filling out this form will give us important product development information.</p>
          {/* Signup form */}
          <NewsletterSignup onSuccess={handleSuccess} />
          <SurveyModal open={state.surveyModalOpen} handleClose={handleModalClose} />
        </div>
      </main>

      <footer className={styles.footer}>
          Coming in 2022
      </footer>
    </div>
  )
}

export default Home
