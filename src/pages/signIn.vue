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

            <p class="forgot-password text-right mt-2 mb-4">
                <router-link to="/password-reset">Forgot password ?</router-link>
            </p>

        </form>
    </div>
</template>
<script>

</script>
<style>
    .box {
        margin-top: 10%;
        position: center;
        width: 20%;
        background: #ffffff;
    }
</style>