var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/',(req, res, next) => {
  res.render('index', { title: 'Express' });
});

router.get('/',(req, res,) => {
  database.query("SELECT * FROM products",(err, result) =>
  {
    if(err){
    //do something
    console.log(err);
    }
      res.render('/', {
        items : result
      });
    });
});
module.exports = router;
