/*
  All the functions in main.js are publicly accessible

  The contents of the files in the shared directory are also available.
*/


var config2 = {
  param1 : 'Second 30/05-007 value',
  param2 : true
};

function getConfig(){
  // The config variable from config.js can be accessed directly from here
  return {'config': config2};   
}
