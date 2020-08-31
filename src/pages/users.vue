<template>
    <div>
        <b-table
                head-variant="light"
                table-variant="light"
                fixed="fixed"
                :fields="fields"
                :items="items">
            <template v-slot:cell(id)="data">
                <b-button  v-b-modal.data.value>Права</b-button>
                <b-modal :id="data.value" title="Изменение">
                    <user-info/>
                </b-modal>
                <b-button :v-on:click="deleteUser(data.value)">Удалить</b-button>
            </template>
        </b-table>
    </div>
</template>

<script>
    import UserInfo from "./userInfo";
    export default {
        components: {UserInfo},
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
                        label: 'Code',
                        key:'code',
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
                await this.axios.get('http://api.dev.cmtyomg.com/cto1/host/group',
                ).then((response) => {
                    this.items = response.data.data;

                })
            },
            async deleteUser(id){
                await this.axios.delete('http://api.dev.cmtyomg.com/cto1/host/group-link', {
                    data:{
                        id:id,}})
            },
        }
    };
</script>