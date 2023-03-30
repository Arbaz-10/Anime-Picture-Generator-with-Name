const btnEl = document.getElementById("btn");
const animeContainerEl = document.querySelector(".anime-container");
const animeImgEL = document.querySelector(".anime-img");
const animeNameEL = document.querySelector(".anime-name");

btnEl.addEventListener("click", async function(){
    try {
        btnEl.disabled = true;
        btnEl.innerText = "Loading...";
        animeNameEL.innerText = "Updating...";
        animeImgEL.src = "spinner.svg";
        const response = await fetch("https://api.catboys.com/img");
        const data = await response.json();
        btnEl.disabled = false;
        btnEl.innerText = "Get Anime";
        animeContainerEl.style.display = "block";
        animeImgEL.src = data.url;
        animeNameEL.innerText = data.artist;
    } 
    catch (error) {
        console.log(error); 
        btnEl.disabled = false;
        btnEl.innerText = "Get Anime";
        animeNameEL.innerText = "An error, please try again later";
    }
});