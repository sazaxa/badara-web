import React, { useEffect } from 'react';
import { shallowEqual, useDispatch, useSelector } from 'react-redux';
import { applyClearAction } from 'store/apply';
import { getMemberInfoAction } from 'store/member';
import { resetStep } from 'store/part';
import { Responsive } from 'styles/CommonStyles';
import ApplyMain from '../../../components/user/apply/Main';

const Main = () => {
    const { activeStep, logged } = useSelector(
        state => ({
            activeStep: state.part.activeStep,
            logged: state.member.loggedInfo.logged,
        }),
        shallowEqual
    );
    const accessToken = localStorage.getItem('accessToken');
    const dispatch = useDispatch();

    useEffect(() => {
        return () => {
            dispatch(resetStep());
            dispatch(applyClearAction());
        };
    }, []);
    useEffect(() => {
        if (accessToken) {
            if (logged) {
                dispatch(getMemberInfoAction(logged.id));
                console.log('호출됨');
            }
        } else {
            alert('로그인이 필요합니다.');
            window.location.href = '/';
        }
    }, [accessToken, logged]);
    if (!logged && !accessToken) return null;

    return (
        <Responsive>
            <ApplyMain activeStep={activeStep} />
        </Responsive>
    );
};

export default Main;
