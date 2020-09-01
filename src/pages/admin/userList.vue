<template>
    <div>
        <b-table
                head-variant="light"
                table-variant="light"
                fixed="fixed"
                :fields="fields"
                :items="items">
            <template v-slot:cell(id)="data">
                <b-button :to="{name: 'userEdit', params: {id: data.value}}">Права</b-button>
                <b-button v-on:click="deleteUser(data.value)">Удалить</b-button>
            </template>
        </b-table>
    </div>
</template>

<script>
    export default {
        created() {
            this.getRequest()
        },
        data(){
            return {
                fields: [
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
                        sortable: true
                    },
                    {
                        label: 'Password',
                        key:'password',
                        sortable: true
                    },
                    {
                        label: 'Actions',
                        key:'id',
                        sortable: false
                    },
                ],
                items: [],
            };
        },
        methods:{
            async getRequest() {
                await this.axios.get('http://api.dev.cmtyomg.com/cto1/user/list',
                ).then((response) => {
                    this.items = response.data.data;

                })
            },
            async deleteUser(id){
                await this.axios.delete('', {
                    data:{
                        id:id,}})
            },
        }
    };
</script>