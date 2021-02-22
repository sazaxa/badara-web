import client from './client';

// 신청완료 된 주문 불러오기
export const get = () => {
    return client.get('/api/v1/orders');
};
