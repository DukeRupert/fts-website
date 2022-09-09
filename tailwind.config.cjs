const defaultTheme = require('tailwindcss/defaultTheme');

const config = {
	content: ['./src/**/*.{html,js,svelte,ts}'],

	theme: {
		extend: {
			colors: {
				primary: {
					DEFAULT: '#A60303',
					50: '#FC6464',
					100: '#FC5050',
					200: '#FB2828',
					300: '#F60404',
					400: '#CE0404',
					500: '#A60303',
					600: '#6F0202',
					700: '#380101',
					800: '#010000',
					900: '#000000'
				},
				secondary: {
					DEFAULT: '#F2D95C',
					50: '#FFFFFF',
					100: '#FEFCF3',
					200: '#FBF3CD',
					300: '#F8EBA8',
					400: '#F5E282',
					500: '#F2D95C',
					600: '#EECD28',
					700: '#CDAE10',
					800: '#99820C',
					900: '#665608'
				},
				background: '#000'
			},
			fontFamily: {
				sans: ['Roboto', ...defaultTheme.fontFamily.sans]
			},
			transitionTimingFunction: {
				'expo-in': 'cubic-bezier(0.95, 0.05, 0.795, 0.035)',
				'expo-out': 'cubic-bezier(0.19, 1, 0.22, 1)',
				'quint-out': 'cubic-bezier(0.22, 1, 0.36, 1)',
				'quint-in': 'cubic-bezier(0.64, 0, 0.78, 0)'
			}
		}
	},

	plugins: [
		require('@tailwindcss/forms'),
		require('@tailwindcss/aspect-ratio'),
		require('@tailwindcss/line-clamp'),
		require('@tailwindcss/typography')
	]
};

module.exports = config;
