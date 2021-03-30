import React, { useState } from 'react';
import { shallowEqual, useDispatch, useSelector } from 'react-redux';
import { acitiveStepChange } from 'store/part';
import { productDataAddAction, productDataRemoveAction } from 'store/apply';
import Button from '@material-ui/core/Button';
import Product from './Product';

const Products = ({ stepIndex, steps }) => {
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
        weight: null,
    };

    const handlePrev = () => {
        dispatch(acitiveStepChange(activeStep - 1));
    };
    const handleClick = e => {
        e.preventDefault();
        //TODO: 클릭이벤트 생성해야함.
        //FIXME:2021-03-25 Submit 함수로 필수값을 체크하고 필수값이 입력이 안되면 넘어가지 않도록 조치
        dispatch(acitiveStepChange(activeStep + 1));
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
                    추가
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
                    <Button variant="contained" color="primary" type="submit">
                        {stepIndex === steps.length - 1 ? '접수하기' : '다음'}
                    </Button>
                </article>
            </form>
        </>
    );
};

export default Products;
