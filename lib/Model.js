 console.log('initiating model');


var DataStore = require('./DataStore').store;
var Extend = require('./Extend');

function Model(schema){
  this.schema = schema;
  this.id = null;
for (var key in this.schema){
  if(schema.hasOwnProperty(key))
    this[key] = null;
}   if(!DataStore.Model){
      DataStore.Model = [];
  }
}

module.exports = Model;


Model.getNextId = function(){
  console.log(DataStore.Model.length)
  return DataStore.Model.length + 1;
};
