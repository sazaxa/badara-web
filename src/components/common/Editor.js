import React, { useEffect, useRef } from 'react';
import Quill from 'quill';
import 'quill/dist/quill.snow.css';
import styled from 'styled-components';
import Responsive from './Responsive';
import { QuillWrapper } from 'styles/CommonStyles';
import ImageUploader from 'quill-image-uploader';

// #2 register module
Quill.register('modules/imageUploader', ImageUploader);

const EditorBlock = styled(Responsive)`
    min-height: 400px;
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
                    ['blockquote', 'code-block', 'link', 'image', 'video'],
                    [{ color: [] }, { background: [] }],
                ],
                imageUploader: {
                    upload: file => {
                        return new Promise((resolve, reject) => {
                            const formData = new FormData();
                            formData.append('upload', file);

                            fetch('http://localhost:3000/api/v1/upload', {
                                method: 'POST',
                                body: formData,
                            })
                                .then(response => response.json())
                                .then(result => {
                                    console.log(result);
                                    resolve(result.file);
                                })
                                .catch(error => {
                                    reject('Upload failed');
                                    console.error('Error:', error);
                                });
                        });
                    },
                },
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
