/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect } from 'react';
import { Redirect, Route, withRouter } from 'react-router-dom';

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
    AdminOrderDetailPage,
    AdminLoginPage,
    Mypage,
    AdminPrintPage,
    AdminPointSetting,
    Policypage,
    CashPage,
} from 'pages';
import { FooterComponent } from 'components';
import { HeaderContainer, AdminHeaderContainer } from 'containers';
import { getCountryAction } from 'store/part';
import { useDispatch } from 'react-redux';
import AdminUserDetailPage from 'pages/admin/AdminUserDetailPage';
import { getMemberCheckAction } from 'store/member';
import Detail from 'components/user/support/Detail';

function App({ location }) {
    const dispatch = useDispatch();
    const token = localStorage.getItem('accessToken');
    // localStronge에 토큰값이 있으면 token check
    useEffect(() => {
        if (token) {
            dispatch(getMemberCheckAction());
        }
    }, [token]);

    // 최초 로딩시 계산기 나라목록 가져오기.
    useEffect(() => {
        dispatch(getCountryAction());
    }, []);
    //   console.log('location : ', location);
    const { pathname } = location;
    const BASE_ADMIN_URL = '/admin';
    return (
        <>
            {pathname.startsWith(BASE_ADMIN_URL) ? (
                <section className="adminWrap">
                    <Route component={AdminLoginPage} path="/admin" exact />
                    <Route component={AdminPrintPage} path="/admin/print" />
                    {pathname === '/admin' || pathname === '/admin/print' ? null : <AdminHeaderContainer />}
                    <Route component={AdminUserPage} path="/admin/user" exact />
                    <Route component={AdminUserDetailPage} path="/admin/user/:id" />
                    <Route component={AdminOrderPage} path="/admin/order" exact />
                    <Route component={AdminOrderDetailPage} path="/admin/order/:id" />
                    <Route component={AdminFAQPage} path="/admin/faq" />
                    <Route component={AdminChargePage} path="/admin/insert" />
                    <Route component={AdminPointSetting} path="/admin/pointsetting" />
                    {/* TODO: 계속 랜더링됨... 이유 확인중 */}
                    {/* <Redirect path="*" to="/admin" /> */}
                </section>
            ) : (
                <section>
                    <HeaderContainer />
                    <Route component={MainPage} path="/" exact />
                    <Route component={CostPage} path="/cost" />
                    <Route component={GuidePage} path="/guide" />
                    <Route component={ApplyPage} path="/apply" exact />
                    <Route component={ApplyPage} path="/apply/:orderNumber" />
                    <Route component={RegisterPage} path="/register" />
                    <Route component={SupportPage} path="/support" exact />
                    <Route component={Detail} path="/support/:id" />
                    <Route component={Mypage} path="/mypage" exact />
                    <Route component={CashPage} path="/mypage/cash" />
                    <Route component={Policypage} path="/policy" />
                    {/* TODO: 새로고침시 전부 / 로 이동되어 주석처리 */}
                    {/* <Redirect path="*" to="/" /> */}
                    <FooterComponent />
                </section>
            )}
        </>
    );
}

export default withRouter(App);
