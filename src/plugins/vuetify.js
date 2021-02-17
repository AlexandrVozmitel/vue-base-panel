import Vue from 'vue'
import Vuetify from 'src/plugins/vuetify.js'
import 'vuetify/dist/vuetify.min.css'
import '@mdi/font/css/materialdesignicons.css'

Vue.use(Vuetify)

export default new Vuetify({
    theme: { dark: false },
    icons: {
        iconfont: 'mdi', // default - only for display purposes
    },
})