import React from 'react';
import FaqDelComponent from '../../components/faq/FaqDelComponent';

const FaqDelContainer = ({ visible, onRemove, close }) => (
  <FaqDelComponent visible={visible} close={close} onRemove={onRemove} />
);

export default FaqDelContainer;
