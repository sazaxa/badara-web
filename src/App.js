import React from 'react';
import { Route, withRouter } from 'react-router-dom';

import {
    AdminUserPage,
    AdminOrderPage,
    AdminFAQPage,
    AdminChargePage,
    MainPage,
    CostPage,
    UsePage,
    ApplyPage,
    SupportPage,
    RegisterPage,
} from 'pages';
import { FooterComponent } from 'components';
import { HeaderContainer, AdminHeaderContainer } from 'containers';

function App({ location }) {
    //   console.log('location : ', location);
    const { pathname } = location;
    const BASE_ADMIN_URL = '/admin';
    return (
        <>
            {pathname.startsWith(BASE_ADMIN_URL) ? (
                <section className="adminWrap">
                    <AdminHeaderContainer />
                    <Route component={AdminUserPage} path="/admin" exact />
                    <Route component={AdminUserPage} path="/admin/user" />
                    <Route component={AdminOrderPage} path="/admin/order" />
                    <Route component={AdminFAQPage} path="/admin/faq" />
                    <Route component={AdminChargePage} path="/admin/insert" />
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
