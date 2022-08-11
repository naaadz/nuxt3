<template>
	<div class="logo-wrap">
		<div class="sz-logo-text" :class="{ active : shouldLogoTextShow }">
			<img src="@/assets/images/sz-text.svg" alt="">
		</div>
		<div 
			class="sz-logo-link" 
			:class="{ active : data.logoHovered }"
			@mouseenter="onLogoMouseOver" 
			@mouseleave="data.logoHovered = false"
		>
			<a href="/">
				<svg version="1.1" class="sz-logo" xmlns="http://www.w3.org/2000/svg"
					xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="0 0 181.2 180.9"
					style="enable-background:new 0 0 181.2 180.9;" xml:space="preserve">
					<linearGradient  id="gradient" gradientUnits="userSpaceOnUse" x1="34.285" y1="90.4368"
						x2="146.956" y2="90.4368">
						<stop offset="0" style="stop-color:#0084FF;stop-opacity:0.7" />
						<stop offset="1" style="stop-color:#0084FF;stop-opacity:0" />
					</linearGradient>
					<g class="sz-ball" :class="{ active : data.logoHovered }">
						<path class="st0" d="M92.9,106.1l16-29.3H90.6l-2.5-5h31.1l-0.2,0.7l-15.8,28.6h32.7c0.7-3.4,1.1-6.9,1.1-10.5
							c0-25.6-20.8-46.4-46.4-46.4S44.2,64.9,44.2,90.6c0,5.5,0.7,7.8,1.1,10.5l0,0h28.6c1.8,0,3.4-0.5,4.3-1.1c0.9-0.7,1.6-1.8,1.6-3
							c0-1.4-0.5-2.3-1.4-3.2c-0.9-0.7-2.7-1.6-5-2.3c-4.1-1.1-7.3-2.5-9.6-4.1c-2.1-1.6-3.2-3.7-3.2-6.4s1.1-5,3.7-6.6
							c2.5-1.8,5.7-2.5,9.4-2.5c0,0,0,0,0.2,0H86l2.7,5H73.9h-0.2c-1.8,0-3.4,0.5-4.3,1.1c-1.1,0.7-1.6,1.8-1.6,3s0.5,2.1,1.6,2.7
							c1.1,0.7,3,1.6,5.7,2.3c3.9,0.9,6.9,2.3,8.9,4.1c2.1,1.6,3,3.9,3,6.6s-1.1,5-3.7,6.9c-2.3,1.6-5.5,2.5-9.4,2.5H47
							c6.4,17.8,23.5,30.6,43.7,30.6s37.3-12.8,43.7-30.9H92.9V106.1z" />
					</g>
					<path ref="ring" class="sz-ring" d="M90.6,34.2c-31.1,0-56.3,25.3-56.3,56.3c0,2.5,0.1,4.5,0.3,6.1h0c0,0,0.1,2.7,1.1,6.6c0,0,0,0,0,0h0c0.7,2.8,1.8,6.3,3.5,9.9c8.7,19.6,28.5,33.4,51.5,33.4c24.3,0,45-15.4,52.9-37.1c1.2-2.7,2.5-6.4,2.8-10.1c0.4-2.9,0.7-5.8,0.7-8.8C147,59.5,121.7,34.2,90.6,34.2z M136.4,97.8c-0.2,3.1-1.3,6.1-2.3,8.4c-6.5,17.9-23.5,30.5-43.5,30.5c-18.9,0-35.2-11.3-42.4-27.5c-1.4-3-2.3-5.9-2.9-8.2h0c0,0,0,0,0,0c-0.8-3.3-0.9-5.4-0.9-5.4h0c-0.1-1.4-0.2-3-0.2-5c0-25.6,20.8-46.4,46.4-46.4S137,64.9,137,90.6C137,93.1,136.8,95.5,136.4,97.8z"></path>
				</svg>
			</a>
		</div>
	</div>
</template>

<script setup>

const props = defineProps({
	open: { type: Boolean, default: false }, 
	disabled: { type: Boolean, default: false }
})

const ring = ref(null)

const data = reactive({
	logoHovered: false,
	logoRingInProgress: false
})

const onLogoMouseOver = () => {
	data.logoHovered = true
	logoRing()
}

const logoRing = () => {
	if (!data.logoRingInProgress) {
		data.logoRingInProgress = true
		let animation = ring.value.animate(
			[{
					transform: 'scale(1)',
					opacity: 1,
					offset: 0
				},
				{
					transform: 'scale(1.3)',
					opacity: 0,
					offset: 1,
				},
			],
			{
				duration: 1000,
				fill: 'forwards'
			}
		)

		animation.finished.then(() => {
			data.logoRingInProgress = false
		})
	} 
}

const shouldLogoTextShow = computed(() => {
	if (!props.disabled) {
		return props.open || data.logoHovered 
	}
})

</script>