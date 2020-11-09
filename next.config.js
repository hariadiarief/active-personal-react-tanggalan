const withPWA = require('next-pwa')
const withCSS = require('@zeit/next-css')

module.exports = withPWA(
	withCSS({
		pwa: {
			dest: 'public',
		},
	})
)
