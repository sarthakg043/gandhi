// Howler Js starts here
var speech = new Howl({
    src: ["audio/speech.mp3"],
    // The above audio is taken from https://www.youtube.com/watch?v=kBsUwIfL8kU
    preload: true,
    onload: function(){
        console.log("Speech has loaded");
    },
    onloaderror: function(){
        console.log("Speech can't be loaded");
    },
    onplay: function(){
        console.log("Speech has started");
    },
    onplayerror: function(){
        console.log("Speech can't be played");
    },
    autoplay: true,
    volume: 1,
    loop: true,
    onend: function(){
        console.log("Speech ended");
    }	
});

var background = new Howl({
    src: ['audio/background.mp3'],
    // The above audio is taken from https://www.youtube.com/watch?v=I8TyTCZ_5jI
    preload: true,
    onload: function(){
        console.log("Background Music has loaded");
    },
    onloaderror: function(){
        console.log("Background Music can't be loaded");
    },
    onplay: function(){
        console.log("Background Music has started");
    },
    onplayerror: function(){
        console.log("Background Music can't be played");
    },
    autoplay: true,
    volume: 0.1,
    loop: true,
    onend: function(){
        console.log("Background Music ended");
    }	
});

var music = document.querySelector("#bgMusic");
var soundSpeech = document.querySelector("#speech");
music.addEventListener("click", function(){
    if(music.innerHTML === "Play Background Music"){
        music.innerHTML = "Pause Background Music";
        background.play();
    }
    else{
        music.innerHTML = "Play Background Music";
        background.pause();
    }
});
soundSpeech.addEventListener("click", function(){
    if(soundSpeech.innerHTML === "Play Gandhi's Speech"){
        soundSpeech.innerHTML = "Pause Gandhi's Speech";
        speech.play();
    }
    else{
        soundSpeech.innerHTML = "Play Gandhi's Speech";
        speech.pause();
    }
});


// Vanilla JS starts here
var page = document.querySelectorAll(".details");
var btn = document.querySelectorAll(".next_page_btn");
var book = document.querySelector(".card");

for(let i = 0; i < btn.length; i++){
    btn[i].addEventListener("click", function(){
        page[i].style.transform = "rotateY(-130deg)";
        page[i].style.transition ="5s cubic-bezier(.15,1.7,.84,.58)";
        page[i].style.backgroundColor = "rgba(55,55,55.9)";
        page[i].style.color = "#fff";
        document.body.style.backgroundColor = generateColor();
    });
}

book.addEventListener("mouseleave", function(){
    for(var i = 0; i < page.length; i++){
        page[i].style.transform = "";
        page[i].style.transition = "1s";
        page[i].style.backgroundColor = "#fff";
        page[i].style.color = "";
        window.open("#s1", "_parent")
    }
});

function gradientMaker (){
    return "linear-gradient(90deg, " + generateColor() + " 0%, " + generateColor() + " 35%, " + generateColor() + " 100%)"
}

function generateColor(){
    var r = Math.floor(Math.random() * 256);
    var g = Math.floor(Math.random() * 256);
    var b = Math.floor(Math.random() * 256);
    return "rgb(" + r + ", " + g + ", " + b + ",1)";
}