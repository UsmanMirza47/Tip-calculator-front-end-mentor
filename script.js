let bill = document.getElementById("bill");
let btn = document.getElementsByClassName("btn");
let people = document.getElementById("people");
let tipDollar = document.getElementsByClassName("tip-dollar")[0];
let totalDollar = document.getElementsByClassName("total-dollar")[0];
let resetBtn = document.getElementById("reset-btn");
let btnCustom = document.getElementById("btn-custom");
let invalidBill = document.getElementsByClassName("invalid-bill")[0];
let invalidPeople = document.getElementsByClassName("invalid-people")[0];
let btnArr = Array.from(btn);

btnArr.forEach((e) => {
  e.addEventListener("click", (e) => {
    let billValue = Number(bill.value);
    let peopleValue = Number(people.value);
    let btnVal = e.target.textContent.split("%")[0];

    if (billValue == "" || peopleValue == "") {
      if (billValue == "" && peopleValue == "") {
        invalidBill.style.display = "inline-block";
        invalidPeople.style.display = "inline-block";
      } else if (billValue == "" && !(peopleValue == "")) {
        invalidBill.style.display = "inline-block";
        invalidPeople.style.display = "none";
      } else if (peopleValue == "" && !(billValue == "")) {
        invalidPeople.style.display = "inline-block";
        invalidBill.style.display = "none";
      }
    } else {
      invalidPeople.style.display = "none";
      invalidBill.style.display = "none";
      calculate(billValue, peopleValue, btnVal);
    }
  });
});

btnCustom.addEventListener("change", (e) => {
    let billValue = Number(bill.value);
    let peopleValue = Number(people.value);
    let btnVal = Number(e.target.value);
    console.log(btnVal)

    if (billValue == "" || peopleValue == "") {
      if (billValue == "" && peopleValue == "") {
        invalidBill.style.display = "inline-block";
        invalidPeople.style.display = "inline-block";
      } else if (billValue == "" && !(peopleValue == "")) {
        invalidBill.style.display = "inline-block";
        invalidPeople.style.display = "none";
      } else if (peopleValue == "" && !(billValue == "")) {
        invalidPeople.style.display = "inline-block";
        invalidBill.style.display = "none";
      }
    } else {
      invalidPeople.style.display = "none";
      invalidBill.style.display = "none";
      calculate(billValue, peopleValue, btnVal);
    }
});

resetBtn.addEventListener("click", () => {
  bill.value = "";
  people.value = "";
  totalDollar.innerHTML = `<img src="./images/icon-dollar.svg" alt="">0.00`;
  tipDollar.innerHTML = `<img src="./images/icon-dollar.svg" alt="">0.00`;
  btnCustom.value = "";
});

function calculate(billValue, peopleValue, btnVal) {
  tipDollar.innerHTML =
    `<img src="./images/icon-dollar.svg" alt="">` +
    Math.floor((billValue * (btnVal / 100)) / peopleValue);
  totalDollar.innerHTML =
    `<img src="./images/icon-dollar.svg" alt="">` +
    Math.floor(
      billValue / peopleValue + (billValue * (btnVal / 100)) / peopleValue
    );
}
