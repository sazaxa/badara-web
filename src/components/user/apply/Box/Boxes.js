import React, { useEffect, useState } from 'react';
import { shallowEqual, useDispatch, useSelector } from 'react-redux';
import { acitiveStepChange } from 'store/part';
import { boxDataAddAction, boxDataRemoveAction } from 'store/apply';
import Button from '@material-ui/core/Button';
import Box from './Box';
import AskModal from './AskModal';
import InvoiceModal from './InvoiceModal';
import WaringModal from './WarningModal';
import Modal from '@material-ui/core/Modal';
import { makeStyles } from '@material-ui/core/styles';
import Backdrop from '@material-ui/core/Backdrop';

const useStyles = makeStyles(theme => ({
    modal: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
    },
    paper: {
        backgroundColor: theme.palette.background.paper,
        // border: '2px solid #000',
        boxShadow: theme.shadows[2],
        borderRadius: '5px',
        padding: theme.spacing(3, 4, 3),
        textAlign: 'center',
    },
    content: {
        maxHeight: '380px',
        padding: '0.5rem',
        overflowY: 'auto',
        marginBottom: '10px',
    },
    title: {
        fontSize: '1.4rem',
        letterSpacing: '-1.5px',
        color: 'red',
        marginBottom: '1rem',
    },
    description: {
        marginBottom: '0.5rem',
        letterSpacing: '-1.5px',
        lineHeight: '1.5',
    },
    lastTitle: {
        marginBottom: '0.5rem',
        textDecoration: 'underline',
        fontWeight: '600',
        fontSize: '1.2rem',
        letterSpacing: '-1.5px',
        lineHeight: '1.5',
    },
}));

