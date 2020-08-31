<template>
	<div>
		<b-navbar toggleable="lg" type="dark" variant="dark">
			<b-navbar-brand :to="{name: 'home'}">Service Panel</b-navbar-brand>
			<b-navbar-toggle target="nav-collapse"></b-navbar-toggle>
			<b-collapse id="nav-collapse" is-nav>
				<b-navbar-nav>
					<b-nav-item v-for="(item, index) in menu" :key="index" active-class="active" :to="item.route">
						{{item.name}}
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
		<b-container fluid="fluid" class="pt-2">
			<slot />
		</b-container>
	</div>
</template>

<script>
	export default {
		data: () => ({
			menu: [
				{
					name: 'Группы хостов',
					route: {
						name: 'hostGroup'
					},
				},
				{
					name: 'Пользователи',
					route: {
						name: 'userList'
					},
				}
			]
		}),
	}
</script>