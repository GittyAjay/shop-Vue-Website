import Vue from 'vue';
import VueRouter from 'vue-router';
import Dashboard from '../view/admin/Dashboard';
import DashboardPage from '../view/admin/dashboard/DashboardPage';
import settings from '../view/admin/settings/SettingsPage';
import ChatPage from '../view/admin/chat/ChatPage'; 
import coupons from '../view/admin/coupons/CouponsPage';
import customers from '../view/admin/customer/CustomerPage'
import AppPage from '../view/admin/app/AppPage';
import AboutPage from '../view/admin/about/AboutPage';
import blogs from '../view/admin/blogs/BlogPage'
import AppDownload from '../view/admin/app_download/AppDownloadPage'
import ProfilePage from '../view/admin/profile/ProfilePage';
import Sample from '../view/admin/Sample';
import products from '../view/admin/products/ProductPage'
import orders from '../view/admin/order/OrderPage'
import notifications from '../view/admin/notification/NotificationPage'
import Home from '../view/Home'
import SignIn from '../view/SignIn'
import Register from '../view/Register'

Vue.use(VueRouter);

export default new VueRouter({
    routes: [
    
        {
            path: '/',
            name: 'Home',
            component: Home,
        },
        {
            path: '/login',
            name: 'Login',
            component: SignIn
        },
        {
            path: '/register',
            name: 'Register',
            component: Register
        },
        {
            path: '/admin',
            component: Dashboard,
            name: 'Admin',
            meta: {
                requiresAuth: true
            },
            children: [
                {
                    path: 'products',
                    name: 'products',
                    component: products
                },
                {
                    path: 'AppDownload',
                    name: 'AppDownload',
                    component: AppDownload
                },
                {
                    path: 'orders',
                    name: 'orders',
                    component: orders
                },
                {
                    path: 'customers',
                    name: 'customers',
                    component: customers
                },
                {
                    path: 'coupons',
                    name: 'coupons',
                    component: coupons
                },
                {
                    path: 'sample',
                    name: 'Sample',
                    component: Sample
                },
                {
                    path: '/',
                    name: 'Dashboard',
                    component: DashboardPage
                },
                {
                    path: 'blogs',
                    name: 'blogs',
                    component: blogs
                },
                {
                    path: 'settings',
                    name: 'settings',
                    component: settings
                },
                {
                    path: 'notifications',
                    name: 'notifications',
                    component: notifications
                },
                
                {
                    path: 'chating',
                    name: 'Chating',
                    component: ChatPage
                },
                {
                    path: 'app',
                    name: 'App',
                    component: AppPage
                },
                {
                    path: 'about',
                    name: 'About',
                    component: AboutPage
                },
                {
                    path: 'profile',
                    name: 'Profile',
                    component: ProfilePage
                }
            ]
        }
    ],
    mode: 'history'
});
