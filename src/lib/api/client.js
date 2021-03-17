import axios from 'axios';
const client = axios.create({
    baseURL: `${process.env.REACT_APP_API_URL}`,
    // withCredentials: true,
});
const auth = localStorage.getItem('accessToken');
const authAdmin = localStorage.getItem('accessTokenAdmin');
if (auth) {
    client.defaults.headers.common['Authorization'] = `Bearer ${auth}`;
}
if (authAdmin) {
    client.defaults.headers.common['Authorization'] = `Bearer ${authAdmin}`;
}
export default client;
