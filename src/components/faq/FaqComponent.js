import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Accordion from '@material-ui/core/Accordion';
import AccordionSummary from '@material-ui/core/AccordionSummary';
import AccordionDetails from '@material-ui/core/AccordionDetails';
import Checkbox from '@material-ui/core/Checkbox';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Typography from '@material-ui/core/Typography';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import styled from 'styled-components';
import { withRouter } from 'react-router-dom';
import Button from '@material-ui/core/Button';
import FaqAddComponent from './FaqAddComponent';

const useStyles = makeStyles({
  root: {
    width: '100%',
    overflow: 'hidden',
  },
});

const AdminUserWrap = styled.article`
  width: 85vw;
  height: 100vh;
  background: #f2f2f2;
  padding: 30px;
  box-sizing: border-box;

  button {
    margin-bottom: 20px;
    background: #2191f3;
    opacity: 0.5;
    &:hover {
      background: #2191f3;
      opacity: 1;
    }
  }
`;

const FaqComponent = ({ faq, location, close, popup, open }) => {
  const classes = useStyles();
  const { pathname } = location;
  return (
    <div className={classes.root}>
      {popup ? <FaqAddComponent close={close} /> : null}
      <AdminUserWrap>
        {/* 관리자 페이지 버튼 */}
        {pathname === '/admin/FAQ' ? (
          <Button variant="contained" color="primary" onClick={open}>
            추가하기
          </Button>
        ) : null}
        {faq.map((faqs) => (
          <Accordion key={faqs.id}>
            <AccordionSummary
              expandIcon={<ExpandMoreIcon />}
              aria-label="Expand"
              aria-controls="additional-actions1-content"
              id="additional-actions1-header"
            >
              <FormControlLabel
                aria-label="Acknowledge"
                onClick={(event) => event.stopPropagation()}
                onFocus={(event) => event.stopPropagation()}
                control={<Checkbox />}
                label={faqs.title}
              />
            </AccordionSummary>
            <AccordionDetails>
              <Typography color="textSecondary">{faqs.content}</Typography>
            </AccordionDetails>
          </Accordion>
        ))}
      </AdminUserWrap>
    </div>
  );
};

export default withRouter(FaqComponent);
