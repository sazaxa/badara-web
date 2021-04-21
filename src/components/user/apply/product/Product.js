import React, { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { productDataUpdateAction } from 'store/apply';
import Button from '@material-ui/core/Button';
import { ProductWrap } from 'styles/ApplyStyles';

const Product = ({ stepIndex, steps, product, handlePrev, handleClick, index, ProductRemove }) => {
    const [updateProductData, setUpdateProductData] = useState(product);
    const dispatch = useDispatch();

    const handleChange = e => {
        const { name, value } = e.target;
        setUpdateProductData({
            ...updateProductData,
            [name]: value,
        });
    };

    useEffect(() => {
        dispatch(productDataUpdateAction({ index: index, updateData: updateProductData }));
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [updateProductData]);

    return (
        <ProductWrap key={index}>
            <article className="titleBox">
                <h2>{index + 1}번째 상품정보</h2>
                {index !== 0 ? (
                    <Button variant="contained" color="secondary" onClick={() => ProductRemove()}>
                        삭제
                    </Button>
                ) : null}
            </article>
            <table>
                <tbody>
                    <tr>
                        <th>상품명(영문)</th>
                        <td>
                            <input
                                type="text"
                                name="productDetail"
                                value={updateProductData.productDetail ?? undefined}
                                onChange={e => handleChange(e)}
                                placeholder="영문으로 입력해주세요."
                                required
                            />
                        </td>
                    </tr>
                    <tr>
                        <th>개수</th>
                        <td>
                            <input
                                type="number"
                                name="quantity"
                                value={updateProductData.quantity ?? undefined}
                                onChange={e => handleChange(e)}
                                placeholder="해당 상품의 대한 갯수를 입력해주세요."
                                required
                            />
                        </td>
                    </tr>
                    <tr>
                        <th>개당 금액(단위:원)</th>
                        <td>
                            <input
                                type="number"
                                name="price"
                                value={updateProductData.price ?? undefined}
                                placeholder="해당 상품의 대한 가격를 입력해주세요."
                                onChange={e => handleChange(e)}
                                required
                            />
                        </td>
                    </tr>
                    <tr>
                        <th>개당 총 가격(단위:원)</th>
                        <td>
                            <input
                                type="text"
                                name="totalPrise"
                                value={
                                    updateProductData.quantity && updateProductData.price
                                        ? (updateProductData.quantity * updateProductData.price).toLocaleString() + '원'
                                        : ''
                                }
                                placeholder="개수와 금액을 입력하시면 자동으로 입력됩니다."
                                onChange={e => handleChange(e)}
                                required
                                disabled
                            />
                        </td>
                    </tr>
                </tbody>
            </table>
        </ProductWrap>
    );
};

export default Product;
