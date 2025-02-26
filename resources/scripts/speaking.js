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
let text = "Greetings! My name is Nicholas. I graduated from the University of\
 Maryland, College Park in May 2024 with a dual degree in Computer Science and\
 Economics.Some of my interests are software, aquariums, design, jazz,\
 nature, biking, and systems. For further details about my professional experience,\
 please refer to my resume."

text = wrap(text, 49);
generateTextBubbleReverse(text, elem);

// TODO: reverse order such that the entire block is populated, and that the
// lines are updated from the bottom up. This should keep the width consistent
// such that the lines are updated from the text bubble line without interupting
// the content below the tuxsay
async function generateTextBubble(text, element) {
    
    let textBubble = []
    const message = text.split("\n");
    const max = max_length(message) + 2;

    for(let i = 0; i < message.length; i++) {
        textBubble.push("");
    }

    for (let i = 0; i < message.length; i++) {
        // makes a new line in the textBubble array

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
            await new Promise(r => setTimeout(r, 12));
        }
        
    }
} 

async function generateTextBubbleReverse(text, element) {

  let textBubble = [];
  const message = text.split("\n");
  const max = max_length(message) + 2;

  for (let i = 0; i < message.length + 1; i++) {
    textBubble.push("\n");
  }

  for (let i = 0; i < message.length; i++) {
    textBubble[textBubble.length - i - 2] = "  " + "-".repeat(max) + "\n"; 
    if (i == 0) {
      textBubble[textBubble.length - 1] = "< " + " ".repeat(max) + " >";
    } else {
      textBubble[textBubble.length - i - 1] = "/ " + message[0] + " ".repeat(max - message[0].length)  + " \\\n"
      textBubble[textBubble.length - 1] = "\\ " + " ".repeat(max) + " /";
      for (let j = 1; j < i; j++) {
        textBubble[textBubble.length - i + j - 1] = "| " + message[j] + " ".repeat(max - message[j].length) + " |\n";
      }
    }

    

    // slice the letters into the line. 
    for (j = 0; j < message[i].length; j++) {
        textBubble[textBubble.length - 1] = (textBubble[textBubble.length - 1].slice(0, j+2) + message[i][j] + 
                            textBubble[textBubble.length - 1].slice(j+3, textBubble[textBubble.length - 1].length));
        /*
        Note that this function call can be at the end of this function if
        you don't want to make a typing animation with setTimeout.
        */
        updateTextBubble(textBubble, element, max);
        await new Promise(r => setTimeout(r, 12));
    }
        
  }



}

function updateTextBubble(textbubble, element, max) {
    let content = "";
    for (i = 0; i < textbubble.length; i++) {
        content += textbubble[i];
    }
    content += "\n  " + "-".repeat(max);
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

