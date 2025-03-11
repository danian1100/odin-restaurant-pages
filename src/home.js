export function displayHomePage() {
    const contentDiv = document.getElementById("content");
    contentDiv.innerHTML = "";

    const title = document.createElement("h1");
    title.innerHTML = "Welcome to <br>A Taste Of The World";

    const p = document.createElement("p");
    p.textContent = "Where you can eat a bit of food from everyplace in the world!"

    contentDiv.appendChild(title);
    contentDiv.appendChild(p);
}