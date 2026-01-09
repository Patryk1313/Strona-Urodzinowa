// ======================================================================
// START BUTTON (index.html)
const startBtn = document.querySelector("#start");
if(startBtn){
    startBtn.addEventListener('click', () => {
        window.location.href = "morse.html";
    });
}

// ======================================================================
// BALONY
const balloonContainer = document.getElementById("balloon-container");

function createBalloon() {
    const balloon = document.createElement("div");
    balloon.classList.add("balloon");
    const size = Math.random() * 30 + 30;
    balloon.style.width = size + "px";
    balloon.style.height = size * 1.3 + "px";
    balloon.style.left = Math.random() * 100 + "vw";
    balloon.style.animationDuration = Math.random() * 5 + 8 + "s";
    const colors = ["#ff4d4d", "#ffd633", "#4da6ff", "#66ff99", "#ff99cc"];
    balloon.style.background = `radial-gradient(circle at 30% 30%, #fff, ${colors[Math.floor(Math.random()*colors.length)]})`;
    balloonContainer?.appendChild(balloon);
    setTimeout(()=> balloon.remove(), 15000);
}
setInterval(createBalloon, 800);

// ======================================================================
// RULES BUTTON (morse.html)
const rulesBTN = document.querySelector("#rulesBtn");
const rules = document.querySelector("#rules");
const content = document.querySelector(".container");

rulesBTN?.addEventListener('click', () => {
    content.style.display = "flex";  // pokaż grę
    rules.style.display = "none";    // ukryj zasady
});

// ======================================================================
// LAMPKA MORSE
const lamp = document.getElementById('lamp');
const morse = [
  ".--.", ".-.", ".", "--..", ".", "-.", "-.-.", "..", "-.-" // PREZENCIK
];
const dot = 250;
const dash = 750;
const intraLetterPause = 450;
const interLetterPause = 950;
const wordPause = 3000;

function blinkSymbol(symbol){
    return new Promise(resolve => {
        lamp.style.backgroundColor = 'yellow';
        const time = symbol === '.' ? dot : dash;
        setTimeout(()=>{
            lamp.style.backgroundColor = 'black';
            setTimeout(resolve, intraLetterPause);
        }, time);
    });
}

async function blinkMorseWord(){
    for(const letter of morse){
        for(const symbol of letter){
            await blinkSymbol(symbol);
        }
        await new Promise(r=>setTimeout(r, interLetterPause - intraLetterPause));
    }
}

async function loopMorse(){
    while(lamp){ // sprawdzamy czy lampka istnieje na stronie
        await blinkMorseWord();
        await new Promise(r=>setTimeout(r, wordPause));
    }
}

loopMorse();

// ======================================================================
// SPRAWDZANIE LICZBY (3 próby)
const checkBTN = document.querySelector("#checkNumber");
const input = document.querySelector(".input");
let counter = 0;

checkBTN?.addEventListener('click', () => {
    const userValue = parseInt(input.value);
    if(userValue === 9){
        alert("Brawo! Trafiłeś w liczbę 9!");
        window.location.href = "louder.html";
    } else {
        counter++;
        if(counter === 1){
            alert("Zła odpowiedź! Masz 2 szanse!");
        } else if(counter === 2){
            alert("Zła odpowiedź! Ostatnia szansa!");
        } else {
            alert("Żarcik! Nie tracisz prezentu! 🤪");
        }
    }
});


