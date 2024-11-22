const positiveMoods = [
    "Happy", "Excited", "Energetic", "Calm", "Peaceful",
    "Confident", "Optimistic", "Proud", "Joyful", "Loving",
    "Content", "Playful", "Silly", "Grateful", "Hopeful",
    "Motivated", "Inspired", "Determined", "Empowered", "Cheerful"
];

const negativeMoods = [
    "Sad", "Angry", "Frustrated", "Anxious", "Lonely",
    "Guilty", "Tired", "Bored", "Stressed", "Overwhelmed",
    "Jealous", "Fearful", "Disappointed", "Nervous", "Embarrassed",
    "Shy", "Awkward", "Annoyed", "Impatient", "Restless"
];

let messageOne = document.getElementById("message-one")
let messageTwo = document.getElementById("message-two")

function positiveMaker() {

    let moodOne = ""
    let moodTwo = ""


    let randomMoodsOne = Math.floor( Math.random() * positiveMoods.length )
    moodOne = positiveMoods[randomMoodsOne]

    let randomMoodsTwo = Math.floor( Math.random() * positiveMoods.length )
    moodTwo = positiveMoods[randomMoodsTwo]

    messageOne.textContent = moodOne
    messageOne.style.background = "#32CD32";
    messageTwo.textContent = moodTwo
    messageTwo.style.background = "#32CD32";

    
}

function negativeMaker() {

    let moodOne = ""
    let moodTwo = ""


    let randomMoodsOne = Math.floor( Math.random() * negativeMoods.length )
    moodOne = negativeMoods[randomMoodsOne]

    let randomMoodsTwo = Math.floor( Math.random() * negativeMoods.length )
    moodTwo = negativeMoods[randomMoodsTwo]

    messageOne.textContent = moodOne
    messageOne.style.background = "#FF6347";
    messageTwo.textContent = moodTwo
    messageTwo.style.background = "#FF6347";

    
}