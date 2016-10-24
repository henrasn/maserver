var express = require('express');
var fake = require('faker/locale/id_ID');
var app = express();
var router = express.Router();
var port = process.env.PORT || 3456;

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

router.route('/api')
  .get(getPost)
router.route('/api/detail/:index')
  .get(getDetailPost)
router.route('/list')
  .get(getListMenu)
router.route('/lists')
get(muchlist)

app.use('/', router)
app.listen(port, () => {
  console.log("runnning");
})