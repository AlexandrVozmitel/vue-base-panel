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
                            <b-button class="but" v-on:click="createGroup">Добавить</b-button>
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
        data: () => ({
            code:'',
            name:'',
        }),
        methods: {
            async createGroup() {
                await this.axios.post('', {
                        name: this.name,
                        code: this.code,
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