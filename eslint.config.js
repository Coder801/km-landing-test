import { FlatCompat } from '@eslint/eslintrc';
import { dirname } from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const compat = new FlatCompat({
  baseDirectory: __dirname,
  recommendedConfig: 'eslint:recommended',
});

/** @type {import('eslint').Linter.Config[]} */
const eslintConfig = [
  ...compat.config({
    overrides: [
      {
        files: ['**/*.{js,mjs,cjs,ts,jsx,tsx}'],
        extends: [
          'next/core-web-vitals',
          'next/typescript',
          'plugin:prettier/recommended',
        ],
        plugins: [
          'prettier',
          'simple-import-sort',
          'eslint-plugin-simple-import-sort',
          'react-hooks',
          'react-refresh',
        ],
        rules: {
          'simple-import-sort/imports': 'error',
          'simple-import-sort/exports': 'error',
          'react/react-in-jsx-scope': 'off',
          '@typescript-eslint/no-unused-vars': 'warn',
          'no-unused-vars': 'off',
          'no-redeclare': 'off',
          '@typescript-eslint/no-redeclare': 'error',
          'react/prop-types': 'off',
          'prettier/prettier': 'error',
        },
      },
    ],
  }),
];

export default eslintConfig;
