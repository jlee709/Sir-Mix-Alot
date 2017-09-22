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

// function Model(schema){
//   for(var key in schema){
//     if(schema hasOwnProperty(key))
//       this[key] === null;
//     }
//     if(!DataStore.Model){
//       DataStore.Model = [];
//     }else{
//       dataObj = {
//         id: null;
//         id: null;
//         id: null;
//         id: null;
//       }
//     }

// module.exports = Model;