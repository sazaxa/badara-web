import React from 'react';
import { FaqDelComponent } from 'components';

const FaqDelContainer = ({ onRemove, close }) => <FaqDelComponent close={() => close()} onRemove={() => onRemove()} />;

export default FaqDelContainer;
