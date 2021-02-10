import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import FaqComponent from '../../components/faq/FaqComponent';
import { initialize } from '../../modules/Write';
import { readFaqs } from '../../modules/Faqs';
import { changeLoginPopup, changeUpdatePopup } from '../../modules/Popup';
import { initializeFAQ } from '../../modules/Faq';

const FaqContainer = () => {
  const dispatch = useDispatch();
  const { Allfaq } = useSelector((state) => state.faqs);
  const { loginPopup, deletePopup, updatePopup } = useSelector(
    (state) => state.popup,
  );
  const { status } = useSelector((state) => state.write);
  const { statusUpdate } = useSelector((state) => state.faqReducer);
  useEffect(() => {
    dispatch(readFaqs());
    if (status === 201) {
      dispatch(readFaqs());
      dispatch(initialize());
    } else if (statusUpdate === 200) {
      dispatch(readFaqs());
      dispatch(initializeFAQ());
    }
  }, [dispatch, status, statusUpdate]);
  const ClosePopup = async () => {
    await dispatch(changeLoginPopup(false));
    dispatch(initializeFAQ());
  };
  const OpenPopup = async () => {
    await dispatch(changeLoginPopup(true));
  };
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
      updatePopup={updatePopup}
    />
  );
};

export default FaqContainer;
