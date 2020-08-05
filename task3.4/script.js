let btn = document.getElementById("btn");
let firstName = document.getElementById("fName").value;
let lastName = document.getElementById("sName").value;
let firstBuy = document.getElementById("fb").value;
let nextBuy = document.getElementById("nb").value;
let paymentMethod = document.querySelector('input[name="method"]:checked')
  .value;
let cardNumber = document.getElementById("cardNumber").value;
let cvc = document.getElementById("cvc").value;
let mm = document.getElementById("mm").value;
let yy = document.getElementById("yy").value;

let price = document.getElementById("price").value;
let cdiscount = document.getElementById("cdiscount");
let newprice = document.getElementById("newprice");

btn.addEventListener("submit", function (e) {
  e.preventDefault();

  //Create a object with its own properties and methods
  //to store all user information entered in the form.

  class Person {
    constructor(
      name,
      firstBuy,
      nextBuy,
      paymentMethod,
      cardNumber,
      cvc,
      mm,
      yy,
      newPrice
    ) {
      this.name = name;
      this.firstBuy = firstBuy;
      this.nextBuy = nextBuy;
      this.paymentMethod = paymentMethod;
      this.cardNumber = cardNumber;
      this.cvc = cvc;
      this.mm = mm;
      this.yy = yy;
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
    mm,
    yy,
    newPrice
  );
  person.getFullInfo();
  console.log(person.getFullInfo());

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

  let name = new Name();
  name.getFullName();
  console.log(name.getFullName());

  //Create a object for calculating and storing discount
  class Discount {
    constructor(discount, price) {
      this.discount = discount;
      this.price = price;
    }
    getNewPrice() {
      let discount = 5;
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
  let newPrice = new Discount();
  newPrice.getNewPrice();
  console.log(newPrice.getNewPrice());
});
