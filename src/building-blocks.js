import js from "@eslint/js";
import ts from "typescript-eslint";
import unicorn from "eslint-plugin-unicorn";
import regexp from "eslint-plugin-regexp";
import prettier from "eslint-config-prettier";

export const base = [
  js.configs.recommended,
  ...ts.configs.recommendedTypeChecked,
  ...ts.configs.strictTypeChecked,
  unicorn.configs["flat/recommended"],
  regexp.configs["flat/recommended"],
  prettier,
];

export const languageOptions = ({
  globals = {},
  tsconfigRootDir,
  extraFileExtensions = [],
} = {}) => ({
  languageOptions: {
    sourceType: "module",
    ecmaVersion: "latest",
    globals,
    parserOptions: {
      projectService: true,
      tsconfigRootDir,
      extraFileExtensions,
    },
  }
});

export const rules = {
  rules: {
    "@typescript-eslint/array-type": ["error", { default: "array-simple" }],
    "@typescript-eslint/consistent-type-imports": [
      "error",
      { fixStyle: "inline-type-imports" },
    ],
    "@typescript-eslint/no-confusing-void-expression": "off",
    "@typescript-eslint/no-extraneous-class": [
      "error",
      {
        allowConstructorOnly: true,
        allowEmpty: true,
        allowWithDecorator: true,
      },
    ],
    "@typescript-eslint/no-invalid-void-type": "off",
    "@typescript-eslint/no-unnecessary-condition": [
      "error",
      { allowConstantLoopConditions: true },
    ],
    "@typescript-eslint/no-unused-vars": "off",
    "@typescript-eslint/restrict-template-expressions": [
      "error",
      {
        allowBoolean: true,
        allowNumber: true,
      },
    ],
    eqeqeq: ["error", "always"],
    "no-constant-condition": "off",
    "no-empty": "off",
    "no-useless-escape": "off",
    "prefer-const": "off",
    "unicorn/consistent-function-scoping": "off",
    "unicorn/no-this-assignment": "off",
    "unicorn/no-useless-undefined": "off",
    "unicorn/prefer-spread": "off",
    "unicorn/prefer-ternary": "off",
    "unicorn/prevent-abbreviations": "off",
  }
};

export const exclusions = [
  {
    files: ["**/*.js", "**/*.cjs", "**/*.mjs"],
    ...ts.configs.disableTypeChecked,
  },
  {
    ignores: [
      "build/",
      ".svelte-kit/",
      "dist/",
      ".yarn/",
      "node_modules/",
      ".pnp.*",
    ],
  },
];
