import React from 'react';
import { Route } from 'react-router-dom';
import MainPage from './pages/user/MainPage';
import UsePage from './pages/user/UsePage';
import CostPage from './pages/user/CostPage';
import ApplyPage from './pages/user/ApplyPage';
import SupportPage from './pages/user/SupportPage';
import RegisterPage from './pages/user/RegisterPage';
import HeaderContainer from './containers/common/HeaderContainer';
import FooterComponent from './components/common/FooterComponent';
import AdminUserPage from './pages/admin/AdminUserPage';

function App() {
  return (
    <>
      <HeaderContainer />
      <>
        <Route component={MainPage} path="/" exact />
        <Route component={CostPage} path="/cost" />
        <Route component={UsePage} path="/use" />
        <Route component={ApplyPage} path="/apply" />
        <Route component={SupportPage} path="/support" />
        <Route component={RegisterPage} path="/register" />
        <Route component={AdminUserPage} path="/admin" />
      </>
      <FooterComponent />
    </>
  );
}

export default App;
