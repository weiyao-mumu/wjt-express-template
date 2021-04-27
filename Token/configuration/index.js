let crypto = require('crypto');
let secret = '+&0p1d$l$lq%xm0qvet0i++!p-*e1ql*5t!kajgjm$fe_ycjsf'

const hash = crypto.createHmac('sha256', secret)
  .update('I love Luoyang Normal University')
  .digest('hex');
// console.log(hash)
const secretToken = {
  secret:hash,
  expiresIn:  '1h',
  algorithm: 'RS512'
}
module.exports = {
  secretToken
}