var express = require('express');
var fake = require('faker/locale/id_ID');

var getDashboard = (req, res) => {
  var status = true;
  var code = 200;
  var result = {};
  var dashboard = {};
  var banner = [];
  var item = {};

  dashboard.notif_order = fake.random.number(9).toString();
  dashboard.notif_lowstok = fake.random.number(9).toString();
  dashboard.notif_prescription = fake.random.number(9).toString();
  dashboard.notif_rfq = fake.random.number(9).toString();
  dashboard.sales = fake.random.number(99999999).toString();
  dashboard.rejected = fake.random.number(99).toString();
  dashboard.credit = fake.random.number(9999999).toString();

  item.image = "http://www.pitamaas.com/Photoshoot/RebbeccaWebbanner.jpg"
  item.url = "http://www.pitamaas.com/WebBanner/"

  banner[0] = item;
  var item = {};

  item.image = "http://www.pitamaas.com/Photoshoot/adi.jpg"
  item.url = "http://www.pitamaas.com/WebBanner/"

  banner[1] = item;
  var item = {};

  item.image = "https://webcssjquery.files.wordpress.com/2012/04/image-banner.jpg"
  item.url = "https://webcssjquery.net/tag/free-web-banner-content-slider-with-jquery-and-html-5/"

  banner[2] = item;
  result.dashboard = dashboard;
  result.banner = banner;

  var response = {};
  response.status = status;
  response.code = code;
  response.result = result;

  res.json(response);
}

module.exports = getDashboard;