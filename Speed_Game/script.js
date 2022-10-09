const circles = document.querySelectorAll('.circle');
const startbtn = document.querySelector('#startGame');
const score_text = document.querySelector('#score');
const fscore = document.querySelector('#final_score');
const tscore = document.querySelector('#topScore');
const closebtn = document.querySelector('#modalClose');
const modalButton = document.querySelector('#modalButton');
const life_count = document.querySelector('#life');
const message = document.querySelector('#gameOverMessage');
const overlay = document.querySelector('.overlay');

let score = 0;
let prevnum = -2, random_number = -1;
let gameTimeout;
let userLife = 3;
let gameSpeed = 1000;

let backgroundMusic, wrong_answer, game_over;

const clickCircle = (index) => {
     if (index == random_number) {
        score_text.textContent = ++score;  
        if (score>10) gameSpeed -= 10;
        else if (score>20) gameSpeed -= 10;
        circles.forEach((circle, i) => {
            circle.classList.remove('active'); 
            circle.classList.remove('click');
        });
        circles[index].classList.add('click');
    }
    else {
        wrong_answer = new sound("sounds/wrong_answer.mp3");
        wrong_answer.play();
        life_count.textContent = --userLife;
        if (userLife === 0) endGame();
    } 
}

const generateRandomNumber = () => {
    random_number = Math.floor(Math.random() * 4);
    if (prevnum !== random_number) {
        highlightCircle(random_number);
    }
    else
    {
        random_number = Math.floor(Math.random() * 4);
    }
    gameTimeout = setTimeout(generateRandomNumber, gameSpeed); 
} 

const highlightCircle = (index) => {
    circles.forEach((circle, i) => {
        circle.classList.remove('active');
    });
    circles[index].classList.add('active');
    prevnum = index;
}

class sound {
    constructor(src) {
        this.sound = document.createElement("audio");
        this.sound.src = src;
        this.sound.setAttribute("preload", "auto");
        this.sound.setAttribute("controls", "none");
        this.sound.style.display = "none";
        document.body.appendChild(this.sound);
        this.play = function () {
            this.sound.play();
        };
        this.stop = function () {
            this.sound.pause();
        };
    }
}

const startGame = () => {
    score = 0;
    tscore.textContent = localStorage.getItem("topscore");
    circles.forEach((circle, i) => {
        circle.disabled = false;
    });
    backgroundMusic = new sound("sounds/GameBackground.mp3");
    backgroundMusic.play();
    prevnum = Math.floor(Math.random() * 4);
    highlightCircle(prevnum);
    gameTimeout = setTimeout(generateRandomNumber(), gameSpeed); 
}

const endGame = () => {

    clearTimeout(gameTimeout);
    backgroundMusic.stop();
    wrong_answer.stop();
    game_over = new sound("sounds/Game_Over.mp3");
    game_over.play();
    fscore.textContent = score;
    if (score > localStorage.getItem("topscore")) localStorage.setItem("topscore", score);
    if (score<20) message.textContent = "You need to practice more!";
    else if (score > 20 && score < 40) message.textContent = "Come on! You can do better!";
    else message.textContent = "Great Score!!";
    openModal();
}

const openModal = () => {
    overlay.classList.toggle('visible');
    
};

const clickStartButton = () => {
    if (startbtn.textContent == "Start Game")
    {
        startbtn.textContent = "Stop Game";
        startGame();
    }
    else
    {
        startbtn.textContent = "Start Game";
        endGame();
    }
}

const resetGame = () => {
    window.location.reload();
}

circles.forEach((circle, i) => {
    circle.addEventListener('click', () => clickCircle(i));
});

startbtn.addEventListener('click',clickStartButton);
closebtn.addEventListener('click', resetGame);