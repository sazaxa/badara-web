import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import Accordion from '@material-ui/core/Accordion';
import MuiAccordionSummary from '@material-ui/core/AccordionSummary';
import MuiAccordionDetails from '@material-ui/core/AccordionDetails';
import Typography from '@material-ui/core/Typography';
import { SupportContents, SupportWrap } from 'styles/SupportStyles';
import logo from '../../../styles/img/logo.png';

const AccordionSummary = withStyles({
    root: {
        backgroundColor: '#0049ff',
        borderBottom: '1px solid #fff',
        borderRadius: '10px 10px 0 0',
        color: '#fff',
        fontWeight: '600',
        fontSize: '24px',
        marginBottom: -1,
        minHeight: 56,
        '&$expanded': {
            minHeight: 56,
        },
    },
    content: {
        '&$expanded': {
            margin: '12px 0',
        },
    },
    expanded: {},
})(MuiAccordionSummary);

const AccordionDetails = withStyles(theme => ({
    root: {
        padding: theme.spacing(2),
    },
}))(MuiAccordionDetails);
const SupportComponent = ({ FaqLists, Expanded, HandleChange }) => {
    return (
        <SupportWrap>
            <SupportContents>
                <h2>
                    <img src={logo} alt="logo" />
                    <span>자주하는 질문</span>
                </h2>
                {FaqLists.length > 0 ? (
                    FaqLists.map(faq => {
                        return (
                            <Accordion
                                key={faq.id}
                                square
                                expanded={Expanded === 'panel' + faq.id}
                                onChange={HandleChange('panel' + faq.id)}
                            >
                                <AccordionSummary aria-controls="panel1d-content" id="panel1d-header">
                                    <Typography id="faqTitle">{faq.title}</Typography>
                                </AccordionSummary>
                                <AccordionDetails>
                                    <Typography id="faqContent">{faq.content}</Typography>
                                </AccordionDetails>
                            </Accordion>
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
