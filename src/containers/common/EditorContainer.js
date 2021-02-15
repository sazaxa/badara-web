import React from 'react';
import Editor from '../../components/common/Editor';

const EditorContainer = ({ onChange, body }) => {
    return <Editor onChangeField={onChange} body={body} />;
};

export default EditorContainer;
