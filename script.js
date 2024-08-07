document.addEventListener('DOMContentLoaded', () => {
    const newJokeButton = document.getElementById('newJokeButton');
    const jokeText = document.getElementById('jokeText');

    const jokes = [
        "I'm reading a book on anti-gravity. It's impossible to put down!",
        "Did you hear about the mathematician who’s afraid of negative numbers? He will stop at nothing to avoid them.",
        "Why do we never tell secrets on a farm? Because the potatoes have eyes and the corn has ears.",
        "Parallel lines have so much in common. It’s a shame they’ll never meet.",
        "Why don't skeletons fight each other? They don't have the guts.",
        "What do you call fake spaghetti? An impasta!",
        "Why did the scarecrow win an award? Because he was outstanding in his field.",
        "Why don’t scientists trust atoms? Because they make up everything!",
        "What did the grape do when he got stepped on? Nothing but let out a little wine!",
        "How does a penguin build its house? Igloos it together.",
        "Why did the golfer bring two pairs of pants? In case he got a hole in one.",
        "I told my wife she was drawing her eyebrows too high. She looked surprised.",
        "Why did the bicycle fall over? It was two-tired.",
        "What’s orange and sounds like a parrot? A carrot!",
        "I would tell you a joke about an elevator, but it's an uplifting experience.",
        "Why did the math book look sad? Because it had too many problems.",
        "Why did the scarecrow become a successful neurosurgeon? He was outstanding in his field.",
        "Why don’t crabs give to charity? Because they’re shellfish.",
        "How do you organize a space party? You planet.",
        "What do you call cheese that isn't yours? Nacho cheese.",
        "I wanted to be a doctor, but I didn't have the patients.",
        "What do you get when you cross a snowman and a vampire? Frostbite.",
        "What’s brown and sticky? A stick.",
        "How do you make holy water? You boil the hell out of it.",
        "I used to play piano by ear, but now I use my hands.",
        "What do you call a factory that sells passable products? A satisfactory.",
        "Why are ghosts bad at lying? Because they are too transparent.",
        "I couldn’t figure out why the baseball kept getting bigger. Then it hit me.",
        "What did the big flower say to the little flower? Hi, bud!",
        "How do you catch a squirrel? Climb a tree and act like a nut.",
        "Why don’t some couples go to the gym? Because some relationships don’t work out.",
        "What do you call a can opener that doesn’t work? A can’t opener.",
        "Why don’t oysters donate to charity? Because they are shellfish.",
        "What do you call a fish with no eyes? Fsh.",
        "I would avoid the sushi if I was you. It’s a little fishy.",
        "I told my computer I needed a break, and now it won't stop sending me Kit-Kat bars.",
        "Why do chicken coops only have two doors? Because if they had four, they’d be chicken sedans.",
        "Why don’t programmers like nature? It has too many bugs.",
        "What do you call an alligator in a vest? An investigator.",
        "How does a train eat? It goes chew, chew.",
        "I used to be a baker, but I couldn’t make enough dough.",
        "What did one ocean say to the other ocean? Nothing, they just waved.",
        "Why was the math book sad? It had too many problems.",
        "Why did the computer go to the doctor? Because it had a virus.",
        "I’d tell you a chemistry joke, but I know I wouldn’t get a reaction.",
        "Why did the tomato turn red? Because it saw the salad dressing!",
        "What kind of shoes do ninjas wear? Sneakers.",
        "Why did the picture go to jail? Because it was framed."
    ];

    function getRandomJoke() {
        const randomIndex = Math.floor(Math.random() * jokes.length);
        return jokes[randomIndex];
    }

    newJokeButton.addEventListener('click', () => {
        jokeText.textContent = getRandomJoke();
    });
});
