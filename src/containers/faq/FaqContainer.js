import React, { useState, useEffect, shallowEqual } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { FaqComponent } from 'components';

import { initialState, getFaqListAction, getFaqInfoAction, deleteFaqAction } from 'store/faq';

const FaqContainer = () => {
    const dispatch = useDispatch();
    const { status: faqStatus, list: faqList, loginState, faqinfo } = useSelector(
        state => ({
            loginState: state.auth.loginState,
            status: state.faq.faqs.status,
            list: state.faq.faqs.list,
            faqinfo: state.faq.faqinfo,
        }),
        shallowEqual
    );

    const [faqLists, setFaqLists] = useState([]);

    const [addPopup, setAddPopup] = useState(false);
    const [updatePopup, setUpdatePopup] = useState(false);
    const [deletePopup, setDeletePopup] = useState(false);

    const [checkList, setCheckList] = useState([]);

    // 추가 팝업 처리.
    const handleAddPopup = e => {
        setAddPopup(e);
    };

    // 업데이트 팝업 처리. true 이면 faq 값을 가지고 온다.
    const handleUpdatePopup = e => {
        const { state, id } = e;
        if (state === true) {
            dispatch(getFaqInfoAction({ id: id }));
        } else {
            setUpdatePopup(false);
        }
    };

    // 삭제 팝업 처리.
    const handleDeletePopup = e => {
        if (checkList.length > 0) {
            setDeletePopup(e);
        } else {
            alert('삭제 할 것을 선택 하세요.');
        }
    };

    // 리스트에서 체크 했을때.
    const handleCheck = e => {
        const tempList = checkList;
        const id = e.target.value;
        if (checkList.indexOf(id) < 0) {
            setCheckList([...tempList, id]);
        } else {
            setCheckList(tempList.filter(e => e !== id));
        }
    };

    // 삭제 확인 클릭 했을때.
    const handleOnRemove = e => {
        dispatch(
            deleteFaqAction({
                faqs: checkList,
                callBack: () => {
                    dispatch(getFaqListAction());
                    // 삭제후 checkList state 초기화.
                    setCheckList([]);
                },
            })
        );
        handleDeletePopup(false);
    };

    // 수정 하기 클릭 했을때 데이터를 가지고 와서 store 가 업데이트 되면 수정 팝업을 띄운다.
    useEffect(() => {
        const checkUpdatePopup = checkData => {
            if (checkData !== initialState.faqinfo) {
                setUpdatePopup(true);
            }
        };

        checkUpdatePopup(faqinfo);
    }, [faqinfo]);

    // store 업데이트 -> local state 변경. (state에는 api에서 받은 값 그대로, local에서는 수정하기 위해)
    useEffect(() => {
        const setFaqList = list => {
            setFaqLists([]);
            setFaqLists(
                list.map(e => {
                    return {
                        id: e.id,
                        title: e.title,
                        content: e.content,
                    };
                })
            );
        };
        if (faqStatus === 'success') {
            setFaqList(faqList);
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [faqStatus]);

    // 최초 로딩시 목록 가지고 오기
    useEffect(() => {
        dispatch(getFaqListAction());
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);
    return (
        <>
            <FaqComponent
                FaqList={faqLists}
                LoginState={loginState}
                HandleAddPopup={e => handleAddPopup(e)}
                HandleUpdatePopup={e => handleUpdatePopup(e)}
                HandleDeletePopup={e => handleDeletePopup(e)}
                HandleCheck={e => handleCheck(e)}
                OnRemove={e => handleOnRemove(e)}
                AddPopup={addPopup}
                UpdatePopup={updatePopup}
                DeletePopup={deletePopup}
            />
        </>
    );
};

export default FaqContainer;
