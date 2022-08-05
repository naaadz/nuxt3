import { defineNuxtConfig } from 'nuxt'

// https://v3.nuxtjs.org/api/configuration/nuxt.config
export default defineNuxtConfig({
	ssr: false, //may need this for HMR
	buildModules: [
	],
	vite: {
        css: {
			devSourcemap: true,
        }
    },
	css: [
		'@/assets/scss/styles.scss',
		'@/assets/scss/test.scss',
		'@/assets/css/tailwind.css'
	],
	build: {
		postcss: {
		  postcssOptions: require('./postcss.config.js'),
		},
	  }
})
