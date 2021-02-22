import React from 'react';
import { Responsive, CalculatorWrap } from 'styles/CalculatorStyles';

const CalculatorComponent = ({ OnClickWeight, OnChange, OnClickVolume, PredictionPrime, Material, CountryLists }) => {
    return (
        <Responsive>
            <CalculatorWrap>
                <form>
                    <h2>배송비 계산기</h2>
                    <div className="wrap top">
                        <div className="title">
                            <h4>품목</h4>
                        </div>
                        <div className="content">
                            <input type="text" name="tltle" placeholder="품목" />
                        </div>
                    </div>
                    <div className="wrap">
                        <div className="title">
                            <h4>나라 선택</h4>
                        </div>
                        <div className="content">
                            <select name="country" onChange={OnChange}>
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
                    <div className="wrap">
                        <div className="title">
                            <h4>부피 무게 계산</h4>
                            <p>(단위:cm)</p>
                        </div>
                        <div className="content material">
                            <input type="text" name="width" onChange={OnChange} placeholder="가로" />
                            <span>X</span>
                            <input type="text" name="vertical" onChange={OnChange} placeholder="세로" />
                            <span>X</span>
                            <input type="text" name="height" onChange={OnChange} placeholder="높이" />
                            <button type="button" onClick={OnClickVolume}>
                                계산하기
                            </button>
                        </div>
                    </div>
                    <div className="wrap">
                        <div className="title">
                            <h4>부피 무게</h4>
                            <p>(단위:g)</p>
                        </div>
                        <div className="content">
                            <input
                                type="text"
                                name="volume"
                                disabled
                                onChange={OnChange}
                                placeholder={Material.volume ? Material.volume + 'g' : '부피무게'}
                            />
                        </div>
                    </div>
                    <div className="wrap">
                        <div className="title">
                            <h4>실 무게</h4>
                            <p>(단위:g)</p>
                        </div>
                        <div className="content">
                            <input type="text" name="actual" onChange={OnChange} placeholder="실 무게" />
                        </div>
                    </div>
                    <div className="wrap">
                        <div className="primeBtn">
                            <button type="button" onClick={OnClickWeight}>
                                예상가격 구하기
                            </button>
                        </div>
                    </div>
                    <div className="wrap bottom">
                        <div className="title">
                            <h4>예상가격</h4>
                            <p>(단위:달러($))</p>
                        </div>
                        <div className="content">
                            <input
                                type="text"
                                disabled
                                placeholder={PredictionPrime ? PredictionPrime + '$' : '예상가격'}
                            />
                        </div>
                    </div>
                </form>
            </CalculatorWrap>
        </Responsive>
    );
};

export default CalculatorComponent;
