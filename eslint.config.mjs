import js from "@eslint/js";
import { defineConfig } from "eslint/config";
import simpleImportSort from "eslint-plugin-simple-import-sort";
import globals from "globals";
import tseslint from "typescript-eslint";

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
            "simple-import-sort": simpleImportSort,
        },
        rules: {
            ...tseslint.configs.recommended.rules,
            "simple-import-sort/imports": "error",
            "simple-import-sort/exports": "error",
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
        plugins: {
            "simple-import-sort": simpleImportSort,
        },
        rules: {
            ...js.configs.recommended.rules,
            "simple-import-sort/imports": "error",
            "simple-import-sort/exports": "error",
        },
    },
]);
