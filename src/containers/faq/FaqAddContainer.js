import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { withRouter } from 'react-router-dom';
import FaqAddComponent from '../../components/faq/FaqAddComponent';
import { changeLoginPopup } from '../../modules/Popup';
import { writeFaq, changeField, initialize } from '../../modules/Write';

const FaqAddContainer = ({ close }) => {
  const dispatch = useDispatch();
  const { faqField } = useSelector((state) => state.write);
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
    if (!title || !content) {
      alert('빈칸이 없어야 합니다.');
      return;
    }
    dispatch(writeFaq({ title, content }));
    await dispatch(changeLoginPopup(false));
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
