window.onscroll = function () {
  myFunction();
};

var header = document.getElementById("myHeader");
var header2 = document.getElementById("myHeader2");
var header3 = document.getElementById("myHeader3");
var header4 = document.getElementById("myHeader4");
var header5 = document.getElementById("myHeader5");

var headers = [header, header2, header3, header4, header5];
console.log(headers);

function myFunction() {
  for (var i = 0; i < headers.length; i++) {
    var sticky = headers[i].offsetTop;
    if (window.pageYOffset > sticky) {
      headers[i].classList.add("sticky");
    }
  }
}
