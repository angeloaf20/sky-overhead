const inputBtn = document.getElementById('input-btn');
const link = 'https://api.le-systeme-solaire.net/rest/bodies/';

async function getData() {
    const planetSpan = document.getElementById('planet');
    const moonSpan = document.getElementById('moons');
    const densitySpan = document.getElementById('density');
    const search = document.getElementById('search');
    const eqRadSpan = document.getElementById('eqrad');
    const gravitySpan = document.getElementById('gravity');
    let planet = search.value;


    let API = link.concat(planet);
    const response = await fetch(API);
    const data = await response.json();

    if(planet === '') return alert("Please enter in a planet!");
    else {
        const { englishName, moons, density, equaRadius, gravity } = data;
        planetSpan.innerText = englishName;
        moonSpan.innerText = moons.length;
        densitySpan.innerText = density;
        eqRadSpan.innerText = equaRadius;
        gravitySpan.innerText = gravity;
    }
}

// Look up the planet in the celestial bodies database
document.addEventListener('DOMContentLoaded', () => {
    inputBtn.onclick = () => {
        getData();
    }
        // alert("Do not look up yet!");
        /* let planet = document.getElementById('search').value;
        if (planet === '') alert("Please enter in a planet");
        else {
            let API = link.concat(planet);
            fetch(API)
                .then(response => response.json())
                .then(data => {
                    planetSpan.innerText = JSON.stringify(data["englishName"]);
                    moonSpan.innerText = data["moons"].length;

                }); 
        } */
}); 

