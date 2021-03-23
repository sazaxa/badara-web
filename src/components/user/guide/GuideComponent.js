import React from 'react';
import { GuideContents, GuideWrap } from '../../../styles/GuidePageStyles';
import logo from '../../../styles/img/logo.png';

const GuideComponent = () => {
    return (
        <GuideWrap>
            <GuideContents>
                <article className="GuideContent">
                    <h2>
                        <img src={logo} alt="logo" />
                        <span>서비스 소개</span>
                    </h2>
                    <p>
                        Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been
                        the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley
                        of type and scrambled it to make a type specimen book. It has survived not only five centuries,
                        but also the leap into electronic typesetting, remaining essentially unchanged. It was
                        popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages,
                        and more recently with desktop publishing software like Aldus PageMaker including versions of
                        Lorem Ipsum.
                    </p>
                </article>
                <article className="GuideContent">
                    <h2>
                        <img src={logo} alt="logo" />
                        <span>서비스 이용안내</span>
                    </h2>
                    <ul>
                        <li>
                            <span className="num">01</span>
                            예상견적
                            <span className="next">></span>
                        </li>
                        <li>
                            <span className="num">02</span>
                            배송신청
                            <span className="next">></span>
                        </li>
                        <li>
                            <span className="num">03</span>
                            상품 센터 발송
                            <span className="next">></span>
                        </li>
                        <li>
                            <span className="num">04</span>
                            수취확인
                            <span className="next">></span>
                        </li>
                        <li>
                            <span className="num">05</span>
                            결제요청
                            <span className="next">></span>
                        </li>
                        <li>
                            <span className="num">06</span>
                            결제완료
                            <span className="next">></span>
                        </li>
                        <li>
                            <span className="num">07</span>
                            해외송장
                            <span className="next">></span>
                        </li>
                        <li>
                            <span className="num">08</span>
                            해외출발
                            <span className="next">></span>
                        </li>
                        <li>
                            <span className="num">09</span>
                            통관
                            <span className="next">></span>
                        </li>
                        <li>
                            <span className="num">10</span>
                            해외도착
                        </li>
                    </ul>
                </article>
            </GuideContents>
        </GuideWrap>
    );
};

export default GuideComponent;
