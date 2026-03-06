import path from "node:path";
import globals from "globals";
import svelte from "eslint-plugin-svelte";
import ts from "typescript-eslint";
import { base, languageOptions, rules, exclusions } from "./building-blocks.js";

export default async (tsconfigRootDir) => [
  ...base(tsconfigRootDir),
  ...svelte.configs["flat/recommended"],
  ...svelte.configs["flat/prettier"],
  languageOptions({
    globals: {
      ...globals.browser,
      ...globals.node,
    },
    tsconfigRootDir,
    extraFileExtensions: [".svelte"],
  }),
  rules,
  {
    files: ["**/*.svelte", "**/*.svelte.ts", "**/*.svelte.js"],
    languageOptions: {
      parserOptions: {
        parser: ts.parser,
        svelteConfig: (
          await import(
            "file://" + path.resolve(tsconfigRootDir, "svelte.config.js")
          )
        ).default,
      },
    },
    rules: {
      "@typescript-eslint/no-unsafe-assignment": "off",
      "@typescript-eslint/no-unsafe-call": "off",
      "no-undef": "off",
      "unicorn/filename-case": "off",
    },
  },
  ...exclusions,
];
