import { Card, CardContent, Modal, Button, useMediaQuery } from '@mui/material'
import React from 'react'
import { useIsMobile } from '../../hooks/useIsMobile'
import theme from '../../theme'
import { getClasses } from './SurveyModal.jss'

const SurveyModal = ({ open, handleClose }: { open: boolean, handleClose: (event?: object, reason?: string) => void }) => {
    const classes = getClasses()

    const isMobile = useIsMobile()

    return (
            <Modal open={open} onClose={handleClose} style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                <div style={{ position: 'relative' }}>
                    {!isMobile ? <Button variant={'contained'} color={'primary'} className={classes.closeButton} onClick={handleClose}>X</Button> : false}
                    <Card>
                        <CardContent className={classes.card}>
                            <iframe className={classes.iframe} src="https://docs.google.com/forms/d/e/1FAIpQLScSS7Vae-vS3Oxs8iX0_mZ8dItvrc04amT6U71LHb64XHBeeg/viewform?embedded=true">Loading…</iframe>
                        </CardContent>
                    </Card>
                </div>
            </Modal>
    )
}

export default SurveyModal
