import React, { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { productDataRemoveAction, productDataUpdateAction } from 'store/apply';
import Button from '@material-ui/core/Button';

const Product = ({ product, index, boxIndex }) => {
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
        dispatch(productDataUpdateAction({ boxIndex: boxIndex, index: index, updateData: updateProductData }));
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [updateProductData]);

    const onRemoveProduct = index => {
        dispatch(productDataRemoveAction({ boxIndex: boxIndex, index: index }));
    };
    return (
        <tr>
            <th>상품 {index + 1} </th>
            <td>
                <input
                    type="text"
                    style={{ width: '48%' }}
                    name="productDetail"
                    value={updateProductData.productDetail}
                    onChange={e => handleChange(e)}
                    placeholder="상품명"
                    required
                />
                <input
                    type="number"
                    name="quantity"
                    value={updateProductData.quantity}
                    onChange={e => handleChange(e)}
                    style={{ width: '48%', marginBottom: '10px' }}
                    placeholder="개수"
                    required
                />
                <input
                    type="number"
                    name="price"
                    style={{ width: '48%', marginBottom: '10px' }}
                    value={updateProductData.price}
                    onChange={e => handleChange(e)}
                    placeholder="개당 가격"
                    required
                />
                <input
                    type="text"
                    name="totalPrise"
                    style={{ width: '48%' }}
                    value={
                        updateProductData.quantity && updateProductData.price
                            ? (updateProductData.quantity * updateProductData.price).toLocaleString() + '원'
                            : ''
                    }
                    onChange={e => handleChange(e)}
                    placeholder="총 가격"
                    required
                    disabled
                />
                <Button
                    variant="contained"
                    color="secondary"
                    onClick={() => onRemoveProduct(index)}
                    disabled={index === 0 ? true : false}
                >
                    삭제
                </Button>
            </td>
        </tr>
    );
};

export default Product;
