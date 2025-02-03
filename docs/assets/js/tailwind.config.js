tailwind.config = {
  theme: {
    extend: {
      colors: {
        brand: {
          950: '#172554',  // Deep background
          900: '#1e3a8a',  // Primary headings
          800: '#1e40af',  // Secondary headings
          700: '#1d4ed8',  // Logo text
          600: '#2563eb',  // Primary buttons
          500: '#3b82f6',  // Secondary buttons
          400: '#60a5fa',  // Accent text
          300: '#93c5fd',  // Light elements
          200: '#bfdbfe',  // Background accents
          100: '#dbeafe',  // Light background
          50: '#eff6ff',   // Lightest background
        },
        surface: {
          950: '#030712',  // Primary text
          900: '#111827',  // Secondary text
          800: '#1f2937',  // Important notes
          700: '#374151',  // General text
          600: '#4b5563',  // Supporting text
          100: '#f3f4f6',  // Divider background
          50: '#f8fafc',   // Main background
        }
      },
      fontFamily: {
        'display': ['Montserrat', 'Noto Sans TC', 'sans-serif'],
        'body': ['Inter', 'Noto Sans TC', 'sans-serif']
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
