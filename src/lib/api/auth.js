import client from './client';

// 회원가입
export const register = data => {
    return client.post('/api/v1/auth/signup', data);
};

//로그인
export const login = (email, password) => {
    return client.post('/api/v1/auth/signin', email, password);
};

// 로그인 체크
export const check = () => {
    return client.get('/api/v1/auth/current');
};
