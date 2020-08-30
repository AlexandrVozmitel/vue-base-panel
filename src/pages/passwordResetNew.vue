<template>
	<div class="box ml-auto mr-auto">
		<form>
			<h3>Password reset</h3>

			<div class="form-group">
				<label>Login</label>
				<input class="form-control form-control-lg" />
			</div>

			<button class="btn btn-dark btn-lg btn-block">Reset</button>

			<p class="forgot-password text-right mt-2 mb-4">
				<router-link to="/sign-in">Sign in?</router-link>
			</p>

		</form>
	</div>
</template>
<style>
	.box {
		text-align: center;
		margin-top: 10%;
		position: center;
		width: 20%;
		background: #ffffff;
	}
</style>