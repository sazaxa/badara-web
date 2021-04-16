import React, { useEffect, useState } from 'react';
import { shallowEqual, useDispatch, useSelector } from 'react-redux';
import { acitiveStepChange } from 'store/part';
import { boxDataAddAction, boxDataRemoveAction } from 'store/apply';
import Button from '@material-ui/core/Button';
import Box from './Box';
import AskModal from './AskModal';
import InvoiceModal from './InvoiceModal';
import WaringModal from './WarningModal';

const Boxes = ({ stepIndex, steps }) => {
    const dispatch = useDispatch();
    const { activeStep, boxes, products } = useSelector(
        state => ({
            activeStep: state.part.activeStep,
            boxes: state.apply.apply.boxes,
            products: state.apply.apply.products,
        }),
        shallowEqual
    );

    const [AskPopop, setAskPopup] = useState(false);
    const [warningPopop, setWarningPopup] = useState(false);
    const [productsWeight, setProductWeight] = useState(0);
    const [boxesWeight, setBoxesWeight] = useState(0);
    const [InvoicePopup, setInvoicePopup] = useState(false);

    // products에 총 무게를 구한다.
    useEffect(() => {
        let productsSum = 0;
        for (let i = 0; i < products.length; i++) {
            productsSum += Number(products[i].weight) * Number(products[i].quantity);
        }
        setProductWeight(productsSum);
    }, [products]);

    // boxes에 총 무게를 구한다.
    useEffect(() => {
        let boxesSum = 0;
        for (let i = 0; i < boxes.length; i++) {
            if (boxes[i].expectedNetWeight >= boxes[i].expectedVolumeWeight) {
                boxesSum += Number(boxes[i].expectedNetWeight);
            } else {
                boxesSum += Number(boxes[i].expectedVolumeWeight);
            }
            setBoxesWeight(boxesSum);
        }
    }, [boxes]);

    const defaultBoxData = {
        expectedWidth: null,
        expectedDepth: null,
        expectedHeight: null,
        expectedVolumeWeight: null,
        expectedNetWeight: null,
        expectedPrice: null,
        koreanInvoice: null,
        koreanShippingCompany: null,
        userMemo: null,
    };

    const handlePrev = () => {
        dispatch(acitiveStepChange(activeStep - 1));
        setProductWeight(0);
        setBoxesWeight(0);
    };

    const handleWaringOpen = e => {
        e.preventDefault();
        const boxWeight = Number(boxesWeight);
        const porductWeight = Number(productsWeight);
        //TODO: 박스 무게와 물품 무게 비교하여 박스무게가 커야지만 다음단계로 이동하는 로직 구현해야함
        if (productsWeight <= boxesWeight) {
            // setAskPopup(true);
            handleWarningModal();
        } else {
            alert('입력하신 물품무게보다 박스무게가 작을 수 없습니다. \n 다시 입력해주세요.');
        }
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
    const handleAskOpen = e => {
        e.preventDefault();
        setAskPopup(true);
        setWarningPopup(false);
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

    /**
     * @summary 경고모달창
     */
    const handleWarningModal = () => {
        setWarningPopup(!warningPopop);
    };
    return (
        <>
            <form onSubmit={e => handleWaringOpen(e)}>
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
                    <Button disabled={stepIndex === 0} onClick={() => handlePrev()}>
                        이전
                    </Button>
                    <Button variant="contained" style={{ backgroundColor: '#0080ff', color: '#fff' }} type="submit">
                        {stepIndex === steps.length - 1 ? '접수하기' : '다음'}
                    </Button>
                </article>
            </form>
            <AskModal visible={AskPopop} close={handleAskClose} open={handleInvoiceOpen} cancel={handleAskCancel} />
            <InvoiceModal visible={InvoicePopup} close={handleInvoiceClose} open={handleClick} />
            <WaringModal visible={warningPopop} close={handleWarningModal} Ask={handleAskOpen} />
        </>
    );
};

export default Boxes;
