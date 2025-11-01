/** @type {import('tailwindcss').Config} */

/**
 * TAILWIND CONFIG TEMPLATE
 * Based on MARCUS2 UI/UX Standards
 * Customize colors to match your brand
 */

module.exports = {
    darkMode: ['class'],
    content: [
    './src/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
  	extend: {
  		colors: {
  			bg: {
  				primary: '#FAFAF8',
  				secondary: '#F5F5F3'
  			},
  			surface: {
  				DEFAULT: '#FFFFFF',
  				hover: '#FCFCFB'
  			},
  			text: {
  				primary: '#191919',
  				secondary: '#5A5A57',
  				tertiary: '#8B8B88',
  				disabled: '#C4C4C0'
  			},
  			accent: {
  				primary: '#CC7A3E',
  				hover: '#B56A33',
  				light: '#F7E8DC',
  				border: '#E5C4AD',
  				DEFAULT: 'hsl(var(--accent))',
  				foreground: 'hsl(var(--accent-foreground))'
  			},
  			success: {
  				DEFAULT: '#2B7A4F',
  				light: '#E8F5EC'
  			},
  			warning: {
  				DEFAULT: '#D97706',
  				light: '#FEF3E2'
  			},
  			error: {
  				DEFAULT: '#DC2626',
  				light: '#FEE2E2'
  			},
  			info: {
  				DEFAULT: '#2563EB',
  				light: '#EFF6FF'
  			},
  			border: 'hsl(var(--border))',
  			background: 'hsl(var(--background))',
  			foreground: 'hsl(var(--foreground))',
  			card: {
  				DEFAULT: 'hsl(var(--card))',
  				foreground: 'hsl(var(--card-foreground))'
  			},
  			popover: {
  				DEFAULT: 'hsl(var(--popover))',
  				foreground: 'hsl(var(--popover-foreground))'
  			},
  			primary: {
  				DEFAULT: 'hsl(var(--primary))',
  				foreground: 'hsl(var(--primary-foreground))'
  			},
  			secondary: {
  				DEFAULT: 'hsl(var(--secondary))',
  				foreground: 'hsl(var(--secondary-foreground))'
  			},
  			muted: {
  				DEFAULT: 'hsl(var(--muted))',
  				foreground: 'hsl(var(--muted-foreground))'
  			},
  			destructive: {
  				DEFAULT: 'hsl(var(--destructive))',
  				foreground: 'hsl(var(--destructive-foreground))'
  			},
  			input: 'hsl(var(--input))',
  			ring: 'hsl(var(--ring))',
  			chart: {
  				'1': 'hsl(var(--chart-1))',
  				'2': 'hsl(var(--chart-2))',
  				'3': 'hsl(var(--chart-3))',
  				'4': 'hsl(var(--chart-4))',
  				'5': 'hsl(var(--chart-5))'
  			}
  		},
  		spacing: {
  			'1': '4px',
  			'2': '8px',
  			'3': '12px',
  			'4': '16px',
  			'6': '24px',
  			'8': '32px',
  			'12': '48px',
  			'16': '64px',
  			'20': '80px',
  			'24': '96px'
  		},
  		fontFamily: {
  			sans: [
  				'-apple-system',
  				'BlinkMacSystemFont',
  				'Inter',
  				'SF Pro Display',
  				'Segoe UI',
  				'Helvetica Neue',
  				'sans-serif'
  			]
  		},
  		fontSize: {
  			xs: '12px',
  			sm: '14px',
  			base: '16px',
  			lg: '18px',
  			xl: '20px',
  			'2xl': '24px',
  			'3xl': '28px',
  			'4xl': '32px',
  			'5xl': '40px',
  			'6xl': '48px'
  		},
  		borderRadius: {
  			sm: 'calc(var(--radius) - 4px)',
  			DEFAULT: '8px',
  			md: 'calc(var(--radius) - 2px)',
  			lg: 'var(--radius)',
  			xl: '16px',
  			'2xl': '24px',
  			full: '9999px'
  		},
  		boxShadow: {
  			xs: '0 1px 2px rgba(25, 25, 25, 0.04)',
  			sm: '0 2px 4px rgba(25, 25, 25, 0.06), 0 1px 2px rgba(25, 25, 25, 0.03)',
  			DEFAULT: '0 4px 8px rgba(25, 25, 25, 0.08), 0 2px 4px rgba(25, 25, 25, 0.04)',
  			md: '0 4px 8px rgba(25, 25, 25, 0.08), 0 2px 4px rgba(25, 25, 25, 0.04)',
  			lg: '0 12px 24px rgba(25, 25, 25, 0.10), 0 4px 8px rgba(25, 25, 25, 0.05)',
  			xl: '0 24px 48px rgba(25, 25, 25, 0.12), 0 8px 16px rgba(25, 25, 25, 0.06)'
  		},
  		transitionDuration: {
  			fast: '150ms',
  			DEFAULT: '200ms',
  			slow: '300ms'
  		},
  		transitionTimingFunction: {
  			in: 'cubic-bezier(0.4, 0, 1, 1)',
  			out: 'cubic-bezier(0, 0, 0.2, 1)',
  			'in-out': 'cubic-bezier(0.4, 0, 0.2, 1)'
  		},
  		maxWidth: {
  			xs: '320px',
  			sm: '640px',
  			md: '768px',
  			lg: '1024px',
  			xl: '1280px',
  			'2xl': '1536px'
  		},
  		zIndex: {
  			dropdown: '1000',
  			sticky: '1020',
  			'modal-backdrop': '1040',
  			modal: '1050',
  			toast: '1060'
  		}
  	}
  },
  plugins: [require("tailwindcss-animate")],
}