const Boxes = ({ stepIndex, steps }) => {
    const dispatch = useDispatch();
    const { activeStep, boxes } = useSelector(
        state => ({
            activeStep: state.part.activeStep,
            boxes: state.apply.apply.boxes,
        }),
        shallowEqual
    );
    const classes = useStyles();
    const [AskPopop, setAskPopup] = useState(false);
    const [warningPopop, setWarningPopup] = useState(false);
    const [boxesWeight, setBoxesWeight] = useState(0);
    const [InvoicePopup, setInvoicePopup] = useState(false);
    const [informainPopup, setInfomatinPopup] = useState(true);
    const [btnActive, setBtnAction] = useState(false);
    const [seconds, setSeconds] = useState(3);

    // boxes에 총 무게를 구한다.
    useEffect(() => {
        let boxesSum = 0;
        for (let i = 0; i < boxes.length; i++) {
            if (boxes[i].expectedNetWeight >= boxes[i].expectedVolumeWeight) {
                boxesSum += Number(boxes[i].expectedNetWeight);
            } else {
                boxesSum += Number(boxes[i].expectedVolumeWeight);
            }
            setBoxesWeight(boxesSum);
        }
    }, [boxes]);

    useEffect(() => {
        setTimeout(() => {
            setBtnAction(true);
        }, 3000);
    }, []);

    useEffect(() => {
        const countdown = setInterval(() => {
            if (parseInt(seconds) > 0) {
                setSeconds(parseInt(seconds) - 1);
            }
        }, 1000);
        return () => clearInterval(countdown);
    }, [seconds]);

    const defaultBoxData = {
        type: '박스',
        expectedWidth: null,
        expectedDepth: null,
        expectedHeight: null,
        expectedVolumeWeight: null,
        expectedNetWeight: null,
        expectedPrice: null,
        koreanInvoice: null,
        koreanShippingCompany: null,
        userMemo: null,
        products: [
            {
                productDetail: null,
                quantity: null,
                price: null,
            },
        ],
    };

    const handlePrev = () => {
        dispatch(acitiveStepChange(activeStep - 1));
        setBoxesWeight(0);
    };

    const handleWaringOpen = e => {
        e.preventDefault();
        const boxWeight = Number(boxesWeight);
        //TODO: 박스 무게와 물품 무게 비교하여 박스무게가 커야지만 다음단계로 이동하는 로직 구현해야함
        //FIXME: 물품 무게 삭제로, 0이상인지만 판단 2021-04-23
        if (boxWeight > 0) {
            // setAskPopup(true);
            handleWarningModal();
        } else {
            alert('박스무게가 0보다 작을수 없습니다. \n 다시 입력해주세요.');
        }
    };
    const handleAskClose = e => {
        e.preventDefault();
        setAskPopup(false);
        dispatch(acitiveStepChange(activeStep + 1));
    };
    const handleAskCancel = e => {
        e.preventDefault();
        setAskPopup(false);
    };
    const handleAskOpen = e => {
        e.preventDefault();
        setAskPopup(true);
        setWarningPopup(false);
    };
    const handleInvoiceOpen = e => {
        e.preventDefault();
        setInvoicePopup(true);
        setAskPopup(false);
    };
    const handleInvoiceClose = e => {
        e.preventDefault();
        setInvoicePopup(false);
    };
    const handleClick = e => {
        e.preventDefault();
        //FIXME:2021-03-25 Submit 함수로 필수값을 체크하고 필수값이 입력이 안되면 넘어가지 않도록 조치

        dispatch(acitiveStepChange(activeStep + 1));
        setInvoicePopup(false);
    };

    const BoxAdd = () => {
        dispatch(boxDataAddAction({ box: defaultBoxData }));
    };

    const boxRemove = index => {
        dispatch(boxDataRemoveAction({ index: index }));
    };

    const handleInfomationPopup = () => {
        setInfomatinPopup(!informainPopup);
    };

    /**
     * @summary 경고모달창
     */
    const handleWarningModal = () => {
        setWarningPopup(!warningPopop);
    };
    return (
        <>
            <Modal
                aria-labelledby="spring-modal-title"
                aria-describedby="spring-modal-description"
                className={classes.modal}
                open={informainPopup}
                closeAfterTransition
                BackdropComponent={Backdrop}
                BackdropProps={{
                    timeout: 500,
                }}
            >
                <div className={classes.paper}>
                    <div className={classes.content}>
                        <h2 className={classes.title}>※바다라 배송금지 품목※</h2>
                        <p className={classes.description} style={{ marginBottom: '1rem' }}>
                            아래 내용은 '<strong style={{ color: 'red' }}>일반적으로</strong>' 배송이 불가능한 제품들과
                            국가들입니다.
                        </p>
                        {/* <h2 className={classes.title}>※ 식품 발송 주의 사항</h2> */}
                        <p className={classes.description}>
                            <strong style={{ color: 'red' }}>이탈리아 ,독일, 영국, 프랑스</strong>: 향수, 알콜성 액체,
                            배터리 제품, 화기성 제품 (위험품목), 음식물(밀, 키트, 농수산물), 액체류
                        </p>
                        <p className={classes.description}>
                            <strong style={{ color: 'red' }}>스페인</strong>: 알콜성 액체, 배터리 제품, 화기성 제품
                            (위험품목), 건강 제품(로얄젤리, 홍삼), 의약품, 음식물(밀 키트, 농수산물), 분유, 동식물 관련
                            제품, 화석 <br /> ※예술품 (수공예, 페인팅): 50년 이상 되지 않았다는 것을 증명할 문서
                            (ex:작가의 ID 복사본)
                        </p>
                        <p className={classes.description}>
                            <strong style={{ color: 'red' }}>미국</strong>: 외장형 배터리(배터리 포함 제품 2개 이상 배송
                            불가능), 화기성 제품(위험품목), 음식물(밀 키트, 농수산물), 분유, 액체류
                        </p>
                        <p className={classes.description}>
                            <strong style={{ color: 'red' }}>중국</strong>: 알콜성 액체, 향수, 배터리 제품, 화기성
                            제품(위험품목), 의약품, 건강 제품, 비타민, 음식물(밀 키트, 농수산물), 액체류
                        </p>
                        <p className={classes.description}>
                            <strong style={{ color: 'red' }}>싱가포르</strong>: 알콜성 액체, 향수, 배터리 제품, 화기성
                            제품(위험품목), 오일, 액체류, 음식물(밀 키트, 농수산물), 분유, 귀금속류(금,은 제품)
                        </p>
                        <p className={classes.description}>
                            <strong style={{ color: 'red' }}>호주</strong>: 향수, 알콜성 액체, 배터리 제품, 화기성
                            제품(위험품목), 음식물(밀 키트, 농수산물), 분유, 액체류
                        </p>
                        <p className={classes.description}>
                            <strong style={{ color: 'red' }}>일본</strong>: 화기성 제품(위험품목), 알콜성 액체,
                            음식물(밀 키트, 농수산물)
                        </p>
                        <p className={classes.lastTitle}>
                            ※자세한 설명을 원하시면 바다라 플러스 친구로 언제든지 문의 주세요!※
                        </p>
                    </div>

                    {/* <img src="https://image.badara.kr/popup/notice.png" alt="information" /> */}
                    <div className="btnWrap">
                        <button
                            type="button"
                            onClick={() => handleInfomationPopup()}
                            disabled={btnActive ? false : true}
                        >
                            닫기
                        </button>
                        <p>(약 {seconds}초 뒤 닫기가 가능합니다.)</p>
                    </div>
                </div>
            </Modal>
            <form onSubmit={e => handleWaringOpen(e)}>
                {boxes?.map((v, index) => (
                    <Box
                        stepIndex={stepIndex}
                        steps={steps}
                        box={v}
                        // handlePrev={handlePrev}
                        // handleClick={handleClick}
                        index={index}
                        Remove={boxRemove}
                        key={index}
                    />
                ))}
                <Button variant="outlined" color="primary" onClick={BoxAdd}>
                    다른 발송품 추가하기
                </Button>
                <article
                    style={{
                        display: 'flex',
                        flexWrap: 'wrap',
                        justifyContent: 'center',
                        alignItems: 'center',
                        margin: '20px 0',
                    }}
                >
                    <Button disabled={stepIndex === 0} onClick={() => handlePrev()}>
                        이전
                    </Button>
                    <Button variant="contained" style={{ backgroundColor: '#0080ff', color: '#fff' }} type="submit">
                        {stepIndex === steps.length - 1 ? '접수하기' : '다음'}
                    </Button>
                </article>
            </form>
            <AskModal visible={AskPopop} close={handleAskClose} open={handleInvoiceOpen} cancel={handleAskCancel} />
            <InvoiceModal visible={InvoicePopup} close={handleInvoiceClose} open={handleClick} />
            <WaringModal visible={warningPopop} close={handleWarningModal} Ask={handleAskOpen} />
        </>
    );
};

export default Boxes;
