import { CashComponent } from 'components';
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getMemberPointHistoryAction } from 'store/member';

const CashContainer = () => {
    const dispatch = useDispatch();
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
    return <CashComponent user={logged} history={pointHistory} />;
};

export default CashContainer;
