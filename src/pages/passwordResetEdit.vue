<template>
	<div class="box ml-auto mr-auto">
		<form>
			<h3>Password reset</h3>

			<b-form-group
					label="New password"
			>
				<b-form-input></b-form-input>
			</b-form-group>
			<b-button block type="submit" variant="dark">Change password</b-button>

		</form>
	</div>
</template>

<script>
	export default {
		props: {
			code: {
				required: true,
			},
		},
		data: () => ({
			//
		}),
		methods: {
			//
		},
	}
</script>