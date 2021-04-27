### WJT-Express

#### 介绍

WJT-Express 是一个开源的,免费的express生成器的加强版,他封装了redis,mysql,mongodb,shu
数据库模块,可以做到动态开启或关闭。他自定义了404页面,使页面更加美观。

#### 特点:

 - 一行代码解决数据库的开关
```js
//mongo 连接开关
mongoose(false);
//mysql 连接开关
mysqlContext(false);
```
- mysql 查询
```js
await mysqlFind('SELECT * FROM user',function (r) {
    const data = {
      title: 'WJT-Express-template',
      img: '/images/logo.png',
      result:r
    }
    res.render('index', data);
  });
```
> 开发者为mysql封装了crud的基本功能:封闭对应的接口是 
>mysqlFind 查,
>mysqlInsert 增,
>mysqlUpdate 改,
>mysqlDelete 删

### Token

加入了Token,封装了Token函数,更符合前后端分离的特点。
