var express = require('express');
var router = express.Router();
let {jwtSign,jwtverify} = require('../Token/init');

/* GET users listing. */

router.get('/', function(req, res, next) {
  res.send('This is the user page');
});

router.post('/token', function(req,res,next) {
  let auth = req.headers['authorization'];

  // console.log(token);

  jwtverify(auth).then(r=>{
    res.json({
      message:"token 测试",
      auth,
      r
    });
  })



})
module.exports = router;
