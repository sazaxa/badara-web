import React from 'react';
import { CalculatorWrap } from 'styles/CalculatorStyles';
import CreateIcon from '@material-ui/icons/Create';
import SearchIcon from '@material-ui/icons/Search';
import { Link } from 'react-router-dom';

const CalculatorComponent = ({
    OnClickWeight,
    OnChange,
    OnClickVolume,
    PredictionPrime,
    Material,
    CountryLists,
    OnReset,
    PriseOpen,
}) => {
    return (
        <CalculatorWrap>
            <form>
                <div className="title_wrap">
                    <h2>배송비 계산기</h2>
                    <span>쉽고 빠르게 배송비를 계산해 보세요</span>
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
                            계산하기
                        </button>
                    </div>
                </div>
                <div className="wrap">
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
                            placeholder={Material.volume ? Material.volume + 'kg' : '부피무게'}
                        />
                    </div>
                </div>
                <div className="wrap">
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
                    </div>
                </div>
                <div className={PriseOpen ? 'wrap prisebtn' : 'wrap prisebtn show'}>
                    <button type="button" onClick={OnClickWeight}>
                        예상가격 구하기
                    </button>
                    <p>(예상가격은 부피무게와 실무게 중 무거운 것으로 측정되어 표기됩니다.)</p>
                </div>
                <article className={PriseOpen ? 'priseWrap show' : 'priseWrap'}>
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
                                    PredictionPrime
                                        ? Math.floor(parseInt(PredictionPrime)).toLocaleString() + '원'
                                        : '예상가격'
                                }
                            />
                            <span>({Material.selected === 'volume' ? '부피 무게' : '실 무게'})</span>
                            <button type="button" className="resetBtn" onClick={OnReset}>
                                리셋
                            </button>
                        </div>
                    </div>
                    <article className="btnWrap">
                        <button type="button" className="applybtn">
                            <Link to="/apply">
                                <CreateIcon />
                                배송대행신청
                            </Link>
                        </button>
                        <button type="button" className="mypagebtn">
                            <Link to="/mypage">
                                <SearchIcon />
                                접수내역보기
                            </Link>
                        </button>
                    </article>
                </article>
            </form>
        </CalculatorWrap>
    );
};

export default CalculatorComponent;
