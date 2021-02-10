import React, { useCallback, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Editor from '../../components/common/Editor';
import { initialize, changeField } from '../../modules/Write';

const EditorContainer = () => {
  const dispatch = useDispatch();
  const { faqFiend } = useSelector((state) => state.write);
  const { content } = faqFiend;
  const onChangeField = useCallback(
    (payload) => dispatch(changeField(payload)),
    [dispatch],
  );
  useEffect(
    () => () => {
      dispatch(initialize());
    },
    [dispatch],
  );
  return <Editor onChangeField={onChangeField} body={content} />;
};

export default EditorContainer;
