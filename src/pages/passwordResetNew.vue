<template>
	<div class="box ml-auto mr-auto">
		<form>
			<h3>Password reset</h3>

			<b-form-group
					label="Login"
			>
				<b-form-input></b-form-input>
			</b-form-group>

			<b-button block type="submit" variant="dark">Reset</b-button>

			<p class="forgot-password text-right mt-2 mb-4">
				<router-link :to="{name: 'signIn'}">Sign in?</router-link>
			</p>

		</form>
	</div>
</template>
<style>
</style>