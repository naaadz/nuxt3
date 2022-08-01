<template>
<div>
	<div class="section section-1 section-hero-slider" id="section1" ref="section1">
		<div class="inner animate">
			<div class="thinner">
				<h2 class="watermark">Pick better locations</h2>
				<p class="heading">
					SiteZeus is an A.I-powered
					<a href="/products/synergy/">location intelligence platform</a> that
					helps you grow and optimize your brand through data-driven decisions.
					Precise predictions and real-time results help you enter new markets
					with confidence and strengthen your presence in existing ones.
				</p>
				<a href="#" class="button fill" data-go-to="footer-callout-form">See SiteZeus Live</a>
			</div>
		</div>
	</div>
	
	<div class="section section-3 section-industry-bubbles" id="section2" ref="section2">
		<div class="outer">
			<div class="inner">
				<div id="verticals-tour" class="flex flex-2">
					<div class="image">
						<div class="verticals animate animate-group" ref="newVerticals">
							<a href="/solutions/industry/retail/" id="general-retail" class="half">
							  <div class="middle">
								<div class="inside">
								  <div class="icon"></div>
								  <p>Retail</p>
								</div>
							  </div>
							</a>
							<a href="/solutions/industry/restaurant/" id="restaurant">
							  <div class="middle">
								<div class="inside">
								  <div class="icon"></div>
								  <p>Restaurant</p>
								</div>
							  </div>
							</a>
							<a href="/solutions/industry/c-store/" id="c-store" class="half">
							  <div class="middle">
								<div class="inside">
								  <div class="icon"></div>
								  <p>C-Store</p>
								</div>
							  </div>
							</a>
							<a href="/solutions/industry/private-equity/" id="private-equity" class="third">
							  <div class="middle">
								<div class="inside">
								  <div class="icon"></div>
								  <p>Private Equity</p>
								</div>
							  </div>
							</a>
							<a href="/solutions/industry/education/" id="education" class="third">
							  <div class="middle">
								<div class="inside">
								  <div class="icon"></div>
								  <p>Education</p>
								</div>
							  </div>
							</a>
							<a href="/solutions/industry/healthcare/" id="healthcare" class="half">
							  <div class="middle">
								<div class="inside">
								  <div class="icon"></div>
								  <p>Healthcare</p>
								</div>
							  </div>
							</a>
							<a href="/solutions/industry/grocery/" id="grocery" class="half">
							  <div class="middle">
								<div class="inside">
								  <div class="icon"></div>
								  <p>Grocery</p>
								</div>
							  </div>
							</a>
							<a href="/solutions/industry/banking/" id="banking"  class="third">
								<div class="middle">
								  <div class="inside">
									<div class="icon"></div>
									<p>Banking</p>
								  </div>
								</div>
							</a>
							</div>
					</div>
					<div class="text animate">
						<h2 class="watermark">Confident growth for any industry</h2>
						<p>
							Whatever business you're in, you're also in the business of growing.
							SiteZeus can drive your market-planning strategy with speed and
							accuracy, thanks to A.I-powered predictive analytics.
						</p>
						<p class="larger">
							<a href="/synergy/" class="bold solution-link animate-underline arrow-link next">See how the
								platform works</a>
						</p>
					</div>
				</div>
			</div>
		</div>
	</div>
	
	<div id="section-4">
		<p>Velit exercitation labore cillum laboris velit tempor est ipsum voluptate aute commodo labore. Deserunt veniam magna commodo excepteur. Elit et id mollit nisi sint.</p>
	
		<p>Lorem nostrud consequat enim fugiat sit elit anim labore cillum laboris laboris aliquip magna irure. Magna non nostrud excepteur quis. Proident incididunt officia exercitation ipsum nulla.</p>
	
		<p>Nostrud sit dolor et nulla Lorem commodo et enim cupidatat magna. Nostrud eiusmod in dolor amet anim et consectetur ullamco sint sint. Nisi voluptate eu quis incididunt mollit fugiat elit minim pariatur. Quis laboris quis amet ipsum mollit amet labore ad ex. Nisi sunt Lorem tempor ullamco pariatur dolore irure veniam enim ad velit id sunt enim.</p>
	
		<p>Excepteur mollit consectetur qui occaecat cillum incididunt sunt voluptate quis cupidatat. Minim id et nisi et dolore proident nulla ad enim. Esse adipisicing ea qui minim. Est nisi ipsum ipsum sit consectetur duis sunt officia sit amet tempor exercitation dolor sint. Non fugiat Lorem consequat nostrud commodo nisi.</p>
	
		<p>Laboris sint laborum do irure elit. Laboris amet laborum eiusmod duis proident quis veniam quis sit duis. Est labore et laborum officia dolor id voluptate ut nostrud officia deserunt duis in. Mollit nulla id fugiat ea in proident minim aute magna. Eiusmod Lorem incididunt eiusmod do consequat voluptate nulla deserunt amet nulla amet esse velit consectetur. Consequat esse ullamco ut elit deserunt ullamco. Quis nisi anim occaecat magna nulla esse ullamco ullamco pariatur ut.</p>
	
		<p>Ipsum ut esse aliqua et excepteur. Magna aute aliquip ipsum sunt velit anim ea minim amet reprehenderit ut. Lorem irure anim minim occaecat proident dolor nostrud nostrud velit.</p>
	</div>
