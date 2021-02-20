<template>
    <v-app>
<!--        <v-navigation-drawer-->
<!--                app-->
<!--                v-model="drawer"-->
<!--                :mini-variant.sync="$store.getters.navOpt.mini"-->
<!--                fixed-->
<!--                floating-->
<!--                v-bind:expand-on-hover="$store.getters.navOpt.hover"-->
<!--                dark-->
<!--                v-bind:permanent="$store.getters.navOpt.permanent"-->
<!--        >-->
<!--            <v-list-item class="px-2">-->
<!--                <v-list-item-avatar>-->
<!--                    <v-icon x-large>-->
<!--                        mdi-account-circle-->
<!--                    </v-icon>-->
<!--                </v-list-item-avatar>-->
<!--                <v-list-item-title>{{ this.$store.getters.NAME }}</v-list-item-title>-->
<!--                <v-btn-->
<!--                        icon-->
<!--                        v-on:click="$store.commit('setOptMini',{data:!$store.getters.navOpt.mini}) "-->
<!--                >-->
<!--                    <v-icon>mdi-chevron-left</v-icon>-->
<!--                </v-btn>-->
<!--            </v-list-item>-->
<!--            <v-divider></v-divider>-->
<!--            <v-list-item :exact=true class="text-decoration-none" v-for="item in menu" :key="item.name" :to="{name:`${item.route.name}`}">-->
<!--                <v-list-item-icon class="text-decoration-none">-->
<!--                    <v-icon>{{ item.icon }}</v-icon>-->
<!--                </v-list-item-icon>-->
<!--                <v-list-item-content class="text-decoration-none">-->
<!--                    <v-list-item-title>{{ item.name }}</v-list-item-title>-->
<!--                </v-list-item-content>-->
<!--            </v-list-item>-->
<!--        </v-navigation-drawer>-->
        <v-app-bar app dark>
            <v-app-bar-nav-icon @click="drawer = true"></v-app-bar-nav-icon>
            <v-btn icon @click="getColumn()" v-on:click="getCards()"><v-icon>mdi-reload</v-icon></v-btn>
            <v-spacer></v-spacer>
            <v-toolbar-items>
                <img alt="" v-if="!$store.getters.phone" width="150px" @click="$router.push({name: 'home'})"
                     src="https://cdn.discordapp.com/attachments/675744857146392608/810894246621085717/eTCHrqPHL9U.png"/>
                <img alt="" v-if="$store.getters.phone" width="60px" @click="$router.push({name: 'home'})"
                     src="https://cdn.discordapp.com/attachments/675744857146392608/810908641049313300/eTCHrqPHL91U.png"/>
            </v-toolbar-items>
        </v-app-bar>
        <v-content>
            <v-container fluid>
                <slot/>
            </v-container>
        </v-content>
    </v-app>
</template>

<script>
    export default {
        data: () => ({
            menu: [
                {
                    name: 'Группы хостов',
                    route: {
                        name: 'home'
                    },
                },
                {
                    name: 'Пользователи',
                    route: {
                        name: 'home'
                    },
                }
            ]
        }),
        created() {
            this.isPhone()
            window.addEventListener("resize", this.isPhone)
        },
        destroyed() {
            window.removeEventListener("resize", {})
        },
        methods:{
            isPhone() {
                if (window.innerWidth >= 600) {
                    this.$store.commit('set', {type: "phone", data: false})
                } else {
                    this.$store.commit('set', {type: "phone", data: true})
                }
            },
            getColumn() {
                this.axios.get("/bigCardGet.php")
                    .then((response) => {
                        this.$store.commit('set', {type: "bigCards", data:response.data.data})
                    })
            },
            getCards() {
                this.axios.get("/smallCardGet.php")
                    .then((response) => {
                        this.$store.commit('set', {type: "smallCards", data:response.data.data})
                    })
            },
        },
    }
</script>