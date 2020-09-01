<template>
    <div>
        <b-table
                head-variant="light"
                table-variant="light"
                fixed="fixed"
                :fields="fields"
                :items="items">
            <template v-slot:cell(id)="data">
                <b-button :to="{name: 'groupEdit', params: {group_id: data.value}}">Изменение</b-button>
                <b-button v-on:click="deleteGroup(data.value)">Удалить</b-button>
                <b-button :to="{name: 'groupLink', params: {group_id: data.value}}">Связи</b-button>
            </template>
        </b-table>
    </div>
</template>

<script>
    export default {
        created() {
            this.getRequest()
        },
        data: () => ({
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
        }),
        methods:{
            async getRequest() {
                await this.axios.get('http://api.dev.cmtyomg.com/cto1/host/group',
                ).then((response) => {
                    this.items = response.data.data;

                })
            },
            async deleteGroup(id){
                await this.axios.delete('http://api.dev.cmtyomg.com/cto1/host/group', {
                    data:{
                        id:id,}})
            },
        }
    };
</script>