function destroyer(arr) {
  // Remove all the values
  arr = arguments[0];

  const restArgs = Array.prototype.slice.call(arguments, 1);

  arr = arr.filter(item => {
    return restArgs.indexOf(item) > -1 ? false : item;
  });

  return ar;
}

destroyer([1, 2, 3, 1, 2, 3], 2, 3);

function destroyer(arr) {
  // Remove all the values
  arr = arguments[0];

  const restArgs = Array.prototype.slice.call(arguments, 1);

  arr = arr.filter(item => {
    if (!restArgs.includes(item)) return item;
  });

  return arr;
}

destroyer([1, 2, 3, 1, 2, 3], 2, 3);
