const PORTFOLIO_ELEMENTS = [
    {
        title: "Web: Leecher zenekar honlapja (2019)",
        desc: "HTML / CSS / JS / React",
        isVideo : false,
        url: "http://leechermusic.com",
        src: "./portfolio_images/web_leechermusic.png",
        id: 0
    },
    {
        title: "Video: Messengers of Fear (2019)",
        desc: "szöveges videó + a zene hangszeres alapja",
        type: "video",
        url: "https://youtube.com/watch?v=55IwXRPpUVE",
        src: "https://youtube.com/embed/55IwXRPpUVE",
        id: 1
    },
    {
        title: "Video: All the Stars (2016)",
        desc: "szöveges videó",
        type: "video",
        url: "https://youtube.com/watch?v=2zLOpB7_IJE",
        src: "https://youtube.com/embed/2zLOpB7_IJE",
        id: 2
    },
    {
        title: "Id: Sightless CD Booklet (2016) (PDF)",
        desc: "a Leecher zenekar első lemeze",
        type: "image",
        url: "./portfolio_images/leecher_sightless_booklet.pdf",
        src: "./portfolio_images/design_sightless.jpg",
        id: 3
    },
    {
        title: "Ps: Leecher poszter (2016)",
        desc: "a Sightless lemezhez",
        type: "image",
        url: "./portfolio_images/leecher_poster.jpg",
        src: "./portfolio_images/leecher_poster.jpg",
        id: 4
    },
    {
        title: "Ps: Leecher poszter (2019)",
        desc: "a 2019 májusi turnéhoz",
        type: "image",
        url: "./portfolio_images/leecher_poster_tour.png",
        src: "./portfolio_images/leecher_poster_tour.png",
        id: 5
    },
    /*
    {
        title: "",
        desc: "",
        isVideo: false,
        url: "",
        src: ""
    },
    */
]


// CREATE PORTFOLIO ELEMENTS

const createElements = (element) => {
    document.getElementById("articles_container").innerHTML += 
    `<article> 
        ${element.type == "video" ? 
            `<iframe src=${element.src} frameborder="0" class="iframe_youtube"></iframe>`
            : `<img src=${element.src} alt=${element.title} id="element_${element.id}" class="element"/>`}
        <h3>${element.title}</h3>
        ${element.desc}
    </article>`
}
PORTFOLIO_ELEMENTS.map(createElements);


// CREATE PORTFOLIO GALLERY FOR IMAGES

const createModals = (element) => {
    let add = 
    `<div id="modal_${element.id}" class="modal">
        <img src=${element.src} />
        <a href=${element.url} target="_blank"><h2 class="download">>>> letöltés <<<</h2></a>
    </div>`
    document.getElementById("modals_hidden").innerHTML += add;
}
PORTFOLIO_ELEMENTS.filter(element => element.type == "image").map(createModals);

//get elements to open modals
for (i = 0; i < document.getElementsByClassName("element").length; i++){
    document.getElementsByClassName("element")[i].onclick = function () {
        document.getElementById(`modal_${this.id.slice(-1)}`).style.display = "block";
    }
}
//close modals upon clicking
for(i = 0; i < document.getElementsByClassName("modal").length; i++){
    document.getElementsByClassName("modal")[i].onclick = function(){
        this.style.display ="none";
    }
}