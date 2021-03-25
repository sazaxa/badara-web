import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { applyClearAction } from 'store/apply';
import { resetStep } from 'store/part';
import { Responsive } from 'styles/CommonStyles';
import ApplyMain from '../../../components/user/apply/Main';

const Main = () => {
    const { activeStep } = useSelector(state => state.part);
    const dispatch = useDispatch();

    useEffect(() => {
        return () => {
            dispatch(resetStep());
            dispatch(applyClearAction());
        };
    }, []);

    return (
        <Responsive>
            <ApplyMain activeStep={activeStep} />
        </Responsive>
    );
};

export default Main;
