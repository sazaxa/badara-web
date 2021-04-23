import React, { useEffect, useState } from 'react';
import { CofirmModalBlock, Fullscreen } from 'styles/ApplyStyles';
import Button from '@material-ui/core/Button';

const WaringModal = ({ visible, close, apply, weight, weightPopup, weightConfirm, handleWeightPopup }) => {
    const [Popup, setPopup] = useState(false);
    useEffect(() => {
        if (weight > 30) {
            setPopup(true);
            handleWeightPopup();
        }
    }, [weight, weightPopup]);
    const handlePopup = () => {
        setPopup(false);
    };
    if (!visible) return null;
    if (Popup)
        return (
            <>
                <Fullscreen onClick={e => close(e)} />
                <CofirmModalBlock>
                    <div className="wrap">
                        <div
                            className="header"
                            style={{ marginBottom: '15px', borderBottom: '1px solid #ccc', padding: '13px' }}
                        >
                            <strong style={{ fontSize: '20px', letterSpacing: '-1.5px' }}>
                                무게가 너무 무겁습니다!!
                            </strong>
                        </div>

                        <div style={{ padding: '15px', letterSpacing: '-1.5px', fontSize: '16px' }}>
                            <strong>
                                30kg 이상 발송물에 대해서는 <br /> 바다라에서 (영업일 기준) 1일 내로 연락을 드립니다!{' '}
                                <br />
                                잠시만 기다리세요~
                            </strong>
                        </div>
                    </div>
                    <div className="buttons" style={{ marginTop: '30px' }}>
                        <Button
                            variant="contained"
                            color="primary"
                            type="button"
                            style={{ width: '100%', background: '#0080ff' }}
                            onClick={() => handlePopup()}
                        >
                            신청하기
                        </Button>
                    </div>
                </CofirmModalBlock>
            </>
        );
    return (
        <>
            <Fullscreen onClick={e => close(e)} />
            <CofirmModalBlock>
                <div className="wrap" style={{ width: '100%', height: '350px' }}>
                    <div
                        className="header"
                        style={{ marginBottom: '15px', borderBottom: '1px solid #ccc', padding: '13px' }}
                    >
                        <strong style={{ fontSize: '20px', letterSpacing: '-1.5px' }}>신청전 주의사항</strong>
                    </div>
                    <div style={{ padding: '15px', height: '280px', overflowY: 'auto' }}>
                        <p style={{ letterSpacing: '-1.5px' }}>
                            <strong style={{ fontSize: '18px', display: 'block', marginBottom: '5px' }}>
                                1. 하나의 주문에는 하나의 송장번호가 부여됩니다.
                            </strong>{' '}
                            즉, 한 주문에 세 개의 박스를 기입하여도 세 박스는 합배송됩니다. <br />
                            만약 박스마다 송장번호를 부여하고 싶다면, 원하는 송장번호 수량만큼 주문을 생성하여야 합니다.
                        </p>
                        <p style={{ letterSpacing: '-1.5px' }}>
                            <strong style={{ fontSize: '18px', display: 'block', marginBottom: '5px' }}>
                                2. 전자제품, 음식류(밀폐포장), 파손되기 쉬운 물품의 경우 발송은 가능하나 <br /> 분실,
                                파손, 세관에 의한 압류 및 폐기가 발생할 시 운송비 상품등에 대한 보상은 이뤄지지
                                않습니다.
                            </strong>
                            단, 상품 유실과 같은 배송사 귀책이 분명할 시 배송사의 보상한도 규정에 따라 보상 받을 수
                            있습니다.
                        </p>
                    </div>
                </div>
                <div className="buttons" style={{ marginTop: '30px' }}>
                    <Button
                        variant="contained"
                        color="primary"
                        type="button"
                        style={{ width: '100%', background: '#0080ff' }}
                        onClick={e => apply(e)}
                    >
                        동의 후 신청하기
                    </Button>
                </div>
            </CofirmModalBlock>
        </>
    );
};

export default WaringModal;
