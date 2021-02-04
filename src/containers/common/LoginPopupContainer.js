import React from 'react';
import { useDispatch } from 'react-redux';
import LoginPopupComponent from '../../components/common/LoginPopupComponent';
import { changeField } from '../../modules/auth';
import { changeLoginPopup } from '../../modules/popup';

const LoginPopupContainer = () => {
  const dispatch = useDispatch();

  const ClosePopup = () => {
    dispatch(changeLoginPopup(false));
  };
  const onChange = (e) => {
    const { value, name } = e.target;
    // console.log(value);
    // console.log(name);
    dispatch(
      changeField({
        form: 'login',
        key: name,
        value,
      }),
    );
  };

  return <LoginPopupComponent close={ClosePopup} onChange={onChange} />;
};

export default LoginPopupContainer;
