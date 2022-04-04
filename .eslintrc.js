const eslintConfig = {
    root: true,
    parser: '@typescript-eslint/parser',
    parserOptions: {project: ['./tsconfig.eslint.json']},
    plugins: ['@typescript-eslint'],
    extends: ['eslint:recommended', 'plugin:@typescript-eslint/recommended', 'prettier'],
    rules: {
        '@typescript-eslint/no-unused-vars': 'error',
    },
    env: {
        browser: true,
        es2021: true,
    }
};

module.exports = eslintConfig;
