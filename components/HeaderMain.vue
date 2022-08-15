<template>
	<header class="main flex flex-col h-28" :class="{ sticky : isHeaderSticky }">
		<div class="container mx-auto flex my-auto justify-between items-center">
			<div class="left">
				<SitezeusLogo :disabled="size !== 'xl'" />
			</div>
			<template v-if="['lg', 'xl'].includes(size)">
				<nav class="middle main flex justify-center items-center">
					<ul class="flex gap-10">
						<li><nuxt-link to="/solutions">Solutions</nuxt-link></li> 
						<li><nuxt-link to="/some-page">Platform</nuxt-link></li>
						<li><nuxt-link to="/some-page">Data</nuxt-link></li>
						<li><nuxt-link to="/some-page">Customers</nuxt-link></li>
						<li><nuxt-link to="/some-page">InSites™</nuxt-link></li>
					</ul>
				</nav>
				<div class="right flex gap-4 items-center">
					<ButtonBasic label="Sign up" class="hollow" />
					<ButtonBasic label="Request demo" class="fill" />
				</div>
			</template>
			<template v-else>
				<i 
					class="font-icon cursor-pointer text-5xl" 
					:class="`icon-${data.mobileMenuOpen ? 'close' : 'bars'}`"
					@click="data.mobileMenuOpen = !data.mobileMenuOpen, $emit('mobileMenuClick', data.mobileMenuOpen)"
				></i>
			</template>
		</div>
	</header>
</template>

<script setup>
	const scrollPosition = useScroll().scrollPosition
	const scrollDirectionUp = useScroll().scrollDirectionUp
	const size = useScreensize().size

	const data = reactive({
		mobileMenuOpen: false
	})

	const isHeaderSticky = computed(() => {
		if (scrollDirectionUp.value && scrollPosition.value != 0) {
			return true
		}

		return false
	})


</script>

