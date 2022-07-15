export const theme = {
  colors: {
    light_gray_1: 'hsl(180, 52%, 96%)',
    light_gray_2: 'hsl(180, 31%, 95%)',
    light_gray_3: 'hsl(180, 31%, 98%)',

    dark_gray: 'hsl(180, 8%, 52%)',
    very_dark_gray: 'hsl(180, 14%, 20%)',

    desaturated_cyan: 'hsl(180, 29%, 50%)',
    desaturated_cyan_alpha: 'hsla(180, 29%, 50%, 0.5)',
  },

  debugger: '1px solid red',
};

export type MyTheme = typeof theme;
