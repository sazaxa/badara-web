import client from './client';

// social 체크
export const check = data => {
    return client.post('/api/v1/social/check', data);
};

// social 가입
export const reigister = data => {
    return client.post('/api/v1/social', data);
};
