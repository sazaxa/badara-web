import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import { AskModalBlock, Fullscreen } from 'styles/ApplyStyles';
import Invoise from './Invoice';

const InvoiceModal = ({ visible, close, open }) => {
    const { boxes } = useSelector(state => state.apply.apply);
    if (!visible) return null;
    return (
        <Fullscreen>
            <AskModalBlock>
                <strong>운송장번호를 입력해주세요.</strong>
                <form onSubmit={e => open(e)}>
                    {boxes.map((box, index) => (
                        <Invoise box={box} index={index} />
                    ))}
                    <div className="buttons">
                        <button type="submit">입력하기</button>
                        <button type="button" onClick={e => close(e)}>
                            다음에 입력
                        </button>
                    </div>
                </form>
            </AskModalBlock>
        </Fullscreen>
    );
};

export default InvoiceModal;
