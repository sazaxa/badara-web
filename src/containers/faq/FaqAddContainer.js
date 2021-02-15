<<<<<<< HEAD
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { withRouter } from 'react-router-dom';
import FaqAddComponent from '../../components/faq/FaqAddComponent';
import { changeLoginPopup } from '../../modules/Popup';
import { writeFaq, changeField, initialize } from '../../modules/Write';

const FaqAddContainer = ({ close }) => {
  const dispatch = useDispatch();
  const { faqField } = useSelector((state) => state.write);
  const handleChange = (e) => {
    const { value, name } = e.target;
    dispatch(
      changeField({
        form: 'faqField',
        name,
        value,
      }),
    );
  };
  const onSubmit = async (event) => {
    event.preventDefault();
    const { title, content } = faqField;
    if (!title || !content) {
      alert('빈칸이 없어야 합니다.');
      return;
    }
    dispatch(writeFaq({ title, content }));
    await dispatch(changeLoginPopup(false));
  };
  return (
    <FaqAddComponent
      onSubmit={onSubmit}
      onChange={handleChange}
      close={close}
    />
  );
=======
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
>>>>>>> develop
};

export default withRouter(FaqAddContainer);
