import client from './client';

// 신청완료 된 전체 주문 불러오기
export const gets = () => {
    return client.get('/api/v1/haporders');
};

// 신청완료된 하나의 주문 불러오기
export const get = id => {
    return client.get(`/api/v1/haporders/${id}`);
};

export const put = updateData => {
    return client.put(`/api/v1/haporders/${updateData.id}`, updateData);
};
