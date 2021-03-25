import React, { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { productDataUpdateAction } from 'store/apply';

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
        console.log(updateProductData);
    }, [updateProductData]);

    return (
        <>
            <h2>상품정보</h2>
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
                                name="quntity"
                                value={updateProductData.quntity ?? undefined}
                                onChange={e => handleChange(e)}
                                required
                            />
                        </td>
                    </tr>
                    <tr>
                        <th>금액</th>
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
                        <th>실 무게</th>
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
            {index !== 0 ? <button onClick={() => ProductRemove()}>삭제</button> : null}
        </>
    );
};

export default Product;
