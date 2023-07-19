import { round } from "./round.js";
const hexToHsva = (hex) => rgbaToHsva(hexToRgba(hex));
const hexToRgba = (hex) => {
  if (hex[0] === "#")
    hex = hex.substring(1);
  if (hex.length < 6) {
    return {
      r: parseInt(hex[0] + hex[0], 16),
      g: parseInt(hex[1] + hex[1], 16),
      b: parseInt(hex[2] + hex[2], 16),
      a: hex.length === 4 ? round(parseInt(hex[3] + hex[3], 16) / 255, 2) : 1
    };
  }
  return {
    r: parseInt(hex.substring(0, 2), 16),
    g: parseInt(hex.substring(2, 4), 16),
    b: parseInt(hex.substring(4, 6), 16),
    a: hex.length === 8 ? round(parseInt(hex.substring(6, 8), 16) / 255, 2) : 1
  };
};
const hsvaToHex = (hsva) => rgbaToHex(hsvaToRgba(hsva));
const hsvaToHsla = ({ h, s, v, a }) => {
  const hh = (200 - s) * v / 100;
  return {
    h: round(h),
    s: round(hh > 0 && hh < 200 ? s * v / 100 / (hh <= 100 ? hh : 200 - hh) * 100 : 0),
    l: round(hh / 2),
    a: round(a, 2)
  };
};
const hsvaToHslString = (hsva) => {
  const { h, s, l } = hsvaToHsla(hsva);
  return `hsl(${h}, ${s}%, ${l}%)`;
};
const hsvaToHslaString = (hsva) => {
  const { h, s, l, a } = hsvaToHsla(hsva);
  return `hsla(${h}, ${s}%, ${l}%, ${a})`;
};
const hsvaToRgba = ({ h, s, v, a }) => {
  h = h / 360 * 6;
  s = s / 100;
  v = v / 100;
  const hh = Math.floor(h), b = v * (1 - s), c = v * (1 - (h - hh) * s), d = v * (1 - (1 - h + hh) * s), module = hh % 6;
  return {
    r: round([v, c, b, b, d, v][module] * 255),
    g: round([d, v, v, c, b, b][module] * 255),
    b: round([b, b, d, v, v, c][module] * 255),
    a: round(a, 2)
  };
};
const format = (number) => {
  const hex = number.toString(16);
  return hex.length < 2 ? "0" + hex : hex;
};
const rgbaToHex = ({ r, g, b, a }) => {
  const alphaHex = a < 1 ? format(round(a * 255)) : "";
  return "#" + format(r) + format(g) + format(b) + alphaHex;
};
const rgbaToHsva = ({ r, g, b, a }) => {
  const max = Math.max(r, g, b);
  const delta = max - Math.min(r, g, b);
  const hh = delta ? max === r ? (g - b) / delta : max === g ? 2 + (b - r) / delta : 4 + (r - g) / delta : 0;
  return {
    h: round(60 * (hh < 0 ? hh + 6 : hh)),
    s: round(max ? delta / max * 100 : 0),
    v: round(max / 255 * 100),
    a
  };
};
export {
  hexToHsva,
  hexToRgba,
  hsvaToHex,
  hsvaToHslString,
  hsvaToHsla,
  hsvaToHslaString,
  hsvaToRgba,
  rgbaToHex,
  rgbaToHsva
};
