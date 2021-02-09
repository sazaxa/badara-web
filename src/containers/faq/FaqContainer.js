import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import FaqComponent from '../../components/faq/FaqComponent';
import { readFaqs } from '../../modules/Faq';
import { changeLoginPopup } from '../../modules/Popup';

const FaqContainer = () => {
  const dispatch = useDispatch();
  const { Allfaq } = useSelector((state) => state.faqs);
  const { loginPopup, deletePopup } = useSelector((state) => state.popup);

  const ClosePopup = () => {
    dispatch(changeLoginPopup(false));
  };
  const OpenPopup = () => {
    dispatch(changeLoginPopup(true));
  };
  useEffect(() => {
    dispatch(readFaqs());
  }, [dispatch]);
  if (!Allfaq) {
    return null;
  }
  return (
    <FaqComponent
      faq={Allfaq}
      open={OpenPopup}
      close={ClosePopup}
      popup={loginPopup}
      deletePopup={deletePopup}
    />
  );
};

export default FaqContainer;
