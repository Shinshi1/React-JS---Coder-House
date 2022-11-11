module.exports = {
  syntax: 'postcss-scss',
  plugins: {
    'postcss-import-ext-glob': [{'sort': 'desc'}],
    'postcss-import': {},
    'tailwindcss/nesting': {},
    tailwindcss: {},
    autoprefixer: {},
  },
}

