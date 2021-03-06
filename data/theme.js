const colors = {
  white: '#FFFFFF',
  grey0: '#FFFBF7',
  grey100: '#ebedf0',
  grey200: '#dee0e5',
  grey300: '#cfd3da',
  grey400: '#bec4cd',
  grey500: '#acb3bf',
  grey600: '#97a0af',
  grey700: '#818996',
  grey800: '#666c76',
  grey900: '#3b3f45',
  black: '#181b1c',

  red900: '#4D000E',
  red800: '#66000F',
  red700: '#800404',
  red600: '#990808',
  red500: '#B50E0E',
  red400: '#CC1B1B',
  red300: '#E63535',
  red200: '#FF7C6E',
  red100: '#FF9E8F',
  red0: '#FFBEB0',

  purple0: '#eeeaf1',
  purple100: '#dbd4e3',
  purple200: '#c6bad1',
  purple300: '#ac9bbd',
  purple400: '#8a71a2',
  purple500: '#4c2570',
  purple600: '#432063',
  purple700: '#3a1c55',
  purple800: '#2e1644',
  purple900: '#1e0e2c',

  yellow0: '#fcf5de',
  yellow100: '#faebbb',
  yellow200: '#f7e095',
  yellow300: '#f5d46a',
  yellow400: '#f1c639',
  yellow500: '#eeb600',
  yellow600: '#d7a400',
  yellow700: '#bd90',
  yellow800: '#9d7800',
  yellow900: '#715600',

  cyan0: '#e2f5f6',
  cyan100: '#c3eaed',
  cyan200: '#a0dee3',
  cyan300: '#76d0d6',
  cyan400: '#44bfc8',
  cyan500: '#00a8b4',
  cyan600: '#0097a2',
  cyan700: '#00858e',
  cyan800: '#006e76',
  cyan900: '#004f54',

  blue0: '#e6edf3',
  blue100: '#cbdae7',
  blue200: '#acc5d8',
  blue300: '#87aac7',
  blue400: '#5788b1',
  blue500: '#07508c',
  blue600: '#06477d',
  blue700: '#053e6c',
  blue800: '#043258',
  blue900: '#03223c',

  pink0: '#fcebf4',
  pink100: '#f9d5e8',
  pink200: '#f5bbda',
  pink300: '#f19dca',
  pink400: '#ec75b5',
  pink500: '#e33592',
  pink600: '#cd2f83',
  pink700: '#b32973',
  pink800: '#94225f',
  pink900: '#6a1844',

  green0: '#e5f2e5',
  green100: '#c8e3c8',
  green200: '#a6d3a6',
  green300: '#7fc07f',
  green400: '#4ca74c',
  green500: '#008100',
  green600: '#007400',
  green700: '#006500',
  green800: '#005300',
  green900: '#003b00',
};

const fonts = {
  Inter:
    'Inter, -apple-system, BlinkMacSystemFont, San Francisco, Roboto, Segoe UI, Helvetica Neue, sans-serif',
};

