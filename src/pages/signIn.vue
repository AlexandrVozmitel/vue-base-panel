<template>
    <div>
        <b-form @submit.prevent="login">
            <h3>Sign In</h3>

            <b-form-group
                label="Login"
            >
                <b-form-input v-model="form.login"></b-form-input>
            </b-form-group>
            <b-form-group
                label="Password"
            >
                <b-form-input v-model="form.password" type="password"></b-form-input>
            </b-form-group>

            <b-button block type="submit" variant="dark">Sign In</b-button>

            <b-row class="mt-3">
                <b-col>
                    <router-link :to="{name: 'signUp'}">Sign up?</router-link>
                </b-col>
                <b-col class="text-right">
                    <router-link :to="{name: 'passwordReset'}">Forgot password ?</router-link>
                </b-col>
            </b-row>
        </b-form>
    </div>
</template>
<script>
    export default {
        data: () => ({
            form: {
                login:'',
                password:'',
            },
        }),
        methods: {
            login() {
                this.axios.post('/login', this.form)
                    .then(function (response) { // handle success
                        console.log('response', response);
                    })
                    .catch(function (error) { // handle error
                        console.log('error', 'response', error.response);
                        // request info
                        console.log('error', 'request', error.config);
                    });
            },
        },
    };
</script>
