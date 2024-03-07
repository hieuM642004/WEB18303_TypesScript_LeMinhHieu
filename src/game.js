"use strict";
const pokedex = document.getElementById("pokedex");
let clicked = false;
// Fetching pokemon's name, image, type, and id from pokeapi
const fetchPokemon = () => {
    const promises = [];
    for (let i = 1; i <= 20; i++) {
        const url = `https://pokeapi.co/api/v2/pokemon/${i}`;
        promises.push(fetch(url).then((res) => res.json()));
    }
    Promise.all(promises).then((results) => {
        const pokemon = results.map((result) => ({
            name: result.name,
            image: result.sprites["front_default"],
            type: result.types.map((type) => type.type.name).join(", "),
            id: result.id,
        }));
        displayPokemon(pokemon);
    });
};
const displayPokemon = (pokemon) => {
    console.log(pokemon);
    const pokemonHTMLString = pokemon.map((pokeman, index) => {
        if (index % 5 === 0) {
            return `
                </div>
                <div class="row">
                  <div class="cards col shadow d-flex justify-content-center align-items-center m-2 rounded">
                    <img class="card-image" src="${pokeman.image}"/>
                  </div>
            `;
        }
        else {
            return `
                <div class="cards col shadow d-flex justify-content-center align-items-center m-2 rounded">
                  <img class="card-image" src="${pokeman.image}"/>
                </div>
            `;
        }
    }).join("");
    if (pokedex) {
        pokedex.innerHTML = `
            <div class="row">${pokemonHTMLString}</div>
        `;
        const cards = document.querySelectorAll(".cards");
        cards.forEach((card) => {
            let clicked = false;
            card.addEventListener("click", () => {
                if (!clicked) {
                    card.style.backgroundColor = "#FFB38E";
                }
                else {
                    card.style.backgroundColor = "";
                }
                clicked = !clicked;
            });
        });
    }
};

const handleForm = () => {
    const infoForm = document.getElementById("info");
    if (infoForm) {
        infoForm.addEventListener("submit", (e) => {
            e.preventDefault();
            const nameInput = document.getElementById("name");
            const errMessage = document.querySelector(".alert");
            const specialChars = /[!@#$%^&*(),.?":{}|<>]/;
            if (nameInput && errMessage) {
                const name = nameInput.value.trim();
                if (!name) {
                    errMessage.textContent = "Vui lòng nhập tên";
                    return;
                }
                if (specialChars.test(name)) {
                    errMessage.textContent = "Tên không được chứa ký tự đặc biệt";
                    return;
                }
                if (name.length <= 1) {
                    errMessage.textContent = "Tên phải nhiều hơn 1 kí tự";
                    return;
                }
                errMessage.textContent = "";
            }
        });
    }
};
handleForm();
fetchPokemon();
