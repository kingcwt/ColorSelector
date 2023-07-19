const clamp = (number, min = 0, max = 1) => {
  return number > max ? max : number < min ? min : number;
};
export {
  clamp
};
