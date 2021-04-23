import React from 'react';
import { useSelector } from 'react-redux';
import { CofirmModalBlock, Fullscreen } from 'styles/ApplyStyles';
import Invoise from './Invoice';
import Button from '@material-ui/core/Button';

const InvoiceModal = ({ visible, close, open }) => {
    const { boxes } = useSelector(state => state.apply.apply);
    if (!visible) return null;
    return (
        <>
            <Fullscreen onClick={e => close(e)} />
            <CofirmModalBlock>
                <div
                    className="header"
                    style={{ marginBottom: '15px', borderBottom: '1px solid #ccc', padding: '13px' }}
                >
                    <strong style={{ fontSize: '20px', letterSpacing: '-1.5px' }}>운송장번호를 입력해주세요.</strong>
                </div>
                <form onSubmit={e => open(e)}>
                    {boxes.map((box, index) => (
                        <Invoise box={box} index={index} />
                    ))}
                    <div className="buttons">
                        <Button
                            variant="contained"
                            color="primary"
                            type="sumbit"
                            style={{ width: '100%', background: '#0080ff' }}
                        >
                            입력하기
                        </Button>
                    </div>
                </form>
            </CofirmModalBlock>
        </>
    );
};

export default InvoiceModal;
