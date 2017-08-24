'use strict'
function left_pad(str, len, c){
    var resStr = '';
    var size = (len  - str.length);
    for(var i=0; i<size; i++){
        resStr += c;
    }
    resStr += str;
    console.log("String:" + str + "\nResult:" + resStr);
}
left_pad('hello',20,'1');
