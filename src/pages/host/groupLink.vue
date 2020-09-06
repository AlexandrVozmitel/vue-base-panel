<template>
    <div>
        <b-table
                head-variant="light"
                table-variant="light"
                fixed="fixed"
                :fields="fields"
                :items="items"
                show-empty
        >
            <template v-slot:empty>
                <h4 class="text-center">Нет данных</h4>
            </template>
        </b-table>
    </div>
</template>

<script>
    export default {
        created() {
            this.getRequest()
        },
        props: {
            group_id: {
                required: true,
            },
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
                        label: 'Type',
                        key:'type',
                        sortable: true
                    },
                    {
                        label: 'Ip',
                        key:'ip',
                        sortable: true
                    },
                    {
                        label: 'Domain',
                        key:'domain_name',
                        sortable: true
                    },
                    {
                        label: '',
                        key:'action',
                    },
                ],
                items: [],
            };
        },
        methods:{
            async getRequest() {
                this.id = window.location.pathname.split("/")[2];
                await this.axios.get('/host/group-link',{
                    params:{
                        group_id:this.id,
                    }
                    }).then((response) => {
                    this.items = response.data.data;

                })
            },
        }
    };
</script>