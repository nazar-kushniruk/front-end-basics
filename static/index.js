console.log("hi people");

//var req = new XMLHttpRequest();
//req.open('GET',
  //  'static/data.json', true);
//req.send(null);
//if(req.status == 200) {
  //  var dataJson =JSON.parse(req.responseText);

    //console.log(dataJson);

//}
//var dataJson =JSON.parse(req.responseText);

//console.log(dataJson);


var xmlhttp = new XMLHttpRequest();
var url = "static/data.json";

xmlhttp.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {
        var myArr = JSON.parse(this.responseText);
        myFunction(myArr);
       // console.log(myArr.length);
    }
};
xmlhttp.open("GET", url, true);
xmlhttp.send();
click();

var elements = document.querySelectorAll('after');

elements.forEach(function () {
    this.onclick = function () {
        console.log('!!!!!!!!!');
    }
});



//functions

function click(elem) {
   // var parentClick  =  document.querySelector(elem);
    var clickListerner = event.target;
    console.log('click -> ' + clickListerner);
}
function myFunction(arr) {
    var i = 1;
   for (item in arr){

          createDiv(arr[item], i);
          i++;

   }
}
function createDiv(dataItem, i) {
    var parent = document.querySelector('.left');
    var div = document.createElement('div');
  //  console.log(div);
    div.className = "item";
    var html =" <div class=\"item\"><div class=\"pic\">\n" +
        "\t\t\t\t\t<span><img src=\"" + dataItem.img+"\">\n" +
        "\t\t\t\t\t</span>\n" +
        "\t\t\t\t</div>\n" +
        "\t\t\t\t<div class=\"title\">\n" +
        "\t\t\t\t\t<span>\n" +
        "\t\t\t\t\t\t<b>Название:</b> \"" + dataItem.name + "\"\n" +
        "\t\t\t\t\t</span>\n" +
        "\t\t\t\t\t<span>\n" +
        "\t\t\t\t\t\t<b>Автор:</b> " + dataItem.author +"</span>\n" +
        "\t\t\t\t</div>\n" +
        "\t\t\t\t<div class=\"after\" id=" + i +
        "></div>\n" +
        "\t\t\t</div></div>";

    parent.insertAdjacentHTML(`beforeEnd`, html);
}
var div = document.createElement('div');
div.className = "item";
//div.innerText =
console.log(typeof (div));