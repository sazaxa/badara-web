import React from 'react';
import { shallowEqual, useDispatch, useSelector } from 'react-redux';
import { acitiveStepChange } from 'store/part';
import { boxDataAddAction, boxDataRemoveAction } from 'store/apply';
import Button from '@material-ui/core/Button';
import Box from './Box';

const Boxes = ({ stepIndex, steps }) => {
    const dispatch = useDispatch();
    const { activeStep, boxes } = useSelector(
        state => ({
            activeStep: state.part.activeStep,
            defaultProduct: state.product.defaultProduct,
            boxes: state.apply.apply.boxes,
        }),
        shallowEqual
    );

    const defaultBoxData = {
        expectedWitdh: null,
        expectedDepth: null,
        expectedHeight: null,
        expectedVolumeWeight: null,
        expectedNetWeight: null,
        expectedPrice: null,
        koreanInvoitce: null,
        koreanShippingCompany: null,
    };

    const handlePrev = () => {
        dispatch(acitiveStepChange(activeStep - 1));
    };
    const handleClick = e => {
        e.preventDefault();
        //TODO: 클릭이벤트 생성해야함.
        //FIXME:2021-03-25 Submit 함수로 필수값을 체크하고 필수값이 입력이 안되면 넘어가지 않도록 조치
        dispatch(acitiveStepChange(activeStep + 1));
    };

    const BoxAdd = () => {
        dispatch(boxDataAddAction({ box: defaultBoxData }));
        console.log(defaultBoxData);
    };

    const boxRemove = index => {
        dispatch(boxDataRemoveAction({ index: index }));
    };
    return (
        <>
            <form onSubmit={handleClick}>
                {boxes?.map((v, index) => (
                    <Box
                        stepIndex={stepIndex}
                        steps={steps}
                        box={v}
                        // handlePrev={handlePrev}
                        // handleClick={handleClick}
                        index={index}
                        Remove={boxRemove}
                    />
                ))}
                <button onClick={BoxAdd}>추가</button>
                <Button disabled={stepIndex === 0} onClick={handlePrev}>
                    Back
                </Button>
                <Button variant="contained" color="primary" type="submit">
                    {stepIndex === steps.length - 1 ? 'Finish' : 'Next'}
                </Button>
            </form>
        </>
    );
};

export default Boxes;
