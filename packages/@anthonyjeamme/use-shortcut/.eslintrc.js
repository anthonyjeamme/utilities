/** @type {import("eslint").Linter.Config} */
module.exports = {
  root: true,
  extends: [
    "@repo/eslint-config/library.js",
    "@repo/eslint-config/react-internal.js",
  ],
  parser: "@typescript-eslint/parser",
  ignorePatterns: ["**/*.test.ts", "**/*.spec.ts"],
};
