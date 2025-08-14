var xmlhttp = new XMLHttpRequest();
var url = "data.json";
xmlhttp.onreadystatechange = function () {
if (xmlhttp.readyState == 4 && xmlhttp.status == 200) {
    var myArr = JSON.parse(xmlhttp.responseText); // 这里便是获取到的 json 数据
    myFunction(myArr); 
}
}
xmlhttp.open("GET", url, true);
xmlhttp.send();
function myFunction(arr) {
    console.log(arr);
    let inner = "";
    for(let i=0; i<arr.length;i++) {
        inner += "" 
    }

}
