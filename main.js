let btnel = document.querySelector(".generate");
let serialel = document.querySelector(".serial");

btnel.onclick = function () {
  let characters =
    "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
  let charscount = 10;
  let randomserial = "";
  for (let i = 0; i < charscount; i++) {
    randomserial += characters[Math.trunc(Math.random() * characters.length)];
  }
  serialel.innerHTML = randomserial;
};
