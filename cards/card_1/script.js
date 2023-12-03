let animeList = document.getElementById('animeList');
let titleAnime = document.getElementById('titleAnime');

async function getAnimes() {
        await fetch('http://anime.outouch.ru/Anime/GetAnimesByTitle?title='+titleAnime.value)
        .then(response => response.json())
        .then(animes => {

            animeList.innerHTML = "";
            for (let i = 0; i < animes.length; i++) {
                const anime = animes[i];
                animeList.appendChild(getHtmlOuTouchAnime(anime));
            }
        });
}
function getHtmlOuTouchAnime(anime){
    let animeCard = document.createElement('div');
    animeCard.classList.add('animeCard');
    animeCard.style.backgroundImage='url("'+anime.poster+'")';

    let textContent = document.createElement('div');
    textContent.classList.add('textContent');

    let title = document.createElement('p');
    title.classList.add('title');
    title.textContent = anime.name;

    let description = document.createElement('p');
    description.classList.add('description');
    description.textContent = anime.description;

    let aSearch = document.createElement('a');
    aSearch.href = "http://anime.outouch.ru/Anime/Details/"+anime.id;
    aSearch.textContent = "Посмотреть";

    textContent.appendChild(title);
    textContent.appendChild(description);
    textContent.appendChild(aSearch);

    animeCard.appendChild(textContent);
    return animeCard;
}

document.getElementById('formGetAnimes').addEventListener('submit', (ev) => {
    ev.preventDefault();
    getAnimes();
});