<template>
    <v-container fluid style="height: 88vh">
        <div class="d-flex flex-auto flex-row  position-relative" style=" overflow: auto; width: 100vw; height:100%">
            <draggable group="big" v-bind="dragOptions" class="d-flex flex-auto flex-row  position-relative">
                <todo-big-card v-for="item in this.$store.getters.bigCards" :key="item.id" :info="item"
                ></todo-big-card>
            </draggable>
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
        components: {todoBigCard, draggable},
        created() {
            this.getColumn()
            this.getCards()
        },
        data() {
            return {
                themeAdd: '',
               // smallCards: this.this.$store.getters.smallCards,
            }
        },
        methods: {
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
            addColumn(){
              this.axios.post("/bigCardAdd.php",{
                  theme:this.themeAdd
              }).then((response)=>{
                  response.data
                  this.getColumn()
                  this.themeAdd=""
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
<style>
</style>