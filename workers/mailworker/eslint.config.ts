import eslint from '@eslint/js';
import tseslint from 'typescript-eslint';
import stylistic from '@stylistic/eslint-plugin';
import nodePlugin from 'eslint-plugin-n';

export default [
  eslint.configs.recommended,
  nodePlugin.configs['flat/recommended-script'],
  ...tseslint.configs.strictTypeChecked,
  ...tseslint.configs.stylisticTypeChecked,
  {
    ignores: [
      '**/node_modules/*',
      '**/*.mjs',
      '**/*.js',
    ],
  },
  {
    languageOptions: {
      parserOptions: {
        project: './tsconfig.json',
        warnOnUnsupportedTypeScriptVersion: false,
      },
    },
  },
  {
    plugins: {
      '@stylistic': stylistic,
    },
  },
  {
    files: ['**/*.ts'],
    rules: {
      // Existing rules
      '@typescript-eslint/explicit-member-accessibility': 'warn',
      '@typescript-eslint/no-misused-promises': 'off',
      '@typescript-eslint/no-floating-promises': 'off',
      '@typescript-eslint/no-confusing-void-expression': 'off',
      '@typescript-eslint/no-unnecessary-condition': 'off',
      '@typescript-eslint/restrict-template-expressions': [
        'warn',
        { allowNumber: true },
      ],
      '@typescript-eslint/restrict-plus-operands': [
        'warn',
        { allowNumberAndString: true },
      ],
      '@typescript-eslint/no-unused-vars': 'warn',
      '@typescript-eslint/no-unsafe-enum-comparison': 'off',
      '@typescript-eslint/no-unnecessary-type-parameters': 'off',

      '@stylistic/no-extra-semi': 'warn',
      '@stylistic/semi': ['warn', 'always'],
      '@stylistic/member-delimiter-style': [
        'warn',
        {
          multiline: { delimiter: 'comma', requireLast: true },
          singleline: { delimiter: 'comma', requireLast: false },
          overrides: {
            interface: {
              singleline: { delimiter: 'semi', requireLast: false },
              multiline: { delimiter: 'semi', requireLast: true },
            },
          },
        },
      ],

      'max-len': ['warn', { code: 80 }],
      'comma-dangle': ['warn', 'always-multiline'],
      'no-console': 'warn',
      'no-extra-boolean-cast': 'off',
      'indent': ['warn', 2],
      'quotes': ['warn', 'single'],
      'prefer-const': 'warn',

      // Node plugin
      'n/no-process-env': 'warn',
      'n/no-missing-import': 'off',
      'n/no-unpublished-import': 'off',

      // === SUPPRESS STYLISTIC / STRICT TS ERRORS ===
      '@typescript-eslint/consistent-type-definitions': 'off',
      '@typescript-eslint/no-explicit-any': 'off',
      '@typescript-eslint/array-type': 'off',
      '@typescript-eslint/no-empty-object-type': 'off',
      '@typescript-eslint/no-unsafe-assignment': 'off',
      '@typescript-eslint/no-unsafe-argument': 'off',
      '@typescript-eslint/no-unsafe-call': 'off',
      '@typescript-eslint/no-unsafe-member-access': 'off',
      '@typescript-eslint/no-unsafe-return': 'off',
      '@typescript-eslint/prefer-function-type': 'off',
      '@typescript-eslint/no-redundant-type-constituents': 'off',
      '@typescript-eslint/no-duplicate-type-constituents': 'off',
    },
  },
];
