// !!!!!! DO NOT EDIT THIS FILE INSIDE A CHILD NOAK-TEMPLATE !!!!!!!
export const defaultTheme = {
  config: { initialColorMode: 'light', useSystemColorMode: false },
  // https://chakra-ui.com/docs/theming/customize-theme#customizing-global-styles
  styles: {
    global: {
      html: {
        scrollBehavior: 'smooth',
      },
      body: {
        minH: '100vh',
        MozOsxFontSmoothing: 'grayscale',
        WebkitFontSmoothing: 'antialiased',
        textRendering: 'optimizeLegibility',
      },
    },
  },
};
