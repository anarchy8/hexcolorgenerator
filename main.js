const hexcode = document.getElementById("code");
const randomBtn = document.getElementById("random-btn");
const gövde = document.body;


function randomHex(){

  let hex = "";
  let hexArray = [0,1,2,3,4,5,6,7,8,9,"A","B","C","D","E","F"];

  for(let i=0; i<6; i++){
    let random = hexArray[Math.floor(Math.random()*hexArray.length)];
    hex = random + hex;
  }
  hexcode.innerText = "#" + hex;
  gövde.style.backgroundColor = "#"+hex;

}


randomBtn.onclick = randomHex;




