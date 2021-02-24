import React from 'react';
import { ApplyContent, ApplyWrap } from 'styles/ApplyStyles';
import ApplyModal from './ApplyModal';

const ApplyComponent = ({
    HandleChange,
    CountryLists,
    Courier,
    OnClickVolume,
    VolumeWeight,
    Visible,
    HandleConfirmModal,
    HandleConfirm,
    HandleCancel,
    HandleAddConfirm,
    Material,
    Prise,
}) => {
    return (
        <ApplyWrap>
            <ApplyContent>
                <h2>배송 대행 신청</h2>
                <article className="formWrap">
                    <article className="waring">
                        <h3>신청 전 주의사항!</h3>
                        <p>
                            *실 무게, 부피무게중 높은 쪽으로 가격이 측정 됩니다. <br />
                            *부피무게는 가로 세로 높이 값을 입력 후 계산하기 버튼을 누르시면 됩니다. <br />
                            (실 무게는 직접입력)
                        </p>
                        <h4>
                            * 배송 대행 신청후 물품을 센터로 보내주셔야 합니다. <br /> * 센터 주소 :
                        </h4>
                    </article>
                    <article className="contentWrap">
                        <article className="content">
                            <article className="title">
                                <p>받는 분</p>
                            </article>
                            <article className="body">
                                {Material.addProduct ? (
                                    <input
                                        type="text"
                                        name="recipientName"
                                        onChange={HandleChange}
                                        value={Material.recipientName}
                                        disabled
                                    />
                                ) : (
                                    <input
                                        type="text"
                                        name="recipientName"
                                        onChange={HandleChange}
                                        value={Material.recipientName}
                                    />
                                )}
                            </article>
                        </article>
                        <article className="content">
                            <article className="title">
                                <p>받는 분 휴대폰 번호</p>
                            </article>
                            <article className="body">
                                {Material.addProduct ? (
                                    <input
                                        type="number"
                                        name="recipientPhoneNumber"
                                        onChange={HandleChange}
                                        value={Material.recipientPhoneNumber}
                                        disabled
                                    />
                                ) : (
                                    <input
                                        type="number"
                                        name="recipientPhoneNumber"
                                        onChange={HandleChange}
                                        value={Material.recipientPhoneNumber}
                                    />
                                )}
                            </article>
                        </article>
                        <article className="content">
                            <article className="title">
                                <p>보내는 국가</p>
                            </article>
                            <article className="body">
                                {Material.addProduct ? (
                                    <select name="country" onChange={HandleChange} value={Material.country} disabled>
                                        <option value="">국가 선택</option>
                                        {CountryLists.map(e => {
                                            return (
                                                <option value={e} key={e}>
                                                    {e}
                                                </option>
                                            );
                                        })}
                                    </select>
                                ) : (
                                    <select name="country" onChange={HandleChange} value={Material.country}>
                                        <option value="">국가 선택</option>
                                        {CountryLists.map(e => {
                                            return (
                                                <option value={e} key={e}>
                                                    {e}
                                                </option>
                                            );
                                        })}
                                    </select>
                                )}
                            </article>
                        </article>
                        <article className="content">
                            <article className="title">
                                <p>보내는 주소</p>
                            </article>
                            <article className="body">
                                {Material.addProduct ? (
                                    <input
                                        type="text"
                                        name="recipientAddress"
                                        onChange={HandleChange}
                                        value={Material.recipientAddress}
                                        disabled
                                    />
                                ) : (
                                    <input
                                        type="text"
                                        name="recipientAddress"
                                        onChange={HandleChange}
                                        value={Material.recipientAddress}
                                    />
                                )}
                            </article>
                        </article>
                        <article className="content">
                            <article className="title">
                                <p>상품명</p>
                            </article>
                            <article className="body">
                                <input
                                    type="text"
                                    name="productName"
                                    onChange={HandleChange}
                                    value={Material.productName}
                                    placeholder="한가지 상품만 입력하세요"
                                />
                            </article>
                        </article>
                        <article className="content">
                            <article className="title">
                                <p>택배사</p>
                            </article>
                            <article className="body">
                                <select
                                    name="koreanShippingCompany"
                                    onChange={HandleChange}
                                    value={Material.koreanShippingCompany}
                                >
                                    <option value="">택배사 선택</option>
                                    {Courier.map((e, index) => {
                                        return (
                                            <option value={e} key={index}>
                                                {e}
                                            </option>
                                        );
                                    })}
                                </select>
                            </article>
                        </article>
                        <article className="content">
                            <article className="title">
                                <p>운송장 번호</p>
                            </article>
                            <article className="body">
                                <input
                                    type="number"
                                    name="koreanInvoice"
                                    onChange={HandleChange}
                                    value={Material.koreanInvoice}
                                    placeholder="신청후 마이페이지 내에서 작성 가능합니다."
                                />
                            </article>
                        </article>
                        <article className="content">
                            <article className="title">
                                <p>부피무게 계산</p>
                            </article>
                            <article className="body material">
                                <input
                                    type="text"
                                    name="width"
                                    placeholder="가로"
                                    onChange={HandleChange}
                                    value={Material.width}
                                />
                                <span>X</span>
                                <input
                                    type="text"
                                    name="depth"
                                    placeholder="세로"
                                    onChange={HandleChange}
                                    value={Material.depth}
                                />
                                <span>X</span>
                                <input
                                    type="text"
                                    name="height"
                                    placeholder="높이"
                                    onChange={HandleChange}
                                    value={Material.height}
                                />
                                <button type="button" onClick={OnClickVolume}>
                                    계산하기
                                </button>
                            </article>
                        </article>
                        <article className="content">
                            <article className="title">
                                <p>부피무게(단위:g)</p>
                            </article>
                            <article className="body">
                                <input
                                    type="text"
                                    disabled
                                    placeholder="가로/세로/높이 입력후 계산하기를 눌러주세요"
                                    name="volumeWeight"
                                    onChange={HandleChange}
                                    value={VolumeWeight}
                                />
                            </article>
                        </article>
                        <article className="content">
                            <article className="title">
                                <p>실 무게(단위:g)</p>
                            </article>
                            <article className="body">
                                <input
                                    type="text"
                                    placeholder="실 무게"
                                    name="netWeight"
                                    onChange={HandleChange}
                                    value={Material.netWeight}
                                />
                            </article>
                        </article>
                        <article className="content">
                            <article className="title">
                                <p>특이사항</p>
                            </article>
                            <article className="body">
                                <textarea name="userMemo" onChange={HandleChange} value={Material.userMemo} />
                            </article>
                        </article>
                    </article>
                    <button type="button" className="applyBtn" onClick={HandleConfirmModal}>
                        신청
                    </button>
                </article>
                <ApplyModal
                    visible={Visible}
                    onConfirm={HandleConfirm}
                    onCancel={HandleCancel}
                    onAddConfirm={HandleAddConfirm}
                    Material={Material}
                />
            </ApplyContent>
        </ApplyWrap>
    );
};

export default ApplyComponent;
