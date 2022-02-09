// Object property shorthands

const name = "Andrew";
const userAge = 27;
const user = {
  //   name: name,
  name,
  age: userAge,
  location: "Philadelfia",
};
console.log(user);

// Object Destructuring

const product = {
  lable: "Red Head HoYea",
  price: 3,
  stock: 201,
  salePrice: undefined,
  rating: 4.2,
};

// const lable = product.lable
// const stock = product.stock

const { lable: productLable, stock, rating = 5 } = product;
console.log(productLable, stock, rating);

const transaction = (type, { lable, stock }) => {
  console.log(type, lable, stock);
};

transaction("order", product);
