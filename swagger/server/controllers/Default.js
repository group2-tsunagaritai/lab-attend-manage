'use strict';

var utils = require('../utils/writer.js');
var Default = require('../service/DefaultService');

module.exports.loginPOST = function loginPOST (req, res, next) {
  Default.loginPOST()
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.petPetIdGET = function petPetIdGET (req, res, next) {
  var petId = req.swagger.params['petId'].value;
  Default.petPetIdGET(petId)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};
