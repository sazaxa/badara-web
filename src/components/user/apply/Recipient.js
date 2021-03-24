import React, { useState } from 'react';
import { shallowEqual, useDispatch, useSelector } from 'react-redux';
import { acitiveStepChange } from 'store/part';
import Button from '@material-ui/core/Button';
import { recipientInsertAction } from 'store/apply';

const Recipient = ({ stepIndex, steps }) => {
    const dispatch = useDispatch();
    const { activeStep, country } = useSelector(
        state => ({
            activeStep: state.part.activeStep,
            country: state.part.country,
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

    console.log(recipient);

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
        <>
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
                                value={recipient.address1 ?? undefined}
                                onChange={e => handleChange(e)}
                            />
                        </td>
                        <td>
                            <input
                                type="text"
                                name="address2"
                                value={recipient.address2 ?? undefined}
                                onChange={e => handleChange(e)}
                            />
                        </td>
                        <td>
                            <input
                                type="text"
                                name="address3"
                                value={recipient.address3 ?? undefined}
                                onChange={e => handleChange(e)}
                            />
                        </td>
                    </tr>
                    <tr>
                        <th>우편번호</th>
                        <td>
                            <input
                                type="text"
                                name="zipcode"
                                value={recipient.zipcode ?? undefined}
                                onChange={e => handleChange(e)}
                            />
                        </td>
                        <th>도시</th>
                        <td>
                            <input
                                type="text"
                                name="city"
                                value={recipient.city ?? undefined}
                                onChange={e => handleChange(e)}
                            />
                        </td>
                        <th>주/도</th>
                        <td>
                            <input
                                type="text"
                                name="state"
                                value={recipient.state ?? undefined}
                                onChange={e => handleChange(e)}
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
                            />
                            <input
                                type="text"
                                placeholder="휴대폰번호"
                                name="phoneNumber"
                                value={recipient.phoneNumber ?? undefined}
                                onChange={e => handleChange(e)}
                            />
                        </td>
                    </tr>
                </tbody>
            </table>
            <Button disabled={stepIndex === 0} onClick={handlePrev}>
                Back
            </Button>
            <Button variant="contained" color="primary" onClick={handleClick}>
                {stepIndex === steps.length - 1 ? 'Finish' : 'Next'}
            </Button>
        </>
    );
};

export default Recipient;
