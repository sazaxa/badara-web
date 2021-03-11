// 배송비 등록
import client from './client';

export const Insert = ({ data }) => {
    return client.post('/excel/shipping', data, {
        headers: {
            'Content-Type': 'multipart/form-data',
        },
    });
};

// 계산기 예상가격 구하기
export const PredictionPrime = ({ country, weight }) => {
    return client.post('/api/v1/shipping/dhl', { country, weight });
};

// 배송비 엑셀에 등록된 나라 불러오기
export const getCountry = () => {
    return client.get('/api/v1/shipping/dhl/countries');
};

/*
let country_array = data.country.map()
*/
