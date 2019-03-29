const PORTFOLIO_ELEMENTS = [
    {
        title: "Web: Leecher zenekar honlapja (2019)",
        desc: "HTML / CSS / JS / React",
        isVideo : false,
        url: "http://leechermusic.com",
        src: "./portfolio_images/web_leechermusic.png"
    },
    {
        title: "Video: Messengers of Fear (2019)",
        desc: "szöveges videó + a zene hangszeres alapja",
        type: "video",
        url: "https://youtube.com/watch?v=55IwXRPpUVE",
        src: "https://youtube.com/embed/55IwXRPpUVE"
    },
    {
        title: "Video: All the Stars (2016)",
        desc: "szöveges videó",
        type: "video",
        url: "https://youtube.com/watch?v=2zLOpB7_IJE",
        src: "https://youtube.com/embed/2zLOpB7_IJE"
    },
    {
        title: "Id: Sightless CD Booklet (2016) (PDF)",
        desc: "a Leecher zenekar első lemeze",
        type: "image",
        url: "./portfolio_images/leecher_sightless_booklet.pdf",
        src: "./portfolio_images/design_sightless.jpg"
    },
    {
        title: "Ps: Leecher poszter (2016)",
        desc: "a Sightless lemezhez",
        type: "image",
        url: "./portfolio_images/leecher_poster.jpg",
        src: "./portfolio_images/leecher_poster.jpg"
    },
    {
        title: "Ps: Leecher poszter (2019)",
        desc: "a 2019 májusi turnéhoz",
        type: "image",
        url: "./portfolio_images/leecher_poster_tour.png",
        src: "./portfolio_images/leecher_poster_tour.png"
    },
    /*
    {
        title:
        desc:
        isVideo: false,
        url:
        src:
    },
    */
]

const createElements = (element) => {
    document.getElementById("articles_container").innerHTML += `<article> <a href=${element.url} target="_blank" rel="noopener noreferrer">${element.type == "video" ? `<iframe src=${element.src} frameborder="0" class="iframe_youtube"></iframe>` : `<img src=${element.src} alt=${element.title} />`}<h3>${element.title}</h3>${element.desc}</a></article>`
}

PORTFOLIO_ELEMENTS.map(createElements);
