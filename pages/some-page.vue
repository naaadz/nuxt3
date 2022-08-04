<template>
	<div>
		<header class="page flex flex-col h-28">
			<div class="container mx-auto flex my-auto">
				<div class="left">
					<SitezeusLogo />
				</div>
				<ul class="middle hidden md:flex grow gap-10 justify-center items-center">
					<li>Solutions</li>
					<li>platform</li>
					<li>Data</li>
					<li>Customers</li>
					<li>InSites™</li>
				</ul>
				<div class="right flex gap-4">
					<ButtonBasic label="Sign up" />
					<ButtonBasic label="Request demo" class="fill" />
				</div>
			</div>
		</header>
		<section class="container mx-auto space-y-8">
			<h1 class="text-5xl">Some heading one</h1>
			<h2 class="text-4xl">Some heading two</h2>
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
