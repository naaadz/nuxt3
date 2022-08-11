export const useScroll = () => {
	const scrollPosition = ref(0)
	const lastScrollPosition = ref(0)
	const scrollDirectionUp = ref(false)

	const handleScroll = () => {
		//set current scroll position
		scrollPosition.value = window.pageYOffset
		//set scroll direction
		scrollDirectionUp.value = lastScrollPosition.value > scrollPosition.value
		//update lastScrollPosition
		lastScrollPosition.value = scrollPosition.value
	}

	onMounted(() => {
		window.addEventListener('scroll', handleScroll)
		console.log('mounted')
	})
	
	onUnmounted(() => {
		window.removeEventListener('scroll', handleScroll)
	})

	return { scrollPosition, scrollDirectionUp }
}

export const useScreensize = () => {
		let windowWidth = ref(0)
		let isScreen = ref(false)
		let size = ref(null)

	const handleResize = () => {
		windowWidth.value = window.innerWidth

		if (windowWidth.value >= 1024) {
			isScreen.value = true
		} else {
			isScreen.value = false
		}

		switch (true) {
			case windowWidth.value >= 1280:
			  size.value = "xl"
			  break
			case windowWidth.value >= 1024:
				size.value = "lg"
			  break
			case windowWidth.value >= 768:
				size.value = "md"
			  break
			case windowWidth.value >= 640:
				size.value = "sm"
			  break
			default:
				size.value = "default"
		  }
	}

	onMounted(() => {
		window.addEventListener('resize', handleResize)
		handleResize()
	})
	
	return { isScreen, size }
}


