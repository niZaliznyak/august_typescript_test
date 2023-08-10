const get = (object, path, initial) => {
  const result = path
    .split(".")
    .reduce((prev, cur) => prev && prev[cur], object);
  if (result === undefined && initial !== undefined) {
    return initial;
  }
  return result;
};
