export const toCamelCase = (s) => {
  return s.replace(/([-_][a-z])/ig, ($1) => {
    return $1.toUpperCase()
      .replace(` `, ``)
      .replace(`-`, ``)
      .replace(`_`, ``);
  });
};

export const splitArrayToSegments = (array, segmentsCount)=> {
  let segmentLength = Math.ceil(array.length / segmentsCount);

  const segments = [];

  let index = 0;
  while (index < array.length) {
    segments.push(array.slice(index, segmentLength + index));
    index += segmentLength;
  }

  return segments;
};
