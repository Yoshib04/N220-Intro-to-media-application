const h1Ref = document.querySelector('h1');
const nameRef = document.querySelector
('#name');
const sizeRef = document.querySelector('#size');       
const characterRaceRef = document.querySelector('#select');

function changeh1Style() {
   if(h1Ref.style.backgroundColor !== 'red') {
      h1Ref.style.backgroundColor = 'red';
   }
   else {
      h1Ref.style.backgroundColor = 'white';
   }
  
}

function changeH1Color(e){
   console.log(e.target.value);
   h1Ref.style.color = e.target.value;
}

function changeH1Size(e){
   if(Number(e.target.value) >=8){
      h1Ref.style.fontSize = Number(e.target.value) ;
   }
   else{
      e.target.value = 8;
      h1Ref.style.fontSize = "8px";
   }
   h1Ref.style.fontSize = e.target.value + 'px';
}

function changeRace(e){
   console.log(e.target.value);
   //would have image to i just got lazy
}



h1Ref.onclick = changeh1Style;

nameRef.onchange = changeH1Color;

sizeRef.oninput = changeH1Size;

characterRaceRef.onchange = changeRace;