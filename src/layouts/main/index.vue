<template>
	<div>
		<b-navbar toggleable="lg" type="dark" variant="dark">
			<b-navbar-brand href="#">LOGO</b-navbar-brand>
			<b-navbar-toggle target="nav-collapse"></b-navbar-toggle>
			<b-collapse id="nav-collapse" is-nav>
			<b-navbar-nav>
					<b-nav-item>
						Страничка
					</b-nav-item>
					<b-nav-item >
						Страничка
				</b-nav-item>
					<b-nav-item>
						Страничка
				</b-nav-item>
				</b-navbar-nav>
					<b-navbar-nav class="ml-auto">
					<b-nav-item-dropdown right text="User" >
						<b-dropdown-item href="#">Profile</b-dropdown-item>
						<b-dropdown-item :to="{name:'signIn'}">Sign Out</b-dropdown-item>
					</b-nav-item-dropdown>
				</b-navbar-nav>
			</b-collapse>
		</b-navbar>
		<b-container fluid="fluid">
			<slot />
		</b-container>
	</div>
</template>
<style>
</style>