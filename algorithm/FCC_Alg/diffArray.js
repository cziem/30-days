// DiffArray

function diffArray(arr1, arr2) {
  let unique1 = arr1.filter(arr => arr2.indexOf(arr) === -1);
  let unique2 = arr2.filter(arr => arr1.indexOf(arr) === -1);
  const unique = [...unique1, ...unique2];
  return unique;
}

diffArray([1, 2, 3, 5], [1, 2, 3, 4, 5]);

function diffArray(arr1, arr2) {
  let container = [...arr1, ...arr2];

  let newArr = container.filter(item =>
    arr1.indexOf(item) > -1 && arr2.indexOf(item) > -1 ? false : item
  );

  return newArr;
}

diffArray([1, 2, 3, 5], [1, 2, 3, 4, 5]);
