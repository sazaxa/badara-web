/* eslint-disable react-hooks/exhaustive-deps */
import { CalculatorComponent } from 'components';
import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { loginPopupAction } from 'store/auth';
import { clearPredictionpriceAction, predictionpriceAction } from 'store/part';

const CalculatorContainer = () => {
    const dispatch = useDispatch();
    const { price, country } = useSelector(state => state.part);
    const [getCountry, setGetCountry] = useState([]);
    const [priceOpen, setPriseOpen] = useState(false);

    const [material, setMaterial] = useState({
        width: '',
        vertical: '',
        height: '',
        volume: '',
        actual: '',
        country: '',
        weight: '',
        selected: '',
    });
    const { list, status } = country;

    //  store 에 나라 목록 받아오면 state값에 넘김
    useEffect(() => {
        if (status === 'success') {
            setGetCountry(list);
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [country]);

    // 페이지 이동시 예상가격 삭제.
    useEffect(() => {
        return () => {
            dispatch(clearPredictionpriceAction());
        };
    }, []);

    const handleChange = e => {
        const { name, value } = e.target;
        setMaterial({
            ...material,
            [name]: value,
        });
    };
    const onClickVolume = () => {
        const { width, vertical, height } = material;
        if ((width, vertical, height !== '')) {
            const sum = (width * vertical * height) / 5000;
            setMaterial({
                ...material,
                volume: sum,
            });
        } else {
            alert('가로,세로,높이 값을 모두 입력하세요.');
        }
    };

    const onClickWeight = () => {
        const { volume, actual, country } = material;
        if (volume === '' && actual === '') {
            alert('부피무게, 실무게 중 1개가 입력되어야 합니다.');
        } else if (country === '') {
            alert('나라를 선택해주세요.');
        } else if (volume > actual) {
            dispatch(
                predictionpriceAction({
                    country: country,
                    weight: volume,
                })
            );
            setMaterial({
                ...material,
                selected: 'volume',
            });
            setPriseOpen(true);
        } else if (volume < actual) {
            dispatch(
                predictionpriceAction({
                    country: country,
                    weight: actual,
                })
            );
            setMaterial({
                ...material,
                selected: 'actual',
            });
            setPriseOpen(true);
        }
    };

    const onReset = () => {
        setPriseOpen(false);
        setMaterial({
            width: '',
            vertical: '',
            height: '',
            volume: '',
            actual: '',
            country: '',
            weight: '',
            selected: '',
        });
    };

    const handleLoginPopup = boolen => {
        dispatch(loginPopupAction(boolen));
    };
    return (
        <CalculatorComponent
            OnClickWeight={onClickWeight}
            OnChange={e => handleChange(e)}
            OnClickVolume={onClickVolume}
            PredictionPrise={price}
            Material={material}
            CountryLists={getCountry}
            OnReset={onReset}
            PriseOpen={priceOpen}
            handleLoginPopup={handleLoginPopup}
        />
    );
};

export default CalculatorContainer;
