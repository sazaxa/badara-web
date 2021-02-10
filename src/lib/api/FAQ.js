import { FormatQuote } from '@material-ui/icons';
import client from './client';

// faqs 불러오기
export const Read = () => client.get('/api/v1/faq');

// 1개 faq 불러오기
export const ReadFaq = (id) => client.get(`/api/v1/faq/${id}`);

// faq 쓰기
export const Write = ({ title, content }) =>
  client.post('/api/v1/faq', { title, content });

// faq 수정
export const Update = ({ title, content, id }) =>
  client.put(`/api/v1/faq/${id}`, { title, content });

// faq 삭제
export const Delete = (id) => client.delete(`/api/v1/faq/${id}`);
