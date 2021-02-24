import client from './client';

// 회원가입
export const register = data => {
    return client.post('/api/v1/auth/signup', data);
};
