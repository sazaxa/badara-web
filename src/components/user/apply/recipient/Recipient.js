import React, { useEffect, useState } from 'react';
import { shallowEqual, useDispatch, useSelector } from 'react-redux';
import { acitiveStepChange } from 'store/part';
import Button from '@material-ui/core/Button';
import { recipientInsertAction } from 'store/apply';
import { RecipientWrap } from 'styles/ApplyStyles';

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
        // eslint-disable-next-line react-hooks/exhaustive-deps
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
    const handleClick = e => {
        e.preventDefault();
        dispatch(recipientInsertAction({ recipient: recipient }));
        dispatch(acitiveStepChange(activeStep + 1));
        // if (
        //     recipient.name !== null &&
        //     recipient.email !== null &&
        //     recipient.country !== null &&
        //     recipient.state !== null &&
        //     recipient.zipcode !== null &&
        //     recipient.countryCode !== null &&
        //     recipient.phoneNumber !== null
        // ) {
        //     if (recipient.address1 === null && recipient.address2 === null && recipient.address3 === null) {
        //         alert('필수 항목을 입력해주세요.');
        //         return;
        //     } else {
        //         dispatch(recipientInsertAction({ recipient: recipient }));
        //         dispatch(acitiveStepChange(activeStep + 1));
        //     }
        // } else {
        //     alert('필수 항목을 입력해주세요.');
        //     return;
        // }
    };
    return (
        <RecipientWrap>
            <h2>수취인 정보</h2>
            <form onSubmit={e => handleClick(e)}>
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
                                    required
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
                                    required
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
                                    required
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
                                    required
                                />
                                <input
                                    type="text"
                                    name="address2"
                                    placeholder="address2"
                                    value={recipient.address2 ?? undefined}
                                    onChange={e => handleChange(e)}
                                    style={{ width: '33%', marginBottom: '5px' }}
                                    required
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
                                    required
                                />
                                <input
                                    type="text"
                                    name="city"
                                    value={recipient.city ?? undefined}
                                    placeholder="도시"
                                    onChange={e => handleChange(e)}
                                    style={{ width: '33%' }}
                                    required
                                />
                                <input
                                    type="text"
                                    name="state"
                                    placeholder="주/도"
                                    value={recipient.state ?? undefined}
                                    onChange={e => handleChange(e)}
                                    style={{ width: '33%' }}
                                    required
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
                                    required
                                />
                                <input
                                    type="text"
                                    placeholder="휴대폰번호"
                                    name="phoneNumber"
                                    value={recipient.phoneNumber ?? undefined}
                                    onChange={e => handleChange(e)}
                                    style={{ width: '70%' }}
                                    required
                                />
                            </td>
                        </tr>
                    </tbody>
                    <article className="agreeBox">
                        <Button disabled={stepIndex === 0} onClick={handlePrev}>
                            이전
                        </Button>
                        <Button variant="contained" color="primary" type="submit">
                            {stepIndex === steps.length - 1 ? '접수하기' : '다음'}
                        </Button>
                    </article>
                </table>
            </form>
        </RecipientWrap>
    );
};

export default Recipient;
