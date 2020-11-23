module.exports = {
  future: {
    removeDeprecatedGapUtilities: true,
    purgeLayersByDefault: true,
  },
  purge: [
    './**/*.html',
    './**/*.tsx',
    './**/*.jsx',
    './**/*.js',
    './**/*.tx',
  ],
  theme: {
    extend: {
    },
  },
  variants: {},
  plugins: [],
  theme: {
    screens: {
      'xsm': '360px',
      'sm': '640px',
      'md': '768px',
      'lg': '1024px',
      'xl': '1280px',
      'xxl': '1920px',
      'xxxl': '2560px',
      'navBar': '768px'
    }
  },
  extend: {
  }
}