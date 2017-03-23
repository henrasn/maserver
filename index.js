  var express = require('express');
  var fake = require('faker/locale/id_ID');
  var app = express();
  var router = express.Router();
  var port = process.env.PORT || 3456;
  var path = require('path');
  var dashboard = require('./dexa')

  var postData = [];

  var getPost = (req, res) => {
    for (var i = 0; i <= 19; i++) {
      var postProperty = {};
      postProperty.judul = fake.lorem.sentence();
      postProperty.gambar = fake.image.image();
      postProperty.desk = fake.lorem.sentences();

      postData[i] = postProperty
    }
    res.json(postData)
  }

  var getItemList = (req, res) => {
    var itemList = [];
    for (var i = 0; i <= 50; i++) {
      var item = {};

      item.title = fake.lorem.sentence();
      item.like = fake.random.number(99);
      item.image = fake.image.nightlife();

      itemList[i] = item;
    }
    res.json(itemList)
  }

  var getOrderData = (req, res) => {
    var list = [];
    for (var i = 0; i <= 50; i++) {
      var item = {};

      item.code = fake.random.number(999);
      item.name = fake.name.findName();
      item.qty = fake.random.number(9);
      item.total = fake.random.number(99999999);
      item.lat = fake.address.latitude();
      item.long = fake.address.longitude();
      item.image = fake.image.imageUrl();

      list[i] = item;
    }
    var api = {};
    api.response = list;
    res.json(api);
  }

  var getDetailItem = (req, res) => {
    var item = {};

    item.title = fake.lorem.sentence();
    item.description = fake.lorem.paragraphs();
    item.like = fake.random.number(99);
    item.image = fake.image.nightlife();

    res.json(item);
  }

  var emptyArray = (req, res) => {
    var data = [];
    res.json(data);
  }

  var emptyObject = (req, res) => {
    var data = {};
    res.json(data);
  }

  var emptyPart = (req, res) => {
    var itemList = [];
    for (var i = 0; i <= 50; i++) {
      var item = {};

      item.title = fake.lorem.sentence();
      item.like = fake.random.number(99);
      item.image = null;

      itemList[i] = item;
    }
    res.json(itemList)
  }

  var getDetailPost = (req, res) => {
    res.json(postData[req.params.index])
  }

  var getListMenu = (req, res) => {
    var data = ["satu", "dua", "tiga", "empat", "lima", "enam", "tujuh"];
    res.json(data);
  }

  var muchlist = (req, res) => {
    var data = [];
    for (var i = 0; i < 21; i++) {
      data[i] = fake.lorem.words();
    }
    res.json(data);
  }

  // router.route('/api')
  //   .get(getPost)
  // router.route('/api/detail/:index')
  //   .get(getDetailPost)
  // router.route('/list')
  //   .get(getListMenu)
  // router.route('/lists')
  //   .get(muchlist)
  // router.route('/itemlist')
  //   .get(getItemList)
  // router.route('/itemlistea')
  //   .get(emptyArray)
  // router.route('/itemlist/detail')
  //   .get(getDetailItem)
  // router.route('/itemlist/detaileo')
  //   .get(emptyObject)
  // router.route('/itemlistpo')
  //   .get(emptyPart)
  router.route('/acommerce/test')
    .get(getOrderData)
    // router.route('/map')
    //   .get((req, res) => {
    //     res.sendFile(path.join(__dirname + '/map.html'))
    //   })

  // router.route('/dashboard')
  //   .get(dashboard)



  app.use('/', router)
  app.listen(port, () => {
    console.log("runnning");
  })