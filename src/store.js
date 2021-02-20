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
        change(state, data) {
            state[data.type].data.find(it=>it.id===data.id)
        },
        clear(state, data) {
            state[data.type] = []
        },
        changePosCard(state,data){
            state.smallCards.find(c =>c.id===data.data.id).inde=data.data.inde
            state.smallCards.find(c =>c.id===data.data.id).colsId=data.data.colsId
        },
        moved(state,data){
          state[data.type].find(c =>c.id===data.data.id).inde=data.data.inde
        },
    },
});