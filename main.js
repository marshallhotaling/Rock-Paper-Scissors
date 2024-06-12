var normal = document.querySelector(".normal");
var hard = document.querySelector(".hard ");
var rock = document.querySelector(".rock")
var paper = document.querySelector(".paper")
var scissors = document.querySelector(".scissors")
var virus = document.querySelector(".virus")
var dragon = document.querySelector(".dragon")
var centerLabel = document.querySelector(".centerLabel")
var backButton =document.querySelector(".backButton")
var leftWins =document.querySelector(".leftWins")
var rightWins =document.querySelector(".rightWins")
var icons = document.querySelector(".icons")
// Event listeners
var human = 0
var computer = 0
let isEasy = true

let timer;

normal.addEventListener('click', () => {
    showNormalGame();
});
hard.addEventListener('click', () => {
    isEasy = false
    showHardGame();
});
backButton.addEventListener('click', () => {
    chooseDifferentGame();
});

function chooseIcon (myChoice){
    console.log('my choice', myChoice)

    var selectedItem = ''
    if(isEasy) {
        selectedItem = ["rock","paper","scissors"][Math.floor(Math.random()*3)]
    } else {
        selectedItem = ["rock","paper","scissors","virus","dragon"][Math.floor(Math.random()*5)]
    }

    console.log('computer choice', selectedItem)

    if (myChoice === selectedItem) {
        centerLabel.innerHTML = `it's a draw`
        console.log('tie')
        icons.innerHTML = `<div class="blockClass">`
        if (myChoice === 'rock') {
            icons.innerHTML += rockLabel()
        }
        if (myChoice === 'scissors') {
            icons.innerHTML += scissorsLabel()
        }
        if (myChoice === 'paper') {
            icons.innerHTML += paperLabel()
        }
        if (myChoice === 'virus') {
            icons.innerHTML += virusLabel()
        }
        if (myChoice === 'dragon') {
            icons.innerHTML += dragonLabel()
        }

        if (selectedItem === 'rock') {
            icons.innerHTML += rockLabel()
        }
        if (selectedItem === 'scissors') {
            icons.innerHTML += scissorsLabel()
        }
        if (selectedItem === 'paper') {
            icons.innerHTML += paperLabel()
        }
        if (selectedItem === 'virus') {
            icons.innerHTML += virusLabel()
        }
        if (selectedItem === 'dragon') {
            icons.innerHTML += dragonLabel()
        }
        icons.innerHTML += `</div>`
    }
    // rock
    if (myChoice === "rock" && selectedItem === "paper"){
        centerLabel.innerHTML = `computer wins`
        icons.innerHTML = `<div class="blockClass">
                    <label class="rock" onclick="chooseIcon('rock')">🪨</label>
                    <label class="paper" onclick="chooseIcon('paper')">📄</label>
                </div>`
        console.log("i lose")
        computer += 1
    }
    if (myChoice === "rock" && selectedItem === "scissors"){
        centerLabel.innerHTML = `human wins`
        icons.innerHTML = `<div class="blockClass">
                    <label class="rock" onclick="chooseIcon('rock')">🪨</label>
                    <label class="scissors" onclick="chooseIcon('scissors')">✂️</label>
                </div>`
        console.log("i win")
        human += 1
    }
    if (myChoice === "rock" && selectedItem === "dragon"){
        centerLabel.innerHTML = `human wins`
        icons.innerHTML = `<div class="blockClass">
                    <label class="rock" onclick="chooseIcon('rock')">🪨</label>
                    <label class="dragon" onclick="chooseIcon('dragon')">🐉</label>
                </div>`
        console.log("i win")
        human += 1
    }
    if (myChoice === "rock" && selectedItem === "virus"){
        centerLabel.innerHTML = `computer wins`
        icons.innerHTML = `<div class="blockClass">
                    <label class="rock" onclick="chooseIcon('rock')">🪨</label>
                    <label class="virus" onclick="chooseIcon('virus')">🦠</label>
                </div>`
        console.log("i lose ")
        computer += 1
    }
    // scissors
    if (myChoice === "scissors" && selectedItem === "paper"){
        centerLabel.innerHTML = `human wins`
        icons.innerHTML = `<div class="blockClass">
                    <label class="scissors" onclick="chooseIcon('scissors')">✂️</label>
                    <label class="paper" onclick="chooseIcon('paper')">📄</label>
                </div>`
        console.log("i win")
        human += 1
    }
    if (myChoice === "scissors" && selectedItem === "rock"){
        centerLabel.innerHTML = `computer wins`
        icons.innerHTML = `<div class="blockClass">
                    <label class="scissors" onclick="chooseIcon('scissors')">✂️</label>
                    <label class="rock" onclick="chooseIcon('rock')">🪨</label>
                </div>`
        console.log("i lose")
        computer += 1
    }
    if (myChoice === "scissors" && selectedItem === "dragon"){
        centerLabel.innerHTML = `human wins`
        icons.innerHTML = `<div class="blockClass">
                    <label class="scissors" onclick="chooseIcon('scissors')">✂️</label>
                    <label class="dragon" onclick="chooseIcon('dragon')">🐉</label>
                </div>`
        console.log("i win")
        human += 1
    }
    if (myChoice === "scissors" && selectedItem === "virus"){
        centerLabel.innerHTML = `computer wins`
        icons.innerHTML = `<div class="blockClass">
                    <label class="scissors" onclick="chooseIcon('scissors')">✂️</label>
                    <label class="virus" onclick="chooseIcon('virus')">🦠</label>
                </div>`
        console.log("i lose")
        computer += 1
    }
    // paper
    if (myChoice === "paper" && selectedItem === "scissors"){
        centerLabel.innerHTML = `computer wins`
        icons.innerHTML = `<div class="blockClass">
                    <label class="paper" onclick="chooseIcon('paper')">📄</label>
                    <label class="scissors" onclick="chooseIcon('scissors')">✂️</label>
                </div>`
        console.log("i lose")
        computer += 1
    }
    if (myChoice === "paper" && selectedItem === "rock"){
        centerLabel.innerHTML = `human wins`
        icons.innerHTML = `<div class="blockClass">
                    <label class="paper" onclick="chooseIcon('paper')">📄</label>
                    <label class="rock" onclick="chooseIcon('rock')">🪨</label>
                </div>`
        console.log("i win")
        human += 1
    }
    if (myChoice === "paper" && selectedItem === "dragon"){
        centerLabel.innerHTML = `computer wins`
        icons.innerHTML = `<div class="blockClass">
                    <label class="paper" onclick="chooseIcon('paper')">📄</label>
                    <label class="dragon" onclick="chooseIcon('dragon')">🐉</label>
                </div>`
        console.log("i lose")
        computer += 1
    }
    if (myChoice === "paper" && selectedItem === "virus"){
        centerLabel.innerHTML = `human wins`
        icons.innerHTML = `<div class="blockClass">
                    <label class="paper" onclick="chooseIcon('paper')">📄</label>
                    <label class="virus" onclick="chooseIcon('virus')">🦠</label>
                </div>`
        console.log("i win")
        human += 1
    }
    // dragon
    if (myChoice === "dragon" && selectedItem === "scissors"){
        centerLabel.innerHTML = `computer wins`
        icons.innerHTML = `<div class="blockClass">
                    <label class="dragon" onclick="chooseIcon('dragon')">🐉</label>
                    <label class="scissors" onclick="chooseIcon('scissors')">✂️</label>
                </div>`
        console.log("i lose")
        computer += 1
    }
    if (myChoice === "dragon" && selectedItem === "rock"){
        centerLabel.innerHTML = `computer wins`
        icons.innerHTML = `<div class="blockClass">
                    <label class="dragon" onclick="chooseIcon('dragon')">🐉</label>
                    <label class="rock" onclick="chooseIcon('rock')">🪨</label>
                </div>`
        console.log("i lose")
        computer += 1
    }
    if (myChoice === "dragon" && selectedItem === "paper"){
        centerLabel.innerHTML = `human wins`
        icons.innerHTML = `<div class="blockClass">
                    <label class="dragon" onclick="chooseIcon('dragon')">🐉</label>
                    <label class="paper" onclick="chooseIcon('paper')">📄</label>
                </div>`
        console.log("i win")
        human += 1
    }
    if (myChoice === "dragon" && selectedItem === "virus"){
        centerLabel.innerHTML = `human wins`
        icons.innerHTML = `<div class="blockClass">
                    <label class="dragon" onclick="chooseIcon('dragon')">🐉</label>
                    <label class="virus" onclick="chooseIcon('virus')">🦠</label>
                </div>`
        console.log("i win")
        human += 1
    }
    // virus
    if (myChoice === "virus" && selectedItem === "scissors"){
        centerLabel.innerHTML = `human wins`
        icons.innerHTML = `<div class="blockClass">
                    <label class="virus" onclick="chooseIcon('virus')">🦠</label>
                    <label class="scissors" onclick="chooseIcon('scissors')">✂️</label>
                </div>`
        console.log("i win")
        human += 1
    }
    if (myChoice === "virus" && selectedItem === "rock"){
        centerLabel.innerHTML = `human wins`
        icons.innerHTML = `<div class="blockClass">
                    <label class="virus" onclick="chooseIcon('virus')">🦠</label>
                    <label class="rock" onclick="chooseIcon('rock')">🪨</label>
                </div>`
        console.log("i win")
        human += 1
    }
    if (myChoice === "virus" && selectedItem === "paper"){
        centerLabel.innerHTML = `computer wins`
        icons.innerHTML = `<div class="blockClass">
                    <label class="virus" onclick="chooseIcon('virus')">🦠</label>
                    <label class="paper" onclick="chooseIcon('paper')">📄</label>
                </div>`
        console.log("i lose")
        computer += 1
    }
    if (myChoice === "virus" && selectedItem === "dragon"){
        centerLabel.innerHTML = `computer wins`
        icons.innerHTML = `<div class="blockClass">
                    <label class="virus" onclick="chooseIcon('virus')">🦠</label>
                    <label class="dragon" onclick="chooseIcon('dragon')">🐉</label>
                </div>`
        console.log("i lose")
        computer += 1
    }

    leftWins.innerHTML = `<label class="leftWins">Wins: ${human}</label>`
    rightWins.innerHTML = `<label class="rightWins">wins: ${computer}</label>`

    timer = setTimeout(() => {
        centerLabel.innerHTML = `Choose your Fighter!`
        if (isEasy) {
            showNormalGame()
        } else {
            showHardGame()
        }
    }, 1500);
}

