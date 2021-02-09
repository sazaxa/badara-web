import { FormatQuote } from '@material-ui/icons';
import client from './client';

// faq 불러오기
export const Read = () => client.get('/api/v1/faq');

// faq 쓰기
export const Write = ({ title, content }) =>
  client.post('/api/v1/faq', { title, content });

// faq 삭제
export const deleteFaq = (id) => client.delete(`/api/v1/faq/${id}`);
