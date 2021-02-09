import React, { useState } from 'react';
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
import { useDispatch, useSelector } from 'react-redux';
import Divider from '@material-ui/core/Divider';
import AccordionActions from '@material-ui/core/AccordionActions';
import FaqAddComponent from './FaqAddComponent';
import FaqAddContainer from '../../containers/faq/FaqAddContainer';
import FaqDelComponent from './FaqDelComponent';
import Responsive from '../common/Responsive';
import { changeDeletePopup, changeLoginPopup } from '../../modules/Popup';
import FaqDelContainer from '../../containers/faq/FaqDelContainer';
import { readFaq } from '../../modules/Faq';

const useStyles = makeStyles({
  root: {
    width: '100%',
    overflow: 'hidden',
  },
});

const AdminUserWrap = styled.article`
  width: 100%;
  height: auto;
  padding: 30px;
  box-sizing: border-box;
  button.btnFirst {
    margin-bottom: 20px;
    margin-right: 20px;
  }
  button.add {
    margin-bottom: 20px;
    background: #2191f3;
    opacity: 1;
    &:hover {
      background: #2191f3;
      opacity: 0.8;
    }
  }
`;

const FaqComponent = ({ faq, location, close, popup, open, deletePopup }) => {
  const classes = useStyles();
  const dispatch = useDispatch();
  //  체크한 id값 state 값으로 저장
  const [checked, setChecked] = useState([]);
  const [update, setUpdate] = useState(false);
  const { pathname } = location;
  //  체크한 faq id 체크
  const checkedId = (e, id) => {
    if (e.target.checked === true) {
      setChecked([...checked, id]);
    } else if (e.target.checked === false) {
      setChecked(checked.filter((v) => v !== id));
    }
  };
  // 삭제 모달창 노출여부
  const delModalClick = () => {
    if (checked.length === 0) {
      alert('삭제할 것을 고르시오');
    } else {
      dispatch(changeDeletePopup(true));
    }
  };

  // 수정하기 모달창 노출여부

  const updateModalClick = (id) => {
    console.log(typeof id);

    dispatch(changeLoginPopup(true));
    dispatch(readFaq(id));
    setUpdate(true);
  };

  return (
    <Responsive>
      <div className={classes.root}>
        {popup ? <FaqAddContainer close={close} update={update} /> : null}
        <AdminUserWrap>
          {/* 관리자 페이지 버튼 */}
          {pathname === '/admin/FAQ' ? (
            <>
              <Button
                variant="contained"
                color="primary"
                onClick={open}
                className="btnFirst add"
              >
                추가하기
              </Button>
              <Button
                variant="contained"
                color="secondary"
                className="btnFirst"
                onClick={delModalClick}
              >
                삭제하기
              </Button>
            </>
          ) : null}
          {/* 삭제 모달창 */}
          <FaqDelContainer
            visible={deletePopup}
            checked={checked}
            close={delModalClick}
          />
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
                  control={<Checkbox onChange={(e) => checkedId(e, faqs.id)} />}
                  label={faqs.title}
                />
              </AccordionSummary>
              <AccordionDetails>
                <Typography color="textSecondary">{faqs.content}</Typography>
              </AccordionDetails>
              <Divider />
              <AccordionActions>
                <Button
                  size="small"
                  color="primary"
                  // eslint-disable-next-line radix
                  onClick={() => updateModalClick(faqs.id)}
                >
                  수정하기
                </Button>
              </AccordionActions>
            </Accordion>
          ))}
        </AdminUserWrap>
      </div>
    </Responsive>
  );
};

export default withRouter(FaqComponent);
