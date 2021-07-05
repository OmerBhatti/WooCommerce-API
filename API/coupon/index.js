var axios = require("axios");
const dotenv = require("dotenv");
dotenv.config();

exports.createCoupon = (code,percentage,minimumAmount,excludeOnSaleItems=true,individualUse=true) => {
  const CouponData = {
    "code": code,
    "discount_type": "percent",
    "amount": percentage,
    "individual_use": individualUse,
    "exclude_sale_items": excludeOnSaleItems,
    "minimum_amount": minimumAmount
  }
  return axios({
    method: "POST",
    url: `${process.env.APIURl}/wp-json/wc/v3/coupons`,
    headers: {
      Authorization: process.env.AUTHSTRING,
    },
    data: CouponData,
  });
};

exports.updateCoupon = (id, CouponJSON) => {
  return axios({
    method: "PUT",
    url: `${process.env.APIURl}/wp-json/wc/v3/coupons/${id}`,
    headers: {
      Authorization: process.env.AUTHSTRING,
    },
    data: CouponJSON,
  });
};

exports.getAllCoupons = () => {
  return axios({
    method: "GET",
    url: `${process.env.APIURl}/wp-json/wc/v3/coupons`,
    headers: {
      Authorization: process.env.AUTHSTRING,
    },
  });
};

exports.getCoupon = (id) => {
  return axios({
    method: "GET",
    url: `${process.env.APIURl}/wp-json/wc/v3/coupons/${id}`,
    headers: {
      Authorization: process.env.AUTHSTRING,
    },
  });
};

exports.deleteCoupon = (id) => {
  return axios({
    method: "DELETE",
    url: `${process.env.APIURl}/wp-json/wc/v3/coupons/${id}?force=true`,
    headers: {
      Authorization: process.env.AUTHSTRING,
    },
  });
};