import client from './client';

// 배송비 등록
export const Create = ({ data }) => {
    return client.post('/excel/shipping', data, {
        headers: {
            'Content-Type': 'multipart/form-data',
        },
    });
};
