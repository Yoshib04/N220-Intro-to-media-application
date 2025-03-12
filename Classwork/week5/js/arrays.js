console.log("lets talk about arrays");

const zodiacSigns = [
   "Libra",
   "Cancer",
   "Leo",
   "Virgo",
   "Scorpio",
   "Aquarius",
   "Pisces",
   "Aries",
   "Taurus",
   "Gemini",
   "Sagittarius",
   "Capricorn"
];


const zodiacSignsULRef = document.getElementById("zodiac-signs");

console.log("zodiacSigns", zodiacSigns);
console.table(zodiacSigns);
console.log("Second Zodiac [1]", zodiacSigns[1]);

for(let i = 0; i < zodiacSigns.length; i++){ //for loop
   console.log("For Loop:", zodiacSigns[i]);
   zodiacSignsULRef.innerHTML += "<li>" + zodiacSigns[i] + "</li>";
}

let whileI = 0; //while loop
while(whileI <  zodiacSigns.length){
   console.log("While Loop:", zodiacSigns[whileI]);
   whileI++;
}

let whileDoI = 0; //basically never used
do{
   whileDoI++;
} while (whileDoI < zodiacSigns.length);

const gradStatsSectionRef = document.querySelector("#grade-stats");

const grades = [21, ,6 , 79, 8, 86, 4, 2, 84, 57, 10];

let sumOfGrades = 0;
for(let i = 0; i < grades.length; i++){
   const grade = grades[i];
   sumOfGrades += grade;
}

gradStatsSectionRef.innerHTML += "<h4>Avg: " + sumOfGrades / grades.length + "</h4>";