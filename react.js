module.exports = {
  extends: ['./core.js', 'plugin:react/jsx-runtime'],
  rules: {
    'react/jsx-curly-brace-presence': [
      1,
      { props: 'always', children: 'always' },
    ],
    'react/jsx-filename-extension': [
      1,
      {
        extensions: ['.tsx', '.ts', '.js', '.jsx'],
      },
    ],
    'react-hooks/exhaustive-deps': 0,
  }
}
