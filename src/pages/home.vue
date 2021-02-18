<template>
    <v-container fluid style="height: 88vh">
        <div class="d-flex flex-auto flex-row  position-relative" style=" overflow: auto; width: 100vw; height:100%">
               <draggable group="big" v-bind="dragOptions" class="d-flex flex-auto flex-row  position-relative"> <todo-big-card v-for="item in $store.getters.bigCards" :key="item.id" :info="item.data"
                               :items="cardsCheck(item.id)"></todo-big-card></draggable>
            <v-spacer></v-spacer>
            <v-dialog transition="dialog-top-transition" max-width="450">
                <template v-slot:activator="{ on, attrs }">
                    <v-btn color="#121212" min-width="335px" v-bind="attrs" v-on="on" style="font-size:14px">
                        <v-icon>mdi-plus</v-icon>
                        Add column
                    </v-btn>
                </template>
                <template v-slot:default="dialog">
                    <v-card light>
                        <v-toolbar dark>
                            Add a column
                        </v-toolbar>
                        <v-container>
                            <b>Column name</b>
                            <v-text-field v-model="themeAdd" dense outlined
                                          placeholder="Enter a column name"></v-text-field>
                        </v-container>
                        <v-card-actions class="justify-end">
                            <v-btn outlined color="success" v-on:click="addColumn()" @click="dialog.value = false">
                                Create column
                            </v-btn>
                            <v-spacer></v-spacer>
                            <v-btn outlined v-on:click="themeAdd=''" @click="dialog.value = false">Close</v-btn>
                        </v-card-actions>
                    </v-card>
                </template>
            </v-dialog>
        </div>
    </v-container>
</template>
<script>
    import todoBigCard from "./components/todoBigCard";
    import draggable from "vuedraggable";
    export default {
        name: 'home',
        components: {todoBigCard,draggable},
        data() {
            return {
                themeAdd: '',
                smallCards: this.this.$store.getters.smallCards,
            }
        },
        methods: {
            cardsCheck(id) {
                let trueCard = []
                for (const prop in this.smallCards) {
                    if (this.items1[prop].cardId === id) {
                        trueCard.push({
                            id: this.items1[prop].id,
                            author: this.items1[prop].author,
                            message: this.items1[prop].message,
                            cols: this.cols,
                        })
                    }
                }
                return trueCard
            },
            addColumn() {
                this.$store.commit("add", {
                    type: 'bigCards',
                    data: {id: Math.random(Math.random() * Math.floor(1000)*1000), theme: this.themeAdd}
                })
                this.themeAdd = ''
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
<style>
</style>