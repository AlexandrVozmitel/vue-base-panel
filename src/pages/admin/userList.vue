<template>
    <div>
        <b-table
                head-variant="light"
                table-variant="light"
                fixed="fixed"
                :fields="fields"
                :items="items">
            <template v-slot:cell(actions)="row">
                <b-button :to="{name: 'userEdit', params: {id: row.item.id}}">Изменить</b-button>
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
                        label: 'Login',
                        key:'login',
                        sortable: true
                    },
                    {
                        label: 'Email',
                        key:'email',
                        sortable: false
                    },
                    {
                        label: 'Age',
                        key:'age',
                        type: 'number',
                        sortable: true
                    },
                    {
                        label: 'Actions',
                        key:'actions',
                        sortable: false
                    },
                ],
                items: [
                    {id:1, name:"John", login: 'Top', email: 'John@test.ru', age: 20},
                    {id:2, name:"Jane", login: 'Angel', email: 'Jane@mail.com', age: 24},
                    {id:3, name:"Susan", login: 'Death', email: 'Susan@test.net', age: 16},
                ],
            };
        },
    };
</script>