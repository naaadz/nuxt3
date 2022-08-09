export const useScroll = () => {
	const scrollPosition = ref(0)
	const lastScrollPosition = ref(0)
	const scrollDirectionUp = ref(false)

	const handleScroll = () => {
		//set current scroll position
		scrollPosition.value = window.pageYOffset
		//console.log('data.scrollPosition', data.scrollPosition )
		//set scroll direction
		scrollDirectionUp.value = lastScrollPosition.value > scrollPosition.value
		//console.log('data.scrollDirectionUp', data.scrollDirectionUp )
		//update lastScrollPosition
		lastScrollPosition.value = scrollPosition.value
		//console.log(scrollPosition)
		//return scrollPosition
		//return useState<number>('scrollPosition', () => scrollPosition)
	}


	onMounted(() => {
		window.addEventListener('scroll', handleScroll)
		console.log('mounted')
	})
	
	onUnmounted(() => {
		window.removeEventListener('scroll', handleScroll)
	})

	return { scrollPosition, scrollDirectionUp }
	//return useState<number>('scrollPosition', () => scrollPosition)
}

export const useScreensize = () => {
		let windowWidth = ref(0)
		//let oldWindowWidth
		let isScreen = ref(false)

	const handleResize = () => {
		windowWidth.value = window.innerWidth

		if (windowWidth.value >= 1024) {
			isScreen.value = true
		} else {
			isScreen.value = false
		}
		//store old width again
		//oldWindowWidth = windowWidth
		console.log('resized', windowWidth.value)
		
	}

	onMounted(() => {
		window.addEventListener('resize', handleResize)
	})

	
	return { isScreen }
}