export const theme = {
  // All themeable colour variables go here.
  colors: {
    accent: {
      primary: colors.red500,
      primaryDark: colors.red800,
      primaryLight: colors.red400,
      secondary: colors.yellow600,
      secondaryDark: colors.yellow800,
      secondaryLight: colors.yellow400,
    },

    neutral: {
      white: colors.white,
      grey0: colors.grey0,
      grey200: colors.grey200,
      grey400: colors.grey400,
      grey600: colors.grey600,
      grey800: colors.grey800,
      black: colors.black,
    },

    intent: {
      success: colors.green600,
      successDark: colors.green800,
      successLight: colors.green200,
      warning: colors.yellow600,
      warningDark: colors.yellow800,
      warningLight: colors.yellow200,
      danger: colors.red600,
      dangerDark: colors.red800,
      dangerLight: colors.red200,
      neutral: colors.grey600,
      neutralDark: colors.grey800,
      neutralLight: colors.grey200,
      inProgress: colors.blue600,
      inProgressDark: colors.blue800,
      inProgressLight: colors.blue200,
      new: colors.purple600,
      newDark: colors.purple800,
      newLight: colors.purple200,
    },

    state: {
      interactive: colors.red500,
      interactiveText: colors.black,
      hover: colors.yellow400,
      hoverText: colors.black,
      focusOutline: colors.yellow400,
      focusText: colors.black,
      disabled: colors.grey700,
      disabledDark: colors.grey800,
      disabledLight: colors.grey200,
      errorOutline: colors.red600,
      errorText: colors.red600,
    },

    text: {
      default: colors.black,
      dark: colors.black,
      light: colors.grey800,
      inverse: colors.grey100,
      inverseLight: colors.white,
      inverseDark: colors.grey300,
      emphasis: colors.grey800,
      emphasisBackground: 'transparent',
      strong: colors.black,
      strongBackground: colors.yellow100,
    },

    buttons: {
      neutral: colors.white,
      default: colors.red500,
      defaultDark: colors.red600,
      defaultLight: colors.yellow400,
    },
  },

  // Component-specific text and values.
  components: {
    TextField: {
      optionalMessage: '(optional)',
    },

    Icon: {
      sizes: {
        xSmall: {
          borderWidth: 1,
          marginSize: '0 0.8rem 0 0',
          padding: 4,
          size: 12,
          strokeWidth: 2.125,
        },
        small: {
          borderWidth: 1.5,
          marginSize: '0 0.8rem 0 0',
          padding: 6,
          size: 16,
          strokeWidth: 2,
        },
        medium: {
          borderWidth: 2,
          marginSize: '0 0.8rem 0 0',
          padding: 8,
          size: 24,
          strokeWidth: 1.75,
        },
        large: {
          borderWidth: 2.5,
          marginSize: '0 0.8rem 0 0',
          padding: 16,
          size: 48,
          strokeWidth: 1.25,
        },
        xLarge: {
          borderWidth: 3,
          marginSize: '0 0.8rem 0 0',
          padding: 24,
          size: 64,
          strokeWidth: 1.125,
        },
      },

      // TODO: implement these!
      Tag: {
        capitalization: 'uppercase', // uppercase, lowercase, sentence, title
        colorPosition: 'background', // background or border
        borderRadius: 0,
        padding: 'toUnits(theme.spacing.padding.xSmall) toUnits(theme.spacing.padding.small)',
      },
    },
  },

  // All themeable typography variables go here.
  typography: {
    fonts: {
      body: fonts.Inter,
      heading: fonts.Inter,
      interfaceUI: fonts.Inter,
    },

    fontWeights: {
      body: 400,
      bodyBold: 600,
      heading: 600,
      pageTitle: 700,
      subtitle: 300,
      interfaceUI: 600,
      interfaceUIBold: 700,
    },

    baseSizes: {
      desktop: 18,
      mobile: 16,
    },

    scaleModifiers: {
      desktop: 1.1,
      mobile: 1.05,
    },

    lineHeights: {
      heading: 1.2,
      body: 1.5,
      interfaceUI: 1.2,
    },
  },

  // All themeable spacing variables go here.
  // 1rem = 10px.
  spacing: {
    margin: {
      none: 0,
      xxSmall: 4,
      xSmall: 8,
      small: 16,
      medium: 32,
      large: 48,
      xLarge: 64,
      xxLarge: 80,
    },

    padding: {
      none: 0,
      xxSmall: 2,
      xSmall: 4,
      small: 8,
      medium: 12,
      large: 24,
      xLarge: 32,
      xxLarge: 48,
    },
  },

  // Extra site config type stuff.
  site: {
    mobilePadding: '1.6rem',
    tabletPadding: '3.2rem',
    desktopPadding: '6.4rem',
    maxContentWidth: '64rem',
    maxSiteWidth: '120rem',
  },
};

export default theme;
