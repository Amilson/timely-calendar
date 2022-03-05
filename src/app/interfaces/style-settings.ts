export interface StyleColor {
  main: string;
  0: string;
  50: string;
  100: string;
  200: string;
  300: string;
  400: string;
  500: string;
  600: string;
  700: string;
  800: string;
  900: string;
  A100: string;
  A200: string;
  A400: string;
  A700: string;
  contrast: {
    main: string;
    50: string;
    100: string;
    200: string;
    300: string;
    400: string;
    500: string;
    600: string;
    700: string;
    800: string;
    900: string;
    A100: string;
    A200: string;
    A400: string;
    A700: string;
  };
}

export interface StyleColorsSettings {
  theme: StyleColor;
  error: StyleColor;
  warning: StyleColor;
  success: StyleColor;
}

export interface StyleFontSettings {
  url: string;
  name: string;
}

export interface StyleCurrencySettings {
  code: string;
  name: string;
  locale: string;
}

export interface StyleSettings {
  theme?: {
    title?: string;
    favicon?: string;
  };
  colors?: StyleColorsSettings;
  font?: StyleFontSettings;
  currency?: StyleCurrencySettings;
}
