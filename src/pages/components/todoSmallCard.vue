<template>
    <v-card  rounded style="font-size:14px;cursor: move; margin-bottom: 20px; width: 100%">
        <v-row>
            <v-col cols="1" style="padding-left: 15px">
                <v-icon dense>mdi-card-text-outline</v-icon>
                {{index}}
            </v-col>
            <v-col cols="9">
                <div>{{this.info.message}}</div>
                <h6 style="margin-top: 10px">Added by {{this.info.author}}</h6>
            </v-col>
            <v-col cols="2" style="padding-left: 5px;padding-top: 2px">
                <v-menu rounded="lg" left offset-y bottom transition="slide-y-transition">
                    <template v-slot:activator="{ attrs,on }">
                        <v-btn icon v-bind="attrs" v-on="on">
                            <v-icon>mdi-dots-horizontal</v-icon>
                        </v-btn>
                    </template>
                    <v-list dense>
                        <v-list-item>
                            <v-list-item-title>Архивировать карточку</v-list-item-title>
                        </v-list-item>
                        <v-list-item>
                            <v-dialog transition="dialog-top-transition" max-width="450">
                                <template v-slot:activator="{ on, attrs }">
                                    <v-list-item-title v-bind="attrs" v-on="on">
                                        Изменить карточку
                                    </v-list-item-title>
                                </template>
                                <template v-slot:default="dialog">
                                    <v-card light>
                                        <v-toolbar dark>
                                            Измение карточки
                                        </v-toolbar>
                                        <v-container>
                                            <b>Note</b>
                                            <v-textarea v-model="message" background-color="#ffffff" row-height="3"
                                                        style="min-height:130px;margin-top: 15px"  outlined
                                                        label="Enter a note"></v-textarea>
                                        </v-container>
                                        <v-card-actions class="justify-end">
                                            <v-btn outlined color="success" v-on:click="changeCard()" @click="dialog.value = false">
                                                Change card
                                            </v-btn>
                                            <v-spacer></v-spacer>
                                            <v-btn outlined v-on:click="this.message=this.info.message" @click="dialog.value = false">Close</v-btn>
                                        </v-card-actions>
                                    </v-card>
                                </template>
                            </v-dialog>
                        </v-list-item>
                        <v-list-item>
                            <v-list-item-title @click="delCard()">Удалить карточку</v-list-item-title>
                        </v-list-item>
                    </v-list>
                </v-menu>
            </v-col>
        </v-row>
    </v-card>
</template>

<script>
    export default {
        name: "todoSmallCard",
        props:{
            info:{
                require:true,
            },
            index:{
                require:true,
            },
        },
        data() {
            return {
                message:this.info.message,
            }
        },
        methods:{
            getCards() {
                this.axios.get("/smallCardGet.php")
                    .then((response) => {
                        this.$store.commit('set', {type: "smallCards", data: response.data.data})
                    })
            },
            delCard() {
                this.axios.post("/smallCardDel.php", {
                    id: this.info.id
                })
                    .then((response) => {
                        response.data
                        this.getCards()
                    })
            },
            changeCard() {
                this.axios.post("/smallCardChange.php", {
                    id: this.info.id,
                    message:this.message
                })
                    .then((response) => {
                        response.data
                        this.message=this.info.message
                    })
            },
        }
    }
</script>

<style scoped>

</style>