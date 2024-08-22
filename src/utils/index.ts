type Primitive = string | number | boolean | null;

type NestedObject = {
  [key: string]: Primitive | NestedObject | NestedObjectArray;
};

type NestedObjectArray = NestedObject[] | Primitive[];

export const convertValuesToString = (obj: NestedObject): NestedObject => {
  const newObj: NestedObject = {};

  for (const key in obj) {
    const value = obj[key];

    if (Array.isArray(value)) {
      newObj[key] = value.map((item) =>
        typeof item === "object" && item !== null
          ? convertValuesToString(item as NestedObject)
          : String(item)
      ) as NestedObjectArray;
    } else if (typeof value === "object" && value !== null) {
      newObj[key] = convertValuesToString(value as NestedObject);
    } else {
      newObj[key] = String(value);
    }
  }

  return newObj;
};
