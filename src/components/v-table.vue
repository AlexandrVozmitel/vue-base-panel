<template>
	<div>
		<b-table
				:fields="tableFields"
				:items="tableItems"
				:show-empty="showEmpty"
		>
			<template v-slot:cell(actions)="row">
				<slot name="actions" v-bind="row"/>
			</template>
			<template v-slot:empty>
				<h4 class="text-center">Нет данных</h4>
			</template>
		</b-table>
	</div>
</template>

<script>
	export default {
		name: "v-table",
		props: {
			fields: {
				type: Array,
				default: () => {
					return []
				}
			},
			items: {
				type: Array,
				default: () => {
					return []
				}
			},
			showEmpty: {
				type: Boolean,
				default: () => {
					return true
				}
			},
			showActions: {
				type: Boolean, // добавлять ли колонку действий в таблицу
				default: () => {
					return false
				}
			}
		},
		data: () => ({
			actionsField: {
				label: '',
				key:'actions',
			}
		}),
		computed: {
			tableFields() {
				return this.fields;
			},
			tableItems() {
				return this.items;
			}
		},
		methods: {
			addFieldsAction() {
				let isAdd = true;
				this.fields.forEach((value) => {
					if (value === this.actionsField) {
						isAdd = false;
					}
				});

				if (isAdd) {
					this.$set(this.fields, this.fields.length, this.actionsField);
				}
				console.info(this.fields);
			},
			delFieldsAction() {
				this.fields.forEach((value, index) => {
					if (value === this.actionsField) {
						this.fields.splice(index, 1);
					}
				});
			}
		},
		watch: {
			showActions(value) {
				if (value) {
					this.addFieldsAction()
				} else {
					this.delFieldsAction()
				}
			}
		},
		created() {
			if (this.showActions) {
				this.addFieldsAction()
			}
		}
	}
</script>
