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


