var axios = require("axios");
const dotenv = require("dotenv");
dotenv.config();

exports.createCustomer = (email,firstName,lastName,username,billingInfo,shippingInfo) => {
  const CustomerData = {
    "email": email,
    "first_name": firstName,
    "last_name": lastName,
    "username": username,
    "billing": billingInfo,
    "shipping": shippingInfo
  }
  return axios({
    method: "POST",
    url: `${process.env.APIURl}/wp-json/wc/v3/customers`,
    headers: {
      Authorization: process.env.AUTHSTRING,
    },
    data: CustomerData,
  });
};

exports.updateCustomer = (id, CustomerJSON) => {
  return axios({
    method: "PUT",
    url: `${process.env.APIURl}/wp-json/wc/v3/customers/${id}`,
    headers: {
      Authorization: process.env.AUTHSTRING,
    },
    data: CustomerJSON,
  });
};

exports.getAllCustomers = () => {
  return axios({
    method: "GET",
    url: `${process.env.APIURl}/wp-json/wc/v3/customers`,
    headers: {
      Authorization: process.env.AUTHSTRING,
    },
  });
};

exports.getCustomer = (id) => {
  return axios({
    method: "GET",
    url: `${process.env.APIURl}/wp-json/wc/v3/customers/${id}`,
    headers: {
      Authorization: process.env.AUTHSTRING,
    },
  });
};

exports.deleteCustomer = (id) => {
  return axios({
    method: "DELETE",
    url: `${process.env.APIURl}/wp-json/wc/v3/customers/${id}?force=true`,
    headers: {
      Authorization: process.env.AUTHSTRING,
    },
  });
};