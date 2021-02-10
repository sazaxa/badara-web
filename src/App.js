import React from 'react';
import { Route, withRouter } from 'react-router-dom';
import MainPage from './pages/user/MainPage';
import UsePage from './pages/user/UsePage';
import CostPage from './pages/user/CostPage';
import ApplyPage from './pages/user/ApplyPage';
import SupportPage from './pages/user/SupportPage';
import RegisterPage from './pages/user/RegisterPage';
import HeaderContainer from './containers/common/HeaderContainer';
import FooterComponent from './components/common/FooterComponent';
import AdminUserPage from './pages/admin/AdminUserPage';
import AdminHeaderContent from './components/common/AdminHeaderComponent';
import AdminOrderPage from './pages/admin/AdminOrderPage';
import AdminFAQPage from './pages/admin/AdminFAQPage';

function App({ location }) {
  console.log('location : ', location);
  const { pathname } = location;
  const BASE_ADMIN_URL = '/admin';
  return (
    <>
      {pathname.startsWith(BASE_ADMIN_URL) ? (
        <section className="adminWrap">
          <AdminHeaderContent />
          <Route component={AdminUserPage} path="/admin" exact />
          <Route component={AdminUserPage} path="/admin/user" />
          <Route component={AdminOrderPage} path="/admin/order" />
          <Route component={AdminFAQPage} path="/admin/FAQ" />
        </section>
      ) : (
        <section>
          <HeaderContainer />
          <Route component={MainPage} path="/" exact />
          <Route component={CostPage} path="/cost" />
          <Route component={UsePage} path="/use" />
          <Route component={ApplyPage} path="/apply" />
          <Route component={SupportPage} path="/support" />
          <Route component={RegisterPage} path="/register" />
          <FooterComponent />
        </section>
      )}
    </>
  );
}

export default withRouter(App);
