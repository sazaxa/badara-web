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
                        <th>상품명</th>
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
                                type="number"
                                name="quantity"
                                value={updateProductData.quantity ?? undefined}
                                onChange={e => handleChange(e)}
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
                                onChange={e => handleChange(e)}
                                required
                            />
                        </td>
                    </tr>
                    <tr>
                        <th>개당 실 무게(단위:kg)</th>
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
