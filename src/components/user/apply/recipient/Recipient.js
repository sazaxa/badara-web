import React, { useEffect, useState } from 'react';
import { shallowEqual, useDispatch, useSelector } from 'react-redux';
import { acitiveStepChange, getCountryCodeAction } from 'store/part';
import Button from '@material-ui/core/Button';
import { recipientInsertAction } from 'store/apply';
import { RecipientWrap } from 'styles/ApplyStyles';

const Recipient = ({ stepIndex, steps }) => {
    const dispatch = useDispatch();
    const { activeStep, country, recipient: updateRecipient, code: countryList } = useSelector(
        state => ({
            activeStep: state.part.activeStep,
            country: state.part.country,
            recipient: state.apply.apply.recipient,
            code: state.part.country.code,
        }),
        shallowEqual
    );
    const [recipient, setRecipinet] = useState({
        name: null,
        email: null,
        country: 'USA',
        state: null,
        address1: null,
        address2: null,
        address3: null,
        zipcode: null,
        memo: null,
        countryCode: '1',
        phoneNumber: null,
        isCountryCode: true,
    });

    useEffect(() => {
        if (updateRecipient) {
            setRecipinet(updateRecipient);
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [updateRecipient]);
    useEffect(() => {
        dispatch(getCountryCodeAction());
    }, []);

    const handleChange = e => {
        const { name, value } = e.target;
        if (name === 'country') {
            const found = countryList.find(country => country.name.replace(/ /g, '') === value);
            console.log(found);
            if (!found) {
                setRecipinet({
                    ...recipient,
                    country: value,
                    countryCode: '',
                    isCountryCode: false,
                });
            } else {
                setRecipinet({
                    ...recipient,
                    country: value,
                    countryCode: found.number,
                    isCountryCode: true,
                });
            }
            return;
        }
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
        if (recipient.countryCode === '') {
            alert('나라 코드를 입력해주세요.');
        } else {
            dispatch(recipientInsertAction({ recipient: recipient }));
            dispatch(acitiveStepChange(activeStep + 1));
        }
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
                                    placeholder="영어로 입력 해주세요."
                                    pattern="[a-zA-Z\s]+$"
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
                                    placeholder="수취인 이메일를 입력해주세요."
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
                                    placeholder="상세주소"
                                    value={recipient.address1 ?? undefined}
                                    onChange={e => handleChange(e)}
                                    style={{ width: '100%', marginBottom: '5px' }}
                                    required
                                />
                                {/* <input
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
                                /> */}
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
                            <th>특이사항</th>
                            <td>
                                <input
                                    type="text"
                                    name="memo"
                                    placeholder="특이사항을 입력해주세요."
                                    value={recipient.memo ?? undefined}
                                    onChange={e => handleChange(e)}
                                    style={{ width: '100%', marginBottom: '5px' }}
                                />
                            </td>
                        </tr>
                        <tr>
                            <th>휴대폰번호</th>
                            <td>
                                {/* {recipient.isCountryCode ? ( */}
                                <input
                                    type="text"
                                    placeholder="국가번호"
                                    name="countryCode"
                                    value={recipient.countryCode === '' ? '' : '+' + recipient.countryCode}
                                    onChange={e => handleChange(e)}
                                    style={{ width: '29.5%' }}
                                    required
                                />
                                {/*  ) : (
                                   <input
                                        type="text"
                                        placeholder="국가번호"
                                        name="countryCode"
                                        value={recipient.countryCode ?? undefined}
                                        onChange={e => handleChange(e)}
                                        style={{ width: '29.5%' }}
                                        required
                                    />
                                )} */}
                                <input
                                    type="number"
                                    placeholder="휴대폰번호(-없이 작성)"
                                    name="phoneNumber"
                                    value={recipient.phoneNumber ?? undefined}
                                    onChange={e => handleChange(e)}
                                    style={{ width: '70%' }}
                                    required
                                />
                            </td>
                        </tr>
                    </tbody>
                    <article className="warning">
                        <p>*수취인 번호로 배송 일정이 공유됩니다. 정확하게 입력하여주세요.</p>
                    </article>
                    <article className="agreeBox">
                        <Button disabled={stepIndex === 0} onClick={handlePrev}>
                            이전
                        </Button>
                        <Button variant="contained" className="btn" type="submit">
                            {stepIndex === steps.length - 1 ? '접수하기' : '다음'}
                        </Button>
                    </article>
                </table>
            </form>
        </RecipientWrap>
    );
};

export default Recipient;
