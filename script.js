function createRaindrop() {
        
    const raindrop = document.createElement('div');
    raindrop.classList.add('raindrop');

    raindrop.style.left = Math.random() * window.innerWidth + 'px';

    raindrop.style.animationDuration = (Math.random() * 1 + 0.5) + 's'; // Random duration between 0.5s and 1.5s
    document.querySelector(".rain-container").appendChild(raindrop);
    // Remove the raindrop after it falls
    setTimeout(() => {
        raindrop.remove();
    }, 1500); // Match the maximum animation duration
}

let raining = false;
let rainInterval;

function rainButton() {
    let button = document.querySelector("button");

    raining = !raining;

    if (raining) {
        button.innerHTML = "Stop Watermelon Rain!";
        rainInterval = setInterval(createRaindrop, 500);
    } else {
        button.innerHTML = "Watermelon Rain!";
        clearInterval(rainInterval);
    }
}

function factButton() {
    let facts = [
        "Watermelons are 92% water!",
        "Watermelons are both fruits and vegetables at the same time!",
        "There are many watermelon varieties!",
        "Watermelons are technically a berry called a pepo!",
        "The heaviest watermelon ever recorded weighed over 350 pounds!",
        "Watermelons originally came from Africa!",
        "There are over 1,000 different varieties of watermelon!",
        "Watermelon rinds are edible and can be used in recipes!",
        "Seedless watermelons are created using special breeding methods!",
        "Watermelons contain vitamins A and C!",
        "The red color of watermelon comes from a pigment called lycopene!",
        "Watermelons have been grown for thousands of years!"
    ];

    alert(facts[Math.floor(Math.random() * facts.length)]);
}

let score = 0;

function clickerButton() {
    score++;

    document.getElementById("score").innerHTML = "Clicker Score! 🍉 : " + score;
}