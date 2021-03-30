import client from './client';

// box 운송장 번호 넣기
export const invoice = ({ data, id }) => {
    return client.put(`/api/v1/boxes/${id}`, data);
};
