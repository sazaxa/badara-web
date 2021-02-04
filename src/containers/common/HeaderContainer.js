import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import HeaderComponet from '../../components/common/HeaderComponent';
import { changeLoginPopup } from '../../modules/Popup';

const HeaderContainer = () => {
  const { open } = useSelector((state) => state.Popup);
  const dispatch = useDispatch();
  const LoginAction = () => {
    dispatch(changeLoginPopup(true));
  };
  return <HeaderComponet popup={open} action={LoginAction} />;
};

export default HeaderContainer;
