'use strict';


/**
 * ログイン
 * ID, パスワードを受け取ってセッションIDを返す
 *
 * no response value expected for this operation
 **/
exports.loginPOST = function() {
  return new Promise(function(resolve, reject) {
    resolve();
  });
}


/**
 * ペット情報API
 * 指定されたpetIdの情報を返します
 *
 * petId Long 取得したいペットのID
 * returns inline_response_200
 **/
exports.petPetIdGET = function(petId) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = {
  "name" : "doggie",
  "id" : 0
};
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}
