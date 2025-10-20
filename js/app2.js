const card = [];

const mostrarCartas = () => {
    mostrarCartas.forEach(({name, image, description})=> {
        const card = document.createElement("div");
        card.className = 'card';
        //Imagem do card
        const avatar = document.createElement("img");
        avatar.className = "card--avatar";
        avatar.src = image;
        avatar.alt = name;
        //Titulo do card
        const title = document.createElement("h1");
        title.className = "card--title";
        title.textContent = name; 
    })
}

