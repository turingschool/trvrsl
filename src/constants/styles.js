// @flow
export const COLOR = '#2f2f2f'
export const HIGHLIGHT = '#378cf2'
export const SPEED = '0.4s'

export const EASE = Object.freeze({
  IN_OUT: 'cubic-bezier(0.23, 1, 0.32, 1)',
  IN_OUT_QUART: 'cubic-bezier(0.77, 0, 0.175, 1)',
  IN_OUT_CUBIC: 'cubic-bezier(0.645, 0.045, 0.355, 1)',
})

export const MQ = Object.freeze({
  MIN_BREAK_40: '@media (min-width: 40em)',
})

export const Z = Object.freeze({
  NAVBAR: 10,
})

export const GLOBAL_CSS = `
*, *::before, *::after {
  box-sizing: border-box;
}
html {
  font-family: Barlow, -apple-system, BlinkMacSystemFont, "Segoe UI", Helvetica, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol";
  font-size: 100%;
  font-style: normal;
  font-weight: 400;
  line-height: 1.5;
  -webkit-tap-highlight-color: rgba(0,0,0,0);
  -webkit-text-size-adjust: 100%;
}
body {
  margin: 0;
  color: ${COLOR};
  background-color: #fff;
}
::selection {
  color: #fff;
  text-shadow: none;
  background: ${COLOR};
}
h1, h2, h3, h4, h5, h6 {
  margin: 0;
  line-height: 1.25;
}
a {
  color: inherit;
  background-color: transparent;
}
button {
  position: relative;
  display: inline-block;
  padding: 0;
  margin: 0;
  font: inherit;
  color: inherit;
  text-transform: none;
  vertical-align: middle;
  background: transparent;
  border: 0;
  border-radius: 0;
  outline: 0;
  cursor: pointer;
  -webkit-appearance: button;
}
`.replace(/\n/g, '').replace(', ', ',').replace(' {', '{')
