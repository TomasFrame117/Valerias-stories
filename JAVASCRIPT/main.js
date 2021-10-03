const textElement = document.getElementById('text');
const optionButtonsElement = document.getElementById('option-buttons');
let = state ={}

function startGame() {
    state ={}
    showStoryText(1)
}

function showStoryText(textNodeIndex) {
    const textNode = setninger.find(textNode => textNode.id === textNodeIndex)
    textElement.innerText = textNode.text
    while (optionButtonsElement.firstChild) {
        optionButtonsElement.removeChild(optionButtonsElement.firstChild)
    }
        //skaper knapper fra HTML til a bli dynamiske 
    textNode.options.forEach(Option => {
        if (showOption(Option)) {
            const button = document.createElement('button')
            button.innerText = Option.text
            button.classList.add('btn')
            button.addEventListener('click', () => selectOption(Option))
            optionButtonsElement.appendChild(button)
        }
    });
}

function showOption(option) {
    return option.requiredState == null || option.requiredState(state)
}

function selectOption(option) {
    const nextTextNodeId = option.nextText
    if (nextTextNodeId <= 0) {
        return startGame()
    }
    state = Object.assign(state, option.setState)
    showStoryText(nextTextNodeId)
}
    //Aray of setninger in the stroy 
const setninger = [
    {
        id: 1,//identifyer for each textNodes in the array
        text: 'You are entering a room. Its dimly lit warm glowing lights hanging from the sealing in golden stems. The room itself is magnificent, huge and vivid by its royale colors and vantage furnishers  The scenery gives a relaxing vibe, as its slowly seduce you forward into its center, where more is in store for you. In a minute you hesitate for a second or two. Is this truly what you want to do?',
        options: [
            {
            text: 'Yes',
            setState: {yes: true}, //
            nextText: 2,
            },
            {
            text: 'No',
            setState: {},
            nextText: 100,
            },

        ]
    },
    {
        id: 2,
        text: 'you look in the direction of the voice',
        options: [
            {
            text: 'look in the voice direction.',
            setState: {voice: true},
            nextText: 3,
            },
            {
                text: '',
                setState: {voice: true},
                nextText: 2,
            },

        ]
    },
    {
        id: 3,
        text: 'you enter a room. its huge with gold in a hermonic blend to the royal red collord walls, and carpets on the floor. "Hello, helloo there, who are you?" siad a voice calm but stil warm across the room. what do you do?',
        options: [
            {
             text: 'look in the voice direction.',
             setState: {voice: true},
             nextText: 2,
            },
            {
             text: 'look in the voice direction.',
             setState: {voice: true},
             nextText: 2,
             },

        ]
    },
    {
        id: 100,
        text: 'You turn around and leave the resident',
        options: [
            {
            text: 'Try again?',
            setState: {},
            nextText: 1,
            },

        ]
    }
]
startGame()