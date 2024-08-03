type AnyObject = {
  [key: string]: string | number | boolean;
};

export const convertValuesToString = (obj: AnyObject): AnyObject => {
  const newObj: AnyObject = {};

  for (const key in obj) {
    if (Object.prototype.hasOwnProperty.call(obj, key)) {
      newObj[key] = String(obj[key]);
    }
  }

  return newObj;
};
