const scores = [95, 72, 88, 45, 60, 79, 82, 91, 50, 38];
const listElement = document.getElementById('scoreList');
const averageElement = document.getElementById('averageScore');

for (let i = 0; i < scores.length; i++) {
    const li = document.createElement('li');
    li.textContent = scores[i];
    listElement.appendChild(li);
}

let sum = 0;
for (let i = 0; i < scores.length; i++) {
    sum += scores[i];
}
const average = (sum / scores.length);
averageElement.textContent = average;