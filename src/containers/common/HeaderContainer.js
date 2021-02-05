import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import HeaderComponet from '../../components/common/HeaderComponent';
import { changeLoginPopup } from '../../modules/Popup';

const HeaderContainer = () => {
  const { loginPopup } = useSelector((state) => state.popup);
  const dispatch = useDispatch();
  const LoginAction = () => {
    dispatch(changeLoginPopup(true));
  };
  return <HeaderComponet popup={loginPopup} action={LoginAction} />;
};

export default HeaderContainer;
