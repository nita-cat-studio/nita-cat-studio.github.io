tailwind.config = {
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        brand: {
          50: '#f3f6fc',
          100: '#e6ecf6',
          200: '#daebff',
          300: '#b6d0ff',
          400: '#80b3ff',
          500: '#4184e4',
          600: '#2168d4',
          700: '#1854b2',
          800: '#143d7a',
          900: '#142952',
        },
        surface: {
          50: '#f6f8fa',
          100: '#eaeef2',
          200: '#d0d7de',
          300: '#afb8c1',
          400: '#8c959f',
          500: '#6e7781',
          600: '#57606a',
          700: '#424a53',
          800: '#32383f',
          900: '#24292f',
        }
      },
      fontFamily: {
        'display': ['-apple-system', 'BlinkMacSystemFont', 'Segoe UI', 'Noto Sans', 'Helvetica', 'Arial', 'sans-serif', 'Apple Color Emoji', 'Segoe UI Emoji'],
        'body': ['-apple-system', 'BlinkMacSystemFont', 'Segoe UI', 'Noto Sans', 'Helvetica', 'Arial', 'sans-serif', 'Apple Color Emoji', 'Segoe UI Emoji']
      },
      boxShadow: {
        'subtle': '0 2px 8px rgba(0, 0, 0, 0.08)',
        'float': '0 8px 16px rgba(0, 0, 0, 0.08)',
        'emphasize': '0 12px 24px rgba(0, 0, 0, 0.12)'
      },
      spacing: {
        '18': '4.5rem',
        '88': '22rem',
      }
    }
  }
};
