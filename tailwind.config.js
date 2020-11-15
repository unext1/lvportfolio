module.exports = {
  future: {
    defaultLineHeights: true,
    standardFontWeights: true,
    removeDeprecatedGapUtilities: true,
    purgeLayersByDefault: true
  },
  purge: [],
  theme: {
    extend: {
      animation: {
        'spin-slow': 'spin 3s linear infinite'
      },
      fontFamily: {
        'open-sans': ['Open Sans']
      },
      colors: {}
    }
  },
  variants: {},
  plugins: [require('@tailwindcss/custom-forms')],
  i18n: {
    locales: ['en', 'se'],
    defaultLocale: 'en'
  }
  // domains: [
  //   {
  //     domain: 'example.com',
  //     defaultLocale: 'en'
  //   },
  //   {
  //     domain: 'example.nl',
  //     defaultLocale: 'nl'
  //   }
  // ]
};