function showNormalGame() {
    isEasy = true
    console.log('true easy')
    normal.classList.add('hidden');
    hard.classList.add('hidden');
    rock.classList.remove("hidden")
    paper.classList.remove("hidden")
    scissors.classList.remove("hidden")
    backButton.classList.remove("hidden")
    centerLabel.innerHTML = `Choose your Fighter!`

    icons.innerHTML = `<label class="rock" onclick="chooseIcon('rock')">🪨</label>
                <div class="blockClass">
                    <label class="scissors" onclick="chooseIcon('scissors')">✂️</label>
                </div>
                <label class="paper" onclick="chooseIcon('paper')">📄</label>`
}

function showHardGame() {
    isEasy = false
    console.log('true hard')
    normal.classList.add('hidden');
    hard.classList.add('hidden');
    rock.classList.remove("hidden")
    paper.classList.remove("hidden")
    scissors.classList.remove("hidden")
    virus.classList.remove("hidden")
    dragon.classList.remove("hidden")
    backButton.classList.remove("hidden")
    centerLabel.innerHTML = `Choose your Fighter!`

    icons.innerHTML = `<label class="rock" onclick="chooseIcon('rock')">🪨</label>
                <div class="blockClass">
                    <label class="virus" onclick="chooseIcon('virus')">🦠</label>
                    <label class="scissors" onclick="chooseIcon('scissors')">✂️</label>
                    <label class="dragon" onclick="chooseIcon('dragon')">🐉</label>
                </div>
                <label class="paper" onclick="chooseIcon('paper')">📄</label>`
}

