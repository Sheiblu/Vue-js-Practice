import Vuex from 'vuex'
import Vue from 'vue'

Vue.use(Vuex);

var store = new Vuex.Store({
    state: {
        inventory: [],
        card: []
    },
    getters: {
        getInventory(state) {
            return state.inventory
        },
        getCard(state) {
            return state.card
        },
    },
    mutations: {
        addToCard(state, payload) {
            state.card.push(payload);
        },
        removeToCard(state, index) {
            state.card.splice(index, 1);
        },
        setInventory(state, payload) {
            state.inventory = payload
        }
    }
});

export default store;