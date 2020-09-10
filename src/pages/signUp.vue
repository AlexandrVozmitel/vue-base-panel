<template>
    <div class="box ml-auto mr-auto">
        <b-form @submit.prevent="register">
            <h3>Sign Up</h3>

            <b-form-group
                    label="Full name"
            >
                <b-form-input v-model="form.name" required></b-form-input>
            </b-form-group>
            <b-form-group
                    label="Email"
            >
                <b-form-input v-model="form.email" type="email" required></b-form-input>
            </b-form-group>
            <b-form-group
                    label="Login"
            >
                <b-form-input v-model="form.login" required></b-form-input>
            </b-form-group>

            <b-form-group
                    label="Password"
            >
                <b-form-input v-model="form.password" type="password" :state="passwordValid()" required></b-form-input>
            </b-form-group>

            <b-form-group
                    label="Confirm the password"
            >
                <b-form-input v-model="confirm.password" v-on:input="boo()" :state="passwordConfirm()" type="password"
                              required></b-form-input>
            </b-form-group>

            <b-button block type="submit" variant="dark">Sign Up</b-button>

            <p class="forgot-password text-right">
                Already registered
                <router-link :to="{name: 'signIn'}">Sign in?</router-link>
            </p>
        </b-form>
    </div>
</template>
<script>
    export default {
        data: () => ({
            confirm: {
                password: '',
            },
            form: {
                login: '',
                name: '',
                email: '',
                password: '',
            },
            check: false,
        }),
        methods: {
            register() {
                this.axios.post('/register', this.form)
                    .then(function (response) { // handle success
                        console.log('response', response);
                    })
                    .catch(function (error) { // handle error
                        console.log('error', 'response', error.response);
                        // request info
                        console.log('error', 'request', error.config);
                    });
            },
            passwordConfirm() {
                if (this.check) {
                    if (this.form.password === this.confirm.password) {
                        return true
                    } else {
                        return false
                    }
                }
            },
            boo() {
                this.check = true
            },
            passwordValid() {
            }
        },
    };
</script>