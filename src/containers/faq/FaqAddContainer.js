import React, { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { withRouter } from 'react-router-dom';

import { FaqAddComponent } from 'components';

import { saveFaqAction, getFaqListAction } from 'store/faq';

const FaqAddContainer = ({ close }) => {
    const dispatch = useDispatch();

    const [editData, setEditData] = useState({
        title: '',
        content: '',
    });

    const onSubmit = e => {
        e.preventDefault();

        if (editData.title === '') {
            alert('제목을 입력해 주세요.');
            return;
        }

        if (editData.content === '') {
            alert('내용을 입력해 주세요.');
            return;
        }

        dispatch(
            saveFaqAction({
                title: editData.title,
                content: editData.content,
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
        setEditData({
            ...editData,
            [name]: value,
        });
    };

    useEffect(() => {
        return () => {
            setEditData({});
        };
    }, []);

    return (
        <FaqAddComponent
            onSubmit={onSubmit}
            onChange={e => handleChange(e)}
            close={e => close(e)}
            body={editData.content}
        />
    );
};

export default withRouter(FaqAddContainer);
