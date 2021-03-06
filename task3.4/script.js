var btn = document.getElementById("btn");
var form = document.getElementById("form");

form.addEventListener("submit", function (e) {
  e.preventDefault();

  var firstName = document.getElementById("fName").value;
  var lastName = document.getElementById("sName").value;
  var firstBuy = document.getElementById("fb").value;
  var nextBuy = document.getElementById("nb").value;
  var paymentMethod = document.querySelector('input[name="method"]:checked')
    .value;
  var cardNumber = document.getElementById("cardNumber").value;
  var cvc = document.getElementById("cvc").value;
  var month = document.getElementById("mm").value;
  var year = document.getElementById("yy").value;

  var price = document.getElementById("price").value;
  var cdiscount = document.getElementById("cdiscount");
  var newprice = document.getElementById("newprice");
  var discount = 5;

  //Create Name object for storing First and Last name
  class Name {
    constructor(firstName, lastName) {
      this.firstName = firstName;
      this.lastName = lastName;
    }
    getFullName() {
      return this.firstName + " " + this.lastName;
    }
  }

  let name = new Name(firstName, lastName);

  console.log(name.getFullName());

  //Create a object for calculating and storing discount
  class Discount {
    constructor(discount, price) {
      this.discount = discount;
      this.price = price;
    }
    getNewPrice() {
      cdiscount.innerHTML = "You will save: " + (price * discount) / 100 + "$";
      newprice.innerHTML =
        "New price will be: " + (price - (price * discount) / 100) + "$";
      return (
        "user's discount: " +
        this.discount +
        "%; new price: " +
        (price - (price * discount) / 100) +
        "$"
      );
    }
  }

  let newPrice = new Discount(discount, price);

  console.log(newPrice.getNewPrice());

  class Person {
    constructor(
      name,
      firstBuy,
      nextBuy,
      paymentMethod,
      cardNumber,
      cvc,
      month,
      year,
      newPrice
    ) {
      this.name = name;
      this.firstBuy = firstBuy;
      this.nextBuy = nextBuy;
      this.paymentMethod = paymentMethod;
      this.cardNumber = cardNumber;
      this.cvc = cvc;
      this.month = month;
      this.year = year;
      this.discount = discount;
      this.newPrice = newPrice;
    }
    getFullInfo() {
      return this;
    }
  }

  let person = new Person(
    name,
    firstBuy,
    nextBuy,
    paymentMethod,
    cardNumber,
    cvc,
    month,
    year,
    newPrice
  );

  console.log(person.getFullInfo());
});
