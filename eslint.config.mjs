import { defineConfig } from "eslint/config"
import globals from "globals"
import js from "@eslint/js"
import tseslint from "typescript-eslint"
import pluginReact from "eslint-plugin-react"

export default defineConfig([
  { files: ["**/*.{js,mjs,cjs,ts,jsx,tsx}"] },

  {
    files: ["**/*.{js,mjs,cjs,ts,jsx,tsx}"],
    languageOptions: {
      globals: globals.browser,
      parserOptions: {
        project: "./tsconfig.json"
      }
    }
  },

  {
    files: ["**/*.{js,mjs,cjs,ts,jsx,tsx}"],
    plugins: { js },
    extends: ["js/recommended"]
  },

  tseslint.configs.recommended,
  pluginReact.configs.flat.recommended,

  // 追加のルール設定は一番最後に
  {
    files: ["**/*.{ts,tsx}"],
    rules: {
      "react/react-in-jsx-scope": 0,
      "semi": [2, "never"],
      "comma-dangle": [2, "never"]
    }
  }
])
