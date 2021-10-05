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
    //introduction
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
            nextText: 1000,
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
                nextText: 1000,
            },

        ]
    },
    {
        id: 3,
        text: 'You look around trying spot the source of the voice. At your left a silhouette appears in the shape of feminine nature. Tall and skinny with sharp edges. A glowing dark-red beam out from her curly hair. Two glooming eyes of wonder approaching you in calm clank for her heals meeting the ground.',
        options: [
            {
             text: 'Hello?',
             nextText: 5,
            },
            {
                text: 'Who are you?',
                nextText: 9,
               },
            {
             text: 'Do nothing',
             nextText: 1000,
             },

        ]
    },
    {
        id: 4,
        text: '“Ow straight to the point are we, hum. Its Valeria.”',
        options: [
            {
             text: 'Nice to meet you ',
             nextText: 11,
            },
            {
             text: 'Do nothing',
             nextText: 6,
             },
             {
                text: 'Echante',
                nextText: 10,
            },
            {
                text: 'Plesure to meet you',
                nextText: 10,
            },

        ]
    },
    {
        id: 9,
        text: '“Ow straight to the point are we, hum. Like it. Im Valeria. Plesure”',
        options: [
            {
             text: 'Nice to meet you',
             nextText: 11,
            },
            {
             text: 'Indeed',
             nextText: 6,
             },
             {
                text: 'Echante',
                nextText: 10,
            },
            {
                text: 'Plesure all mine',
                nextText: 10,
            },

        ]
    },
    {
        id: 5,
        text: '"Hello indeed, how do you feel tonight?"',
        options: [
            {
             text: 'Good',
             nextText: 18,
            },
            {
             text: 'Fine',
             nextText: 2,
             },
             {
             text: 'not good',
             nextText: 2,
            },
            {
            text: 'say noting',
            nextText: 2,
            },

        ]
    },
    {
        id: 6,
        text: '"How do you feel?"',
        options: [
            {
             text: 'Good',
             nextText: 7,
            },
            {
             text: 'Fine',
             nextText: 2,
             },
             {
             text: 'not good',
             nextText: 2,
            },
            {
            text: 'not good',
            nextText: 1,
            },

        ]
    },
    {
        id: 7,
        text: '"Not a talker arnt we."',
        options: [
            {
             text: 'No',
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
        text: '"Not so much of a talker arnt we."',
        options: [
            {
             text: 'No',
             nextText: 14,
            },
            {
             text: 'maybe',
             nextText: 2,
             },

        ]
    },
    {
        id: 10,
        text: '"Hum, Such a gentle one you are, now tell me what brings you here in this fine evening?"',
        options: [
            {
             text: 'curriasety',
             nextText: 7,
            },
            {
             text: 'Dont know, yet, what do you like?',
             nextText: 15,
             },

        ]
    },
    {
        id: 11,
        text: '"Hum, how polite of you. What brings you here tonight?"',
        options: [
            {
             text: 'What can i do?',
             nextText: 12,
            },
            {
             text: 'Dont know, yet',
             nextText: 14,
             },

        ]
    },
    {
        id: 12,
        text: '"Ow more than enough for someone of your cliber, hum."',
        options: [
            {
             text: 'Ow really?',
             nextText: 7,
            },
            {
             text: 'Like what?',
             nextText: 14,
             },

        ]
    },
    {
        id: 13,
        text: '"Ow more than enough for someone of your cliber, hum."',
        options: [
            {
             text: 'Ow really?',
             nextText: 7,
            },
            {
             text: 'Like what?',
             nextText: 2,
             },

        ]
    },
    {
        id: 14,
        text: '"Ow that allright doe, its more to do than just talk"',
        options: [
            {
             text: 'Ow really?',
             nextText: 16,
            },
            {
             text: 'Like what?',
             nextText: 16,
             },

        ]
    },
    {
        id: 15,
        text: '"Hum I enjoy dancing, sining, as is quite breathtaking I been told haha, no no my most sertetly and faverbole thing is to mingle with intresting people, and tell stories for across the lands."',
        options: [
            {
             text: 'What stroies?',
             nextText: 16,
            },
            {
             text: 'Like what?',
             nextText: 16,
             },

        ]
    },
    {
        id: 16,
        text: '"Ow so many for those who have time. All from the clod and gritty Vikigs in the north, to danguros creatures lurking in the RedZone. I also have more for the power war in the east-east."',
        options: [
            {
             text: 'What stroies?',
             nextText: 7,
            },
            {
             text: 'Like what?',
             nextText: 2,
             },

        ]
    },
    //humør responds
    {
        id: 17,
        text: '""',
        options: [
            {
             text: 'No',
             nextText: 7,
            },
            {
             text: 'Do nothing',
             nextText: 2,
             },

        ]
    },
    {
        id: 18,
        text: '"Not a talker arnt we."',
        options: [
            {
             text: 'No',
             nextText: 7,
            },
            {
             text: 'Do nothing',
             nextText: 2,
             },

        ]
    },
    //U.N.G.

    //Seven Indian Kingdom
    
    //endings
    {
        id: 1000,
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