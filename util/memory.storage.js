var MemoryStorage = require('memorystorage');
// here, the MemoryStorage function is available
var store = new MemoryStorage('note-app');


function getKeys(store){

    let keys=[]
    for (var i=0; i<store.length; i++) {
        var key = store.key(i);
       keys.push(key);
    }
    return keys;
}

function getValues(store){

    let values=[]
    for (var i=0; i<store.length; i++) {
        var key = store.key(i);
        var value = store.getItem(key);
       values.push(value);
    }
    return values;
}


module.exports= {
    store,
    getKeys,
    getValues
}