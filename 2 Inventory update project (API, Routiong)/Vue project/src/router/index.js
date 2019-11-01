import Vue from 'vue'
import Router from 'vue-router'
import ItemDetails from "../components/views/ItemDetails";
import Inventory from "../components/views/Inventory";

Vue.use(Router);

export default new Router({
    // mode: 'history',
    routes: [{
            path: '/',
            component: Inventory
        },
        {
            path: '/ItemDetails/:id',
            component: ItemDetails
        }
    ]
})