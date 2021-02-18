import React from 'react';
import { ApplyContent, ApplyWrap } from 'styles/ApplyStyles';

const ApplyListComponent = () => {
    return (
        <ApplyWrap>
            <ApplyContent>
                <h2>신청 목록</h2>
                <article className="waring">
                    <h3>신청 전 주의사항!</h3>
                    <p>
                        *실 무게, 부피무게중 높은 쪽으로 예상가격이 측정 됩니다. <br />
                    </p>
                    <h4>
                        * 배송 대행 신청후 물품을 센터로 보내주셔야 합니다. <br /> * 센터 주소 :
                    </h4>
                </article>
                <article className="ApplyListHeader">
                    <ul>
                        <li>상품명</li>
                        <li>보내는 국가</li>
                        <li>받는 분 정보</li>
                        <li>무게</li>
                        <li>예상가격</li>
                    </ul>
                </article>
                <article className="ApplyListContent">
                    <ul>
                        <li>과자 묶음</li>
                        <li>미국</li>
                        <li>
                            <p>이름 : 강경원</p>
                            <p>휴대폰 : 010321321313</p>
                            <p>주소 : ㅇㅁㄴㅇㅇㄴㅁㅇㅁ</p>
                        </li>
                        <li>
                            <p>부피무게 : 123g</p>
                            <p>실 무게 : 1234g</p>
                        </li>
                        <li>123$</li>
                    </ul>
                    <button type="button" className="delete">
                        삭제
                    </button>
                </article>
            </ApplyContent>
        </ApplyWrap>
    );
};

export default ApplyListComponent;
