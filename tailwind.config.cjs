const plugin = require("tailwindcss/plugin");
// const defaultTheme = require('tailwindcss/defaultTheme')

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,jsx,ts,tsx}"],
  // darkMode: 'class', // or 'media' or 'class'
  theme: {
    container: {
      center: true,
      padding: {
        '2xl': '2rem',
        DEFAULT: '1rem',
        lg: '2rem',
        md: '2rem',
        sm: '1rem',
        xl: '2rem',
      },
      screens: {
        '2xl': '86rem',
        lg: '64rem',
        md: '48rem',
        sm: '40rem',
        xl: '80rem',
      },
    },
    fontFamily: {
      sans: ['system-ui', 'sans-serif'], // Primary font
      serif: ['Georgia', 'serif', 'Cambria'], // Optional secondary
    },
    fontWeight: {
      thin: '100',
      hairline: '100',
      extralight: '200',
      light: '300',
      normal: '400',
      medium: '500',
      semibold: '600',
      bold: '700',
      extrabold: '800',
      'extra-bold': '800',
      black: '900',
    },
    fontSize: {
      xs: ['0.75rem', { lineHeight: '1rem' }],
      sm: ['0.875rem', { lineHeight: '1.5rem' }],
      base: ['1rem', { lineHeight: '1.75rem' }],
      lg: ['1.125rem', { lineHeight: '2rem' }],
      xl: ['1.25rem', { lineHeight: '2rem' }],
      '2xl': ['1.5rem', { lineHeight: '2rem' }],
      '3xl': ['2rem', { lineHeight: '2.5rem' }],
      '4xl': ['2.5rem', { lineHeight: '3.5rem' }],
      '5xl': ['3rem', { lineHeight: '3.5rem' }],
      '6xl': ['3.75rem', { lineHeight: '1' }],
      '7xl': ['4.5rem', { lineHeight: '1.1' }],
      '8xl': ['6rem', { lineHeight: '1' }],
      '9xl': ['8rem', { lineHeight: '1' }],
      h1: ['2.5rem', { lineHeight: '3rem' }],
      h2: ['2rem', { lineHeight: '2.5rem' }],
      h3: ['1.75rem', { lineHeight: '2.25rem' }],
      h4: ['1.5rem', { lineHeight: '2rem' }],
      h5: ['1.25rem', { lineHeight: '1.75rem' }],
      h6: ['1rem', { lineHeight: '1.5rem' }],
      body: ['1rem', { lineHeight: '1.5rem' }],
      a: ['1rem', { lineHeight: '1.5rem' }],
    },
    colors: {
      light: {
        primary: '#006e1d',
        onPrimary: '#ffffff',
        primaryContainer: '#92fa90',
        onPrimaryContainer: '#002204',
        secondary: '#52634f',
        onSecondary: '#ffffff',
        secondaryContainer: '#d5e8cf',
        onSecondaryContainer: '#101f10',
        tertiary: '#38656a',
        onTertiary: '#ffffff',
        tertiaryContainer: '#bcebf1',
        onTertiaryContainer: '#002023',
        error: '#ba1a1a',
        onError: '#ffffff',
        errorContainer: '#ffdada',
        onErrorContainer: '#410002',
        background: '#fcfdf6',
        onBackground: '#1a1c19',
        surface: '#fcfdf6',
        onSurface: '#1a1c19',
        surfaceVariant: '#dee5d8',
        onSurfaceVariant: '#424940',
        outline: '#72796f',
        outlineVariant: '#c2c9bd',
        shadow: '#000000',
        scrim: '#000000',
        inverseSurface: '#2f312d',
        inverseOnSurface: '#f0f1eb',
        inversePrimary: '#77dd77',
        elevation: {
          level0: 'transparent',
          level1: '#eff6eb',
          level2: '#e8f2e5',
          level3: '#e0eddc',
          level4: '#dee8dc',
          level5: '#d9e9d8',
        },
        surfaceDisabled: 'rgba(26, 28, 25, 0.12)',
        onSurfaceDisabled: 'rgba(26, 28, 25, 0.38)',
        backdrop: 'rgba(2c322a, 0.4)',
      },
      dark: {
        primary: '#77dd77',
        onPrimary: '#00390b',
        primaryContainer: '#005314',
        onPrimaryContainer: '#92fa90',
        secondary: '#b9ccb3',
        onSecondary: '#253423',
        secondaryContainer: '#3b4b38',
        onSecondaryContainer: '#d5e8cf',
        tertiary: '#a0cfd4',
        onTertiary: '#00363b',
        tertiaryContainer: '#1f4d52',
        onTertiaryContainer: '#bcebf1',
        error: '#ffb4ab',
        onError: '#690005',
        errorContainer: '#93000a',
        onErrorContainer: '#ffb4ab',
        background: '#1a1c19',
        onBackground: '#e2e3dd',
        surface: '#1a1c19',
        onSurface: '#e2e3dd',
        surfaceVariant: '#424940',
        onSurfaceVariant: '#c2c9bd',
        outline: '#8c9388',
        outlineVariant: '#424940',
        shadow: '#000000',
        scrim: '#000000',
        inverseSurface: '#e2e3dd',
        inverseOnSurface: '#2f312d',
        inversePrimary: '#006e1d',
        elevation: {
          level0: 'transparent',
          level1: '#1f261e',
          level2: '#212b21',
          level3: '#243125',
          level4: '#253324',
          level5: '#273726',
        },
        surfaceDisabled: 'rgba(226, 227, 221, 0.12)',
        onSurfaceDisabled: 'rgba(226, 227, 221, 0.38)',
        backdrop: 'rgba(2c322a, 0.4)',
      },
    },
    extend: {
      boxShadow: {
        custom: '0px 2px 8px rgba(0, 0, 0, 0.4)',
        customB: '0px -2px 8px rgba(0, 0, 0, 0.4)',
      },
      backgroundColor: ['active'],
      screens: {
        'sm-md': '580px',
        'md-lg': '950px',
        '2lg': '1090px',
      },
      typography: ({ theme }) => ({
        DEFAULT: {
          css: {
            '--tw-prose-body': theme('colors.light.onBackground'),
            '--tw-prose-headings': theme('colors.light.surface'),
            '--tw-prose-lead': theme('colors.light.onSecondary'),
            '--tw-prose-links': theme('colors.light.primary'),
            '--tw-prose-bold': theme('colors.light.onSecondary'),
            '--tw-prose-counters': theme('colors.light.onSecondary'),
            '--tw-prose-bullets': theme('colors.light.onSecondary'),
            '--tw-prose-hr': theme('colors.light.onSecondary'),
            '--tw-prose-quotes': theme('colors.light.onSecondary'),
            '--tw-prose-quote-borders': theme('colors.light.onSecondary'),
            '--tw-prose-captions': theme('colors.light.onSecondary'),
            '--tw-prose-code': theme('colors.light.onSecondary'),
            '--tw-prose-pre-code': theme('colors.light.onSecondary'),
            '--tw-prose-pre-bg': theme('colors.light.onSecondary'),
            '--tw-prose-th-borders': theme('colors.light.onSecondary'),
            '--tw-prose-td-borders': theme('colors.light.onSecondary'),
            '--tw-prose-invert-body': theme('colors.dark.onBackground'),
            '--tw-prose-invert-headings': theme('colors.dark.surface'),
            '--tw-prose-invert-lead': theme('colors.dark.onSecondary'),
            '--tw-prose-invert-links': theme('colors.dark.primary'),
            '--tw-prose-invert-bold': theme('colors.white'),
            '--tw-prose-invert-counters': theme('colors.dark.onSecondary'),
            '--tw-prose-invert-bullets': theme('colors.dark.onSecondary'),
            '--tw-prose-invert-hr': theme('colors.dark.onSecondary'),
            '--tw-prose-invert-quotes': theme('colors.dark.onSecondary'),
            '--tw-prose-invert-quote-borders': theme('colors.dark.onSecondary'),
            '--tw-prose-invert-captions': theme('colors.dark.onSecondary'),
            '--tw-prose-invert-code': theme('colors.white'),
            '--tw-prose-invert-pre-code': theme('colors.dark.onSecondary'),
            '--tw-prose-invert-pre-bg': 'rgba(0, 0, 0, 0.5)',
            '--tw-prose-invert-th-borders': theme('colors.dark.onSecondary'),
            '--tw-prose-invert-td-borders': theme('colors.dark.onSecondary'),
            h1: {
              fontSize: theme('fontSize.h1'), // Or the largest size you want for h1
              color: theme('colors.light.surface dark:colors.dark.surface'),
            },
            h2: {
              fontSize: theme('fontSize.xl'),
              color: theme('colors.light.surface dark:colors.dark.surface'),
            },
            h3: {
              fontSize: theme('fontSize.lg'),
              marginBottom: '12',
              marginTop: '12',
              color: theme('colors.light.surface dark:colors.dark.surface'),
            },
            h4: {
              fontSize: theme('fontSize.lg'),
              color: theme('colors.light.surface dark:colors.dark.surface'),
            },
            h5: {
              fontSize: theme('fontSize.lg'),
            },
            h6: {
              fontSize: theme('fontSize.lg'),
            },
            a: {
              fontSize: theme('fontSize.a'),
              color: theme('colors.light.primary dark:colors.dark.primary'),
            },
            body: {
              fontSize: theme('fontSize.base'),
            },
            li: {
              fontSize: theme('fontSize.base'),
            },
            ol: {
              listStyleType: 'decimal',
              fontSize: theme('fontSize.base'),
              paddingLeft: '1.5rem',
            },
            ul: {
              listStyleType: 'disc',
              fontSize: theme('fontSize.base'),
              paddingLeft: '1.5rem',
            },
            'ol > li > ul': {
              listStyleType: 'disc',
            },
            'ol > li > ul > li > ul': {
              listStyleType: 'circle',
            },
            'ul > li > ul': {
              listStyleType: 'circle',
            },
          },
        },
      }),
      borderRadius: {
        '4xl': '2rem',
      },
      maxWidth: {
        '2xl': '40rem',
      },
    },
    keyframes: {
      fadeIn: {
        from: { opacity: 0 },
        to: { opacity: 1 },
      },
      fadeOut: {
        from: { opacity: 1 },
        to: { opacity: 0 },
      },
      in: {
        '0%': { transform: 'translateX(100%)' },
        '100%': { transform: 'translateX(0%)' },
      },
      out: {
        '0%': { transform: 'translateX(0%)' },
        '100%': { transform: 'translateX(100%)' },
      },
      'slide-in-from-left': {
        from: { transform: 'translateX(-100%)' },
        to: { transform: 'translateX(0)' },
      },
      'slide-out-to-left': {
        from: { transform: 'translateX(0)' },
        to: { transform: 'translateX(-100%)' },
      },
      'slide-in-from-right': {
        from: { transform: 'translateX(100%)' },
        to: { transform: 'translateX(0)' },
      },
      'slide-out-to-right': {
        from: { transform: 'translateX(0)' },
        to: { transform: 'translateX(100%)' },
      },
      'accordion-down': {
        from: { height: '0' },
        to: { height: 'var(--radix-accordion-content-height)' },
      },
      'accordion-up': {
        from: { height: 'var(--radix-accordion-content-height)' },
        to: { height: '0' },
      },
      marquee: {
        '0%': { transform: 'translateX(0%)' },
        '100%': { transform: 'translateX(-100%)' },
      },
      blink: {
        '0%': { opacity: 0.2 },
        '20%': { opacity: 1 },
        '100% ': { opacity: 0.2 },
      },
    },
    animation: {
      in: 'in 0.2s ease-out',
      out: 'out 0.2s ease-out',
      fadeIn: 'fadeIn .3s ease-in-out',
      fadeOut: 'fadeOut .3s ease-in-out',
      carousel: 'marquee 60s linear infinite',
      'slide-in-from-left': 'slide-in-from-left 0.2s ease-out',
      'slide-out-to-left': 'slide-out-to-left 0.2s ease-out',
      'slide-in-from-right': 'slide-in-from-right 0.2s ease-out',
      'slide-out-to-right': 'slide-out-to-right 0.2s ease-out',
      blink: 'blink 1.4s both infinite',
      'accordion-down': 'accordion-down 0.2s ease-out',
      'accordion-up': 'accordion-up 0.2s ease-out',
    },
  },
  daisyui: {
    themes: [
      {
        light: {
          primary: '#006e1d',
          'primary-focus': '#006e1d',
          'primary-content': '#ffffff',
          secondary: '#52634f',
          'secondary-focus': '#52634f',
          'secondary-content': '#ffffff',
          accent: '#77dd77',
          'accent-focus': '#77dd77',
          'accent-content': '#00390b',
          neutral: '#1a1c19',
          'neutral-focus': '#1a1c19',
          'neutral-content': '#e2e3dd',
          'base-100': '#fcfdf6',
          'base-200': '#424940',
          'base-300': '#1a1c19',
          'base-content': '#1a1c19',
          info: '#006e1d',
          success: '#006e1d',
          warning: '#ba1a1a',
          error: '#ba1a1a',
        },
        dark: {
          primary: '#77dd77',
          'primary-focus': '#77dd77',
          'primary-content': '#00390b',
          secondary: '#b9ccb3',
          'secondary-focus': '#b9ccb3',
          'secondary-content': '#253423',
          accent: '#006e1d',
          'accent-focus': '#006e1d',
          'accent-content': '#ffffff',
          neutral: '#1a1c19',
          'neutral-focus': '#1a1c19',
          'neutral-content': '#e2e3dd',
          'base-100': '#1a1c19',
          'base-200': '#424940',
          'base-300': '#1a1c19',
          'base-content': '#e2e3dd',
          info: '#77dd77',
          success: '#77dd77',
          warning: '#ffb4ab',
          error: '#ffb4ab',
        },
      },
    ],
  },
  future: {
    hoverOnlyWhenSupported: true,
  },
  plugins: [
    plugin(function ({ addBase, addVariant, theme }) {
      addBase({
        h1: {
          fontSize: theme('fontSize.3xl'),
          fontWeight: 'bold',
        },
        h2: {
          fontSize: theme('fontSize.2xl'),
          fontWeight: 'bold',
        },
        h3: {
          fontSize: theme('fontSize.xl'),
          fontWeight: 'bold',
        },
        h4: {
          fontSize: theme('fontSize.lg'),
          fontWeight: 'bold',
        },
        h5: {
          fontSize: theme('fontSize.md'),
          fontWeight: 'bold',
        },
        h6: {
          fontSize: theme('fontSize.md'),
          fontWeight: 'bold',
        },
        a: {
          textDecoration: 'none',
          color: theme('colors.light.primary dark:colors.dark.primary'),
        },
        html: { color: 'inherit' },
      }),
        addVariant('tooltip-open', ['&[data-tooltip-open]', '[data-tooltip-open] &'])
    }),
    daisyui,
    aspectRatio,
    typography,
    containerQueries,
    forms,
    plugin(function ({ addVariant, e, postcss }) {
      addVariant('firefox', ({ container, separator }) => {
        const isFirefoxRule = postcss.atRule({
          name: '-moz-document',
          params: 'url-prefix()',
        })
        isFirefoxRule.append(container.nodes)
        container.append(isFirefoxRule)
        isFirefoxRule.walkRules(rule => {
          rule.selector = `.${e(`firefox${separator}${rule.selector.slice(1)}`)}`
        })
      })
    }),
    plugin(function ({ matchUtilities, theme }) {
      matchUtilities(
        {
          'animation-delay': value => {
            return {
              'animation-delay': value,
            }
          },
        },
        {
          values: theme('transitionDelay'),
        },
      )
    }),
  ],
}

