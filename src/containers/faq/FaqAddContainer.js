import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { withRouter } from 'react-router-dom';
import FaqAddComponent from '../../components/faq/FaqAddComponent';
import { readFaqs } from '../../modules/Faqs';
import { changeLoginPopup } from '../../modules/Popup';
import { writeFaq, changeField } from '../../modules/Write';

const FaqAddContainer = ({ close }) => {
  const dispatch = useDispatch();
  const { faqFiend } = useSelector((state) => state.write);

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
    if (!title || !content) {
      alert('빈칸이 없어야 합니다.');
      return;
    }
    await dispatch(writeFaq({ title, content }));
    dispatch(changeLoginPopup(false));
    await dispatch(readFaqs());
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
