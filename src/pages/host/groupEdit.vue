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
                                        <b-form-input v-model="names">

                                        </b-form-input>
                                        <label>Code</label>
                                        <b-form-input v-model="codes">

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
            codes: '',
            names: '',
        }),
        methods: {
            async changeGroup() {
                await this.axios.put('/host/group', {
                    data: {
                        id: this.group_id,
                        name: this.names,
                        code: this.codes,
                    }
                })
            },
            async getRequest() {
                await this.axios.get('/host/group').then((response) => {
                    response.data.data.forEach((item) => {
                        if (item.id == this.group_id) {
                            console.log(item);
                            this.names = item.name;
                            this.codes = item.code;
                        }
                    });
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