import client from './client';

export const getPoint = () => {
    return client.get('/api/v1/point/config');
};

export const savePoint = data => {
    return client.post('/api/v1/point/config', data);
};
