module.exports = {
    root: true,
    parser: '@typescript-eslint/parser',
    parserOptions: {
        ecmaVersion: 2020, // Allows for the parsing of modern ECMAScript features
        sourceType: 'module', // Allows for the use of imports
    },
    plugins: ['@typescript-eslint'],
    extends: [
        'prettier',
        'prettier/@typescript-eslint',
        'plugin:@typescript-eslint/recommended',
    ],
    rules: {
        'no-empty-function': 'off',
        '@typescript-eslint/no-empty-function': ['off'],
        '@typescript-eslint/explicit-module-boundary-types': 'off',
        '@typescript-eslint/ban-types': ['off'],
        '@typescript-eslint/no-explicit-any': ['off'],
        '@typescript-eslint/no-unused-vars': ['off'],
        '@typescript-eslint/no-var-requires': ['off'],
    },
};
