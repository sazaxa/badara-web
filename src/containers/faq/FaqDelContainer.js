import React from 'react';
import { useDispatch } from 'react-redux';
import FaqDelComponent from '../../components/faq/FaqDelComponent';
import { Delete } from '../../lib/api/FAQ';
import { readFaqs } from '../../modules/Faq';
import { changeDeletePopup } from '../../modules/Popup';

const FaqDelContainer = ({ visible, checked, close }) => {
  const dispatch = useDispatch();
  const onRemove = async () => {
    try {
      await checked.map((checkFaq) => Delete(checkFaq));
      dispatch(changeDeletePopup(false));
      await dispatch(readFaqs());
    } catch (e) {
      console.log(e);
    }
  };
  return (
    <FaqDelComponent visible={visible} close={close} onRemove={onRemove} />
  );
};

export default FaqDelContainer;
