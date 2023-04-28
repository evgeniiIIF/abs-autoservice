<template>
	<nav class="nav">
		<ul class="nav__list">
			<li class="nav__item"
					v-for="menuItem in menuItems"
					:key="menuItem">
				<a class="nav__link"
					 :href="`#${menuItem}`"
					 @click="$emit('onGoToAnchor')">
					{{ menuItem }}
				</a>
			</li>
		</ul>
	</nav>
</template>

<script>
export default {
	props: {
		menuItems: {
			type: Array,
			required: true,
		},
	},
	data() {
		return {}
	},
	computed: {
		anchorName() {
			return
		},
	},
}
</script>

<style lang="scss">
.logo {}
</style>
