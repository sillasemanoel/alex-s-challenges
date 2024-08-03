export const convertValuesToString = (obj: Record<string, unknown>) => {
  const newObj: Record<string, string> = {};

  for (const key in obj) {
    newObj[key] = String(obj[key]);
  }

  return newObj;
};
