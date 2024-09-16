/*
see the python source code here: 
https://github.com/VaasuDevanS/cowsay-python/blob/main/cowsay/main.py

 _________________________________________
/ Greetings! My name is Nicholas. I       \
| graduated from the University of        |
| Maryland, College Park in May 2024 with |
| dual degrees in Computer Science and    |
| Economics. Some of my interests are     |
| software, aquariums, design, jazz,      |
| nature, biking, and systems.            |
| Originally from Frederick, Maryland, I  |
| have been residing in Baltimore for the |
| past three years. For further details   |
| about my professional experience,       |
\ please refer to my resume               /
 -----------------------------------------          
    \
     \
          .--.
         |o_o |
         |:_/ |
        //   \ \
       (|     | )
      /'\_   _/`\
      \___)=(___/

*/

const elem = document.getElementById("textBubble");
let text = "Greetings! My name is Nicholas. I\ngraduated from the University of\nMaryland, College Park in May 2024 with\ndual degrees in Computer Science and\nEconomics. Some of my interests are\nsoftware, aquariums, design, jazz,\nnature, biking, and systems.\nOriginally from Frederick, Maryland, I\nhave been residing in Baltimore for the\npast three years. For further details\nabout my professional experience,\nplease refer to my resume";
generateTextBubble(text, elem);

async function generateTextBubble(text, element) {
    
    let textBubble = []
    const message = text.split("\n");
    const max = max_length(message);

    for (let i = 0; i < message.length; i++) { 
        
        textBubble.push([]); // make a new line.
        
        if (i == 0) {
            textBubble[i].push("< ");
        } else if (i == 1) {
            textBubble[0][0] = "/ "
            textBubble[0][max + 1] = " \\\n"
            textBubble[1].push("\\ ")
        } else {
            textBubble[i].push("\\ ")
            textBubble[i-1][0] = "| "
            textBubble[i-1][max + 1] = " |\n"
        }

        for (let j = 0; j < max; j++) {
            if (j < message[i].length) {
                await new Promise(r => setTimeout(r, 20));
                textBubble[i].push(message[i][j]);
                updateTextBubble(textBubble, element);
            } else {
                await new Promise(r => setTimeout(r, 20));
                textBubble[i].push(" ");
                updateTextBubble(textBubble, element);
            }    
        }

        if (i == 0) {
            textBubble[i].push(" >\n");
        } else {
            textBubble[i].push(" /\n")
        }
    }
    updateTextBubble(textBubble, element);
} 

function updateTextBubble(textbubble, element) {
    input = ""
    for (i = 0; i < textbubble.length; i++) {
        for (j = 0; j < textbubble[i].length; j++) {
            input += textbubble[i][j]
        }
    }
    element.innerHTML = input;
}

function max_length(message) {
    let curr = 0, max = 0;
    for (let i = 0; i < message.length; i++) {
        curr = message[i].length;
        if (curr > max) {
            max = curr;
        }
    }
    return max;
}

function generateCharacter(character) {
    
}