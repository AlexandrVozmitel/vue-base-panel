import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export default new Vuex.Store({
    state: {
        name: "Имя",
        phone: false,
        smallCards:[],
        bigCards:[],
    },
    getters: {
        phone: state => {
            return state.phone
        },
        NAME: state => {
            return state.name
        },
        smallCards:state => {
            return state.smallCards
        },
        bigCards:state => {
            return state.bigCards
        }
    },
    mutations: {
        set(state,  data,) {
            state[data.type] = data.data;
        },
        add(state, data) {
            state[data.type].data = state[data.type].push(data)
        },
        clear(state, data) {
            state[data.type] = []
        },
    },
});