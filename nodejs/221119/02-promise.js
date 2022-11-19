/*
new Promise( function(resolve, reject){

});
*/
function func1(){
    return new Promise(function(resolve, reject){
        resolve("성공");
    });
}
func1().then(function(result){
    console.log("result : ", result);
});


function func2(){
    return new Promise(function(resolve, reject){
        setTimeout(function(){resolve("성공");},1000);
    });
}
func2()
.then(function(result){
    console.log("result2 : ", result);
    return 'a';
}).then(function(abc){
    console.log( "abc : ", abc );
});
