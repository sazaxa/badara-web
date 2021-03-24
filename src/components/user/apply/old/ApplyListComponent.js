import React from 'react';
import { ApplyContent, ApplyWrap } from 'styles/ApplyStyles';

const ApplyListComponent = ({ ApplyList, HandleDeleteClick, HandleInsertClick }) => {
    return (
        <ApplyWrap>
            <ApplyContent>
                <h2>신청 목록</h2>
                <article className="waring">
                    <h3>신청 전 주의사항!</h3>
                    <p>
                        *실 무게, 부피무게중 높은 쪽으로 예상가격이 측정 됩니다. <br />
                        *새로고침시 신청한 내용이 사라지니 유의하시기 바랍니다.
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
                {ApplyList.map((e, index) => {
                    return (
                        <article className="ApplyListContent" key={index}>
                            <ul>
                                <li>{e.productName}</li>
                                <li>{e.country}</li>
                                <li>
                                    <p>이름 : {e.recipientName}</p>
                                    <p>휴대폰 : {e.recipientPhoneNumber}</p>
                                    <p>주소 : {e.recipientAddress}</p>
                                </li>
                                <li>
                                    <p>
                                        부피무게 :<b>{e.volumeWeight ? e.volumeWeight + 'g' : '미입력'}</b>
                                    </p>
                                    <p>
                                        실 무게 : <b>{e.netWeight ? e.netWeight + 'g' : '미입력'}</b>
                                    </p>
                                </li>
                                <li>{e.expectedPrice}$</li>
                            </ul>
                            <button type="button" className="delete" onClick={() => HandleDeleteClick(index)}>
                                삭제
                            </button>
                        </article>
                    );
                })}
                <button type="button" className="applyBtn" onClick={HandleInsertClick}>
                    신청하기
                </button>
            </ApplyContent>
        </ApplyWrap>
    );
};

export default ApplyListComponent;