function rockLabel() {
    return `<label class="rock" onclick="chooseIcon('rock')">🪨</label>`
}
function virusLabel() {
    return `<label class="virus" onclick="chooseIcon('virus')">🦠</label>`
}
function scissorsLabel() {
    return `<label class="scissors" onClick="chooseIcon('scissors')">✂️</label>`
}
function dragonLabel() {
    return `<label class="dragon" onclick="chooseIcon('dragon')">🐉</label>`
}
function paperLabel() {
    return `<label class="paper" onclick="chooseIcon('paper')">📄</label>`
}

function chooseDifferentGame() {
    clearTimeout(timer)
    console.log('true')
    rock.classList.add("hidden")
    paper.classList.add("hidden")
    scissors.classList.add("hidden")
    virus.classList.add("hidden")
    dragon.classList.add("hidden")
    normal.classList.remove('hidden');
    hard.classList.remove('hidden');
    backButton.classList.add("hidden")
    centerLabel.innerHTML = `Choose your game!`

    icons.innerHTML = ` <label class="rock hidden" onclick="chooseIcon('rock')">🪨</label>
                <div class="blockClass">
                    <label class="virus hidden" onclick="chooseIcon('virus')">🦠</label>
                    <label class="scissors hidden" onclick="chooseIcon('scissors')">✂️</label>
                    <label class="dragon hidden" onclick="chooseIcon('dragon')">🐉</label>
                </div>
                <label class="paper hidden" onclick="chooseIcon('paper')">📄</label>`
}
