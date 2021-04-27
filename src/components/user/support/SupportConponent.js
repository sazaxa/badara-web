import React from 'react';
import { SupportContents, SupportWrap } from 'styles/SupportStyles';
import logo from '../../../styles/img/logo.png';
import { Link } from 'react-router-dom';

const SupportComponent = ({ FaqLists, Expanded, HandleChange }) => {
    return (
        <SupportWrap>
            <SupportContents>
                <div className="supportHeader">
                    <img src={logo} alt="logo" />
                    <span>자주하는 질문</span>
                </div>
                {FaqLists.length > 0 ? (
                    FaqLists.map((faq, index) => {
                        return (
                            <Link to={`/support/${faq.id}`}>
                                <div className="faq">
                                    <span>{index + 1}.</span>
                                    <p dangerouslySetInnerHTML={{ __html: faq.title }} />
                                </div>
                            </Link>
                        );
                    })
                ) : (
                    <article className="faqNull">등록된 FAQ가 없습니다.</article>
                )}
            </SupportContents>
        </SupportWrap>
    );
};

export default SupportComponent;
