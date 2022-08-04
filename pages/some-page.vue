<template>
	<div>
		<header class="page flex flex-col h-28">
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
					<ButtonBasic label="Sign up" />
					<ButtonBasic label="Request demo" class="fill" />
				</div>
			</div>
		</header>
		<section class="container mx-auto space-y-8">
			<h1 class="text-5xl">Some heading one</h1>
			<h2 class="text-4xl">Some heading two</h2>
			<div class="flex flex-col md:flex-row gap-10">
				<div class="md:basis-2/3 lg:basis-1/2">
					<img src="https://sitezeus.com/images/data/mobile-movement.jpg" alt="">
				</div>
				<div class="md:basis-1/3 lg:basis-1/2 space-y-8">
					<p>Deserunt laboris pariatur mollit id esse laborum culpa incididunt cupidatat magna esse voluptate. Aliquip et sunt Lorem incididunt incididunt laboris. Amet adipisicing commodo fugiat ad dolor cillum aute dolor. Deserunt </p>
					<p class="md:hidden lg:block">laboris pariatur mollit id esse laborum culpa incididunt cupidatat magna esse voluptate. Aliquip et sunt Lorem incididunt incididunt laboris. Amet adipisicing commodo fugiat ad dolor cillum aute dolor. Deserunt laboris pariatur mollit id esse laborum culpa incididunt cupidatat magna esse voluptate. Aliquip et sunt Lorem incididunt incididunt laboris. Amet adipisicing commodo fugiat ad dolor cillum aute dolor.</p>
				</div>
			</div>
			<div v-for="i in 20" :key="i">
				<p>Deserunt laboris pariatur mollit id esse laborum culpa incididunt cupidatat magna esse voluptate. Aliquip et sunt Lorem incididunt incididunt laboris. Amet adipisicing commodo fugiat ad dolor cillum aute dolor. Deserunt </p>
				<p>laboris pariatur mollit id esse laborum culpa incididunt cupidatat magna esse voluptate. Aliquip et sunt Lorem incididunt incididunt laboris. Amet adipisicing commodo fugiat ad dolor cillum aute dolor. Deserunt laboris pariatur mollit id esse laborum culpa incididunt cupidatat magna esse voluptate. Aliquip et sunt Lorem incididunt incididunt laboris. Amet adipisicing commodo fugiat ad dolor cillum aute dolor.</p>
			</div>
		</section>
		<section>
			test
		</section>
		<footer>
			<div class="container mx-auto flex my-auto">
				<SitezeusLogo />
			</div>
			
		</footer>
	</div>
</template>

<script setup>
import ButtonBasic from '@/components/ButtonBasic.vue'



</script>
