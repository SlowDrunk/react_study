import React from 'react'
import { BrowserRouter as HashRouter, Route, Redirect, Switch } from 'react-router-dom'
import Home from '@/router/components/Home'
import About from '@/router/components/About'
import NotFound from './components/NotFound';
import MyNavBar from "@/router/MyNavBar";
import TestLoginForm from '@/components/TestLoginForm';

export default function MyRouter() {
    const isLogin = () => {
        return localStorage.getItem('userName') ? true : false;
    }
    return (
        <div>
            <HashRouter>
                <MyNavBar></MyNavBar>
                <Switch>
                    {/* 测试一下路由拦截 */}
                    <Route path='/home' render={() => isLogin() ? <Home></Home> : <Redirect to='/login'></Redirect>} ></Route >
                    <Route path='/about' component={About} ></Route >
                    <Route path='/login' component={TestLoginForm}></Route >
                    {/* 此处的匹配是模糊匹配，任何路径都会走到这里 */}
                    <Redirect from='/' to='home' exact></Redirect>
                    {/* 404页面 */}
                    <Route component={NotFound}></Route>
                </Switch>
            </HashRouter>
        </div>
    )
}
