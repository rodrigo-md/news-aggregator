import js from "@eslint/js";
import globals from "globals";
import tseslint from "typescript-eslint";
import { defineConfig } from "eslint/config";

export default defineConfig([
    // TypeScript files
    {
        files: ["**/*.{ts,mts}"],
        ignores: ["**/node_modules/**", "**/dist/**"],
        languageOptions: {
            globals: globals.node,
            parser: tseslint.parser,
            parserOptions: {
                ecmaVersion: "latest",
                sourceType: "module",
                project: "./tsconfig.json",
            },
        },
        plugins: {
            "@typescript-eslint": tseslint.plugin,
        },
        rules: {
            ...tseslint.configs.recommended.rules,
        },
    },
    // JavaScript files
    {
        files: ["**/*.{js,mjs}"],
        ignores: ["**/node_modules/**", "**/dist/**"],
        languageOptions: {
            globals: globals.node,
            parser: js.parser,
            parserOptions: {
                ecmaVersion: "latest",
                sourceType: "module",
            },
        },
        rules: {
            ...js.configs.recommended.rules,
        },
    },
]);
