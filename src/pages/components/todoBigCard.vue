<template>
    <v-card hover :id="info.id" color="#e1e4e8" style="margin-right: 20px" light height="100%"  min-width="335px" max-width="335px">
        <v-card-title>
            <v-badge color="grey" inline
                     :content="items.length"
                     left/>
            {{this.info.theme}}
            <v-spacer></v-spacer>
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
                    <v-list-item-title>Заархивировать все карточки</v-list-item-title>
                </v-list-item>
                <v-list-item>
                    <v-list-item-title>Изменить колонку</v-list-item-title>
                </v-list-item>
                <v-list-item>
                    <v-list-item-title>Удалить колонку</v-list-item-title>
                </v-list-item>
            </v-list>
            </v-menu>
        </v-card-title>
        <v-container style="overflow-y: auto;  height: 88%; width: 100%">
        <div v-if="plus">
            <v-textarea v-model="message" background-color="#ffffff" row-height="3" style="max-height: 370px; overflow-y: auto" auto-grow outlined label="Enter a note"></v-textarea>
            <v-btn @click="gs" v-on:click="plus=false" rounded width="50%" color="success">
                Add
            </v-btn>
            <v-btn @click="plus=false" rounded width="50%">
                Cancel
            </v-btn>
        </div>
            <draggable v-bind="dragOptions"  style="margin-top: 20px; height: 90%">
                <todoSmallCard group="small" v-for="(item, index) in items" :key="item.id" :index="index" :info="item"></todoSmallCard>
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
            items:{
                require: true,
            },
        },
        data() {
            return {
                message:'',
                cols:9,
                plus:false,
            }
        },
        methods:{
          gs(){
              this.items.push({id:1, author: this.$store.getters.NAME, colsId:this.info.id, message: this.message,cols:this.cols,})
              this.message=""
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