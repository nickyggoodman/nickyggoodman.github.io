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
\ please refer to my <a>resume.</a>               /
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

//await new Promise(r => setTimeout(r, 20));

const elem = document.getElementById("textBubble");
text = "Greetings! My name is Nicholas. I graduated from the University of\
 Maryland, College Park in May 2024 with dual degrees in Computer Science and\
 Economics. Some of my interests are software, aquariums, design, jazz,\
 nature, biking, and systems. For further details about my professional experience,\
 please refer to my resume."
text = wrap(text, 49);
generateTextBubble(text, elem);


async function generateTextBubble(text, element) {
    
    let textBubble = []
    const message = text.split("\n");
    const max = max_length(message) + 2;

    for (let i = 0; i < message.length; i++) {
        // makes a new line in the textBubble array
        textBubble.push("1");
        /*
        console.log("textBubble[i]");
        create a fixed sized line that we will slice elements into so that the
        borders stay uniform and don't jump around as they are generated
        */
        if (i == 0) {
            textBubble[0] = "<" + " ".repeat(max) + ">\n";
        } else if (i == 1) {
            textBubble[0] = "/" + textBubble[0].slice(1, textBubble[0].length-2) + "\\\n";
            textBubble[1] = "\\" + " ".repeat(max) + "/\n";
        } else {
            textBubble[i-1] = "|" + textBubble[i-1].slice(1, textBubble[i-1].length-2) + "|\n";
            textBubble[i] = "\\" + " ".repeat(max) + "/\n";
        }
        // slice the letters into the line. 
        for (j = 0; j < message[i].length; j++) {
            textBubble[i] = (textBubble[i].slice(0, j+2) + message[i][j] + 
                                textBubble[i].slice(j+3, textBubble[i].length));
            /*
            Note that this function call can be at the end of this function if
            you don't want to make a typing animation with setTimeout.
            */
            updateTextBubble(textBubble, element, max);
            await new Promise(r => setTimeout(r, 10));
        }
        
    }
} 


function updateTextBubble(textbubble, element, max) {
    content = " " + "_".repeat(max) + "\n";
    for (i = 0; i < textbubble.length; i++) {
        content += textbubble[i];
    }
    content += " " + "-".repeat(max);
    element.innerHTML = content;
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


/*
lazily written wrapper function. should break on more things.
*/
function wrap(str, limit) {
    let res = "";
    let i = 0;
    while (i < str.length) {
        res = res + str[i];
        if ((i + 1) % limit == 0) {
            while(str[i] != " " && str[i] != ".") {
                i++;
                res = res + str[i];
            }
            res = res + "\n"
        }
        i++;
    }
    return res;
}


// TODO: generate character for customer character selection
function generateCharacter(character) {

}

