import 'core-js/stable';
import 'regenerator-runtime/runtime';
import 'react-app-polyfill/ie9';
import 'react-app-polyfill/stable';
import React, { Children } from 'react';
import { Route } from 'react-router-dom';
import MainPage from './pages/MainPage';
import UsePage from './pages/UsePage';
import CostPage from './pages/CostPage';
import ApplyPage from './pages/ApplyPage';
import SupportPage from './pages/SupportPage';
import RegisterPage from './pages/RegisterPage';
import HeaderComponent from './components/common/HeaderComponent';

function App() {
  return (
    <>
      <>
        <HeaderComponent>{Children}</HeaderComponent>
      </>
      <>
        <Route component={MainPage} path="/" exact />
        <Route component={CostPage} path="/cost" />
        <Route component={UsePage} path="/use" />
        <Route component={ApplyPage} path="/apply" />
        <Route component={SupportPage} path="/support" />
        <Route component={RegisterPage} path="/register" />
      </>
    </>
  );
}

export default App;
