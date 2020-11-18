module.exports = {
  future: {
    // removeDeprecatedGapUtilities: true,
    // purgeLayersByDefault: true,
  },
  purge: [],
  theme: {
    extend: {
      colors: {
        laurynas: 'red'
      }
    }
  },
  variants: {},
  plugins: []
};

// module.exports = {
//   future: {
//     defaultLineHeights: true,
//     standardFontWeights: true,
//     removeDeprecatedGapUtilities: true,
//     purgeLayersByDefault: true
//   },
//   purge: [],
//   theme: {
//     extend: {
//       animation: {
//         'spin-slow': 'spin 3s linear infinite'
//       },
//       fontFamily: {
//         'open-sans': ['Open Sans']
//       },
//       colors: {
//         laurynas: 'red'
//       }
//     }
//   },
//   variants: {
//     textColor: ['responsive', 'hover', 'focus', 'group-hover']
//   },
//   plugins: [require('@tailwindcss/custom-forms')],
//   i18n: {
//     locales: ['en', 'se'],
//     defaultLocale: 'en'
//   }
// };
