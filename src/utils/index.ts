type AnyObject = {
  [key: string]: string | number | boolean;
};

export const convertValuesToString = (obj: AnyObject): AnyObject => {
  return Object.fromEntries(
    Object.entries(obj).map(([key, value]) => [key, String(value)])
  );
};
