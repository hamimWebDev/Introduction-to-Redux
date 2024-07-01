const add = (a) => {
  return (b) => {
    return (c) => {
      return a * (b + c);
    };
  };
};

const level = add(5);

console.log(level(2)(2));
console.log(level(5)(6));
console.log(level(1)(3));
console.log(level(8)(5));
console.log(level(2)(3));
