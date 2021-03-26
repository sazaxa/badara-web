import React, { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { productDataUpdateAction } from 'store/apply';
import styled from 'styled-components';
import Button from '@material-ui/core/Button';

const ProductWrap = styled.article`
    width: 100%;
    margin-bottom: 30px;
    .titleBox {
        width: 100%;
        border-bottom: 4px solid #0080ff;
        display: flex;
        align-items: center;
        padding-bottom: 15px;
        box-sizing: border-box;
        & > h2 {
            letter-spacing: -2.5px;
            font-size: 32px;
            margin-right: 10px;
        }
        & > button {
            height: 40px;
        }
    }
    input,
    select {
        width: 100%;
        border: none;
        border: 1px solid #ccc;
        border-radius: 5px;
        height: 40px;
        padding: 10px;
        box-sizing: border-box;
    }
    table {
        width: 100%;
        & > tbody > tr {
            display: flex;
            align-items: center;
            width: 100%;
            border-bottom: 1px solid #ccc;
            padding: 15px 0;
        }
        & > tbody > tr > th {
            width: 30%;
        }
        & > tbody > tr > td {
            width: 70%;
            display: flex;
            flex-wrap: wrap;
            justify-content: space-between;
        }
        & > tbody > tr > td > input {
            width: 100%;
        }
    }
`;

const Product = ({ stepIndex, steps, product, handlePrev, handleClick, index, ProductRemove }) => {
    console.log(index);

    const [updateProductData, setUpdateProductData] = useState(product);
    const dispatch = useDispatch();
    console.log(updateProductData);
    const handleChange = e => {
        const { name, value } = e.target;
        setUpdateProductData({
            ...updateProductData,
            [name]: value,
        });
    };

    useEffect(() => {
        dispatch(productDataUpdateAction({ index: index, updateData: updateProductData }));
    }, [updateProductData]);

    return (
        <ProductWrap>
            <article className="titleBox">
                <h2>상품정보 {index + 1}</h2>
                {index !== 0 ? (
                    <Button variant="contained" color="secondary" onClick={() => ProductRemove()}>
                        삭제
                    </Button>
                ) : null}
            </article>
            <table>
                <tbody>
                    <tr>
                        <th>상품</th>
                        <td>
                            <input
                                type="text"
                                name="productDetail"
                                value={updateProductData.productDetail ?? undefined}
                                onChange={e => handleChange(e)}
                                required
                            />
                        </td>
                    </tr>
                    <tr>
                        <th>개수</th>
                        <td>
                            <input
                                type="text"
                                name="quantity"
                                value={updateProductData.quantity ?? undefined}
                                onChange={e => handleChange(e)}
                                required
                            />
                        </td>
                    </tr>
                    <tr>
                        <th>금액(단위:원)</th>
                        <td>
                            <input
                                type="text"
                                name="price"
                                value={updateProductData.price ?? undefined}
                                onChange={e => handleChange(e)}
                                required
                            />
                        </td>
                    </tr>
                    <tr>
                        <th>실 무게(단위:kg)</th>
                        <td>
                            <input
                                type="text"
                                name="weight"
                                value={updateProductData.weight ?? undefined}
                                onChange={e => handleChange(e)}
                                required
                            />
                        </td>
                    </tr>
                </tbody>
            </table>
        </ProductWrap>
    );
};

export default Product;
