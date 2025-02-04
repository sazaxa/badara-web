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

// 전체 회원 불러오기
export const users = () => {
    return client.get('/api/v1/members');
};

// 단일 회원 불러오기
export const user = id => {
    return client.get(`/api/v1/members/${id}`);
};

// 회원 주문 목록 불러오기
export const userOrders = id => {
    return client.get(`/api/v1/members/${id}/order`);
};

//관리자 로그인 체크
export const adminCheck = () => {
    return client.get('/api/v1/auth/current/admin');
};

// 관리자 로그인
export const adminLogin = (email, password) => {
    return client.post('/api/v1/auth/signin/admin', email, password);
};

// 회원 비밀번호 변경

export const passwordModify = ({ id, data }) => {
    return client.put(`/api/v1/members/${id}`, data);
};

// 회원 포인트 사용내역 조회

export const getPointHistory = id => {
    return client.get(`/api/v1/members/point/${id}`);
};
