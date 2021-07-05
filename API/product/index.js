var axios = require("axios");
const dotenv = require("dotenv");
dotenv.config();

exports.createProduct = (productJSON) => {
  return axios({
    method: "POST",
    url: `${process.env.APIURl}/wp-json/wc/v3/products`,
    headers: {
      Authorization: process.env.AUTHSTRING,
    },
    data: productJSON,
  });
};

exports.updateProduct = (id, productJSON) => {
  return axios({
    method: "PUT",
    url: `${process.env.APIURl}/wp-json/wc/v3/products/${id}`,
    headers: {
      Authorization: process.env.AUTHSTRING,
    },
    data: productJSON,
  });
};

exports.getAllProducts = () => {
  return axios({
    method: "GET",
    url: `${process.env.APIURl}/wp-json/wc/v3/products`,
    headers: {
      Authorization: process.env.AUTHSTRING,
    },
  });
};

exports.getSingleProduct = (id) => {
  return axios({
    method: "GET",
    url: `${process.env.APIURl}/wp-json/wc/v3/products/${id}`,
    headers: {
      Authorization: process.env.AUTHSTRING,
    },
  });
};

exports.deleteProduct = (id) => {
  return axios({
    method: "DELETE",
    url: `${process.env.APIURl}/wp-json/wc/v3/products/${id}?force=true`,
    headers: {
      Authorization: process.env.AUTHSTRING,
    },
  });
};