type objectKeys = keyof typeof Object;
type valuesType = (typeof Object)[objectKeys];

export const trialOne = <T>(obj: Object, path: string, initial?: T | undefined): valuesType | T => {
  const result = path.split('.').reduce((prev, cur) => prev && prev[cur], obj);
  if (result === undefined && initial !== undefined) {
    return initial;
  }
  return result;
};
