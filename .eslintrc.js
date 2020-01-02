module.exports = {
  root: true,
  env: {
    node: true
  },
  extends: [
    '@vue/eslint-config-airbnb',
    'plugin:vue/strongly-recommended',
    'plugin:vue/recommended',
    'plugin:vue/essential'
  ],
  rules: {
    'vue/html-quotes': ['error',  'single'],
    'vue/no-spaces-around-equal-signs-in-attribute': 'off',

    'vue/array-bracket-spacing': ['error', 'never'],
    'vue/arrow-spacing': ['error', { before: true, after: true }],
    'vue/block-spacing': ['error', 'always'],
    'vue/brace-style': ['error', '1tbs', { allowSingleLine: true }],
    'vue/camelcase': ['error', { properties: 'never' }],
    'vue/comma-dangle': ['error', 'never'],

    'vue/component-name-in-template-casing': [
      'error',
      'PascalCase', {
        registeredComponentsOnly: true,
        ignores: []
      }
    ],

    'vue/eqeqeq': ['error', 'always', { null: 'ignore' }],
    'vue/key-spacing': ['error', { beforeColon: false, afterColon: true }],

    'vue/match-component-file-name': [
      'error',
      {
        extensions: [ 'vue', 'jsx', 'js'],
        shouldMatchCase: true
      }
    ],

    'vue/no-boolean-default': ['error', 'default-false'],

    'vue/no-restricted-syntax': [
      'error',
      {
        'selector': 'VElement > VExpressionContainer CallExpression',
        'message': 'Call expressions are not allowed.'
      },
      {
        'selector': 'VElement VAttribute[key.name.name != "on"] CallExpression',
        'message': 'Call expressions are not allowed.'
      }
    ],

    'vue/object-curly-spacing': ['error', 'always'],
    'vue/require-direct-export': 'error',

    // Отключаем за ненадобностью
    // 'vue/script-indent': ['error', 2, {
    //   baseIndent: 0,
    //   switchCase: 0,
    //   ignores: []
    // }],

    'vue/space-infix-ops': 'error',

    'vue/space-unary-ops': [
      'error',
      {
        words: true,
        nonwords: false,
        overrides: {},
      }
    ],

    'vue/v-on-function-call': ['error', 'never'],

    'vue/no-empty-pattern': 'error',

    'vue/dot-location': ['error', 'property'],

    'vue/keyword-spacing': ['error', {
      before: true,
      after: true,
      overrides: {
        return: { after: true },
        throw: { after: true },
        case: { after: true }
      }
    }],

    // doesn't work rule
    // 'vue/no-deprecated-scope-attribute': 'error',

    'vue/valid-v-slot': 'error',

    "vue/v-slot-style": ["error", {
      atComponent: 'v-slot',
      default: 'shorthand',
      named: 'shorthand'
    }],

    // -------------------------------------------------------

    // require or disallow trailing commas (comma-dangle)
    'comma-dangle': ['error', 'never'],

    //Require parens in arrow function arguments (arrow-parens)
    'arrow-parens': ['error', 'as-needed'],

    // Require Radix Parameter (radix)
    radix: ['error', 'as-needed'],

    // Disallow Reassignment of Function Parameters (no-param-reassign)
    'no-param-reassign': ['error', {
      props: true,
      ignorePropertyModificationsFor: ['state', 'config']
    }],

    // disallow the unary operators ++ and -- (no-plusplus)
    'no-plusplus': 'off',

    // disallow bitwise operators (no-bitwise)
    'no-bitwise': ['error', { allow: ['&'] }],

    // Disallow Assignment in return Statement (no-return-assign)
    'no-return-assign': 'off',

    // Disallow use of the void operator. (no-void)
    'no-void': 'off',

    // disallow empty block statements (no-empty)
    'no-empty': ['error', { allowEmptyCatch: true }],

    'no-debugger': 'warn',

    'object-curly-newline': ['error', {
      ObjectExpression: { minProperties: 8, multiline: true, consistent: true },
      ObjectPattern: { minProperties: 8, multiline: true, consistent: true },
      ImportDeclaration: { minProperties: 8, multiline: true, consistent: true },
      ExportDeclaration: { minProperties: 8, multiline: true, consistent: true },
    }],


    'no-restricted-syntax': [
      'error',
      {
        selector: 'ForInStatement',
        message: 'for..in loops iterate over the entire prototype chain, which is virtually never what you want. Use Object.{keys,values,entries}, and iterate over the resulting array.',
      },
      {
        selector: 'LabeledStatement',
        message: 'Labels are a form of GOTO; using them makes code confusing and hard to maintain and understand.',
      },
      {
        selector: 'WithStatement',
        message: '`with` is disallowed in strict mode because it makes code impossible to predict and optimize.',
      },
    ],

    'no-underscore-dangle': ['error', { allowAfterThis: true }],

  },
  parserOptions: {
    parser: 'babel-eslint'
  }
};
