import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import FaqComponent from '../../components/faq/FaqComponent';
import { readFaq } from '../../modules/Faq';
import { changeLoginPopup } from '../../modules/Popup';

const FaqContainer = () => {
  const dispatch = useDispatch();
  const { faq } = useSelector((state) => state.faqs);
  const { loginPopup } = useSelector((state) => state.popup);

  const ClosePopup = () => {
    dispatch(changeLoginPopup(false));
  };
  const OpenPopup = () => {
    dispatch(changeLoginPopup(true));
  };
  useEffect(() => {
    dispatch(readFaq());
  }, [dispatch]);
  if (!faq) {
    return null;
  }
  return (
    <FaqComponent
      faq={faq}
      open={OpenPopup}
      close={ClosePopup}
      popup={loginPopup}
    />
  );
};

export default FaqContainer;
