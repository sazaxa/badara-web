import React, { useEffect } from 'react';
import { withRouter } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';

import { FaqUpdateComponent } from 'components';
import { clearFaqInfoAction, changeFaqInfoAction, updateFaqInfoAction, getFaqListAction, changeField } from 'store/faq';

const FaqUpdateContainer = ({ close }) => {
    const dispatch = useDispatch();

    // store -> faq 1개의 정보 불러오기
    const { faqinfo } = useSelector(state => state.faq);

    const handleChange = e => {
        const { value, name } = e.target;
        dispatch(changeField({ key: name, value: value }));
    };

    // 수정하기 버튼을 눌렀을 때.
    const onSubmit = event => {
        event.preventDefault();
        dispatch(
            updateFaqInfoAction({
                callBack: e => {
                    const { result } = e;
                    if (result === true) {
                        alert('저장 성공 했습니다.');
                        dispatch(getFaqListAction());
                        close();
                    } else {
                        alert('처리중 문제가 발생했습니다.');
                    }
                },
            })
        );
    };
    // 컴포넌트가 unmount 됐을 때.
    useEffect(() => {
        return () => {
            dispatch(clearFaqInfoAction());
        };
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    return (
        <FaqUpdateComponent
            onSubmit={e => onSubmit(e)}
            onChange={e => handleChange(e)}
            close={close}
            FaqInfo={faqinfo}
        />
    );
};

export default withRouter(FaqUpdateContainer);
