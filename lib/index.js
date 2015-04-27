var wechat = function(){}
wechat.prototype.checkSignature = function(signature,timestamp,nonce,token){
  var tmpArr = [token,timestamp,nonce];
  tmpArr.sort();
  var tmpStr = tmpArr.join('');
  var shasum = crypto.createHash('sha1');
  shasum.update(tmpStr);
  var shaResult = shasum.digest('hex');
  if(shaResult === signature){
      return true;
  }
  return false;
}
Object.defineProperty(wechat, "OAuth", {
  get: function () {
    console.log('The API property deprecated, Use require("wechat-oauth") instead');
    return require('wechat-oauth');
  }
});
Object.defineProperty(OAuth, "API", {
  get: function () {
    console.log('The API property deprecated, Use require("wechat-api") instead');
    return require('wechat-api');
  }
});
module.exports = wechat;