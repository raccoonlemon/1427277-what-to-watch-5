// !!! not in use
export const toCamelCase = (s) => {
  return s.replace(/([-_][a-z])/ig, ($1) => {
    return $1.toUpperCase()
      .replace(`-`, ``)
      .replace(`_`, ``);
  });
};
