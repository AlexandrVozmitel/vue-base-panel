<template>
    <div>
        <b-row class="text-center">
            <b-col>
                <b-card>
                    <b-row>
                        <b-col>
                            <b-card>
                                <b-input-group>
                                    <b-col>
                                        <label>Name</label>
                                        <b-form-input v-model="name">

                                        </b-form-input>
                                        <label>Code</label>
                                        <b-form-input v-model="code">

                                        </b-form-input>
                                    </b-col>
                                </b-input-group>
                            </b-card>
                        </b-col>
                        <b-col>
                                <b-button class="but" v-on:click="changeGroup">Изменить</b-button>
                        </b-col>
                    </b-row>
                </b-card>
            </b-col>
        </b-row>
    </div>
</template>
<style>

</style>

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
        data: () => ({
            code: '',
            name: '',
        }),
        methods: {
            async changeGroup() {
                await this.axios.put('/host/group/' + this.group_id, {
                    name: this.name,
                    code: this.code,
                })
            },
            async getRequest() {
                await this.axios.get('/host/group/' + this.group_id)
                    .then((response) => {
                        let data = response.data.data;

                        this.code = data.code;
                        this.name = data.name;
                    })
            },
        },

    };
</script>
<style>
    .but{
        margin-top: auto;
    }
</style>