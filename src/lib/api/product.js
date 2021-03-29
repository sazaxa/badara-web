import client from './client';

// Product 불러오기
export const product = id => {
    return client.get(`/api/v1/orders/${id}`);
};

// Product 운송장 번호 넣기
export const invoice = ({ data, id }) => {
    return client.put(`/api/v1/orders/${id}`, data);
};

export const payment = ({ id, status }) => {
    return client.put(`/api/v1/haporders/payment/${id}`, status);
};
