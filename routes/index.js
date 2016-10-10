var express = require('express');
var router = express.Router();
var crypto = require('crypto');

/* GET home page. */
router.get('/', function (req, res) {
  var db = req.db;
  var title = "Express fff";
  var decrypted = "";
  var collection = db.get('testColl');
  collection.findOne({}, function (e, docs) {
    var decipher = crypto.createDecipher('aes256', 'asaadsaad');
    decrypted = decipher.update(docs.message, 'hex', 'utf8');
    decrypted += decipher.final('utf8');
    title = decrypted;
    console.log(title)
    res.render('index', { title: title });
  });
});

module.exports = router;
