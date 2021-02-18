<template>
    <v-card  rounded hover style="font-size:14px; margin-bottom: 20px; width: 100%">
        <v-row>
            <v-col cols="1" style="padding-left: 15px">
                <v-icon dense>mdi-card-text-outline</v-icon>
                {{index}}
            </v-col>
            <v-col :cols="this.info.cols">
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
                            <v-list-item-title>Заархивировать карточку</v-list-item-title>
                        </v-list-item>
                        <v-list-item>
                            <v-list-item-title>Изменить карточку</v-list-item-title>
                        </v-list-item>
                        <v-list-item>
                            <v-list-item-title>Удалить карточку</v-list-item-title>
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
    }
</script>

<style scoped>

</style>