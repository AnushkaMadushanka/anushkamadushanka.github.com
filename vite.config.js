import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
	plugins: [react()],
	build: {
		target: "es2022",
		cssMinify: "lightningcss",
		rollupOptions: {
			output: {
				/*
				 * three.js and the r3f stack only matter for the hero avatar, which
				 * is lazy-loaded well after first paint. Splitting them out keeps
				 * them off the critical path instead of inflating the entry chunk.
				 */
				manualChunks(id) {
					if (!id.includes("node_modules")) return;
					if (/three|@react-three/.test(id)) return "three";
					if (/react-router|motion/.test(id)) return "vendor";
				},
			},
		},
	},
});
