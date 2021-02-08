import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import styled from 'styled-components';
import { readFaq } from '../../modules/Faq';

const AdminUserWrap = styled.article`
  width: 85vw;
  height: 100vh;
  background: #f2f2f2;
`;

const AdminFAQPage = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(readFaq());
  }, [dispatch]);
  return <AdminUserWrap />;
};

export default AdminFAQPage;
