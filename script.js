let number = document.getElementById("numberp");
let snum = document.getElementById("num");
let socc = document.getElementById("num-passe");
let sleft = document.getElementById("seats-left");
let tseats = document.getElementById("total-seats");
let totalseats = 130;
let count = 0;
let seatoc = 0;
let seatleft = totalseats;
sleft.innerText = seatleft;
tseats.innerText = totalseats;
socc.innerText = 0;
function increment() {
  count += 1;
  number.innerText = count;
}

function reset() {
  count = 0;
  number.innerText = count;
}
function Sreset() {
  countstr = 0;
  seatoc = 0;
  seatleft = totalseats;
  sleft.innerText = totalseats;
  socc.innerText = seatoc;
  count=0;
  number.innerText=count;
  snum.innerText = count;
}

function save() {
  if (count === 0) {
    alert("Passenger number cannot be zero!");
  } else {
    if (count > seatleft) {
      alert("Total number of passengers cannot be more than available seats!");
    } else {
      let countstr = count + "->";
      seatoc += count;
      seatleft -= count;
      sleft.innerText = seatleft;
      socc.innerText = seatoc;
      reset();
      snum.innerText += countstr;
    }
  }
}
