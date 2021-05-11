import client from './client';

// 신청완료 된 전체 주문 불러오기
export const gets = () => {
    return client.get('/api/v1/orders');
};

// 신청완료된 하나의 주문 불러오기
export const get = id => {
    return client.get(`/api/v1/orders/${id}`);
};

export const put = updateData => {
    return client.put(`/api/v1/orders/${updateData.id}`, updateData);
};

export const orderStatusChange = ({ id, data }) => {
    console.log(data);
    return client.put(`/api/v1/orders/status/${id}`, data);
};

// 주문 엑셀 다운로드

export const orderExcelAllDownload = () => {
    return client.get('/excel/download/orders');
};
