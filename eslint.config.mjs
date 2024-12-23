import { dirname } from 'path';
import { fileURLToPath } from 'url';
import { FlatCompat } from '@eslint/eslintrc';
import tsPlugin from '@typescript-eslint/eslint-plugin';
import prettierConfig from 'eslint-config-prettier';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const compat = new FlatCompat({
  baseDirectory: __dirname,
});

const eslintConfig = [
  {
    ignores: ['**/payload-types.ts', 'src/scripts/**'],
  },
  ...compat.extends('next/core-web-vitals', 'next/typescript'),
  {
    files: ['*.js', '*.ts', '*.tsx', '*.mjs', '*.cjs'],
    plugins: ['@next/next', '@typescript-eslint', 'prettier'],
    parser: '@typescript-eslint/parser',
    parserOptions: {
      ecmaVersion: 'latest',
      sourceType: 'module',
      ecmaFeatures: {
        jsx: true,
      },
      project: ['./tsconfig.json'], // Path to your tsconfig.json
      tsconfigRootDir: process.cwd(),
    },
    rules: {
      ...prettierConfig.rules,
    },
  },
  {
    files: ['package.json', 'tsconfig.json', '**/*.tsx', '**/*.ts'],
    rules: {
      'perfectionist/sort-array-includes': 'off',
      'perfectionist/sort-astro-attributes': 'off',
      'perfectionist/sort-classes': 'off',
      'perfectionist/sort-enums': 'off',
      'perfectionist/sort-exports': 'off',
      'perfectionist/sort-imports': 'off',
      'perfectionist/sort-interfaces': 'off',
      'perfectionist/sort-jsx-props': 'off',
      'perfectionist/sort-keys': 'off',
      'perfectionist/sort-maps': 'off',
      'perfectionist/sort-named-exports': 'off',
      'perfectionist/sort-named-imports': 'off',
      'perfectionist/sort-object-types': 'off',
      'perfectionist/sort-objects': 'off',
      'perfectionist/sort-svelte-attributes': 'off',
      'perfectionist/sort-union-types': 'off',
      'perfectionist/sort-vue-attributes': 'off',
      '@typescript-eslint/no-unused-vars': 'off',
      '@typescript-eslint/no-explicit-any': 'off',
    },
  },
  {
    files: ['*.tsx', '*.ts'],
    rules: {
      '@typescript-eslint/consistent-type-imports': 'off',
      '@typescript-eslint/no-duplicate-enum-values': 'off',
      'no-restricted-exports': 'off',
    },
  },
];

export default eslintConfig;
