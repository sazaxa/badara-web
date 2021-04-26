import React, { useEffect, useRef } from 'react';
import Quill from 'quill';
import 'quill/dist/quill.snow.css';
import styled from 'styled-components';
import Responsive from './Responsive';
import { QuillWrapper } from 'styles/CommonStyles';

const EditorBlock = styled(Responsive)`
    height: 400px;
`;

const Editor = ({ body, onChangeField }) => {
    const quillElement = useRef(null);
    const quillInstance = useRef(null);

    useEffect(() => {
        quillInstance.current = new Quill(quillElement.current, {
            theme: 'snow',
            placeholder: '내용을 입력하세요...',
            modules: {
                toolbar: [
                    [{ header: '1' }, { header: '2' }],
                    ['bold', 'italic', 'underline', 'strike'],
                    [{ list: 'ordered' }, { list: 'bullet' }],
                    ['blockquote', 'code-block', 'link', 'image'],
                    [{ color: [] }, { background: [] }],
                ],
            },
        });
        // 텍스트 체인지 이벤트 핸들러 등록
        const quill = quillInstance.current;
        quill.on('text-change', (delta, oldDelta, source) => {
            if (source === 'user') {
                onChangeField({ key: 'content', value: quill.root.innerHTML });
            }
        });
    }, [onChangeField]);

    const mounted = useRef(false);
    useEffect(() => {
        if (mounted.current) return;
        mounted.current = true;
        quillInstance.current.root.innerHTML = body;
    }, [body]);

    return (
        <EditorBlock>
            <QuillWrapper>
                <div ref={quillElement} />
            </QuillWrapper>
        </EditorBlock>
    );
};

export default Editor;
