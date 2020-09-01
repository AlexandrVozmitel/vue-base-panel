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
        data: () => ({
            id: window.location.pathname.split("/")[2],
            codes:'',
            names:'',
        }),
        methods: {
            async changeGroup() {
                await this.axios.put('http://api.dev.cmtyomg.com/cto1/host/group', {
                    params: {
                        id: this.id,
                        name: this.names,
                        code: this.codes,
                    }
                })
            },
            async getRequest() {
                await this.axios.get('http://api.dev.cmtyomg.com/cto1/host/group',
                ).then((response) => {
                    this.names = response.data.data[this.id-1].name;
                    this.codes = response.data.data[this.id-1].code;
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