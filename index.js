const { getAllProducts } = require("./API/product");

getAllProducts().then((res) => {
  console.log(res.data);
});
