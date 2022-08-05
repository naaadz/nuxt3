<template>
	<div>
		<HeaderMain />
		<!-- <div style="position: fixed;">
			<p>{{ scrollPosition }}</p>
			<p>{{ scrollDirectionUp }}</p>
		</div> -->
		<div class="container mx-auto pt-48 pb-20">
			<section class="space-y-8">
				<h1 class="text-5xl">Some heading one</h1>
				<h2 class="text-4xl">Some heading two</h2>
				<span class="flex gap-3 items-center">
					<i class="font-icon icon-car"></i>
					<span>Some label here</span>
				</span>
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
			
		</div>
		<footer class="main py-10">
			<div class="container mx-auto flex my-auto">
				<SitezeusLogo />
			</div>
		</footer>
	</div>
</template>

<script setup>
//import ButtonBasic from '@/components/ButtonBasic.vue'



//console.log(scrollPosition)
// const scrollDirectionUp = useScrollDirectionUp()


</script>
