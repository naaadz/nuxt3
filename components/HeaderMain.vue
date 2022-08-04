<template>
	<header class="main flex flex-col h-28" :class="{ sticky : isHeaderSticky }">
		<div class="container mx-auto flex my-auto justify-between">
			<div class="left">
				<SitezeusLogo />
			</div>
			<nav class="middle main hidden lg:flex justify-center items-center">
				<ul class="flex gap-10">
					<li><a href="#">Solutions</a></li>
					<li><a href="#">Platform</a></li>
					<li><a href="#">Data</a></li>
					<li><a href="#">Customers</a></li>
					<li><a href="#">InSites™</a></li>
				</ul>
			</nav>
			
			<div class="right hidden lg:flex gap-4 items-center">
				<ButtonBasic label="Sign up" class="hollow" />
				<ButtonBasic label="Request demo" class="fill" />
			</div>
		</div>
	</header>
</template>

<script setup>
	const scrollPosition = useScroll().scrollPosition
	const scrollDirectionUp = useScroll().scrollDirectionUp

	const isHeaderSticky = computed(() => {
		if (scrollDirectionUp.value && scrollPosition.value != 0) {
			return true
		}

		return false
	})


</script>

