// import tailwindcssTypography from "@tailwindcss/typography";
// import daisyui from "daisyui";

// /** @type {import('tailwindcss').Config} */
// export default {
// 	content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
// 	theme: {
// 		extend: {},
// 	},
// 	plugins: [tailwindcssTypography, daisyui],
// 	daisyui: {
// 		darkTheme: "light",
// 	},
// };

// /** @type {import('tailwindcss').Config} */
// export default {
// 	content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
// 	theme: {
// 		extend: {},
// 	},
// 	// eslint-disable-next-line no-undef
// 	plugins: [require("@tailwindcss/typography"), require("daisyui")],
// 	daisyui: {
// 		themes: ["winter", "dracula"],
// 		styled: true,
// 		base: true,
// 		utils: true,
// 		logs: true,
// 		rtl: false,
// 	},
// };
/** @type {import('tailwindcss').Config} */
export default {
	content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
	theme: {
		extend: {},
	},
	// eslint-disable-next-line no-undef
	plugins: [require("@tailwindcss/typography"), require("daisyui")],
	daisyui: {
		themes: ["winter", "dracula"],
	},
};
