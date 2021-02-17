import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export default new Vuex.Store({
    state: {
        navbarOpt: {
            mini: true,
            permanent: true,
            hover: true
        },
        admin:false,
        servers: [],
        tickets: [],
        messages:[],
        bills:[],
        news:[],
        name: "Имя",
        newsAdd: false,
        serverAdd: false,
        ticketAdd:false,
        phone: false,
        dialogs: [
            { d:false,},
            {d:false,},
            {d:false,},
        ],
    },
    getters: {
        navOpt: state => {
            return state.navbarOpt
        },
        Tickets: state => {
            return state.tickets
        },
        phone: state => {
            return state.phone
        },
        messages:state => {
            return state.messages
        },
        admin:state => {
            return state.admin
        },
        NAME: state => {
            return state.name
        },
        Servers: state => {
            return state.servers
        },
        serverAdd: state => {
            return state.serverAdd
        },
        ticketAdd: state => {
            return state.ticketAdd
        },
        newsAdd: state => {
            return state.newsAdd
        },
        news: state => {
            return state.news
        },
        bills: state => {
            return state.bills
        },
        dialogs:state => {
            return state.dialogs
        }
    },
    mutations: {
        set(state,  data,) {
            state[data.type] = data.data;
        },
        add(state, data) {
            state[data.type].data = state[data.type].push(data)
        },
        addTicket(state, data) {
            state[data.type].data = state[data.type].push(data)
        },
        clear(state, data) {
            state[data.type] = []
        },
        setOptMini(state, data) {
            state.navbarOpt.mini = data.data;
        },
        lockTicket(state, data){
            state["tickets"].find(item=> item.data.id === data.data.id).data.status = 1
        },
        setd(state, data) {
            state.dialogs[data.n].d = data.data;
        },
    },
});