module.exports = {
	content: ["./index.html", "./src/App.vue", "./src/**/*.{vue,js,ts,jsx,tsx}"],
	prefix: "po-",
	safelist: [
		"po-animate-fadeOutDown",
		//   "bg-blue-600",
		//   "hover:bg-blue-500",
		//   "focus:border-blue-700",
		//   "focus:shadow-outline-blue",
		//   "active:bg-blue-700",
		//   "bg-orange-600",
		//   "hover:bg-orange-500",
		//   "focus:border-orange-700",
		//   "focus:shadow-outline-orange",
		//   "active:bg-orange-700",
		//   "bg-gray-600",
		//   "hover:bg-gray-50",
		//   "focus:border-gray-700",
		//   "focus:shadow-utline-gray",
		//   "active:bg-gray-700",
		//   "introjs-overlay",
		//   "bg-green-500",
		//   "bg-red-500",
		//   "border-yellow-200",
		//   "bg-yellow-200",
		//   "text-yellow-200",
		//   "border-orange-400",
		//   "bg-orange-400",
		//   "text-orange-400",
		//   "border-red-600",
		//   "bg-red-600",
		//   "text-red-600",
		//   "border-indigo-600",
		//   "bg-indigo-600",
		//   "text-indigo-600",
	],
	theme: {
		extend: {
			colors: {
				mpao: {
					orange: "#ec6d25",
					// blue: "#282f53",
					blue: "#242d59",
					green: "#4fac76",
					red: "#eb5757",
					lightblue: "#416ADC",
					// lightblue: "#3f54c0",
					midblue: "#004EBB", // for hover
				},
			},
			keyframes: {
				fadeIn: {
					from: { opacity: 0, transform: "translate3d(0, 100%, 0)" },
					to: { opacity: 1, transform: "translate3d(0, 0, 0)" },
				},
				fadeOutDown: {
					from: { opacity: 1, transform: "translate3d(0, 0, 0)" },
					to: { opacity: 0, transform: "translate3d(0, 100%, 0)" },
				},
				fadeOut: {
					from: { opacity: 1, transform: "translate3d(0, 0, 0)" },
					to: { opacity: 0, transform: "translate3d(-100%, 0, 0)" },
				},
			},
			animation: {
				fadeIn: "fadeIn 320ms",
				fadeOut: "fadeOut 320ms",
				fadeOutDown: "fadeOutDown 320ms",
			},
		},
	},
	variants: {
		extend: {},
	},
	plugins: [
		require("@tailwindcss/forms"),
		require("@tailwindcss/typography"),
		// require("@tailwindcss/container-queries"),
	],
};

// npx tailwindcss -o ./dist/build.css --minify
