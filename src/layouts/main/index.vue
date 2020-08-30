<template>
	<div>
		<b-navbar toggleable="lg" type="dark" variant="dark">
			<b-navbar-brand href="#">LOGO</b-navbar-brand>
				<b-navbar-nav  class="ml hek">

					<b-nav-item-dropdown text="Menu" menu-class="w-100" class="hek">
						<b-dropdown-item href="#">Что-то тут</b-dropdown-item>
					</b-nav-item-dropdown>

					<b-nav-item-dropdown text="User" right class="">
						<b-dropdown-item href="#">Profile</b-dropdown-item>
						<b-dropdown-item :to="{name:'signIn'}">Sign Out</b-dropdown-item>
					</b-nav-item-dropdown>
				</b-navbar-nav>
		</b-navbar>
		<slot />
	</div>
</template>
<style>
	.hek{
		width:100%;
		text-align: center;
	}
</style>