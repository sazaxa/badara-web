import client from './client';

// 배송비 등록
export const Create = file => client.post('/excel/shippng', file);
