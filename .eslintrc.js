module.exports = {
  root: true,
  env: {
    // es6: true,
    browser: false,
    node: true
  },
  // plugins:[
  //   'import',
  //   'promise'
  // ],
  parserOptions: {
    parser: 'babel-eslint',
    sourceType: 'module'
  },
  extends: [
    'standard'
  ],
  // add your custom rules here
  rules: {
    'no-console': process.env.NODE_ENV === 'production' ? 'error' : 'off',
    'no-debugger': process.env.NODE_ENV === 'production' ? 'error' : 'off'
  }
}
