// import Vue from 'vue'
import Router from 'vue-router';
import IndexView from './views/IndexView.vue'
import LoginView from './views/LoginView.vue'
import TestView from './views/TestView.vue'
import MainView from './views/MainvVew.vue'
import Mainhome from './views/main/IndexView.vue'
Vue.use(Router)

export default new Router({
    // mode: 'abstract',
    routes: [
        { name: 'home', path: '/index', component: IndexView },
        { name: 'login', path: '/login', component: LoginView },
        { name: 'fabu', path: '/fabu', component: TestView },
        //嵌套路由
        {
            name: 'main',
            path: '/main',
            component: MainView,
            children: [
                { name: 'home', path: 'home', component: Mainhome }
            ]

        },
        { path: '/', redirect: '/index' }
    ]
})