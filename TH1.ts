var num = 5;
var de_num = 0;
try {
    if(de_num == 0) {
        throw "Divide by zero error";
    } else {
        var sol = num / de_num;
    }
} catch(e) {
    console.log("Error : " + e);
}

try {
    eval("alert('ES6 Exception Handling)");
} catch(e: any){
    console.log("Error : " + e.name)
}