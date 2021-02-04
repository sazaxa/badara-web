import React from 'react';
import { useDispatch } from 'react-redux';
import LoginPopupComponent from '../../components/common/LoginPopupComponent';
import { changeLoginPopup } from '../../modules/Popup';

const LoginPopupContainer = () => {
  const dispatch = useDispatch();

  const ClosePopup = () => {
    dispatch(changeLoginPopup(false));
  };

  return <LoginPopupComponent close={ClosePopup} />;
};

export default LoginPopupContainer;
