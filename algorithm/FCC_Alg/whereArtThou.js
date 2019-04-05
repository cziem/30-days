function whatIsInAName(collection, source) {
  // What's in a name?
  var arr = [];
  // Only change code below this line

  arr = collection.find(item => {
    for (let key in item) {
      if (item.hasOwnProperty(key)) {
        if (source[key] === item[key]) {
          return item;
        }
      }
    }
  });

  // Only change code above this line
  return arr;
}

whatIsInAName(
  [
    { first: "Romeo", last: "Montague" },
    { first: "Mercutio", last: null },
    { first: "Tybalt", last: "Capulet" }
  ],
  { last: "Capulet" }
);
