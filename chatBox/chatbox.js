(function($){
  $.deparam = $.deparam || function(uri){
    if(uri === undefined){
      uri = window.location.search;
    }
 function isObject(input) {
        return input != null && Object.prototype.toString.call(input) === '[object Object]';
    }
function isNumber(input) {
        return typeof input === 'number' || Object.prototype.toString.call(input) === '[object Number]';
    }
