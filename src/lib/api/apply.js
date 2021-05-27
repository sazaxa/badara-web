import client from './client';

// 배송대행 신청
export const save = data => {
    return client.post('/api/v1/orders', data);
};

// 주문 수정하기
export const getOrder = orderNumber => {
    return client.post(`/api/v1/orders/${orderNumber}`);
};

export const modify = ({ data, id }) => {
    return client.put(`/api/v1/orders/${id}`, data);
};
