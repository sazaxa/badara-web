import React from 'react';
import { ResponsiveBlock } from 'styles/CommonStyles';

const Responsive = ({ children, ...rest }) => <ResponsiveBlock {...rest}>{children}</ResponsiveBlock>;

export default Responsive;
