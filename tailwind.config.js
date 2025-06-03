/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        // Amazigh flag inspired colors
        'amazigh-blue': {
          50: '#eff6ff',
          100: '#dbeafe',
          500: '#3b82f6',
          600: '#2563eb',
          700: '#1d4ed8',
        },
        'amazigh-green': {
          50: '#f0fdf4',
          100: '#dcfce7',
          500: '#22c55e',
          600: '#16a34a',
        },
        'amazigh-yellow': {
          100: '#fef3c7',
          500: '#eab308',
          600: '#ca8a04',
        },
      },
      fontFamily: {
        'sans': ['var(--font-inter)', 'Inter', 'system-ui', 'sans-serif'],
        'display': ['var(--font-poppins)', 'Poppins', 'system-ui', 'sans-serif'],
      },
      backgroundImage: {
        'gradient-to-br': 'linear-gradient(135deg, var(--tw-gradient-stops))',
        'gradient-to-r': 'linear-gradient(90deg, var(--tw-gradient-stops))',
      },
    },
  },
  safelist: [
    // Ensure dynamic classes are not purged
    'bg-amazigh-blue-100',
    'bg-amazigh-green-100',
    'bg-amazigh-yellow-100',
    'text-amazigh-blue-600',
    'text-amazigh-green-600',
    'text-amazigh-yellow-600',
    'text-amazigh-blue-700',
    'hover:bg-amazigh-blue-50',
    'hover:text-amazigh-blue-600',
    'from-amazigh-blue-500',
    'to-amazigh-green-500',
  ],
  plugins: [],
}
