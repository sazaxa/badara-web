import React, { useEffect, useState } from 'react';
import { shallowEqual, useDispatch, useSelector } from 'react-redux';
import { acitiveStepChange } from 'store/part';
import { productDataAddAction, productDataRemoveAction } from 'store/apply';
import Button from '@material-ui/core/Button';
import Product from './Product';
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
    },
    title: {
        fontSize: '1.2rem',
        letterSpacing: '-1.5px',
        color: 'red',
        marginBottom: '1rem',
    },
    description: {
        marginBottom: '0.5rem',
        letterSpacing: '-1.5px',
        lineHeight: '1.5',
    },
}));

const Products = ({ stepIndex, steps }) => {
    const [informainPopup, setInfomatinPopup] = useState(true);
    const [btnActive, setBtnAction] = useState(false);
    const [seconds, setSeconds] = useState(3);
    const classes = useStyles();
    const dispatch = useDispatch();
    const { activeStep, products: applyProduct } = useSelector(
        state => ({
            activeStep: state.part.activeStep,
            products: state.apply.apply.products,
        }),
        shallowEqual
    );

    const defaultProduct = {
        productDetail: null,
        quantity: null,
        price: null,
    };

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

    const handlePrev = () => {
        dispatch(acitiveStepChange(activeStep - 1));
    };
    const handleClick = e => {
        e.preventDefault();
        //TODO: 클릭이벤트 생성해야함.
        //FIXME:2021-03-25 Submit 함수로 필수값을 체크하고 필수값이 입력이 안되면 넘어가지 않도록 조치
        //TODO:갯수 음수가 안들어 오도록 구현
        for (let i = 0; i < applyProduct.length; i++) {
            const quantity = Number(applyProduct[i].quantity);
            const price = Number(applyProduct[i].price);
            if (quantity > 0 && price > 0) {
                if (Number.isInteger(quantity) && Number.isInteger(price)) {
                    dispatch(acitiveStepChange(activeStep + 1));
                } else {
                    alert('금액에 소수점을 넣을수 없습니다.');
                }
            } else {
                alert('해당 정보에 맞게 다시 입력해주세요.\n다시 입력하세요.');
            }
        }
    };
    const handleInfomationPopup = () => {
        setInfomatinPopup(!informainPopup);
    };

    const ProductAdd = () => {
        dispatch(productDataAddAction({ product: defaultProduct }));
        console.log(defaultProduct);
    };

    const ProductRemove = index => {
        dispatch(productDataRemoveAction({ index: index }));
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
                    <h2 className={classes.title}>※ 바다라 배송금지 품목</h2>
                    <p className={classes.description} style={{ marginBottom: '1rem' }}>
                        석면, 총화기류, 모피, 보석류, 동/식물, 국가별 금지 품목
                    </p>
                    <h2 className={classes.title}>※ 식품 발송 주의 사항</h2>
                    <p className={classes.description}>
                        - 식품에 동물 성분이 포함된 것이 확인되면 현지 세관에서 반송할 수 있습니다.
                    </p>
                    <p>
                        이 경우 반송비가 청구될 수 있으며, <br /> 상품 재발송을 위해서는 추가 비용을 결제해주셔야
                        합니다.
                    </p>
                    <p className={classes.description}>- 국가별로 발송 가능한 식품은 상이합니다.</p>
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
            <form onSubmit={handleClick}>
                {applyProduct?.map((v, index) => (
                    <Product
                        stepIndex={stepIndex}
                        steps={steps}
                        product={v}
                        // handlePrev={handlePrev}
                        // handleClick={handleClick}
                        index={index}
                        ProductRemove={ProductRemove}
                    />
                ))}
                <Button variant="outlined" color="primary" type="button" onClick={ProductAdd}>
                    다른 상품 추가하기
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
                    <Button disabled={stepIndex === 0} onClick={handlePrev}>
                        이전
                    </Button>
                    <Button
                        variant="contained"
                        className="btn"
                        type="submit"
                        style={{ backgroundColor: '#0080ff', color: '#fff' }}
                    >
                        {stepIndex === steps.length - 1 ? '접수하기' : '다음'}
                    </Button>
                </article>
            </form>
        </>
    );
};

export default Products;
