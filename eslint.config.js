import js from "@eslint/js";
import globals from "globals";
import react from "eslint-plugin-react";
import reactHooks from "eslint-plugin-react-hooks";
import reactRefresh from "eslint-plugin-react-refresh";

export default [
	{ ignores: ["dist", "node_modules"] },
	js.configs.recommended,
	{
		/* Build scripts run in Node, not the browser. */
		files: ["scripts/**/*.mjs", "*.config.js"],
		languageOptions: {
			ecmaVersion: "latest",
			sourceType: "module",
			globals: { ...globals.node },
		},
	},
	{
		files: ["src/**/*.{js,jsx}"],
		languageOptions: {
			ecmaVersion: "latest",
			globals: { ...globals.browser },
			parserOptions: {
				ecmaFeatures: { jsx: true },
				sourceType: "module",
			},
		},
		settings: { react: { version: "detect" } },
		plugins: {
			react,
			"react-hooks": reactHooks,
			"react-refresh": reactRefresh,
		},
		rules: {
			...react.configs.flat.recommended.rules,
			...react.configs.flat["jsx-runtime"].rules,
			...reactHooks.configs.recommended.rules,
			"react-refresh/only-export-components": ["warn", { allowConstantExport: true }],
			/* r3f uses lowercase intrinsics like <group> and <mesh> with props
			   React doesn't know about. */
			"react/no-unknown-property": ["error", { ignore: ["object", "intensity", "geometry", "material", "skeleton", "dispose", "position", "args"] }],
			"react/prop-types": "off",
		},
	},
];
