<template>
    <div>
        <Html>
            <Head>
                <Title>Test</Title>
            </Head>
            <Body :class="{ 'notify-open' : data.notifyOpen }">
                <div class="notify flex flex-col items-center justify-center">Notify open!</div>
                <div class="wrap flex" :class="{ 'mobile-menu-open' : data.mobileMenuOpen }">
                    <HeaderMain @mobileMenuClick="onMobileMenuClick" />
                    <div class="wrap-inner w-full" >
                        <slot />
                        <footer class="main py-20">
                            <div class="container mx-auto flex flex-col lg:flex-row md:justify-between my-auto h-full text-center sm:text-left gap-10">
                                <div class="flex flex-col justify-between gap-5">
                                    <div class="flex flex-col gap-5">
                                        <SitezeusLogo :open="true" />
                                        <p>Location Intelligence Powered by A.I.</p>
                                        <div class="flex gap-4 justify-center sm:justify-start">
                                            <i v-for="i of 5" :key="i" class="font-icon icon-twitter"></i>
                                        </div>
                                    </div>
                                    <div class="flex flex-col gap-5">
                                        <div class="flex gap-3 justify-center sm:justify-start">
                                            <nuxt-link>Contact</nuxt-link>
                                            <nuxt-link>Legal</nuxt-link>
                                            <nuxt-link>Careers</nuxt-link>
                                        </div>
                                        <p>SiteZeus® 2022. All Rights Reserved.</p>
                                    </div>
                                </div>
                                <nav class="flex flex-col sm:flex-row justify-between gap-8 xl:gap-24">
                                    <div class="flex flex-col gap-5 sm:w-1/4">
                                        <span class="heading">Solutions</span>
                                        <ul>
                                            <li><nuxt-link>Sales Forecasting</nuxt-link></li>
                                            <li><nuxt-link>White Space Analysis</nuxt-link></li>
                                            <li><nuxt-link>Sales Impact</nuxt-link></li>
                                            <li><nuxt-link>Customer Segmentation</nuxt-link></li>
                                            <li><nuxt-link>Portfolio Optimization</nuxt-link></li>
                                        </ul>
                                        <span class="heading">Platform</span>
                                        <ul>
                                            <li><nuxt-link>Overview</nuxt-link></li>
                                            <li><nuxt-link>Features</nuxt-link></li>
                                        </ul>
                                    </div>
                                    <div class="flex flex-col gap-5 sm:w-1/5">
                                        <span class="heading">Industries</span>
                                        <ul>
                                            <li><nuxt-link>Retail</nuxt-link></li>
                                            <li><nuxt-link>Restaurant</nuxt-link></li>
                                            <li><nuxt-link>C-Store</nuxt-link></li>
                                            <li><nuxt-link>Private Equity</nuxt-link></li>
                                            <li><nuxt-link>Grocery</nuxt-link></li>
                                            <li><nuxt-link>Education</nuxt-link></li>
                                            <li><nuxt-link>Healthcare</nuxt-link></li>
                                            <li><nuxt-link>Banking</nuxt-link></li>
                                        </ul>
                                    </div>
                                    <div class="flex flex-col gap-5 sm:w-1/4">
                                        <span class="heading">Data</span>
                                        <ul>
                                            <li><nuxt-link>Traffic Volume</nuxt-link></li>
                                            <li><nuxt-link>Mobile Location Data</nuxt-link></li>
                                            <li><nuxt-link>Population Movement</nuxt-link></li>
                                            <li><nuxt-link>Geosocial Segmentation</nuxt-link></li>
                                            <li><nuxt-link>Restaurant Sales</nuxt-link></li>
                                            <li><nuxt-link>Household Demographics</nuxt-link></li>
                                            <li><nuxt-link>Points Of Interest Database</nuxt-link></li>
                                            <li><nuxt-link>Dynamic Points Of Interest</nuxt-link></li>
                                            <li><nuxt-link>National Grocery Expansion</nuxt-link></li>
                                            <li><nuxt-link>Estimated Fuel Pricing</nuxt-link></li>
                                        </ul>
                                    </div>
                                    <div class="flex flex-col gap-5 sm:w-1/4">
                                        <span class="heading">Customers</span>
                                        <ul>
                                            <li><nuxt-link>Customer Stories</nuxt-link></li>
                                            <li><nuxt-link>Client Announcements</nuxt-link></li>
                                            <li><nuxt-link>Case Studies</nuxt-link></li>
                                        </ul>
                                        <span class="heading">InSites™</span>
                                        <ul>
                                            <li><nuxt-link>Blog</nuxt-link></li>
                                            <li><nuxt-link>SiteZeus In Under 60 Seconds</nuxt-link></li>
                                            <li><nuxt-link>Webinars</nuxt-link></li>
                                            <li><nuxt-link>Resources</nuxt-link></li>
                                            <li><nuxt-link>Podcast | Tech + Mortar™</nuxt-link></li>
                                            <li><nuxt-link>Awards</nuxt-link></li>
                                        </ul>
                                    </div>
                                </nav>
                            </div>
                        </footer>
                    </div>
                    <div class="mobile-menu w-3/4 lg:hidden p-10">
                        <ul class="space-y-3">
                            <li><nuxt-link>Solutions</nuxt-link></li>
                            <li><nuxt-link>Platform</nuxt-link></li>
                            <li><nuxt-link>Data</nuxt-link></li>
                            <li><nuxt-link>Customers</nuxt-link></li>
                            <li><nuxt-link>InSites™</nuxt-link></li>
                            <div class="w-full border-b"></div>
                            <li><nuxt-link>Sign in</nuxt-link></li>
                            <li><nuxt-link>Request a demo</nuxt-link></li>
                        </ul>
                    </div>
                </div>
            </Body>
        </Html>	
    </div>
</template>

<script setup>

const data = reactive({
    mobileMenuOpen: false,
    notifyOpen: false
})

const onMobileMenuClick = (payload) => {
    data.mobileMenuOpen = payload
    //console.log('onMobileMenuClick', payload)
}

</script>