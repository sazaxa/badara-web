import client from './client';

// 신청완료 된 주문 불러오기

export const getOrder = () => {
    return client.get('/api/v1/orders');
};
// 배송비 등록
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

// 배송대행 신청
export const postApply = list => {
    return client.post('/api/v1/orders', list);
};
