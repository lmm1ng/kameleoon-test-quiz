export const isDataValidForTable = (data) => {
  let hash = {};
  for (let object of data) {
    Object.keys(object).forEach((key) =>
      hash[key] ? hash[key]++ : (hash[key] = 1)
    );
  }
  return new Set(Object.values(hash)).size === 1;
};
