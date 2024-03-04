module.exports = {
	env: {
		'jest/globals': true,
	},
	root: true,
	extends: [
		'@react-native',
		'airbnb',
		'eslint:recommended',
		'airbnb/hooks',
		'airbnb-typescript',
		'plugin:@typescript-eslint/recommended',
		'plugin:@typescript-eslint/recommended-requiring-type-checking',
		'plugin:prettier/recommended',
		'plugin:import/recommended',
		'plugin:react/recommended',
		'plugin:react/jsx-runtime',
	],
	parser: '@typescript-eslint/parser',
	ignorePatterns: ['plugins/**/*', 'metro.config.js'],
	parserOptions: {
		ecmaFeatures: {
			jsx: true,
		},
		ecmaVersion: 'latest',
		sourceType: 'module',
		tsconfigRootDir: '.',
		project: ['./tsconfig.json'],
	},
	settings: {
		'import/resolver': {
			node: {
				extensions: ['.ts', '.tsx'],
			},
			typescript: {},
		},
		react: {
			version: '18.x',
		},
	},
	rules: {
		'@typescript-eslint/no-unused-vars': 'error',
		'global-require': 0,
		'react-hooks/exhaustive-deps': 'off',
		quotes: ['error', 'single'],
		'object-curly-spacing': ['error', 'always'],
		'array-bracket-spacing': ['error', 'never'],
		'react/require-default-props': ['error'],
		'react/default-props-match-prop-types': ['error'],
		'react/sort-prop-types': ['error'],
		'react/no-array-index-key': 'off',
		'no-tabs': 'off',
		'no-void': 'off',
		'no-console': 'off',
		'react/jsx-props-no-spreading': 'off',
		'import/prefer-default-export': 'off',
		'import/extensions': [
			'error',
			'ignorePackages',
			{
				js: 'never',
				jsx: 'never',
				ts: 'never',
				tsx: 'never',
			},
		],
		'import/no-extraneous-dependencies': [
			'error',
			{
				devDependencies: true,
			},
		],
		'react/display-name': 'off',
		'@typescript-eslint/quotes': [
			'error',
			'single',
			{
				avoidEscape: true,
				allowTemplateLiterals: true,
			},
		],
		'react/function-component-definition': [
			2,
			{
				namedComponents: 'arrow-function',
				unnamedComponents: 'arrow-function',
			},
		],
		'prettier/prettier': [
			'error',
			{
				printWidth: 80,
				endOfLine: 'auto',
				tabWidth: 4,
				indentStyle: 'tab',
				useTabs: true,
				arrowParens: 'avoid',
				bracketSameLine: false,
				singleQuote: true,
				trailingComma: 'all',
			},
		],
	},
};
