import { CashComponent } from 'components';
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router';
import { loginPopupAction } from 'store/auth';
import { getMemberOrderAction, getMemberPointHistoryAction } from 'store/member';

const CashContainer = () => {
    const dispatch = useDispatch();
    const history = useHistory();
    const accessToken = localStorage.getItem('accessToken');
    const { logged, pointHistory } = useSelector(state => ({
        logged: state.member.loggedInfo.logged,
        pointHistory: state.member.loggedInfo.pointHistory,
    }));
    console.log(logged);
    useEffect(() => {
        if (logged) {
            dispatch(getMemberPointHistoryAction(logged.id));
        }
    }, [logged]);
    useEffect(() => {
        if (accessToken) {
            if (logged) {
                dispatch(getMemberOrderAction(logged.id));
            }
        } else {
            alert('로그인이 필요합니다.');
            // window.location.href = '/';
            history.push('/');
            dispatch(loginPopupAction(true));
        }
    }, [accessToken, logged]);
    if (!logged && !accessToken) return null;
    return <CashComponent user={logged} history={pointHistory} />;
};

export default CashContainer;
