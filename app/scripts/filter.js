angular.module('mytodo',[]).filter('searchThis', function(){

    return function(items, name){
        var returnedArray = [];
        for( var i = 0; i<items.length; i++){
            if(items[i].name != name){
                returnedArray.push(items[i]);
            }
        }
        return returnedArray;
    };
});