import { ApplyListComponent } from 'components';
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { applyListInsertAction, deleteApplyInfoAction } from 'store/apply';

const ApplyListContainer = ({ history }) => {
    const dispatch = useDispatch();
    const { list } = useSelector(state => state.order.apply);
    useEffect(() => {
        if (list.length === 0) {
            history.push('/');
        }
    }, [list, history]);

    const handleDeleteClick = i => {
        dispatch(deleteApplyInfoAction(i));
    };
    const handleInsertClick = () => {
        dispatch(applyListInsertAction({ list: list }));
        alert('신청완료 되었습니다.');
    };
    return (
        <ApplyListComponent
            ApplyList={list}
            HandleDeleteClick={i => handleDeleteClick(i)}
            HandleInsertClick={() => handleInsertClick()}
        />
    );
};

export default withRouter(ApplyListContainer);
