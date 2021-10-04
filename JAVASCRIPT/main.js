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
        text: 'Taken by the spectacles you continue inwards the vivid room. “Hello, Hello there,” came across the room. The voice is warm, but profound and youthful.',
        options: [
            {
            text: 'look for the voice',
            setState: {voice: true},
            nextText: 3,
            },
            {
                text: 'Do nothing',
                nextText: 2,
            },

        ]
    },
    {
        id: 3,
        text: 'You look around trying spot the source of the voice. At your left a silhouette appears in the shape of feminine nature. Tall and skinny with sharp edges. A glowing dark-red, beam out from her curly hair. Two glooming eyes of wonder approaching you in calm clank for her heals meeting the ground.',
        options: [
            {
             text: 'Hello?',
             nextText: 5,
            },
            {
                text: 'Who are you?',
                nextText: 4,
               },
            {
             text: 'Do nothing',
             nextText: 100,
             },

        ]
    },
    {
        id: 4,
        text: '“Ow straight to the point are we, hum. Its Valeria.”',
        options: [
            {
             text: 'Nice to meet you ',
             nextText: 7,
            },
            {
             text: 'Do nothing',
             nextText: 6,
             },
             {
                text: 'Echante',
                nextText: 2,
            },

        ]
    },
    {
        id: 5,
        text: '"Hello indeed. How do you feel?"',
        options: [
            {
             text: 'Hello?',
             nextText: 7,
            },
            {
             text: 'Do nothing',
             nextText: 2,
             },

        ]
    },
    {
        id: 6,
        text: '"Not a talker arnt we."',
        options: [
            {
             text: 'No?',
             nextText: 7,
            },
            {
             text: 'Do nothing',
             nextText: 2,
             },

        ]
    },
    {
        id: 7,
        text: '"Hello indeed. How do you feel?"',
        options: [
            {
             text: 'Hello?',
             nextText: 7,
            },
            {
             text: 'Do nothing',
             nextText: 2,
             },

        ]
    },
    {
        id: 8,
        text: '"Hello indeed. How do you feel?"',
        options: [
            {
             text: 'Hello?',
             nextText: 7,
            },
            {
             text: 'Do nothing',
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