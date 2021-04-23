import React from 'react';
import { CofirmModalBlock, Fullscreen } from 'styles/ApplyStyles';
import Button from '@material-ui/core/Button';

const AskModal = ({ visible, close, open, cancel }) => {
    if (!visible) return null;
    return (
        <>
            <Fullscreen onClick={e => cancel(e)} />
            <CofirmModalBlock>
                <div
                    className="header"
                    style={{ marginBottom: '15px', borderBottom: '1px solid #ccc', padding: '13px' }}
                >
                    <strong style={{ fontSize: '20px', letterSpacing: '-1.5px' }}>혹시 택배를 보내셨나요?</strong>
                </div>
                <strong style={{ letterSpacing: '-1px' }}>
                    신청하신 박스가 이미 센터로 이동중이라면
                    <br /> 운송장 번호를 입력해주세요.
                </strong>
                <p style={{ fontSize: '14px', letterSpacing: '-1px' }}>
                    (보내시기 전이라면 보내신 뒤 <br /> 마이페이지에서 입력 가능합니다.)
                </p>
                <div className="buttons">
                    <Button
                        variant="contained"
                        color="primary"
                        type="button"
                        onClick={e => open(e)}
                        style={{ width: '50%', background: '#0080ff' }}
                    >
                        입력하기
                    </Button>
                    <Button
                        variant="outlined"
                        color="primary"
                        type="button"
                        onClick={e => close(e)}
                        style={{ width: '50%' }}
                    >
                        나중에 하기
                    </Button>
                </div>
            </CofirmModalBlock>
        </>
    );
};

export default AskModal;
