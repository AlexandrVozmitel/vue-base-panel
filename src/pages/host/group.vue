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
            <template v-slot:cell(action)="row">
                <b-button :to="{name: 'hostGroupEdit', params: {group_id: row.item.id}}">Изменение</b-button>
                <b-button v-on:click="deleteGroup(row.item.id)">Удалить</b-button>
                <b-button :to="{name: 'hostGroupLink', params: {group_id: row.item.id}}">Связи</b-button>
            </template>
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
                    label: '',
                    key:'action',
                },
            ],
            items: [],
        }),
        methods:{
            async getRequest() {
                await this.axios.get('/host/group').then((response) => {
                    this.items = response.data.data;
                })
            },
            deleteGroup(id) {
                this.axios.delete('/host/group/' + id)
                    .then((response) => {
                        if (response.data) {
                            this.items.find((element, index, array) => {
                                if (element && element.id === id) {
                                    array.splice(index, 1);
                                }
                            })
                        }
                    });
            },
        }
    };
</script>