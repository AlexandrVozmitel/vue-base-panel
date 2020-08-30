<template>
    <div>
        <b-form>
            <h3>Sign In</h3>

            <b-form-group
                label="Login"
            >
                <b-form-input></b-form-input>
            </b-form-group>
            <b-form-group
                label="Password"
            >
                <b-form-input type="password"></b-form-input>
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

</script>
