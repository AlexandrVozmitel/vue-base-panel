<template>
    <div>
        <b-table
                head-variant="light"
                table-variant="light"
                fixed="fixed"
                :fields="fields"
                :items="items">
            <template v-slot:cell(actions)="data">
                <b-button :to="{name: 'user-info', params: {id: data.value},}">Изменить</b-button>
            </template>
        </b-table>
    </div>
</template>

<script>
    export default {
        data(){
            return {
                fields: [
                    {
                        label: 'Id',
                        key: 'id',
                        sortable: false
                    },
                    {
                        label: 'Name',
                        key: 'name',
                        sortable: true
                    },
                    {
                        label: 'Age',
                        key:'age',
                        type: 'number',
                        sortable: true
                    },
                    {
                        label: 'Login',
                        key:'login',
                        sortable: true
                    },
                    {
                        label: 'Password',
                        key:'password',
                        sortable: false
                    },
                    {
                        label: 'Actions',
                        key:'actions',
                        sortable: false
                    },
                ],
                items: [
                    {id:1, name:"John",age:20,login: 'Top',password:'123',actions:1},
                    {id:2, name:"Jane",age:24,login: 'Angel',password: '123',actions:2},
                    {id:3, name:"Susan",age:16,login: 'Death',password: '123',actions:3},
                ],
            };
        },
    };
</script>