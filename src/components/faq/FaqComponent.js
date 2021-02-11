import React from 'react';
import { withRouter } from 'react-router-dom';

import { makeStyles } from '@material-ui/core/styles';

import Button from '@material-ui/core/Button';
import Divider from '@material-ui/core/Divider';
import Checkbox from '@material-ui/core/Checkbox';
import Accordion from '@material-ui/core/Accordion';
import Typography from '@material-ui/core/Typography';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import AccordionSummary from '@material-ui/core/AccordionSummary';
import AccordionDetails from '@material-ui/core/AccordionDetails';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import AccordionActions from '@material-ui/core/AccordionActions';

import { FaqAddContainer, FaqUpdateContainer, FaqDelContainer } from 'containers';
import { Responsive } from 'components';
import { AdminUserWrap } from 'styles/FaqStyles';

const useStyles = makeStyles({
    root: {
        width: '100%',
        overflow: 'hidden',
    },
});

const FaqComponent = ({
    LoginState,
    FaqList,
    HandleAddPopup,
    HandleUpdatePopup,
    AddPopup,
    UpdatePopup,
    HandleCheck,
    HandleDeletePopup,
    DeletePopup,
    OnRemove,
}) => {
    const classes = useStyles();

    return (
        <Responsive>
            <div className={classes.root}>
                {AddPopup === true && <FaqAddContainer close={() => HandleAddPopup(false)} />}
                {UpdatePopup === true && <FaqUpdateContainer close={() => HandleUpdatePopup({ state: false })} />}
                {DeletePopup === true && (
                    <FaqDelContainer close={() => HandleDeletePopup(false)} onRemove={() => OnRemove()} />
                )}
                <AdminUserWrap>
                    {/* 관리자 페이지 버튼 */}
                    {LoginState === true && (
                        <>
                            <Button
                                variant="contained"
                                color="primary"
                                onClick={() => HandleAddPopup(true)}
                                className="btnFirst add"
                            >
                                추가하기
                            </Button>
                            <Button
                                variant="contained"
                                color="secondary"
                                className="btnFirst"
                                onClick={e => HandleDeletePopup(true)}
                            >
                                삭제하기
                            </Button>
                        </>
                    )}

                    {FaqList &&
                        FaqList.map(element => {
                            return (
                                <Accordion key={element.id}>
                                    <AccordionSummary
                                        expandIcon={<ExpandMoreIcon />}
                                        aria-label="Expand"
                                        aria-controls="additional-actions1-content"
                                        id="additional-actions1-header"
                                    >
                                        <FormControlLabel
                                            aria-label="Acknowledge"
                                            onClick={event => event.stopPropagation()}
                                            onFocus={event => event.stopPropagation()}
                                            control={<Checkbox value={element.id} onChange={e => HandleCheck(e)} />}
                                            label={element.title}
                                        />
                                    </AccordionSummary>
                                    <AccordionDetails>
                                        <Typography color="textSecondary">{element.content}</Typography>
                                    </AccordionDetails>
                                    <Divider />
                                    <AccordionActions>
                                        <Button
                                            size="small"
                                            color="primary"
                                            onClick={() => HandleUpdatePopup({ state: true, id: element.id })}
                                        >
                                            수정하기
                                        </Button>
                                    </AccordionActions>
                                </Accordion>
                            );
                        })}
                </AdminUserWrap>
            </div>
        </Responsive>
    );
};

export default withRouter(FaqComponent);
