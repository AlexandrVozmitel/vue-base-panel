<template>
	<b-container>
		<slot/>
	</b-container>
</template>

<style scoped>
	.container {
		max-width: 30em !important;
	}

	@media (min-width: 512px) {
		.container {
			padding-top: 3em;
		}
	}
</style>