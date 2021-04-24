const express = require('express');
const router = express.Router();
let userController = require('../redis/controller/UserController');
let {mysqlFind,mysqlInsert,mysqlUpdate,mysqlDelete} = require('../mysql/models/API');
/* GET home page. */
router.get('/', async function(req, res, next) {
  //使用redis的的封装
/*  let result;
   await userController.userLogin('张三');*/

  /**
   * 如果你是用mysql你需要这样调用
   */
 /* await mysqlFind('SELECT * FROM user',function (r) {
    const data = {
      title: 'WJT-Express-template',
      img: '/images/logo.png',
      result:r
    }
    res.render('index', data);
  });*/

  let arr =  [
    {
      "id": 1,
      "username": "jack",
      "password": "123456"
    },
    {
      "id": 2,
      "username": "jasmine",
      "password": "123123"
    },
    {
      "id": 3,
      "username": "china",
      "password": "123123"
    }
  ];
  let message = `该模板实现了redis,mysql,mongodb的一系列封装,并支持动态开启,自定义404页面,
    致力于业务的开发,只用一行代码解决配置的复杂度`;
  const data = {
    title: 'WJT-Express-template',
    img: '/images/logo.png',
    result:arr,
    message
  }

  res.render('index', data);




});

module.exports = router;
