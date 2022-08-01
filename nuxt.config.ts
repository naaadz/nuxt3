import { defineNuxtConfig } from 'nuxt'

// https://v3.nuxtjs.org/api/configuration/nuxt.config
export default defineNuxtConfig({
	// ssr: false,
	css: [
		'~/assets/styles.scss',
		'~/assets/test.scss',
	]
})
