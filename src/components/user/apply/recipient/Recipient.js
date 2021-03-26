import React, { useEffect, useState } from 'react';
import { shallowEqual, useDispatch, useSelector } from 'react-redux';
import { acitiveStepChange } from 'store/part';
import Button from '@material-ui/core/Button';
import { recipientInsertAction } from 'store/apply';
import styled from 'styled-components';

const RecipientWrap = styled.article`
    width: 100%;
    h2 {
        letter-spacing: -2.5px;
        padding-bottom: 15px;
        font-size: 32px;
        border-bottom: 4px solid #0080ff;
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
    .agreeBox {
        display: flex;
        flex-wrap: wrap;
        justify-content: center;
        align-items: center;
        margin: 20px 0;
    }
`;

const Recipient = ({ stepIndex, steps }) => {
    const dispatch = useDispatch();
    const { activeStep, country, recipient: updateRecipient } = useSelector(
        state => ({
            activeStep: state.part.activeStep,
            country: state.part.country,
            recipient: state.apply.apply.recipient,
        }),
        shallowEqual
    );
    const [recipient, setRecipinet] = useState({
        name: null,
        email: null,
        country: null,
        state: null,
        address1: null,
        address2: null,
        address3: null,
        zipcode: null,
        countryCode: null,
        phoneNumber: null,
    });

    useEffect(() => {
        if (updateRecipient) {
            setRecipinet(updateRecipient);
        }
    }, []);

    const handleChange = e => {
        const { name, value } = e.target;
        setRecipinet({
            ...recipient,
            [name]: value,
        });
    };
    const handlePrev = () => {
        dispatch(acitiveStepChange(activeStep - 1));
    };
    const handleClick = () => {
        if (
            recipient.name !== null &&
            recipient.email !== null &&
            recipient.country !== null &&
            recipient.state !== null &&
            recipient.zipcode !== null &&
            recipient.countryCode !== null &&
            recipient.phoneNumber !== null
        ) {
            if (recipient.address1 === null && recipient.address2 === null && recipient.address3 === null) {
                alert('필수 항목을 입력해주세요.');
                return;
            } else {
                dispatch(recipientInsertAction({ recipient: recipient }));
                dispatch(acitiveStepChange(activeStep + 1));
            }
        } else {
            alert('필수 항목을 입력해주세요.');
            return;
        }
    };
    return (
        <RecipientWrap>
            <h2>수취인 정보</h2>
            <table>
                <tbody>
                    <tr>
                        <th>이름</th>
                        <td>
                            <input
                                type="text"
                                name="name"
                                value={recipient.name ?? undefined}
                                onChange={e => handleChange(e)}
                            />
                        </td>
                    </tr>
                    <tr>
                        <th>이메일</th>
                        <td>
                            <input
                                type="text"
                                name="email"
                                value={recipient.email ?? undefined}
                                onChange={e => handleChange(e)}
                            />
                        </td>
                    </tr>
                    <tr>
                        <th>국가</th>
                        <td>
                            <select
                                name="country"
                                value={recipient.country ?? undefined}
                                onChange={e => handleChange(e)}
                            >
                                <option value="">나라선택</option>
                                {country.list.map(list => (
                                    <option value={list} key={list}>
                                        {list}
                                    </option>
                                ))}
                            </select>
                        </td>
                    </tr>
                    <tr>
                        <th>주소</th>
                        <td>
                            <input
                                type="text"
                                name="address1"
                                placeholder="address1"
                                value={recipient.address1 ?? undefined}
                                onChange={e => handleChange(e)}
                                style={{ width: '33%' }}
                            />
                            <input
                                type="text"
                                name="address2"
                                placeholder="address2"
                                value={recipient.address2 ?? undefined}
                                onChange={e => handleChange(e)}
                                style={{ width: '33%', marginBottom: '5px' }}
                            />
                            <input
                                type="text"
                                name="address3"
                                placeholder="address3"
                                value={recipient.address3 ?? undefined}
                                onChange={e => handleChange(e)}
                                style={{ width: '33%' }}
                            />
                            <input
                                type="text"
                                name="zipcode"
                                value={recipient.zipcode ?? undefined}
                                onChange={e => handleChange(e)}
                                placeholder="우편번호"
                                style={{ width: '33%' }}
                            />
                            <input
                                type="text"
                                name="city"
                                value={recipient.city ?? undefined}
                                placeholder="도시"
                                onChange={e => handleChange(e)}
                                style={{ width: '33%' }}
                            />
                            <input
                                type="text"
                                name="state"
                                placeholder="주/도"
                                value={recipient.state ?? undefined}
                                onChange={e => handleChange(e)}
                                style={{ width: '33%' }}
                            />
                        </td>
                    </tr>
                    <tr>
                        <th>휴대폰번호</th>
                        <td>
                            <input
                                type="text"
                                placeholder="국가번호"
                                name="countryCode"
                                value={recipient.countryCode ?? undefined}
                                onChange={e => handleChange(e)}
                                style={{ width: '29.5%' }}
                            />
                            <input
                                type="text"
                                placeholder="휴대폰번호"
                                name="phoneNumber"
                                value={recipient.phoneNumber ?? undefined}
                                onChange={e => handleChange(e)}
                                style={{ width: '70%' }}
                            />
                        </td>
                    </tr>
                </tbody>
            </table>
            <article className="agreeBox">
                <Button disabled={stepIndex === 0} onClick={handlePrev}>
                    이전
                </Button>
                <Button variant="contained" color="primary" onClick={handleClick}>
                    {stepIndex === steps.length - 1 ? '접수하기' : '다음'}
                </Button>
            </article>
        </RecipientWrap>
    );
};

export default Recipient;
