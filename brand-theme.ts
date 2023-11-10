
import type { CustomThemeConfig } from '@skeletonlabs/tw-plugin';

export const onBrandTheme: CustomThemeConfig = {
    name: 'on-brand-theme',
    properties: {
		// =~= Theme Properties =~=
		"--theme-font-family-base": `system-ui`,
		"--theme-font-family-heading": `system-ui`,
		"--theme-font-color-base": "0 0 0",
		"--theme-font-color-dark": "255 255 255",
		"--theme-rounded-base": "4px",
		"--theme-rounded-container": "8px",
		"--theme-border-base": "1px",
		// =~= Theme On-X Colors =~=
		"--on-primary": "var(--color-tertiary-500)",
		"--on-secondary": "0 0 0",
		"--on-tertiary": "var(--color-primary-500)",
		"--on-success": "0 0 0",
		"--on-warning": "0 0 0",
		"--on-error": "0 0 0",
		"--on-surface": "0 0 0",
		// =~= Theme Colors  =~=
		// primary | #244C4F 
		"--color-primary-50": "222 228 229", // #dee4e5
		"--color-primary-100": "211 219 220", // #d3dbdc
		"--color-primary-200": "200 210 211", // #c8d2d3
		"--color-primary-300": "167 183 185", // #a7b7b9
		"--color-primary-400": "102 130 132", // #668284
		"--color-primary-500": "36 76 79", // #244C4F
		"--color-primary-600": "32 68 71", // #204447
		"--color-primary-700": "27 57 59", // #1b393b
		"--color-primary-800": "22 46 47", // #162e2f
		"--color-primary-900": "18 37 39", // #122527
		// secondary | #D66E1C 
		"--color-secondary-50": "249 233 221", // #f9e9dd
		"--color-secondary-100": "247 226 210", // #f7e2d2
		"--color-secondary-200": "245 219 198", // #f5dbc6
		"--color-secondary-300": "239 197 164", // #efc5a4
		"--color-secondary-400": "226 154 96", // #e29a60
		"--color-secondary-500": "214 110 28", // #D66E1C
		"--color-secondary-600": "193 99 25", // #c16319
		"--color-secondary-700": "161 83 21", // #a15315
		"--color-secondary-800": "128 66 17", // #804211
		"--color-secondary-900": "105 54 14", // #69360e
		// tertiary | #F9F9DF 
		"--color-tertiary-50": "254 254 250", // #fefefa
		"--color-tertiary-100": "254 254 249", // #fefef9
		"--color-tertiary-200": "254 254 247", // #fefef7
		"--color-tertiary-300": "253 253 242", // #fdfdf2
		"--color-tertiary-400": "251 251 233", // #fbfbe9
		"--color-tertiary-500": "249 249 223", // #F9F9DF
		"--color-tertiary-600": "224 224 201", // #e0e0c9
		"--color-tertiary-700": "187 187 167", // #bbbba7
		"--color-tertiary-800": "149 149 134", // #959586
		"--color-tertiary-900": "122 122 109", // #7a7a6d
		// success | #10B981 
		"--color-success-50": "219 245 236", // #dbf5ec
		"--color-success-100": "207 241 230", // #cff1e6
		"--color-success-200": "195 238 224", // #c3eee0
		"--color-success-300": "159 227 205", // #9fe3cd
		"--color-success-400": "88 206 167", // #58cea7
		"--color-success-500": "16 185 129", // #10B981
		"--color-success-600": "14 167 116", // #0ea774
		"--color-success-700": "12 139 97", // #0c8b61
		"--color-success-800": "10 111 77", // #0a6f4d
		"--color-success-900": "8 91 63", // #085b3f
		// warning | #EAB308 
		"--color-warning-50": "252 244 218", // #fcf4da
		"--color-warning-100": "251 240 206", // #fbf0ce
		"--color-warning-200": "250 236 193", // #faecc1
		"--color-warning-300": "247 225 156", // #f7e19c
		"--color-warning-400": "240 202 82", // #f0ca52
		"--color-warning-500": "234 179 8", // #EAB308
		"--color-warning-600": "211 161 7", // #d3a107
		"--color-warning-700": "176 134 6", // #b08606
		"--color-warning-800": "140 107 5", // #8c6b05
		"--color-warning-900": "115 88 4", // #735804
		// error | #EF4444 
		"--color-error-50": "253 227 227", // #fde3e3
		"--color-error-100": "252 218 218", // #fcdada
		"--color-error-200": "251 208 208", // #fbd0d0
		"--color-error-300": "249 180 180", // #f9b4b4
		"--color-error-400": "244 124 124", // #f47c7c
		"--color-error-500": "239 68 68", // #EF4444
		"--color-error-600": "215 61 61", // #d73d3d
		"--color-error-700": "179 51 51", // #b33333
		"--color-error-800": "143 41 41", // #8f2929
		"--color-error-900": "117 33 33", // #752121
		// surface | #A1A1AA 
		"--color-surface-50": "255 255 255", // #ffffff
		"--color-surface-100": "236 236 238", // #ececee
		"--color-surface-200": "232 232 234", // #e8e8ea
		"--color-surface-300": "217 217 221", // #d9d9dd
		"--color-surface-400": "189 189 196", // #bdbdc4
		"--color-surface-500": "161 161 170", // #A1A1AA
		"--color-surface-600": "145 145 153", // #919199
		"--color-surface-700": "121 121 128", // #797980
		"--color-surface-800": "97 97 102", // #616166
		"--color-surface-900": "79 79 83", // #4f4f53
		
	}
}