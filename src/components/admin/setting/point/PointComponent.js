import React from 'react';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Switch from '@material-ui/core/Switch';
import styled from 'styled-components';

const PointWrap = styled.div`
    width: 100%;
    margin: 0 auto;
    height: 100vh;
    margin-left: 300px;
    padding: 50px 20px;
    text-align: center;
    h2 {
        margin-bottom: 1.5rem;
        text-align: center;
        letter-spaicng: -1px;
        color: #2191f3;
    }
    table {
        width: 100%;
        margin: 0 auto;
        background: #fff;
        border-collapse: collapse;
        border-radius: 5px;
    }
    table,
    td,
    th {
        border: 1px solid #ccc;
    }
    td,
    th {
        padding: 1rem;
    }
    .MuiSwitch-root {
        margin: 0 auto;
    }
    input {
        border: none;
        border-bottom: 1px solid #ccc;
        width: 100%;
        padding: 10px;
        box-sizing: border-box;
        text-align: center;
    }
    button {
        width: 100px;
        height: 50px;
        cursor: pointer;
        margin-top: 30px;
        background: #2191f3;
        border: none;
        color: #fff;
        font-size: 1.2rem;
        border-radius: 5px;
    }
`;

const PointComponent = ({ data, onChange, onClick }) => {
    return (
        <PointWrap>
            <h2>포인트 셋팅하기</h2>
            <table>
                <thead>
                    <tr>
                        <th>포인트 혜택</th>
                        <th>지급할 포인트</th>
                        <th>미사용/사용</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>회원가입시 포인트 제공</td>
                        <td>
                            <input
                                type="number"
                                value={data.registerAmount}
                                name="registerAmount"
                                onChange={onChange}
                            />
                        </td>
                        <td>
                            <FormControlLabel
                                control={
                                    <Switch
                                        checked={data.isRegisterActive}
                                        onChange={onChange}
                                        name="isRegisterActive"
                                    />
                                }
                            />
                        </td>
                    </tr>
                </tbody>
            </table>
            <button type="button" onClick={() => onClick()}>
                저장
            </button>
        </PointWrap>
    );
};

export default PointComponent;
