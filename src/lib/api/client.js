import axios from 'axios';
const client = axios.create({
    baseURL: `${process.env.REACT_APP_API_URL}`,
    // withCredentials: true,
});
const auth = localStorage.getItem('accessToken');
if (auth) {
    client.defaults.headers.common['Authorization'] = `Bearer ${auth}`;
}
export default client;
