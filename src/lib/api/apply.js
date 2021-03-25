import client from './client';

// 배송대행 신청
export const save = data => {
    return client.post('/api/v1/orders', data);
};
