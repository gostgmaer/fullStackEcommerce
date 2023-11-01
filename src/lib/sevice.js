export function leftFillNum(num, targetLength) {
  return num.toString().padStart(targetLength, "0");
}

export const initialValue = 0;
// export const sumWithInitial = array1.reduce(
//   (accumulator, currentValue) => accumulator + currentValue,
//   initialValue
// );

export const sumWithInitial = (array1) => {
 return array1.reduce( ( sum, { subtotal } ) => sum + subtotal , 0)

};

export const cleanQueryparam = (query) => {
  return Object.keys(query).forEach(
    (key) =>
      (query[key] === "" || query[key] == null || query[key] === undefined) &&
      delete query[key]
  );
};
