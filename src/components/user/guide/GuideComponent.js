import React from 'react';
import { GuideContents, GuideWrap } from '../../../styles/GuidePageStyles';
import logo from '../../../styles/img/logo.png';

const GuideComponent = () => {
    return (
        <GuideWrap>
            <GuideContents>
                <article className="GuideContent">
                    <div className="GuideHeader">
                        <img src={logo} alt="logo" />
                        <span>서비스 소개</span>
                    </div>
                    <p>
                        국제택배 전문 해외 배송 대행사 “BADARA”의 한글 발음은 <strong>“바다라”</strong>입니다. <br />
                        <br />
                        <br />
                        “BADARA”는 부담스러운 운송비와 복잡한 절차로 해외 배송 서비스를 사용하지 못한 분들에게 더 나은
                        가격과 서비스를 제안합니다. <br />
                        “BADARA”는 세계적으로 유명한 특송사와 협력하여 기존 특송사의 운임보다 50%이상 할인된 비용을
                        제공합니다. <br />
                        “BADARA”는 고객님들이 빠르고 안전한 특송사 서비스를 저렴하게 이용할 수 있도록 노력합니다.
                        <br />
                        <strong>
                            “BADARA”로 상품을 보내주세요! <br />
                            고객님이 원하는 방식으로 빠르고 안전한 서비스를 제공합니다. <br />
                            <br />
                            “BADARA”의 고객님들은 다양합니다.
                            <br />
                        </strong>
                        1) 영국 대학교에 원서를 보내야 하시는 분<br />
                        2) 미국 친구에게 한국 라면세트를 선물하는 분<br />
                        3) 싱가폴에 살고 있지만 한국 사이트에서 옷을 구매하고 싶으신 분<br />
                        4) 해외 다양한 지역으로 전자상거래를 하는 분 <br />
                        <br />
                        이제 “BADARA”에서 쉽고 간단하게 해외 배송을 보내세요!
                    </p>
                </article>
                <article className="GuideContent">
                    <div className="GuideHeader">
                        <img src={logo} alt="logo" />
                        <span>서비스 이용안내</span>
                    </div>
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
                            상품 센터 <br />
                            발송
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
                            해외출발
                            <span className="next">></span>
                        </li>
                        <li>
                            <span className="num">08</span>
                            해외송장
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
