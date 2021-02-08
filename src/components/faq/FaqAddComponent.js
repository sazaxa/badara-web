import React from 'react';
import styled from 'styled-components';

const FaqAddWrap = styled.section`
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.1);
  position: fixed;
  z-index: 1;
`;
const FaqAddPopup = styled.article`
  width: 500px;
  height: 350px;
  background: #fff;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  border-radius: 10px;
  box-shadow: 0px 11px 15px -7px rgb(0 0 0 / 20%),
    0px 24px 38px 3px rgb(0 0 0 / 14%), 0px 9px 46px 8px rgb(0 0 0 / 12%);
  z-index: 2;
  padding: 30px;
  box-sizing: border-box;
`;

const FaqAddComponent = ({ close }) => (
  <>
    <FaqAddWrap onClick={close} />
    <FaqAddPopup>123</FaqAddPopup>
  </>
);

export default FaqAddComponent;
