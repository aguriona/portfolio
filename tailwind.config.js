module.exports = {
  content: [
    './index.html',
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'red': '#C85853',
        'bglight': '#FFEED9',
        'bgdark': '#FFDDBF',
        'whitee': '#FFF8F2',
        'colortitle': '#403930',
        'colorparagraph': '#594F43'
      },
      screens: {
        'sm': '320px',
        // => @media (min-width: 640px) { ... }
  
        'md': '768px',
        // => @media (min-width: 768px) { ... }
  
        'lg': '1024px',
        // => @media (min-width: 1024px) { ... }
  
        'xl': '1280px',
        // => @media (min-width: 1280px) { ... }
  
        '2xl': '1536px',
        // => @media (min-width: 1536px) { ... }
      }
    },
    fontFamily: {
      'title': ['Work Sans'],
      'paragraph': ['Eczar']
    }
  },
  plugins: [],
}

