let rand, audio;
let animals = [{
        name: "Kavva",
        audio: "Kavva.mp3"
    },
    {
        name: "Toata",
        audio: "Toata.mp3"
    },
    {
        name: "Maina",
        audio: "Maina.mp3"
    },
    {
        name: "Kabutar",
        audio: "Kabutar.mp3"
    },
    {
        name: "Udh",
        audio: "Udh.mp3"
    },
    {
        name: "Machhar",
        audio: "Machhar.mp3"
    },
    {
        name: "Chiddia",
        audio: "Chiddia.mp3"
    },
    {
        name: "Sher",
        audio: "Sher.mp3"
    },
    {
        name: "Kutta",
        audio: "Kutta.mp3"
    },
    {
        name: "Billie",
        audio: "Billie.mp3"
    },
    {
        name: "Chooha",
        audio: "Chooha.mp3"
    },
    {
        name: "Cow",
        audio: "Cow.mp3"
    },
    {
        name: "Bhains",
        audio: "Bhains.mp3"
    },
    {
        name: "Ghoada",
        audio: "Ghoada.mp3"
    }
]

start();

function start() {
    setInterval(draw, 1000 / 1);
}

function draw() {
    rand = Math.floor(Math.random() * 14);
    display = animals[rand].name;
    if (rand < 7) {
        document.querySelector("#holder").style.color = "lime";
    } else {
        document.querySelector("#holder").style.color = "red";
    }

    document.querySelector("#display").innerHTML = display;
    audio = new Audio(animals[rand].audio);
    audio.play();
}