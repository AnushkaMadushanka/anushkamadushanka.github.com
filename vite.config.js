import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import mkcert from'vite-plugin-mkcert'
import { createHtmlPlugin } from "vite-plugin-html";

// https://vitejs.dev/config/
export default defineConfig({
	server: {
		https: true,
	},
	plugins: [react(), mkcert(), createHtmlPlugin({
		minify: true,
		entry: 'src/main.jsx'
	})],
});