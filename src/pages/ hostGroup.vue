<template>
    <div>
        <b-table
                head-variant="light"
                table-variant="light"
                fixed="fixed"
                :fields="fields"
                :items="items">
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
                        label: 'Code',
                        key:'code',
                        sortable: true
                    },
                    {
                        label: 'Id',
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
        }
    };
</script>