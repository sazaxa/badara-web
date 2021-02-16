import client from './client';

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
