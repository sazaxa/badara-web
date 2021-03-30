import React, { useState } from 'react';
import { shallowEqual, useDispatch, useSelector } from 'react-redux';
import { acitiveStepChange } from 'store/part';
import { boxDataAddAction, boxDataRemoveAction } from 'store/apply';
import Button from '@material-ui/core/Button';
import Box from './Box';
import AskModal from './AskModal';
import InvoiceModal from './InvoiceModal';

const Boxes = ({ stepIndex, steps }) => {
    const dispatch = useDispatch();
    const { activeStep, boxes } = useSelector(
        state => ({
            activeStep: state.part.activeStep,
            boxes: state.apply.apply.boxes,
        }),
        shallowEqual
    );
    const [AskPopop, setAskPopup] = useState(false);
    const [InvoicePopup, setInvoicePopup] = useState(false);

    const defaultBoxData = {
        expectedWidth: null,
        expectedDepth: null,
        expectedHeight: null,
        expectedVolumeWeight: null,
        expectedNetWeight: null,
        expectedPrice: null,
        koreanInvoice: null,
        koreanShippingCompany: null,
    };

    const handlePrev = () => {
        dispatch(acitiveStepChange(activeStep - 1));
    };

    const handleAskOpen = e => {
        e.preventDefault();
        setAskPopup(true);
    };
    const handleAskClose = e => {
        e.preventDefault();
        setAskPopup(false);
        dispatch(acitiveStepChange(activeStep + 1));
    };
    const handleAskCancel = e => {
        e.preventDefault();
        setAskPopup(false);
    };
    const handleInvoiceOpen = e => {
        e.preventDefault();
        setInvoicePopup(true);
        setAskPopup(false);
    };
    const handleInvoiceClose = e => {
        e.preventDefault();
        setInvoicePopup(false);
    };
    const handleClick = e => {
        e.preventDefault();
        //TODO: 클릭이벤트 생성해야함.
        //FIXME:2021-03-25 Submit 함수로 필수값을 체크하고 필수값이 입력이 안되면 넘어가지 않도록 조치
        dispatch(acitiveStepChange(activeStep + 1));
        setInvoicePopup(false);
    };

    const BoxAdd = () => {
        dispatch(boxDataAddAction({ box: defaultBoxData }));
    };

    const boxRemove = index => {
        dispatch(boxDataRemoveAction({ index: index }));
    };
    return (
        <>
            <form onSubmit={handleAskOpen}>
                {boxes?.map((v, index) => (
                    <Box
                        stepIndex={stepIndex}
                        steps={steps}
                        box={v}
                        // handlePrev={handlePrev}
                        // handleClick={handleClick}
                        index={index}
                        Remove={boxRemove}
                        key={index}
                    />
                ))}
                <Button variant="outlined" color="primary" onClick={BoxAdd}>
                    추가
                </Button>
                <article
                    style={{
                        display: 'flex',
                        flexWrap: 'wrap',
                        justifyContent: 'center',
                        alignItems: 'center',
                        margin: '20px 0',
                    }}
                >
                    <Button disabled={stepIndex === 0} onClick={handlePrev}>
                        이전
                    </Button>
                    <Button variant="contained" color="primary" type="submit">
                        {stepIndex === steps.length - 1 ? '접수하기' : '다음'}
                    </Button>
                </article>
            </form>
            <AskModal visible={AskPopop} close={handleAskClose} open={handleInvoiceOpen} cancel={handleAskCancel} />
            <InvoiceModal visible={InvoicePopup} close={handleInvoiceClose} open={handleClick} />
        </>
    );
};

export default Boxes;
