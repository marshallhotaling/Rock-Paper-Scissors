var normal = document.querySelector(".normal");
var hard = document.querySelector(".hard ");
var rock = document.querySelector(".rock")
var paper = document.querySelector(".paper")
var scissors = document.querySelector(".scissors")
var virus = document.querySelector(".virus")
var dragon = document.querySelector(".dragon")
var centerLabel = document.querySelector(".centerLabel")
var backButton =document.querySelector(".backButton")
// Event listeners
var human = {
    wins: 0,
    choice: null,
}
var computer = {
    wins: 0,
    choice:null,
}

rock.addEventListener('click', () => {
    console.log("here")
    human.choice = "rock"
    console.log(human)
});


normal.addEventListener('click', () => {
    showNormalGame();
});
hard.addEventListener('click', () => {
    showHardGame();
});
backButton.addEventListener('click', () => {
    chooseDifferentGame();
});




function showNormalGame() {
    console.log('true')
    normal.classList.add('hidden');
    hard.classList.add('hidden');
    rock.classList.remove("hidden")
    paper.classList.remove("hidden")
    scissors.classList.remove("hidden")
    backButton.classList.remove("hidden")
    centerLabel.innerHTML = `<label className="centerLabel">Choose your Fighter!</label>`
}

function showHardGame() {
    console.log('true')
    normal.classList.add('hidden');
    hard.classList.add('hidden');
    rock.classList.remove("hidden")
    paper.classList.remove("hidden")
    scissors.classList.remove("hidden")
    virus.classList.remove("hidden")
    dragon.classList.remove("hidden")
    backButton.classList.remove("hidden")
    centerLabel.innerHTML = `<label className="centerLabel">Choose your Fighter!</label>`
}

function chooseDifferentGame (){
    console.log('true')
    rock.classList.add("hidden")
    paper.classList.add("hidden")
    scissors.classList.add("hidden")
    virus.classList.add("hidden")
    dragon.classList.add("hidden")
    normal.classList.remove('hidden');
    hard.classList.remove('hidden');
    backButton.classList.add("hidden")
    centerLabel.innerHTML = `<label class="centerLabel">Choose your game!</label>`
}
