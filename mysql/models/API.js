
let connection = require('../init/init');
const chalk = require('chalk');
const logger = content => console.log(chalk.red(content));

/**
 * 查询方法的封装
 * @description SELECT * FROM user
 * @param sql
 * @param callback
 * @returns {Promise<void>}
 */
 async function mysqlFind(sql,callback) {
   // let res =[];
     await connection.query(sql,function (err,result) {
        if(err!==null){
          logger('查询出错',err);
          return;
        }else {
          // console.log(result);
           callback(result);
        }
       // console.log(res);
    });
}

/**
 *
 * 插入方法的封装
 * @description l
 * let sql = 'INSERT INTO user(username,password) VALUES(?,?)';
  let value =   ['jack','1242432'];
 * @param sql
 * @param value
 * @param callback
 * @returns {Promise<void>}
 */
async  function mysqlInsert(sql,value,callback){
  connection.query(sql,value,function (err, result) {
    if(err){
      throw new Error('mysql insert error 29 Row');
      return;
    }
    callback(result);
  });
}

/**
 *
 * 更新方法的封装
 * @description   var sql = 'UPDATE user SET username = ?,password = ? WHERE Id = ?';
 var value = ['菜鸟移动站', 'https://m.runoob.com',3];
 * @param sql
 * @param value
 * @param callback
 * @returns {Promise<void>}
 */
async function mysqlUpdate(sql,value,callback){
  connection.query(sql,value,function (err, result) {
    if(err){
      throw new Error('mysql Update error');
      return;
    }
    callback(result);
  });
}

/**
 *
 * 删除方法的封装
 * @description var sql = 'DELETE FROM user where id=3';
 * @param sql
 * @param callback
 * @returns {Promise<void>}
 */
async  function mysqlDelete(sql,callback){
  connection.query(sql,function (err, result) {
    if(err){
      throw new Error('mysql Delete error');
      return;
    }

    callback(result);
  });
}





module.exports = {
    mysqlFind,
    mysqlInsert,
    mysqlUpdate,
    mysqlDelete
}