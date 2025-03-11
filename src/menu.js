export function displayMenuPage() {
    const contentDiv = document.getElementById("content");
    contentDiv.innerHTML = "";

    const divAsia = document.createElement("div");
    divAsia.classList.add("asia");

    const title1 = document.createElement("h1");
    title1.textContent = "Our asian menu:"
    title1.classList.add("start");
    divAsia.appendChild(title1);

    const dishesAsia = [
        {
            name: "Balut",
            description: "Fertilized duck egg with a partially developed duck embryo inside.",
            image: "https://img.freepik.com/vetores-gratis/um-ovo-em-estilo-cartoon_1308-111705.jpg?ga=GA1.1.1035912968.1741701920&semt=ais_hybrid",
        },
        {
            name: "Takoyaki",
            description: "Savory batter balls filled with pieces of octopus, green onions, and pickled ginger.",
            image:  "https://img.freepik.com/fotos-gratis/squid-ball_74190-2479.jpg?t=st=1741702048~exp=1741705648~hmac=7ec2467375c2cc78b626e9f52f18e24f638068953fb76a425b10d9693aa103bb&w=996",
        }
    ];

    dishesAsia.forEach(dish => {
        const asiaMenu = document.createElement("div");
        asiaMenu.classList.add("menu-item");
        
        const dishName = document.createElement("h2");
        dishName.textContent = dish.name;
        
        const dishDescription = document.createElement("p");
        dishDescription.textContent = dish.description;
        dishDescription.classList.add("start");
        
        const dishImage = document.createElement("img");
        dishImage.src = dish.image;
        dishImage.alt = dish.name;

        asiaMenu.appendChild(dishName);
        asiaMenu.appendChild(dishDescription);
        asiaMenu.appendChild(dishImage);
        
        divAsia.appendChild(asiaMenu);
    });

   
    contentDiv.appendChild(divAsia);


    const divEurope = document.createElement("div");
    divAsia.classList.add("europe");

    const title2 = document.createElement("h1");
    title2.textContent = "Our european menu:"
    title2.classList.add("start");
    divEurope.appendChild(title2);

    const dishesEurope = [
        {
            name: "Fish and Chips",
            description: "Battered and deep-fried fish served with fried potato chips.",
            image: "https://img.freepik.com/fotos-gratis/posicao-plana-de-peixe-e-batatas-fritas-na-tabua-de-cortar_23-2148776041.jpg?t=st=1741701997~exp=1741705597~hmac=89cd25a756f5b31aa6155e0dd17e40a2da4e6d7ea2541b24be7f7fd1bb60fa73&w=740",
        },
        {
            name: "Paella",
            description: "Contains rice, saffron, vegetables, seafood (like shrimp and mussels), chicken, and sometimes rabbit.",
            image:  "https://img.freepik.com/fotos-gratis/vista-superior-da-deliciosa-paella-com-frutos-do-mar-e-aneis-de-cebola_181624-29812.jpg?t=st=1741701958~exp=1741705558~hmac=c5d41c24b4dcca72cc70509c8ac42c74670ce4899563200db4945049b4c960f5&w=996",
        }
    ];

    dishesEurope.forEach(dish => {
        const europeMenu = document.createElement("div");
        europeMenu.classList.add("menu-item");
        
        const dishName = document.createElement("h2");
        dishName.textContent = dish.name;
        
        const dishDescription = document.createElement("p");
        dishDescription.textContent = dish.description;
        dishDescription.classList.add("start");
        
        const dishImage = document.createElement("img");
        dishImage.src = dish.image;
        dishImage.alt = dish.name;

        europeMenu.appendChild(dishName);
        europeMenu.appendChild(dishDescription);
        europeMenu.appendChild(dishImage);
        
        divEurope.appendChild(europeMenu);
    });

   
    contentDiv.appendChild(divEurope);
}