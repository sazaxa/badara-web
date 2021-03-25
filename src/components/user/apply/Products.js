import React, { useState } from 'react';
import { shallowEqual, useDispatch, useSelector } from 'react-redux';
import { acitiveStepChange } from 'store/part';
import { productDataAddAction, productDataRemoveAction, productInsertAction } from 'store/apply';
import Button from '@material-ui/core/Button';
import Product from './Product';

const Products = ({ stepIndex, steps }) => {
    const dispatch = useDispatch();
    const { activeStep, defaultProduct, product: applyProduct } = useSelector(
        state => ({
            activeStep: state.part.activeStep,
            defaultProduct: state.product.defaultProduct,
            product: state.apply.apply.product,
        }),
        shallowEqual
    );

    console.log(defaultProduct);

    const handlePrev = () => {
        dispatch(acitiveStepChange(activeStep - 1));
    };
    const handleClick = () => {
        //TODO: 클릭이벤트 생성해야함.
    };

    const ProductAdd = () => {
        console.log('bamm');
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
                <button onClick={ProductAdd}>추가</button>
                <Button disabled={stepIndex === 0} onClick={handlePrev}>
                    Back
                </Button>
                <Button variant="contained" color="primary" type="submit">
                    {stepIndex === steps.length - 1 ? 'Finish' : 'Next'}
                </Button>
            </form>
        </>
    );
};

export default Products;
