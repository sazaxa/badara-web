import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { withRouter } from 'react-router-dom';
import FaqAddComponent from '../../components/faq/FaqAddComponent';
import { changeField, readFaq, writeFaq } from '../../modules/Faq';
import { changeLoginPopup } from '../../modules/Popup';

const FaqAddContainer = ({ close, location }) => {
  const dispatch = useDispatch();
  const { faqFiend } = useSelector((state) => state.faqs);

  const handleChange = (e) => {
    const { value, name } = e.target;
    dispatch(
      changeField({
        form: 'faqFiend',
        name,
        value,
      }),
    );
  };
  const onSubmit = async (event) => {
    event.preventDefault();
    const { title, content } = faqFiend;
    await dispatch(writeFaq({ title, content }));
    dispatch(changeLoginPopup(false));
    await dispatch(readFaq());
  };
  return (
    <FaqAddComponent
      onSubmit={onSubmit}
      onChange={handleChange}
      close={close}
    />
  );
};

export default withRouter(FaqAddContainer);
