import React from 'react';
import { AskModalBlock, Fullscreen } from 'styles/ApplyStyles';
import Button from '@material-ui/core/Button';

const WaringModal = ({ visible, close, Ask }) => {
    if (!visible) return null;
    return (
        <Fullscreen>
            <AskModalBlock>
                <div className="header" style={{ marginBottom: '10px', padding: '5px 0' }}>
                    <strong style={{ fontSize: '22px', color: 'red' }}>신청시 주의사항</strong>
                </div>
                <p style={{ fontSize: '14px', letterSpacing: '-0.5px' }}>
                    <span style={{ fontSize: '20px', fontWeight: '600', marginRight: '5px' }}>실무게</span>와
                    <span style={{ fontSize: '20px', fontWeight: '600', margin: '0 5px' }}>부피무게</span> 중 더 큰
                    값으로 <br />
                    배송비가 측정됩니다. <br />
                    센터에 박스가 입고된 후 박스의 치수와 무게가 재측정되어 요금이 변경될 수 있습니다.
                </p>
                <div className="buttons">
                    <Button variant="contained" color="primary" type="button" onClick={e => Ask(e)}>
                        확인
                    </Button>
                    <Button variant="outlined" color="primary" type="button" onClick={e => close(e)}>
                        취소
                    </Button>
                </div>
            </AskModalBlock>
        </Fullscreen>
    );
};

export default WaringModal;
