import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { withRouter } from 'react-router';
import { Link } from 'react-router-dom';
import { getFaqInfoAction } from 'store/faq';
import { SupportContents, SupportWrap } from 'styles/SupportStyles';

const Detail = ({ match }) => {
    const dispatch = useDispatch();
    const { faqinfo } = useSelector(state => state.faq);

    useEffect(() => {
        dispatch(getFaqInfoAction({ id: match.params.id }));
    }, []);
    if (faqinfo.id === null)
        return (
            <SupportWrap>
                <SupportContents>
                    <article className="faqNull">등록된 FAQ가 없습니다.</article>
                </SupportContents>
            </SupportWrap>
        );
    return (
        <SupportWrap>
            <SupportContents>
                <div className="title">
                    <h3>{faqinfo.title}</h3>
                    <Link to="/support">목록으로</Link>
                </div>
                <div className="content">
                    <p dangerouslySetInnerHTML={{ __html: faqinfo.content }} />
                </div>
            </SupportContents>
        </SupportWrap>
    );
};

export default withRouter(Detail);
