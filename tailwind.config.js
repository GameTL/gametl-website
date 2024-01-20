// const defaultTheme = require("tailwindcss/defaultTheme")

module.exports = {
  experimental: {
    optimizeUniversalDefaults: true,
  },
  content: ["./src/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        accentColor: "#FF512F",
        backGroundColor: "#E7EBEF",
        primaryColor: "#2A384D ",
      },
      fontWeight: {
        'normal': 400,
        'semibold': 600, // Ensure this matches the font-weight in your @font-face declaration
        'bold': 700,
      },
      typography: (theme) => ({
        DEFAULT: {
          css: {
            h1: {
              // color: theme("colors.gray.100"),
              color: theme("colors.accentColor"), // Corrected theme path
              fontWeight: "800",
              fontFamily: `${theme("fontFamily.display")}`,
            },
            h2: {
              color: theme("accentColor"),
              fontWeight: "600",
              fontFamily: `${theme("fontFamily.display")}`,
            },
            h3: {
              color: theme("accentColor"),
              fontWeight: "600",
              fontFamily: `${theme("fontFamily.display")}`,
            },
            h4: {
              color: theme("accentColor"),
              fontWeight: "600",
              fontFamily: `${theme("fontFamily.display")}`,
            },
            button: {
              color: theme("accentColor"),
              fontWeight: "600",
              fontFamily: `${theme("fontFamily.display")}`,
            },
          },
        },
        lg: {
          css: {
            h1: {
              fontFamily: `${theme("fontFamily.display")}`,
            },
            h2: {
              fontFamily: `${theme("fontFamily.display")}`,
            },
            h3: {
              fontFamily: `${theme("fontFamily.display")}`,
            },
            h4: {
              fontFamily: `${theme("fontFamily.display")}`,
            },
          },
        },
        xl: {
          css: {
            h1: {
              fontFamily: `${theme("fontFamily.display")}`,
            },
            h2: {
              fontFamily: `${theme("fontFamily.display")}`,
            },
            h3: {
              fontFamily: `${theme("fontFamily.display")}`,
            },
            h4: {
              fontFamily: `${theme("fontFamily.display")}`,
            },
          },
        },
      }),
    },
    screens: {
      sm: "640px",
      md: "768px",
      lg: "1024px",
      xl: "1280px",
    },
    fontFamily: { // rank to fallback fonts
      display: [
        // 'monospace',
        // '-apple-system',
        // "Inter var",
        // "Noto Sans Thai",
        // 'SF Mono',
        // 'SFMono-Regular',
        "SF Pro Display",
        // "Montserrat",
        // "Sukhumvit Set",
        // "IBM Plex Sans Thai",
        // ...defaultTheme.fontFamily.sans,
      ],
      text: [
        // 'ui-monospace',
        // "Inter var",
        // "Noto Sans Thai",
        // 'SF Mono',
        // 'SFMono-Regular',
        "SF Pro Display",
        // "Sukhumvit Set",
        // "IBM Plex Sans Thai",
        // ...defaultTheme.fontFamily.sans,
      ],
    },
  },
  plugins: [require("@tailwindcss/typography")],
}
