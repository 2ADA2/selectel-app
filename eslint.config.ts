// eslint.config.js
import js from "@eslint/js";
import tseslint from "typescript-eslint";
import angular from "angular-eslint";

export default tseslint.config(
  {
    files: ["**/*.ts"],
    extends: [
      js.configs.recommended,
      ...tseslint.configs.recommended,
      ...tseslint.configs.stylistic,
      ...angular.configs.tsRecommended,
    ],
    processor: angular.processInlineTemplates,
    rules: {
      // ✅ Angular
      "@angular-eslint/directive-selector": [
        "error",
        {type: "attribute", prefix: "app", style: "camelCase"},
      ],
      "@angular-eslint/component-selector": [
        "error",
        {type: "element", prefix: "app", style: "kebab-case"},
      ],
      "comma-dangle": ["error", "always-multiline"],
      "semi": ["error", "always"], // точки с запятой
      "no-trailing-spaces": "error", // без лишних пробелов
      "eol-last": ["error", "always"], // пустая строка в конце файла
      "space-before-blocks": "error", // пробел перед {
      "keyword-spacing": ["error", {before: true, after: true}],
      'object-curly-spacing': ['error', 'always'],
      'array-bracket-spacing': ['error', 'never'],
      'space-in-parens': ['error', 'never'],
      'computed-property-spacing': ['error', 'never'],

      // ✅ Частые ошибки JS/TS
      "no-console": "warn", // предупреждать про console.log
      "no-debugger": "error", // запрет debugger
      "curly": ["error", "all"], // всегда {}
      "eqeqeq": ["error", "always"], // всегда ===
      "no-var": "error", // запрет var
      "prefer-const": "error", // использовать const если переменная не меняется
      "no-unused-vars": "warn", // неиспользуемые переменные
      "no-duplicate-imports": "error", // запрет повторных импортов
      "spaced-comment": ["error", "always", {markers: ["/"]}], // пробел после //
    },
  },
  {
    files: ["**/*.html"],
    extends: [
      ...angular.configs.templateRecommended,
      ...angular.configs.templateAccessibility,
    ],
    rules: {
      "max-len": ["error", {code: 120}],
    },
  }
);
