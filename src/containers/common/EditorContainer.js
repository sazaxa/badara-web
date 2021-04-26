import Editor from 'components/common/Editor';
import React, { useCallback, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { changeField, clearFaqInfoAction } from 'store/faq';

const EditorContainer = () => {
    const dispatch = useDispatch();
    const { content } = useSelector(({ faq }) => ({
        content: faq.write.content,
    }));
    const onChangeField = useCallback(payload => dispatch(changeField(payload)), [dispatch]);
    useEffect(() => {
        return () => {
            dispatch(clearFaqInfoAction());
        };
    }, [dispatch]);
    return <Editor onChangeField={onChangeField} body={content} />;
};

export default EditorContainer;
