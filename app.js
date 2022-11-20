const dataBox = document.getElementById('data-box');
const inputBtn = document.getElementById('input-btn');
const link = 'https://api.le-systeme-solaire.net/rest/bodies/';

document.addEventListener('DOMContentLoaded', () => {
    inputBtn.onclick = () => {
        let planet = document.getElementById('planet').value;
        if (planet === '') alert("Please enter in a planet")
        else {
            let API = link.concat(planet);
            fetch(API)
                .then(response => response.json())
                .then(data => {
                    dataBox.innerHTML = JSON.stringify(data);
                }); 
        }
    }
}); 