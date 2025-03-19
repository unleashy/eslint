import globals from "globals";
import { base, languageOptions, rules, exclusions } from "./building-blocks.js";

export default (tsconfigRootDir) => [
  ...base,
  languageOptions({ globals: globals.node, tsconfigRootDir }),
  rules,
  ...exclusions,
];
