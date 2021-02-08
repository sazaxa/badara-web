import { FormatQuote } from '@material-ui/icons';
import client from './client';

// eslint-disable-next-line import/prefer-default-export
export const Read = () => client.get('/api/v1/faq');
