
const defaultTheme = require('tailwindcss/defaultTheme');
module.exports = {
	darkMode: 'class',
	content: ['./src/**/*.{html,js,svelte,ts}', require('path').join(require.resolve('@skeletonlabs/skeleton'), '../**/*.{html,js,svelte,ts}')],

	theme: {
		extend: {
			colors: {
				cream: {
					50: '#ffffff',
					100: '#ffffff',
					200: '#fffffd',
					300: '#fffff3',
					400: '#ffffe9',
					500: '#f9f9df',
					600: '#efefd5',
					700: '#e5e5cb',
					800: '#dbdbc1',
					900: '#d1d1b7'
				},
				evergreen: {
					50: '#567e81',
					100: '#4c7477',
					200: '#426a6d',
					300: '#386063',
					400: '#2e5659',
					500: '#244c4f',
					600: '#1a4245',
					700: '#10383b',
					800: '#062e31',
					900: '#002427'
				},
				actionorange: {
					50: '#ffa04e',
					100: '#fe9644',
					200: '#f48c3a',
					300: '#ea8230',
					400: '#e07826',
					500: '#d66e1c',
					600: '#cc6412',
					700: '#c25a08',
					800: '#b85000',
					900: '#ae4600'
				}
			},
			fontFamily: {
				sans: ['Libre Franklin', ...defaultTheme.fontFamily.sans]
			},
			transitionTimingFunction: {
				'expo-in': 'cubic-bezier(0.95, 0.05, 0.795, 0.035)',
				'expo-out': 'cubic-bezier(0.19, 1, 0.22, 1)',
				'quint-out': 'cubic-bezier(0.22, 1, 0.36, 1)',
				'quint-in': 'cubic-bezier(0.64, 0, 0.78, 0)'
			},
			typography: ({ theme }) => ({
				evergreen: {
					css: {
						'--tw-prose-body': theme('colors.evergreen[800]'),
						'--tw-prose-headings': theme('colors.evergreen[900]'),
						'--tw-prose-lead': theme('colors.evergreen[700]'),
						'--tw-prose-links': theme('colors.evergreen[500]'),
						'--tw-prose-bold': theme('colors.evergreen[900]'),
						'--tw-prose-counters': theme('colors.evergreen[600]'),
						'--tw-prose-bullets': theme('colors.evergreen[400]'),
						'--tw-prose-hr': theme('colors.evergreen[300]'),
						'--tw-prose-quotes': theme('colors.evergreen[900]'),
						'--tw-prose-quote-borders': theme('colors.evergreen[300]'),
						'--tw-prose-captions': theme('colors.evergreen[700]'),
						'--tw-prose-code': theme('colors.evergreen[900]'),
						'--tw-prose-pre-code': theme('colors.evergreen[100]'),
						'--tw-prose-pre-bg': theme('colors.evergreen[900]'),
						'--tw-prose-th-borders': theme('colors.evergreen[300]'),
						'--tw-prose-td-borders': theme('colors.evergreen[200]'),
						'--tw-prose-invert-body': theme('colors.evergreen[200]'),
						'--tw-prose-invert-headings': theme('colors.white'),
						'--tw-prose-invert-lead': theme('colors.evergreen[300]'),
						'--tw-prose-invert-links': theme('colors.white'),
						'--tw-prose-invert-bold': theme('colors.white'),
						'--tw-prose-invert-counters': theme('colors.evergreen[400]'),
						'--tw-prose-invert-bullets': theme('colors.evergreen[600]'),
						'--tw-prose-invert-hr': theme('colors.evergreen[700]'),
						'--tw-prose-invert-quotes': theme('colors.evergreen[100]'),
						'--tw-prose-invert-quote-borders': theme('colors.evergreen[700]'),
						'--tw-prose-invert-captions': theme('colors.evergreen[400]'),
						'--tw-prose-invert-code': theme('colors.white'),
						'--tw-prose-invert-pre-code': theme('colors.evergreen[300]'),
						'--tw-prose-invert-pre-bg': 'rgb(0 0 0 / 50%)',
						'--tw-prose-invert-th-borders': theme('colors.evergreen[600]'),
						'--tw-prose-invert-td-borders': theme('colors.evergreen[700]')
					}
				}
			}),
			minHeight: {
				'1/2': '50vh',
				'3/4': '75vh'
			}
		}
	},

	plugins: [require('@tailwindcss/forms'),require('@tailwindcss/typography'),require('@tailwindcss/line-clamp'),...require('@skeletonlabs/skeleton/tailwind/skeleton.cjs')()],
};
