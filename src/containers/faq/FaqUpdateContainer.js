import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { withRouter } from 'react-router-dom';
import FaqUpdateComponent from '../../components/faq/FaqUpdateComponent';
import { updateFaq, changeField } from '../../modules/Faq';
import { changeUpdatePopup } from '../../modules/Popup';
import { initialize } from '../../modules/Write';

const FaqUpdateContainer = ({ close }) => {
  const dispatch = useDispatch();
  const { faq, faqField } = useSelector((state) => state.faqReducer);
  const handleChange = (e) => {
    const { value, name } = e.target;
    dispatch(
      changeField({
        form: 'faqField',
        name,
        value,
      }),
    );
  };
  const onSubmit = async (event) => {
    event.preventDefault();
    const { title, content } = faqField;
    dispatch(updateFaq({ id: faq.id, title, content }));
    await dispatch(initialize());
    // dispatch(readFaqs());
    await dispatch(changeUpdatePopup(false));
  };
  if (!faq) {
    return null;
  }
  return (
    <FaqUpdateComponent
      onSubmit={onSubmit}
      onChange={handleChange}
      close={close}
      faq={faq}
    />
  );
};

export default withRouter(FaqUpdateContainer);
