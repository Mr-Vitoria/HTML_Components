let animes = [
    {
        Name: "Film 1",
        Description: "Description 1",
        Image: "https://w.forfun.com/fetch/c7/c787b79a5e68e1f56dc6b6a5a704cd2f.jpeg"
    },
    {
        Name: "Film 2",
        Description: "Description 2",
        Image: "https://ogorodniku.com/uploads/posts/2023-01/1674192776_ogorodniku-com-p-peizazhi-prirodi-foto-29.jpg"
    },
    {
        Name: "Film 3",
        Description: "Description 3",
        Image: "https://gas-kvas.com/uploads/posts/2023-03/1678093105_gas-kvas-com-p-fon-prirodi-dlya-risunka-krasivii-18.jpg"
    },
    {
        Name: "Film 4",
        Description: "Description 4",
        Image: "https://mykaleidoscope.ru/x/uploads/posts/2022-10/1666389849_8-mykaleidoscope-ru-p-klassnaya-priroda-oboi-9.jpg"
    },
    {
        Name: "Film 5",
        Description: "Description 5",
        Image: "http://vsegda-pomnim.com/uploads/posts/2022-04/1649112673_52-vsegda-pomnim-com-p-chudesnii-mir-prirodi-foto-55.jpg"
    },
    {
        Name: "Film 6",
        Description: "Description 6",
        Image: "https://mykaleidoscope.ru/x/uploads/posts/2022-10/1666389905_27-mykaleidoscope-ru-p-klassnaya-priroda-oboi-29.jpg"
    },
]

let carouselTemp = document.getElementById('carouselTemp');
let cardsContent = carouselTemp.getElementsByClassName('cardsContent')[0];
let bacKImgCarousel = carouselTemp.getElementsByClassName('bacKImgCarousel')[0];
let textContent = carouselTemp.getElementsByClassName('textContent')[0];
let activeHtmlItem;
let activeIndex;
let carouselCards = [];
document.addEventListener('DOMContentLoaded',(ev) => {
    for(let i = 0; i < animes.length; i++){
        let carouselItem = document.createElement("div");
        carouselItem.classList.add('carouselItem');
        carouselItem.style.backgroundImage="url('"+animes[i].Image+"')";
        cardsContent.appendChild(carouselItem);

        if(activeHtmlItem == undefined){
            bacKImgCarousel.src = animes[i].Image;
            activeHtmlItem = carouselItem;
            activeIndex = i;
        }

        carouselCards.push(carouselItem);
    }
    carouselCards[0].classList.add('active');
});

setInterval(changeActiveCard,5000)

function changeActiveCard(){
    let newCard = activeHtmlItem.cloneNode(true);
    newCard.classList.remove('active');
    cardsContent.removeChild(activeHtmlItem);
    cardsContent.appendChild(newCard);

    carouselCards.shift();
    carouselCards.push(newCard);
    activeHtmlItem = carouselCards[0];
    carouselCards[0].classList.add('active');

    activeIndex++;
    if(activeIndex >= animes.length){
        activeIndex = 0;
    }
    
    let newBacKImgCarousel = bacKImgCarousel.cloneNode(true);
    newBacKImgCarousel.src = animes[activeIndex].Image;

    carouselTemp.appendChild(newBacKImgCarousel);

    textContent.getElementsByClassName("title")[0].textContent = animes[activeIndex].Name;
    textContent.getElementsByClassName("description")[0].textContent = animes[activeIndex].Description;
    
    setTimeout(removeBackImg, 0, newBacKImgCarousel);
}
function removeBackImg(newBackImg) {
    carouselTemp.removeChild(bacKImgCarousel);
    bacKImgCarousel = newBackImg;
  }

document.getElementById('btnWatch').addEventListener('click',(ev) => {

    changeActiveCard();
});