export const countGrandTotal = (data, key) => {
  return data.reduce((acc, rec) => acc + rec[key], 0);
};

export const findPositionOfItem = (data, productId) => {
  return data.findIndex((item) => item?.toString() === productId);
};
