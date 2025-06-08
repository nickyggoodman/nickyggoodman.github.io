/*
 * Author: Nicholas Goodman
 *
 * Description: Generates a textbubble above the TuxSay character using the
 * text provided in the variable text. Inspired by the original TuxSay cli
 * program written originally in perl but later translated to python by 
 * VaasuDevanS
 *
 * See the python source code here: 
 * https://github.com/VaasuDevanS/cowsay-python/blob/main/cowsay/main.py
 *
 */

/*
 *
 *   _________________________________________
 *  / Greetings! My name is Nicholas. I       \
 *  | graduated from the University of        |
 *  | Maryland, College Park in May 2024 with |
 *  | dual degrees in Computer Science and    |
 *  | Economics.                              |
 *  \ please refer to my <a>resume.</a>       /
 *   -----------------------------------------          
 *      \
 *       \
 *            .--.
 *           |o_o |
 *           |:_/ |
 *          //   \ \
 *         (|     | )
 *        /'\_   _/`\
 *        \___)=(___/
 */

let text = "Greetings! My name is Nicholas. I graduated from the University of " +
"Maryland, College Park in May 2024 with a dual degree in Computer Science and " +
"Economics. For more information regarding experience and coursework, please " + 
"see my resume! Check out some of my projects listed below."
const elem = document.getElementById("textBubble");

text = wrap(text, 49);

generateTextBubbleReverse(text, elem);

/**
 * Generates a text bubble in the given element which must be with a <pre> tag.
 * The bubble is generated in reverse, order so that the element does not push
 * other elements down when used with a flex layout.
 * @param {string} text
 * @param {Element} element
 */
async function generateTextBubbleReverse(text, element) {

  let textBubble = [];
  const message = text.split("\n"); // new array of substrings
  const max = max_length(message) + 2; // length of longest line+2

  // set element height style attribute so that it doesn't push other 
  // elements down as it is loading
  element.style.height = message.length + 2 + "em";

  // pushes n+1 newlines to the textBubble array.
  for (let i = 0; i < message.length + 1; i++) {
    textBubble.push("\n");
  }

  // for each line in message 
  for (let i = 0; i < message.length; i++) {
    // the top border of the text bubble
    textBubble[textBubble.length - i - 2] = "  " + "-".repeat(max) + "\n"; 

    // for the first iteration, encapsulate sides in angle brackets
    if (i == 0) {
      textBubble[textBubble.length - 1] = "< " + " ".repeat(max) + " >";

    } else {
      
      // for all other iterations after the first, encapsulate the first and last 
      // lines with slashes.
      textBubble[textBubble.length - i - 1] = "/ " + message[0] + " ".repeat(max - message[0].length)  + " \\\n"
      textBubble[textBubble.length - 1] = "\\ " + " ".repeat(max) + " /";
       
      // for all other iterations after the first, encapsulate the middle lines
      // with | characters
      for (let j = 1; j < i; j++) {
        textBubble[textBubble.length - i + j - 1] = "| " + message[j] + " ".repeat(max - message[j].length) + " |\n";
      }

    }

    // slice the letters into the line of the the textBubble array. 
    for (j = 0; j < message[i].length; j++) {
        textBubble[textBubble.length - 1] = (textBubble[textBubble.length - 1].slice(0, j+2) + message[i][j] + 
                            textBubble[textBubble.length - 1].slice(j+3, textBubble[textBubble.length - 1].length));
        /*
        Note: this function call can be at the end of this function if
        you don't want to make a typing animation with setTimeout.
        */
        updateTextBubble(textBubble, element, max);
        await new Promise(r => setTimeout(r, 12));
    }
  }
}

/**
 * Updates the innerHTML of the element (with id="tuxsay") 
 * with the next version of the innerHTML
 * @param {!Array<string>} textbubble
 * @param {element} element
 * @param {number} number
 */
function updateTextBubble(textbubble, element, max) {
    let content = "";

    for (i = 0; i < textbubble.length; i++) {
        content += textbubble[i];
    }

    // bottom line of the text bubble
    content += "\n  " + "-".repeat(max);
    element.innerHTML = content;
}

/**
 * returns the length of the longest array within message array
 * @param {!Array<string>} message
 * @return {number}
 */
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


/**
 * Adds new lines breaks to a text every <limit> amount of
 * characters such that the text can fit within the width of the tuxsay
 * text bubble
 * @param {string} str
 * @param {number} limit
 * @return {string}
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

