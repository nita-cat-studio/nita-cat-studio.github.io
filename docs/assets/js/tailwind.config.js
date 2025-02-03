tailwind.config = {
  theme: {
    extend: {
      colors: {
        brand: {
          950: '#172554',  // 深色背景
          900: '#1e3a8a',  // 主要標題
          800: '#1e40af',  // 次要標題
          700: '#1d4ed8',  // Logo 文字
          600: '#2563eb',  // 主要按鈕
          500: '#3b82f6',  // 次要按鈕
          400: '#60a5fa',  // 強調文字
          300: '#93c5fd',  // 輕量元素
          200: '#bfdbfe',  // 背景點綴
          100: '#dbeafe',  // 淺色背景
          50: '#eff6ff',   // 最淺背景
        },
        surface: {
          950: '#030712',  // 主要文字
          900: '#111827',  // 次要文字
          800: '#1f2937',  // 重要說明
          700: '#374151',  // 一般說明
          600: '#4b5563',  // 輔助文字
          100: '#f3f4f6',  // 分隔底色
          50: '#f8fafc',   // 主要底色
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
