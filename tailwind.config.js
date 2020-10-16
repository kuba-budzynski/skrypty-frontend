module.exports = {
  future: {
    removeDeprecatedGapUtilities: true,
    purgeLayersByDefault: true,
  },
  purge: [],
  theme: {
    extend: {},
  },
  variants: {},
  plugins: [],
  theme: {
    screens: {

      'xsm': '360px',
      // => @media (min-width: 360px) { ... }

      'sm': '640px',
      // => @media (min-width: 640px) { ... }

      'md': '768px',
      // => @media (min-width: 768px) { ... }

      'lg': '1024px',
      // => @media (min-width: 1024px) { ... }

      'xl': '1280px',
      // => @media (min-width: 1280px) { ... }

      'xxl': '2560px',
      // => @media (min-width: 2560px) { ... }

      'navBar': '768px'
      // => @media (min-width: 800px) { ... }

    }
  },
  extend: {
    colors: {
      transparent: 'transparent',
      black: "#000",
      white: "#fff",
      accent: {
        dark: '#252F3F'
      }
    }
  }
}
