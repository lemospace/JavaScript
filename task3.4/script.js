let btn = document.getElementById("btn");

btn.addEventListener("click", function (e) {
  e.preventDefault();
  let price = document.getElementById("price").value;
  let discount = 5;

  let cdiscount = document.getElementById("cdiscount");
  let newprice = document.getElementById("newprice");

  cdiscount.innerHTML = "You will save: " + (price * discount) / 100 + "$";
  newprice.innerHTML =
    "New price will be: " + (price - (price * discount) / 100) + "$";
});
