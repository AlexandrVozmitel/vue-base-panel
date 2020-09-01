<template>
    <div class="box ml-auto mr-auto">
        <form>
            <h3>Sign Up</h3>

            <b-form-group
                    label="Full name"
            >
                <b-form-input v-model="name"></b-form-input>
            </b-form-group>
            <b-form-group
                    label="Email"
            >
                <b-form-input v-model="email"></b-form-input>
            </b-form-group>
            <b-form-group
                    label="Login"
            >
                <b-form-input v-model="login"></b-form-input>
            </b-form-group>

            <b-form-group
                    label="Password"
            >
                <b-form-input v-model="password"></b-form-input>
            </b-form-group>

            <b-button block variant="dark" v-on:click="register" :to="{name: 'home'}">Sign Up</b-button>

            <p class="forgot-password text-right">
                Already registered
                <router-link to="/sign-in">sign in?</router-link>
            </p>
        </form>
    </div>
</template>
<script>
	export default {
		data: () => ({
			login:'',
			name:'',
			email:'',
			password:'',
		}),
		methods: {
			async register() {
				await this.axios.post('http://api.dev.cmtyomg.com/cto1/user',{
						login: this.login,
                        password: this.password,
                        email: this.email,
                        name: this.name,
					}
				)
			},
		},

	};
</script>