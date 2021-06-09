import React from 'react';
import { CalculatorWrap } from 'styles/CalculatorStyles';
import { Link } from 'react-router-dom';

const CalculatorComponent = ({
    Auth,
    OnClickWeight,
    OnChange,
    OnClickVolume,
    PredictionPrise,
    Material,
    CountryLists,
    OnReset,
    PriseOpen,
    handleLoginPopup,
}) => {
    return (
        <CalculatorWrap>
            <form>
                <div className="title_wrap">
                    <h2>배송비 계산기</h2>
                    <span>쉽고 빠르게 배송비를 계산해 보세요</span>
                    <p>배송신청은 신청하기를 통해 진행해주세요!</p>
                </div>
                {/* <div className="wrap top">
                    <div className="title">
                        <h4>품목</h4>
                    </div>
                    <div className="content">
                        <input type="text" name="tltle" placeholder="품목" />
                    </div>
                </div> */}
                <div className="wrap top">
                    <div className="title">
                        <h4>나라 선택</h4>
                    </div>
                    <div className="content">
                        <select name="country" onChange={OnChange} value={Material.country}>
                            <option value="">나라선택</option>
                            {CountryLists.map(v => {
                                return (
                                    <option value={v} key={v}>
                                        {v}
                                    </option>
                                );
                            })}
                        </select>
                    </div>
                </div>
                <div className="wrap material">
                    <div className="title">
                        <h4>부피 무게 계산</h4>
                        <p>(단위:cm)</p>
                    </div>
                    <div className="content material">
                        <input type="text" name="width" onChange={OnChange} placeholder="가로" value={Material.width} />
                        <span>X</span>
                        <input
                            type="text"
                            name="vertical"
                            onChange={OnChange}
                            placeholder="세로"
                            value={Material.vertical}
                        />
                        <span>X</span>
                        <input
                            type="text"
                            name="height"
                            onChange={OnChange}
                            placeholder="높이"
                            value={Material.height}
                        />
                        <button type="button" onClick={OnClickVolume}>
                            계산
                        </button>
                    </div>
                </div>
                <div className={Material.selected === 'volume' ? 'selected wrap' : 'wrap'}>
                    <div className="title">
                        <h4>부피 무게</h4>
                        <p>(단위:kg)</p>
                    </div>
                    <div className="content">
                        <input
                            type="text"
                            name="volume"
                            disabled
                            onChange={OnChange}
                            placeholder="부피무게"
                            value={Material.volume ? Material.volume.toFixed(1) : ''}
                        />
                        <span style={{ marginLeft: '10px' }}>kg</span>
                    </div>
                </div>
                <div className={Material.selected === 'actual' ? 'selected wrap' : 'wrap'}>
                    <div className="title">
                        <h4>실 무게</h4>
                        <p>(단위:kg)</p>
                    </div>
                    <div className="content">
                        <input
                            type="text"
                            name="actual"
                            onChange={OnChange}
                            placeholder="실 무게"
                            value={Material.actual}
                        />
                        <span style={{ marginLeft: '10px' }}>kg</span>
                    </div>
                </div>
                <div className={PriseOpen ? 'wrap pricebtn' : 'wrap pricebtn show'}>
                    <button type="button" onClick={OnClickWeight}>
                        예상가격 구하기
                    </button>
                    <p>
                        (예상가격은 부피무게와 실무게 중 무거운 것으로 측정되어 표기됩니다.) <br />
                    </p>
                    <p>
                        (“BADARA”는 “회원”과 “배송사”의 배송대행업무입니다. <br />
                        부가세는 10%가 별도로 발생됩니다.)
                    </p>
                </div>
                <article className={PriseOpen ? 'priceWrap show' : 'priceWrap'}>
                    <div className="wrap">
                        <div className="title">
                            <h4>예상가격</h4>
                            <p>(단위:원(₩))</p>
                        </div>
                        <div className="content">
                            <input
                                type="text"
                                disabled
                                placeholder={
                                    PredictionPrise
                                        ? Math.floor(parseInt(PredictionPrise)).toLocaleString() + '원'
                                        : '예상가격'
                                }
                            />
                            <span>({Material.selected === 'volume' ? '부피 무게' : '실 무게'})</span>
                            <button type="button" className="resetBtn" onClick={OnReset}>
                                다시 계산
                            </button>
                        </div>
                    </div>
                    {Auth ? (
                        <article className="btnWrap">
                            <button type="button" className="applybtn" style={{ width: '100%' }}>
                                <Link
                                    to="/apply"
                                    style={{ display: 'flex', width: '100%', height: '100%', justifyContent: 'center' }}
                                >
                                    신청하기
                                </Link>
                            </button>
                        </article>
                    ) : (
                        <article className="btnWrap">
                            <button type="button" className="applybtn">
                                <Link
                                    to="/register"
                                    style={{ display: 'flex', width: '100%', height: '100%', justifyContent: 'center' }}
                                >
                                    회원가입
                                </Link>
                            </button>
                            <button type="button" className="mypagebtn" onClick={() => handleLoginPopup(true)}>
                                로그인
                            </button>
                        </article>
                    )}
                </article>
            </form>
        </CalculatorWrap>
    );
};

export default CalculatorComponent;
