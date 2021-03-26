import React from 'react';
import { AskModalBlock, Fullscreen } from 'styles/ApplyStyles';
import Button from '@material-ui/core/Button';

const AskModal = ({ visible, close, open, cancel }) => {
    if (!visible) return null;
    return (
        <Fullscreen>
            <AskModalBlock>
                <strong>
                    신청하신 박스가 이미 센터로 이동중이라면
                    <br /> 운송장 번호를 입력해주세요.
                </strong>
                <p style={{ fontSize: '14px', letterSpacing: '-1px' }}>
                    (보내시기 전이라면 보내신 뒤 <br /> 마이페이지에서 입력 가능합니다.)
                </p>
                <div className="buttons">
                    <Button variant="contained" color="primary" type="button" onClick={e => open(e)}>
                        입력하기
                    </Button>
                    <Button variant="outlined" color="primary" type="button" onClick={e => close(e)}>
                        나중에 하기
                    </Button>
                    <Button variant="outlined" color="primary" type="button" onClick={e => cancel(e)}>
                        취소
                    </Button>
                </div>
            </AskModalBlock>
        </Fullscreen>
    );
};

export default AskModal;
