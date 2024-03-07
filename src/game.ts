const pokedex: HTMLElement | null = document.getElementById("pokedex");
let clicked: boolean = false;

// Fetching pokemon's name, image, type, and id from pokeapi
const fetchPokemon = () => {
    const promises: Promise<any>[] = [];
    for (let i = 1; i <= 20; i++) {
        const url: string = `https://pokeapi.co/api/v2/pokemon/${i}`;
        promises.push(fetch(url).then((res) => res.json()));
    }
    Promise.all(promises).then((results) => {
        const pokemon = results.map((result: any) => ({
            name: result.name,
            image: result.sprites["front_default"],
            type: result.types.map((type: any) => type.type.name).join(", "),
            id: result.id,
        }));
        displayPokemon(pokemon);
    });
};

const displayPokemon = (pokemon: any[]) => {
    console.log(pokemon);
    const pokemonHTMLString: string = pokemon.map((pokeman, index) => {
        if (index % 5 === 0) {
            return `
                </div>
                <div class="row">
                  <div class="cards col shadow d-flex justify-content-center align-items-center m-2 rounded">
                    <img class="card-image" src="${pokeman.image}"/>
                  </div>
            `;
        } else {
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

        const cards: NodeListOf<HTMLElement> = document.querySelectorAll(".cards");
        cards.forEach((card: HTMLElement) => {
            card.addEventListener("click", () => {
                if (!clicked) {
                    card.style.backgroundColor = "grey";
                } else {
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
            const nameInput: HTMLInputElement | null = document.getElementById("name") as HTMLInputElement;
            const errMessage = document.querySelector(".alert");
            const specialChars = /[!@#$%^&*(),.?":{}|<>]/;

            if (nameInput && errMessage) {
                const name: string = nameInput.value.trim();

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
