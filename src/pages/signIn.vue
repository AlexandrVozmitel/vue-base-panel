<template>
    <div class="box ml-auto mr-auto">
        <form>
            <h3>Sign In</h3>

            <div class="form-group">
                <label>Login
                    <input class="form-control form-control-lg"/>
                </label>
            </div>

            <div class="form-group">
                <label>Password
                    <input type="password" class="form-control form-control-lg"/>
                </label>
            </div>

            <button class="btn btn-dark btn-lg btn-block">Sign In</button>
            <b-row>
            <b-col class="sign-up text-left mt-2 mb-4">
                <router-link to="/sign-up">Sign up?</router-link>
            </b-col>
            <b-col class="forgot-password text-right mt-2 mb-4">
                <router-link to="/password-reset">Forgot password ?</router-link>
            </b-col>
            </b-row>
        </form>
    </div>
</template>
<script>

</script>
<style>
    .box {
        text-align: center;
        margin-top: 10%;
        position: center;
        width: 20%;
        background: #ffffff;
    }
</style>