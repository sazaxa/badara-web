import React from 'react';
import { AskModalBlock, Fullscreen } from 'styles/ApplyStyles';

const ApplyModal = ({
    visible,
    addConfirmText = '상품 추가하기',
    confirmText = '확인',
    cancelText = '취소',
    onConfirm,
    onCancel,
    onAddConfirm,
    Material,
}) => {
    if (!visible) return null;
    return (
        <Fullscreen>
            <AskModalBlock>
                <h2>신청 확인</h2>
                <h3>
                    상품명: {Material.productName} <br />
                    예상 가격 :{Material.expectedPrice} $
                </h3>
                <p>
                    더 추가를 원하시면 <br />
                    <b>{addConfirmText}</b>, <br />더 추가를 원하시지 않으실 경우 <br /> <b>{confirmText}</b>을
                    선택하세요.
                </p>

                <div className="buttons">
                    <button onClick={onAddConfirm}>{addConfirmText}</button>
                    <button onClick={onConfirm}>{confirmText}</button>
                    <button onClick={onCancel}>{cancelText}</button>
                </div>
            </AskModalBlock>
        </Fullscreen>
    );
};

export default ApplyModal;
