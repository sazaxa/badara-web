import React from 'react';
import styled from 'styled-components';

const FooterWrap = styled.section`
  width: 100%;
  background-color: #f6f6f6;
  position: absolute;
  bottom: 0;
  left: 0;
`;
const FooterContent = styled.article`
  width: 1140px;
  margin: 0 auto;
  padding: 20px 0;
  box-sizing: border-box;
  color: #343a40;
  p {
    margin-bottom: 5px;
    letter-spacing: -1px;
    font-size: 13px;
  }
  p:last-child {
    margin-top: 20px;
    margin-bottom: 0;
    font-weight: bold;
  }
`;

const FooterComponent = () => (
  <FooterWrap>
    <FooterContent>
      <p>Company: Whosegoods Corp.</p>
      <p>
        Address: 5, Gasan digital 1-ro, Geumcheon-gu, Seoul, Republic of Korea
      </p>
      <p>CEO: Yonghyun Kim</p>
      <p>
        Business Registration No. 140-87-00556 | E-commerce Permit:
        2017-Seoul-0142
      </p>
      <p>Zip Code: 08594 Phone:+82-2-2634-1121 Fax: +82-2-2633-1124</p>
      <p>CS Email: sazaxa.info@whosegoods.com</p>
      <p>COPYRIGHT © WHOSEGOODS. ALL RIGHTS RESERVED</p>
    </FooterContent>
  </FooterWrap>
);

export default FooterComponent;
