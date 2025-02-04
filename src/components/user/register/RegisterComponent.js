import React, { useEffect } from 'react';
import { RegisterWrap, RegisterContent } from '../../../styles/RegisterStyles';
import logo from '../../../styles/img/logo.png';
import Tos from './Tos';
import Backdrop from '@material-ui/core/Backdrop';
import CircularProgress from '@material-ui/core/CircularProgress';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(theme => ({
    backdrop: {
        zIndex: theme.zIndex.drawer + 1,
        color: '#fff',
    },
}));

const ReigisterComponent = ({
    Agree,
    HandleAgree,
    HandleChange,
    HandleFinish,
    RegisterInfo,
    social,
    socialFinish,
    loginStatus,
}) => {
    const classes = useStyles();
    useEffect(() => {
        if (social.isRegistered === false) {
            alert('가입되지 않은 소셜 아이디 입니다. 가입후 이용 가능합니다.');
        }
    }, []);
    if (!Agree)
        return (
            <RegisterWrap>
                <Tos HandleAgree={HandleAgree} />
            </RegisterWrap>
        );
    if (social.isRegistered === false)
        return (
            <>
                <Backdrop className={classes.backdrop} open={loginStatus === 'loading'}>
                    <CircularProgress color="inherit" />
                    <p style={{ marginLeft: '20px', textAlign: 'center', lineHeight: '1.5' }}>
                        진행중입니다. <br /> 잠시만 기다려주세요.
                    </p>
                </Backdrop>
                <RegisterWrap>
                    <RegisterContent>
                        <div className="header">
                            <img src={logo} alt="logo" />
                            <h2>SNS 회원가입</h2>
                            {/* <p>회원가입 후 고래타고 서비스를 이용하세요.</p> */}
                        </div>
                        <form>
                            <input
                                type="email"
                                name="email"
                                placeholder="*이메일"
                                onChange={HandleChange}
                                value={RegisterInfo.email}
                                disabled
                            />
                            <input
                                type="text"
                                name="name"
                                placeholder="*이름"
                                onChange={HandleChange}
                                value={RegisterInfo.name}
                            />
                            <input
                                type="number"
                                name="phoneNumber"
                                placeholder="*휴대폰 번호"
                                onChange={HandleChange}
                                value={RegisterInfo.phoneNumber}
                            />
                            <button type="button" onClick={socialFinish}>
                                소셜 회원가입
                            </button>
                        </form>
                    </RegisterContent>
                </RegisterWrap>
            </>
        );
    return (
        <RegisterWrap>
            <RegisterContent>
                <div className="header">
                    <img src={logo} alt="logo" />
                    <h2>회원가입</h2>
                    {/* <p>회원가입 후 고래타고 서비스를 이용하세요.</p> */}
                </div>
                <form>
                    <input
                        type="email"
                        name="email"
                        placeholder="*이메일"
                        onChange={HandleChange}
                        value={RegisterInfo.email}
                    />
                    <input
                        type="password"
                        name="password"
                        value={RegisterInfo.password}
                        placeholder="*패스워드"
                        onChange={HandleChange}
                    />
                    <input
                        type="password"
                        name="passwordConfirm"
                        placeholder="*패스워드 확인"
                        onChange={HandleChange}
                        value={RegisterInfo.passwordConfirm}
                    />
                    <input
                        type="text"
                        name="name"
                        placeholder="*이름"
                        onChange={HandleChange}
                        value={RegisterInfo.name}
                    />
                    <input
                        type="number"
                        name="phoneNumber"
                        placeholder="*휴대폰 번호"
                        onChange={HandleChange}
                        value={RegisterInfo.phoneNumber}
                    />
                    <button type="button" onClick={HandleFinish}>
                        회원가입
                    </button>
                </form>
            </RegisterContent>
        </RegisterWrap>
    );
};

export default ReigisterComponent;
