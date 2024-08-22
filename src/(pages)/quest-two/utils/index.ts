export const countLetters = (names: string[]): Record<string, number> => {
  const result: Record<string, number> = {};

  for (const name of names) {
    result[name] = name.length;
  }

  return result;
};
