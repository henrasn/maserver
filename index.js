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

router.route('/api')
  .get(getPost)
router.route('/api/detail/:index')
  .get(getDetailPost)

app.use('/', router)
app.listen(port, () => {
  console.log("runnning");
})