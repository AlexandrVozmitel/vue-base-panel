<template>
	<div class="box ml-auto mr-auto">
		<form>
			<h3>Sign Up</h3>

			<div class="form-group">
				<label>Full Name</label>
				<input type="text" class="form-control form-control-lg"/>
			</div>

			<div class="form-group">
				<label>Login</label>
				<input class="form-control form-control-lg" />
			</div>

			<div class="form-group">
				<label>Password</label>
				<input type="password" class="form-control form-control-lg" />
			</div>

			<button type="submit" class="btn btn-dark btn-lg btn-block">Sign Up</button>

			<p class="forgot-password text-right">
				Already registered
				<router-link to="/sign-in">sign in?</router-link>
			</p>
		</form>
	</div>
</template>
<style>
	.box {
		margin-top: 10%;
		position: center;
		width: 20%;
		background: #ffffff;
	}
</style>