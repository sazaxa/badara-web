import { CalculatorComponent } from 'components';
import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { clearPredictionPrimeAction, predictionPrimeAction } from 'store/order';

const CalculatorContainer = () => {
    const dispatch = useDispatch();
    const { predictionPrime } = useSelector(state => state.order);
    const [material, setMaterial] = useState({
        width: '',
        vertical: '',
        height: '',
        volume: '',
        actual: '',
        country: '',
        weight: '',
    });
    console.log(material);
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
            dispatch(clearPredictionPrimeAction());
        } else if (country === '') {
            alert('나라를 선택해주세요.');
            dispatch(clearPredictionPrimeAction());
        } else if (volume > actual) {
            dispatch(predictionPrimeAction({ country: country, weight: volume }));
        } else if (volume < actual) {
            dispatch(predictionPrimeAction({ country: country, weight: actual }));
        }
    };
    return (
        <CalculatorComponent
            OnClickWeight={onClickWeight}
            OnChange={e => handleChange(e)}
            OnClickVolume={onClickVolume}
            PredictionPrime={predictionPrime}
            Material={material}
        />
    );
};

export default CalculatorContainer;
