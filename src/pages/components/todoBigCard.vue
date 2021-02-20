<template>
    <v-card :id="info.id" color="#e1e4e8" style="margin-right: 20px;cursor: move;" light height="100%" min-width="335px"
            max-width="335px">
        <v-card-title>
            <v-row>
                <v-col cols="1">
                    <v-badge color="grey" inline
                             :content="$store.getters.smallCards.filter(c=>c.colsId===this.info.id).length"
                             left/>
                </v-col>
                <v-col cols="8" style="font-size:16px;line-height: 1.2;">
                    <b>{{this.info.theme}}({{this.info.id}})</b>
                </v-col>
                <v-col cols="3" class="d-flex flex-auto flex-row  position-relative">
                    <v-btn icon @click="plus=true">
                        <v-icon>mdi-plus</v-icon>
                    </v-btn>
                    <v-menu rounded="lg" left offset-y bottom transition="slide-y-transition">
                        <template v-slot:activator="{ attrs,on }">
                            <v-btn icon v-bind="attrs" v-on="on">
                                <v-icon>mdi-dots-horizontal</v-icon>
                            </v-btn>
                        </template>
                        <v-list dense>
                            <v-list-item>
                                <v-list-item-title>Архивировать все карточки</v-list-item-title>
                            </v-list-item>
                            <v-list-item>
                                <v-dialog transition="dialog-top-transition" max-width="450">
                                    <template v-slot:activator="{ on, attrs }">
                                        <v-list-item-title v-bind="attrs" v-on="on">
                                            Изменить колонку
                                        </v-list-item-title>
                                    </template>
                                    <template v-slot:default="dialog">
                                        <v-card light>
                                            <v-toolbar dark>
                                                Column name
                                            </v-toolbar>
                                            <v-container>
                                                <b>Тема</b>
                                                <v-text-field v-model="info.theme" dense outlined
                                                              placeholder="Enter a text"></v-text-field>
                                            </v-container>
                                            <v-card-actions class="justify-end">
                                                <v-btn outlined color="success" v-on:click="changeColumn()" @click="dialog.value = false">
                                                    Change column
                                                </v-btn>
                                                <v-spacer></v-spacer>
                                                <v-btn outlined @click="dialog.value = false">Close</v-btn>
                                            </v-card-actions>
                                        </v-card>
                                    </template>
                                </v-dialog>
                            </v-list-item>
                            <v-list-item>
                                <v-list-item-title style="cursor: pointer" @click="delColumn()">Удалить колонку</v-list-item-title>
                            </v-list-item>
                        </v-list>
                    </v-menu>
                </v-col>
            </v-row>
        </v-card-title>
        <v-container style="overflow-y: auto;  height: 88%; width: 100%">
            <div v-if="plus">
                <v-textarea v-model="message" background-color="#ffffff" row-height="3"
                            style="max-height: 370px; overflow-y: auto" auto-grow outlined
                            label="Enter a note"></v-textarea>
                <v-btn @click="addSmallCard()" v-on:click="plus=false" rounded width="50%" color="success">
                    Add
                </v-btn>
                <v-btn @click="plus=false" rounded width="50%">
                    Cancel
                </v-btn>
            </div>
            <draggable v-bind="dragOptions" style="margin-top: 20px; height: 90%">
                <todoSmallCard group="small"
                               v-for="(item, index) in $store.getters.smallCards.filter(c=>c.colsId===this.info.id)"
                               :key="item.id" :index="index"
                               :info="item"></todoSmallCard>
            </draggable>
        </v-container>
    </v-card>
</template>
<script>
    import todoSmallCard from "./todoSmallCard";
    import draggable from "vuedraggable";

    export default {
        name: "todoBigCard",
        components: {todoSmallCard, draggable},
        props: {
            info: {
                require: true,
            },
        },
        created() {
        },
        data() {
            return {
                message: '',
                cols: 9,
                plus: false,
                cards: [],
            }
        },
        methods: {
            addSmallCard() {
                this.axios.post("/smallCardAdd.php", {
                    author: this.$store.getters.NAME, colsId: this.info.id, message: this.message
                }).then((response) => {
                    response.data
                    this.getCards()
                    this.message = ""
                })
            },
            changeColumn() {
                this.axios.post("/bigCardChange.php", {
                    id: this.info.id,
                    theme:this.info.theme
                })
                    .then((response) => {
                        response.data
                    })
            },
            getCards() {
                this.axios.get("/smallCardGet.php")
                    .then((response) => {
                        this.$store.commit('set', {type: "smallCards", data: response.data.data})
                    })
            },
            getColumn() {
                this.axios.get("/bigCardGet.php")
                    .then((response) => {
                        this.$store.commit('set', {type: "bigCards", data: response.data.data})
                    })
            },
            delColumn() {
                this.axios.post("/bigCardDel.php", {
                    id: this.info.id
                })
                    .then((response) => {
                        response.data
                        this.getColumn()
                    })
            },
        },
        computed: {
            dragOptions() {
                return {
                    animation: 200,
                    group: "description",
                    disabled: false,
                    ghostClass: "ghost"
                };
            }
        },
    }
</script>

<style scoped>

</style>