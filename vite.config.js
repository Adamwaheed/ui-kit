const path = require("path");
import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";

// https://vitejs.dev/config/
export default defineConfig({
	build: {
		lib: {
			entry: [
				path.resolve(__dirname, "src/components/index.js"),
				path.resolve(__dirname, "src/shared/helper/index.js"),
				path.resolve(__dirname, "src/shared/directives/index.js"),
			],
			name: "UiKit",
			fileName: (format) => `ui-kit.${format}.js`,
		},
		rollupOptions: {
			external: ["vue"],
			output: {
				// Provide global variables to use in the UMD build
				// Add external deps here
				globals: {
					vue: "Vue",
				},
			},
		},
	},
	plugins: [vue()],
});
