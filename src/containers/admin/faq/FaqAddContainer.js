import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { withRouter } from 'react-router-dom';

import { FaqAddComponent } from 'components';

import { saveFaqAction, getFaqListAction, changeField, clearFaqInfoAction } from 'store/faq';

const FaqAddContainer = ({ close }) => {
    const dispatch = useDispatch();

    // const [editData, setEditData] = useState({
    //     title: '',
    //     content: '',
    // });
    const { title, content } = useSelector(state => state.faq.write);

    const onSubmit = e => {
        e.preventDefault();

        if (title === '') {
            alert('제목을 입력해 주세요.');
            return;
        }

        if (content === '') {
            alert('내용을 입력해 주세요.');
            return;
        }

        dispatch(
            saveFaqAction({
                title: title,
                content: content,
                callBack: e => {
                    const { result } = e;
                    if (result === true) {
                        alert('저장 했습니다.');
                        dispatch(getFaqListAction());
                        close();
                    } else {
                        alert('저장에 실패 했습니다.');
                    }
                },
            })
        );
    };
    const handleChange = e => {
        const { name, value } = e.target;
        dispatch(changeField({ key: name, value: value }));
    };

    useEffect(() => {
        return () => {
            dispatch(clearFaqInfoAction());
        };
    }, []);

    return <FaqAddComponent onSubmit={onSubmit} onChange={e => handleChange(e)} close={e => close(e)} body={content} />;
};

export default withRouter(FaqAddContainer);
