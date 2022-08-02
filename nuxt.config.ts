import { defineNuxtConfig } from 'nuxt'

// https://v3.nuxtjs.org/api/configuration/nuxt.config
export default defineNuxtConfig({
	// ssr: false,
	buildModules: [
	],
	vite: {
        css: {
			devSourcemap: true,
        }
    },
	css: [
		'@/assets/styles.scss',
		'@/assets/test.scss',
		'@/assets/css/tailwind.css'
	],
	build: {
		postcss: {
		  postcssOptions: require('./postcss.config.js'),
		},
	  }
})
