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
let text = "line1\nline2\nline3\nline4\nline5";
generateTextBubble(text, elem);

function generateTextBubble(text, element) {
    
    const message = text.split("\n");
    const max = max_length(message);
    
    element.innerHTML = " " + "_".repeat(max) + " \n"

    for (let i = 0; i < message.length; i++) {
        element.innerHTML += "| " + message[i] + " |" + "\n"; 
    }

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