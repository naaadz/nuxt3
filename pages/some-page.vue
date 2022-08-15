<template>
	<main class="container mx-auto pt-48 pb-20 space-y-20">
		<section class="space-y-8">
			<h1 class="text-5xl">Some heading one</h1>
			<h2 class="text-4xl">Some heading two</h2>
			<span class="flex gap-3 items-center">
				<i class="font-icon icon-car"></i>
				<span>Some label here</span>
			</span>
			<div class="flex flex-col md:flex-row gap-10 items-center">
				<div class="md:basis-2/3 lg:basis-1/2">
					<img src="https://sitezeus.com/images/data/mobile-movement.jpg" alt="">
				</div>
				<div class="md:basis-1/3 lg:basis-1/2 space-y-8">
					<h2 class="text-4xl">Some heading two</h2>
					<p>Deserunt laboris pariatur mollit id esse laborum culpa incididunt cupidatat magna esse voluptate. Aliquip et sunt Lorem incididunt incididunt laboris. Amet adipisicing commodo fugiat ad dolor cillum aute dolor. Deserunt </p>
					<p class="md:hidden lg:block">laboris pariatur mollit id esse laborum culpa incididunt cupidatat magna esse voluptate. Aliquip et sunt Lorem incididunt incididunt laboris. Amet adipisicing commodo fugiat ad dolor cillum aute dolor. Deserunt laboris pariatur mollit id esse laborum culpa incididunt cupidatat magna esse voluptate. Aliquip et sunt Lorem incididunt incididunt laboris. Amet adipisicing commodo fugiat ad dolor cillum aute dolor.</p>
				</div>
			</div>
		</section>
		<section class="space-y-8">
			<div class="flex flex-col md:flex-row gap-10 items-center">
				<div class="md:basis-2/3 lg:basis-1/2 order-2">
					<img src="https://sitezeus.com/images/data/mobile-movement.jpg" alt="">
				</div>
				<div class="md:basis-1/3 lg:basis-1/2 space-y-8 order-1">
					<h2 class="text-4xl">Some heading two</h2>
					<p>Deserunt laboris pariatur mollit id esse laborum culpa incididunt cupidatat magna esse voluptate. Aliquip et sunt Lorem incididunt incididunt laboris. Amet adipisicing commodo fugiat ad dolor cillum aute dolor. Deserunt </p>
					<p class="md:hidden lg:block">laboris pariatur mollit id esse laborum culpa incididunt cupidatat magna esse voluptate. Aliquip et sunt Lorem incididunt incididunt laboris. Amet adipisicing commodo fugiat ad dolor cillum aute dolor. Deserunt laboris pariatur mollit id esse laborum culpa incididunt cupidatat magna esse voluptate. Aliquip et sunt Lorem incididunt incididunt laboris. Amet adipisicing commodo fugiat ad dolor cillum aute dolor.</p>
				</div>
			</div>
		</section>
		<section class="space-y-8">
			<div class="flex flex-col md:flex-row gap-10 items-center">
				<div class="md:basis-2/3 lg:basis-1/2">
					<img src="https://sitezeus.com/images/data/mobile-movement.jpg" alt="">
				</div>
				<div class="md:basis-1/3 lg:basis-1/2 space-y-8">
					<h2 class="text-4xl">Some heading two</h2>
					<p>Deserunt laboris pariatur mollit id esse laborum culpa incididunt cupidatat magna esse voluptate. Aliquip et sunt Lorem incididunt incididunt laboris. Amet adipisicing <a href="#">commodo fugiat</a> ad dolor cillum aute dolor. Deserunt </p>
					<p class="md:hidden lg:block">laboris pariatur mollit id esse laborum culpa incididunt cupidatat magna esse voluptate. Aliquip et sunt Lorem incididunt incididunt laboris. Amet adipisicing commodo fugiat ad dolor cillum aute dolor. Deserunt laboris pariatur mollit id esse laborum culpa incididunt cupidatat magna esse voluptate. Aliquip et sunt Lorem incididunt incididunt laboris. Amet adipisicing commodo fugiat ad dolor cillum aute dolor.</p>
				</div>
			</div>
		</section>
		<section class="space-y-8">
			<div class="flex flex-col md:flex-row gap-10 items-center">
				<div class="md:basis-2/3 lg:basis-1/2 order-2">
					<img src="https://sitezeus.com/images/data/mobile-movement.jpg" alt="">
				</div>
				<div class="md:basis-1/3 lg:basis-1/2 space-y-8 order-1">
					<h2 class="text-4xl">Some heading two</h2>
					<p>Deserunt laboris pariatur mollit id esse laborum culpa incididunt cupidatat magna esse voluptate. Aliquip et sunt Lorem incididunt incididunt laboris. Amet adipisicing commodo fugiat ad dolor cillum aute dolor. Deserunt </p>
					<p class="md:hidden lg:block">laboris pariatur mollit id esse laborum culpa incididunt cupidatat magna esse voluptate. Aliquip et sunt Lorem incididunt incididunt laboris. Amet adipisicing commodo fugiat ad dolor cillum aute dolor. Deserunt laboris pariatur mollit id esse laborum culpa incididunt cupidatat magna esse voluptate. Aliquip et sunt Lorem incididunt incididunt laboris. Amet adipisicing commodo fugiat ad dolor cillum aute dolor.</p>
				</div>
			</div>
		</section>
	</main>
</template>

<script setup>
	const isScreen = useScreensize().isScreen
	const size = useScreensize().size

	const route = useRoute()
	console.log('current name', route.name)

</script>
