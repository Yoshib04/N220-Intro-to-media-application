const instruments = ['Piano', 'Guitar', 'Violin', 'Drums', 'Saxophone', 'Flute'];
const listElement = document.getElementById('instrumentList');

for (let i = 0; i < instruments.length; i++) {
    const li = document.createElement('li');
    li.textContent = instruments[i];
    listElement.appendChild(li);
}