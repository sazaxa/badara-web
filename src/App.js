import React, { useLayoutEffect } from 'react';
import { Route, withRouter } from 'react-router-dom';

import {
    AdminUserPage,
    AdminOrderPage,
    AdminFAQPage,
    AdminChargePage,
    MainPage,
    CostPage,
    GuidePage,
    ApplyPage,
    SupportPage,
    RegisterPage,
    ApplyListPage,
    AdminOrderDetailPage,
    Mypage,
} from 'pages';
import { FooterComponent } from 'components';
import { HeaderContainer, AdminHeaderContainer } from 'containers';
import { getCountryAction } from 'store/part';
import { useDispatch } from 'react-redux';
import { loadUser } from 'index';
import AdminUserDetailPage from 'pages/admin/AdminUserDetailPage';

function App({ location }) {
    const dispatch = useDispatch();
    // 최초 로딩시 계산기 나라목록 가져오기.
    useLayoutEffect(() => {
        dispatch(getCountryAction());
        loadUser();
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);
    //   console.log('location : ', location);
    const { pathname } = location;
    const BASE_ADMIN_URL = '/admin';
    return (
        <>
            {pathname.startsWith(BASE_ADMIN_URL) ? (
                <section className="adminWrap">
                    <AdminHeaderContainer />
                    <Route component={AdminUserPage} path="/admin" exact />
                    <Route component={AdminUserPage} path="/admin/user" exact />
                    <Route component={AdminUserDetailPage} path="/admin/user/:id" />
                    <Route component={AdminOrderPage} path="/admin/order" exact />
                    <Route component={AdminOrderDetailPage} path="/admin/order/:id" />
                    <Route component={AdminFAQPage} path="/admin/faq" />
                    <Route component={AdminChargePage} path="/admin/insert" />
                </section>
            ) : (
                <section>
                    <HeaderContainer />
                    <Route component={MainPage} path="/" exact />
                    <Route component={CostPage} path="/cost" />
                    <Route component={GuidePage} path="/guide" />
                    <Route component={ApplyPage} path="/apply" exact />
                    <Route component={ApplyListPage} path="/apply/list" />
                    <Route component={RegisterPage} path="/register" />
                    <Route component={SupportPage} path="/support" />
                    <Route component={Mypage} path="/mypage" />
                    <FooterComponent />
                </section>
            )}
        </>
    );
}

export default withRouter(App);
