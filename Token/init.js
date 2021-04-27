let jwt = require('jsonwebtoken');
let {secretToken} = require('./configuration/index');

/**
 * jwt 加密函数封装
 * @param data
 * @returns {Promise<unknown>}
 */
function jwtSign(data) {
  return new Promise((resolve, reject) => {
    let sign = jwt.sign({
      data:data,
    },secretToken.secret,{  expiresIn : 60*60  });
    resolve(sign);
  });
};

/**
 * token解密函数封装
 * @param token
 * @returns {Promise<unknown>}
 */
function jwtverify(token) {
      return new Promise((resolve, reject) => {
           token = token.replace('Bearer','').trim();

           try {
            var   verify = jwt.decode(token,secretToken.secret);
           }catch (e) {
             resolve('404,无效签名或签名已过期');
             // throw new Error('无效签名或签名已过期');
           }

          resolve(verify);
      });
};



module.exports = {
  jwtSign,
  jwtverify
}
