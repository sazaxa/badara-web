import React from 'react';
import { FooterWrap, FooterContent } from 'styles/CommonStyles';
import naver from '../../styles/img/naver.png';
import kakao from '../../styles/img/kakao.png';

const FooterComponent = () => (
    <FooterWrap>
        <FooterContent>
            {/* <p>Company: Whosegoods Corp.</p>
            <p>Address: 5, Gasan digital 1-ro, Geumcheon-gu, Seoul, Republic of Korea</p>
            <p>CEO: Yonghyun Kim</p>
            <p>Business Registration No. 140-87-00556 | E-commerce Permit: 2017-Seoul-0142</p>
            <p>Zip Code: 08594 Phone:+82-2-2634-1121 Fax: +82-2-2633-1124</p>
            <p>CS Email: sazaxa.info@whosegoods.com</p>
            <p>COPYRIGHT © WHOSEGOODS. ALL RIGHTS RESERVED</p> */}
            <div className="bank">
                <h4>무통장입금 입금 계좌정보</h4>
                <span>국민은행</span>
                <span>061701-04-240916</span>
                <p>주식회사 후스구스</p>
            </div>
            <div className="footer">
                <span>대표이사 : 김용현</span>
                <span className="bar">|</span>
                <span>
                    서울특별시 금천구 가산디지털1로 5 대륭테크노타운 20차 1411호 <strong>주식회사 후스구스</strong>
                </span>
            </div>
            <div className="footer">
                <span>대표번호 : 02-2634-1121</span>
                <span className="bar">|</span>
                <span>FAX : 02-2633-1124</span>
                <span className="bar">|</span>
                <span>Email : badara@whosegoods.com</span>
            </div>
            <div className="footer">
                <span>사업자등록번호 : 140-87-00556</span>
                <span className="bar">|</span>
                <span>
                    <a
                        href="https://www.ftc.go.kr/www/bizCommView.do?key=3765&apv_perm_no=2020317023530202685&pageUnit=10&searchCnd=wrkr_no&searchKrwd=1408700556&pageIndex=1"
                        target="_blank"
                        rel="noreferrer"
                    >
                        통신판매업신고번호 : 2020-서울금천-2715
                    </a>
                </span>
            </div>
            <div className="sns">
                <a href="https://blog.naver.com/click_black" target="_blank" rel="noreferrer">
                    <img src={naver} alt="naver" />
                </a>
                <a href="https://open.kakao.com/o/gIkjjr3c" target="_blank" rel="noreferrer">
                    <img src={kakao} alt="kakao" />
                </a>
            </div>
            <p>COPYRIGHT © WHOSEGOODS. ALL RIGHTS RESERVED</p>
        </FooterContent>
    </FooterWrap>
);

export default FooterComponent;
