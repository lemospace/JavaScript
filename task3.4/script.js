let btn = document.getElementById("btn");

btn.addEventListener("click", function (e) {
  e.preventDefault();

  //Create a object with its own properties and methods
  //to store all user information entered in the form.

  class Person {
    constructor(
      firstName,
      lastName,
      firstBuy,
      nextBuy,
      paymentMethod,
      cardNumber,
      cvc,
      mm,
      yy,
      discount,
      price
    ) {
      this.firstName = document.getElementById("fName").value;
      this.lastName = document.getElementById("sName").value;

      this.firstBuy = document.getElementById("fb").value;
      this.nextBuy = document.getElementById("nb").value;
      this.paymentMethod = document.querySelector(
        'input[name="method"]:checked'
      ).value;
      this.cardNumber = document.getElementById("cardNumber").value;
      this.cvc = document.getElementById("cvc").value;
      this.mm = document.getElementById("mm").value;
      this.yy = document.getElementById("yy").value;

      this.discount = 5;
      this.price = document.getElementById("price").value;
    }
    getFullInfo() {
      return this;
    }
  }

  let person = new Person();
  person.getFullInfo();
  console.log(person.getFullInfo());

  //Create Name object for storing First and Last name
  class Name extends Person {
    constructor(firstName, lastName) {
      super();
    }
    getFullName() {
      return this.firstName + " " + this.lastName;
    }
  }

  let name = new Name();
  name.getFullName();
  console.log(name.getFullName());

  //Create a object for calculating and storing discount
  class Discount extends Person {
    constructor(discount, price) {
      super();
    }
    getNewPrice() {
      let discount = 5;
      let price = document.getElementById("price").value;
      let cdiscount = document.getElementById("cdiscount");
      let newprice = document.getElementById("newprice");
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