</div>

</template>

<script setup>
const newVerticals = ref(null)
//const bubbles = ref(null)
let bubbles
const section1 = ref(null)
const section2 = ref(null)
const mousemoveAreas = [section1, section2]
let ypos

// //const newVerticals = document.querySelector('.verticals')
// //const newVerticals = ref(verticals)
let mouseX, mouseY, cStore, xCenter, yCenter
// //const bubbles = verticals._rawValue.querySelectorAll('a')

// //console.dir(bubbles)
// //console.log(bubbles)
// //console.log(this.$el)

// const options = reactive({
// 	test: true
// })

// const test = () => {
// 	console.log('test')
// }

const doBubbles = () => {

	console.log('d')

    let yCenter =
        newVerticals.value.getBoundingClientRect().top +
        newVerticals.value.getBoundingClientRect().height / 2 +
        ypos
    let xCenter =
        newVerticals.value.getBoundingClientRect().left +
        newVerticals.value.getBoundingClientRect().width / 2

    try {
        //for those that support interactionObserver
        const options = {
            threshold: 0.1,
        }

        let bubbleObserver = new IntersectionObserver((entries) => {
            entries.forEach((entry) => {
                if (entry.isIntersecting) {
                    mousemoveAreas.forEach((val, i) => {
                        val.value.addEventListener('mousemove', bubblesMouseMove)
                    })
                } else {
                    mousemoveAreas.forEach((val, i) => {
                        val.value.removeEventListener('mousemove', bubblesMouseMove)
                    })
                }
            })
        }, options)

        bubbleObserver.observe(newVerticals.value)
    } catch (err) {
        //else just animate everything in all at once
        // animateElements.forEach((val,i) => {
        //   animateIn(val);
        // });
    }

    function bubblesMouseMove(e) {
        mouseX = e.pageX
        mouseY = e.pageY
        window.requestAnimationFrame(moveBubbles)
    }

    bubbles.forEach((val, i) => {
        val.addEventListener('mouseenter', function (e) {
            val.classList.add('hovered')
        })

        val.addEventListener('mouseleave', function (e) {
            val.classList.remove('hovered')
        })
    })

    function moveBubbles() {
        bubbles.forEach((val, i) => {
            if (val.classList.contains('third')) {
                val.querySelector('.middle').style.transform =
                    'translate3d(' +
                    (mouseX - xCenter) / 20 +
                    'px,' +
                    (mouseY - yCenter) / 15 +
                    'px, 0)'
            } else if (val.classList.contains('half')) {
                val.querySelector('.middle').style.transform =
                    'translate3d(' +
                    (mouseX - xCenter) / 30 +
                    'px,' +
                    (mouseY - yCenter) / 20 +
                    'px, 0)'
            } else {
                val.querySelector('.middle').style.transform =
                    'translate3d(' +
                    (mouseX - xCenter) / 40 +
                    'px,' +
                    (mouseY - yCenter) / 30 +
                    'px, 0)'
            }
        })
    }
}



//console.log('just whatever', newVerticals)

onMounted(() => {

bubbles = newVerticals.value.querySelectorAll('a')
ypos = window.pageYOffset

doBubbles()	

})

</script>