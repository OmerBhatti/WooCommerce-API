var axios = require("axios");
const dotenv = require("dotenv");
dotenv.config();

exports.createOrder = (billingInfo,shippingInfo,items,isPaid,payment_method,payment_method_name) => {
  const orderData = {
    "payment_method": payment_method,
    "payment_method_title": payment_method_name,
    "set_paid": isPaid,
    "billing": billingInfo,
    "shipping": shippingInfo,
    "line_items": items,
  }
  return axios({
    method: "POST",
    url: `${process.env.APIURl}/wp-json/wc/v3/orders`,
    headers: {
      Authorization: process.env.AUTHSTRING,
    },
    data: orderData,
  });
};

exports.updateOrder = (id, orderJSON) => {
  return axios({
    method: "PUT",
    url: `${process.env.APIURl}/wp-json/wc/v3/orders/${id}`,
    headers: {
      Authorization: process.env.AUTHSTRING,
    },
    data: orderJSON,
  });
};

exports.getAllOrders = () => {
  return axios({
    method: "GET",
    url: `${process.env.APIURl}/wp-json/wc/v3/orders`,
    headers: {
      Authorization: process.env.AUTHSTRING,
    },
  });
};

exports.getOrder = (id) => {
  return axios({
    method: "GET",
    url: `${process.env.APIURl}/wp-json/wc/v3/orders/${id}`,
    headers: {
      Authorization: process.env.AUTHSTRING,
    },
  });
};

exports.deleteOrder = (id) => {
  return axios({
    method: "DELETE",
    url: `${process.env.APIURl}/wp-json/wc/v3/orders/${id}?force=true`,
    headers: {
      Authorization: process.env.AUTHSTRING,
    },
  });
};