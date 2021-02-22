import { SupportConponent } from 'components';
import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getFaqListAction } from 'store/faq';

const SupportContainer = () => {
    const { list } = useSelector(state => state.faq.faqs);
    const dispatch = useDispatch();

    // 최초 로딩시 목록 가지고 오기
    useEffect(() => {
        dispatch(getFaqListAction());
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    // Accodian HandleChange value.
    const [expanded, setExpanded] = useState('panel1');

    // Accodian HandleChange
    const handleChange = panel => (event, newExpanded) => {
        setExpanded(newExpanded ? panel : false);
    };
    return <SupportConponent FaqLists={list} Expanded={expanded} HandleChange={handleChange} />;
};

export default SupportContainer;
