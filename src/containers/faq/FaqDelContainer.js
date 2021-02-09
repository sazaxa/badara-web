import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import FaqDelComponent from '../../components/faq/FaqDelComponent';
import { Delete } from '../../lib/api/FAQ';
import { readFaqs } from '../../modules/Faqs';
import { changeDeletePopup } from '../../modules/Popup';

const FaqDelContainer = ({ visible, checked, close }) => {
  const dispatch = useDispatch();
  const onRemove = async () => {
    try {
      if (checked.length > 0) {
        await checked.map((checkFaq) => Delete(checkFaq));
        dispatch(changeDeletePopup(false));
        await dispatch(readFaqs());
      } else {
        alert('삭제할 faq가 없습니다.');
        await dispatch(readFaqs());
      }
    } catch (e) {
      console.log(e);
    }
  };
  return (
    <FaqDelComponent visible={visible} close={close} onRemove={onRemove} />
  );
};

export default FaqDelContainer;
