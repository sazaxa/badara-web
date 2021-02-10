import React from 'react';
import styled from 'styled-components';

const ResponsiveBlock = styled.div`
  padding: 0 0.8rem;
  box-sizing: border-box;
  width: 100%;
  height: 980px;
  background: #eee;
  padding-left: 300px;
  @media (max-width: 780px) {
    width: 100%;
  }
`;
const Responsive = ({ children, ...rest }) => (
  <ResponsiveBlock {...rest}>{children}</ResponsiveBlock>
);
export default Responsive;
