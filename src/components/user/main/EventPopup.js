import React, { useEffect, useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Modal from '@material-ui/core/Modal';
import Backdrop from '@material-ui/core/Backdrop';
import Fade from '@material-ui/core/Fade';
import moment from 'moment';
import { cookieManager } from 'lib/cookieManger';
import { popUps } from 'containers/user/main/MainContentContainer';

const useStyles = makeStyles(theme => ({
    modal: {
        position: 'fixed',
        top: 0,
        left: 0,
        // width: '600px',
        background: 'transparent',
    },
    paper: {
        position: 'fixed',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%,-50%)',
        backgroundColor: theme.palette.background.paper,
        border: 'none',
        borderRadius: '10px',
        overflow: 'hidden',
        outline: 'none',
        boxShadow: theme.shadows[3],
        // padding: theme.spacing(2, 4, 3),
    },
}));

const EventPopup = ({ event }) => {
    const classes = useStyles();
    const [showPopUp, setShowPopUp] = useState(false);
    const cookies = cookieManager.get(event.name);
    useEffect(() => {
        if (cookies) {
            setShowPopUp(false);
        } else {
            setShowPopUp(true);
        }
    }, []);

    const popUpLinkEventHandler = event => {
        const popUpIndex = popUps.findIndex(popUp => popUp.name === event.name);
        const { name, link, img } = popUps[popUpIndex];
        return link ? (
            <a key={name} href={link}>
                <img src={img} alt={name} className="popupImg" />
            </a>
        ) : (
            <img src={img} alt={name} className="popupImg" />
        );
    };
    const handleOnClose = () => {
        setShowPopUp(false);
    };

    const handleOnoneDayClose = () => {
        setShowPopUp(false);
        cookieManager.set(event.name, 'true');
    };
    return (
        <Modal
            aria-labelledby="transition-modal-title"
            aria-describedby="transition-modal-description"
            className={classes.modal}
            open={showPopUp}
            closeAfterTransition
            BackdropComponent={Backdrop}
            BackdropProps={{
                timeout: 500,
            }}
        >
            <Fade in={showPopUp}>
                <div className={classes.paper}>
                    {popUpLinkEventHandler(event)}
                    <div className="btn">
                        <p onClick={handleOnoneDayClose}>오늘 하루 보지 않기</p>
                        <p onClick={handleOnClose}>닫기</p>
                    </div>
                </div>
            </Fade>
        </Modal>
    );
};

export default EventPopup;
