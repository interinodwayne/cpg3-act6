function getPosition(element){
    var position = element.getBoundingClientRect();
    var x = position.left;
    var y = position.top;
    console.log("X coordinates:" + x);
    console.log("Y coordinates:" + y);
}
header = document.getElementById("header");
div = document.getElementById("div");
console.log("Header positions");
getPosition(header);
console.log("div positions");
getPosition(div);
