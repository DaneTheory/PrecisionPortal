// babel.config.js
const env = process.env.BABEL_ENV || process.env.NODE_ENV
const isTest = env === 'test'

// Setting `targets` to undefined to make it use your browserslist config automatically
const targets = isTest ? { node: 'current' } : undefined

module.exports = {
  presets: [
    ['poi/babel', {
      env: { targets }
    }]
  ],
  plugins: ['react-hot-loader/babel']
}
