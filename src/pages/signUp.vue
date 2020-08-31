<template>
	<div class="box ml-auto mr-auto">
		<form>
			<h3>Sign Up</h3>

			<b-form-group
					label="Full name"
			>
				<b-form-input></b-form-input>
			</b-form-group>

			<b-form-group
					label="Login"
			>
				<b-form-input></b-form-input>
			</b-form-group>

			<b-form-group
					label="Password"
			>
				<b-form-input></b-form-input>
			</b-form-group>

			<b-button block type="submit" variant="dark">Sign Up</b-button>

			<p class="forgot-password text-right">
				Already registered
				<router-link to="/sign-in">sign in?</router-link>
			</p>
		</form>
	</div>
</template>
<style>
</style>