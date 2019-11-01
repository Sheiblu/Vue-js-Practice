// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import jquery from 'jquery'
import 'bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css'
import router from './router/index'
import store from './store/index'

Vue.config.productionTip = false
window.$ = window.jQuery = jquery


new Vue({
    el: '#app',
    router,
    store,
    components: { App },
    template: '<App/>'
})