import React from 'react';
import { AskModalBlock, Fullscreen, CofirmModalBlock } from 'styles/ApplyStyles';
import Button from '@material-ui/core/Button';

const WaringModal = ({ visible, close, Ask }) => {
    if (!visible) return null;
    return (
        <>
            <Fullscreen onClick={e => close(e)} />
            <CofirmModalBlock>
                {/* <div className="header" style={{ marginBottom: '10px', padding: '5px 0' }}>
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
                </div> */}
                <form onSubmit={e => Ask(e)}>
                    <div className="wrap">
                        <div
                            className="header"
                            style={{ marginBottom: '15px', borderBottom: '1px solid #ccc', padding: '13px' }}
                        >
                            <strong style={{ fontSize: '20px', letterSpacing: '-1.5px' }}>확인 해주세요!</strong>
                        </div>
                        <div className="body" style={{ padding: '20px' }}>
                            <div className="price" style={{ marginBottom: '15px' }}>
                                <label htmlFor="1">
                                    <input type="checkbox" id="1" required style={{ marginRight: '10px' }} />
                                    <span
                                        style={{
                                            letterSpacing: '-1.5px',
                                            fontWeight: '600',
                                            marginBottom: '10px',
                                            display: 'inline-block',
                                            fontSize: '16px',
                                        }}
                                    >
                                        <strong style={{ color: 'red', marginRight: '5px' }}>(필수)</strong>
                                        가격 책정 안내
                                    </span>
                                    <p style={{ letterSpacing: '-1px', fontSize: '14px' }}>
                                        <strong style={{ color: 'red', fontSize: '16px', margin: '0px 5px' }}>
                                            실무게
                                        </strong>
                                        와{' '}
                                        <strong style={{ color: 'red', fontSize: '16px', margin: '0px 5px' }}>
                                            부피무게
                                        </strong>{' '}
                                        중 더 큰 값으로 배송비가 측정되며, 센터 입고 후 치수와 무게가 재측정되어 요금이
                                        변경될 수 있습니다.
                                    </p>
                                </label>
                            </div>
                            <div className="price">
                                <label htmlFor="2">
                                    <input type="checkbox" id="2" style={{ marginRight: '10px' }} required />
                                    <span
                                        style={{
                                            letterSpacing: '-1.5px',
                                            fontWeight: '600',
                                            marginBottom: '10px',
                                            display: 'inline-block',
                                            fontSize: '16px',
                                        }}
                                    >
                                        <strong style={{ color: 'red', marginRight: '5px' }}>(필수)</strong>
                                        발송물 입력 확인
                                    </span>
                                    <p style={{ letterSpacing: '-1px', fontSize: '14px' }}>
                                        보내시는 발송물이
                                        <strong style={{ color: 'red', fontSize: '17px', margin: '0px 5px' }}>
                                            {' '}
                                            세 개
                                        </strong>
                                        라면, 송장번호도{' '}
                                        <strong style={{ color: 'red', fontSize: '16px', margin: '0px 5px' }}>
                                            세 개
                                        </strong>
                                        가 맞는지 확인해주세요.
                                    </p>
                                </label>
                            </div>
                            <div className="price">
                                <label htmlFor="3">
                                    <input type="checkbox" id="3" style={{ marginRight: '10px' }} required />
                                    <span
                                        style={{
                                            letterSpacing: '-1.5px',
                                            fontWeight: '600',
                                            marginBottom: '10px',
                                            display: 'inline-block',
                                            fontSize: '16px',
                                        }}
                                    >
                                        <strong style={{ color: 'red', marginRight: '5px' }}>(필수)</strong>
                                        발송물 내용물 확인
                                    </span>
                                    <p style={{ letterSpacing: '-1px', fontSize: '14px' }}>
                                        보내주신 상품의 정확한
                                        <strong style={{ color: 'red', fontSize: '17px', margin: '0px 5px' }}>
                                            {' '}
                                            정보 확인
                                        </strong>
                                        을 위해 발송물을 임의로
                                        <strong style={{ color: 'red', fontSize: '16px', margin: '0px 5px' }}>
                                            개봉
                                        </strong>
                                        할 경우도 있습니다.
                                    </p>
                                </label>
                            </div>
                        </div>
                    </div>
                    <div className="buttons">
                        <Button
                            variant="contained"
                            color="primary"
                            type="sumbit"
                            style={{ width: '100%', background: '#0080ff' }}
                        >
                            확인
                        </Button>
                    </div>
                </form>
            </CofirmModalBlock>
        </>
    );
};

export default WaringModal;
