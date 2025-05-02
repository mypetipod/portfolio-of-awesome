import { dirname } from "path";
import { fileURLToPath } from "url";
import { FlatCompat } from "@eslint/eslintrc";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

// Remove compat.extends for the `extends` array and set it directly
const eslintConfig = {
  extends: [
    "next/core-web-vitals", // The core Web Vitals for Next.js
    "next/typescript", // The TypeScript config for Next.js
  ],
  rules: {
    "@typescript-eslint/no-unused-vars": "off", // Custom rules to turn off
    "@typescript-eslint/no-explicit-any": "off",
  },
};

export default eslintConfig;
