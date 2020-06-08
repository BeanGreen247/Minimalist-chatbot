let you = "User1";
botSays("Thanks for checking out the Minimalist ChatBot. \n\nType !name x where x = yourName to change your name.\nTo chat, click Talk to me or press Enter(pc) or Go(android)\nType !help for a hint\n\n\n***")
// Recognized Speech Patterns for Question Responses
const Hello = ["HI", "HEY", "HOWDY", "HEYA", "HOLA", "HELLO", "SUP", "KONNICHIWA", "ALOHA"]
const Goodbye = ["BYE", "SEE YA", "CYA", "LATER", "ADIOS", "SAYONARA", "SEEYA"]
const Greeting = ["WHAT'S UP", "HOW'S IT GOING", "HOW ARE YOU", "NICE DAY", "GOOD MORNING", "GOOD NIGHT"]
const Name = ["WHAT IS YOUR NAME", "WHAT'S YOUR NAME", "WHO ARE YOU", "WHAT DO THEY CALL YOU", "COMO TE LLAMAS"]
const Actions = ["HELP", "DRINK", "CHALLENGE", "SEARCH"]
const Questions = ["QUESTION", "QUIZ", "CODE", "ANSWER", "HTML", "CSS", "JAVASCRIPT", "WHO MADE YOU"];
const HTMLTags1 = ["<P>", "<I>", "<SPAN>", "<DIV>", "<ARTICLE>", "<IFRAME>", "<A>", "<ABBR>", "<ADDRESS>", "<AUDIO>"];
// Skip the CMD Line and learn HTML by reading my code!~~ here have fun.
const HTMLTags2 = [
    "<A>", //    Defines a hyperlink
    "<ABBR>", //Defines an abbreviation or an acronym
    "<ACRONYM>", //    Not supported in HTML5. Use <abbr> instead. Defines an acronym
    "<ADDRESS>", //    Defines contact information for the author/owner of a document
    "<APPLET>", //    Not supported in HTML5. Use <embed> or <object> instead. Defines an embedded applet
    "<AREA>", //    Defines an area inside an image-map
    "<ARTICLE>", //    Defines an article
    "<ASIDE>", //    Defines content aside from the page content
    "<AUDIO>", //    Defines sound content
    "<B>" // Defines bold text
]
const HTMLTags3 = [
    "<BASE>", // Specifies the base URL/target for all relative URLs in a document
    "<BASEFONT>", //    Not supported in HTML5. Use CSS instead. Specifies a default color, size, and font for all text in a document
    "<BDI>",    // Isolates a part of text that might be formatted in a different direction from other text outside it
    "<BDO>",    //Overrides the current text direction
    "<BIG>",    //Not supported in HTML5. Use CSS instead. Defines big text
    "<BLOCKQUOTE>", //    Defines a section that is quoted from another source
    "<BODY>",    //Defines the document's body
    "<BR>",    //Defines a single line break
    "<BUTTON>",    //Defines a clickable button
    "<CANVAS>"    //Used to draw graphics, on the fly, via scripting (usually JavaScript)
]
const HTMLTags4 = [
    "<CAPTION>",    //Defines a table caption
    "<CENTER>", //    Not supported in HTML5. Use CSS instead. Defines centered text
    "<CITE>", //Defines the title of a work
    "<CODE>",    //Defines a piece of computer code
    "<COL>",    //Specifies column properties for each column within a <colgroup> element 
    "<COLGROUP>",    //Specifies a group of one or more columns in a table for formatting
    "<DATALIST>",    //Specifies a list of pre-defined options for input controls
    "<DD>",    //Defines a description/value of a term in a description list
    "<DEL>",    //Defines text that has been deleted from a document
    "<DETAILS>",    //Defines additional details that the user can view or hide
    "<DFN>" //    Represents the defining instance of a term
]
const colors = ["BLUE", "RED", "GREEN", "YELLOW", "WHITE", "BLACK", "SILVER", "GRAY"];
let Else = true;
const questions = [colors, HTMLTags4, HTMLTags3, HTMLTags2, HTMLTags1, Hello, Goodbye, Greeting, Name, Actions, Questions];
const reactions = [BotHello, BotGoodbye, BotGreeting];
const BotHello = ["HI", "HEY", "HOWDY", "HEYA", "HOLA", "HELLO", "SUP", "KONNICHIWA", "ALOHA"]
const BotGoodbye = ["BYE", "SEE YA", "CYA", "LATER", "ADIOS", "SAYONARA", "SEEYA"]
const BotGreeting = ["WHAT'S UP", "HOW'S IT GOING", "HOW ARE YOU", "NICE TO SEE YOU", "GOOD MORNING", "WELCOME"]
const BotPleasant = ["Thanks.", "Good job.", "Cool.", "I see.", "Anyway.", "right-o."]
function answer(x) {
    const botOut = botChat.value;
    document.getElementsByTagName("textarea")[0] = botChat
    //RESPONSES//
    document.getElementsByTagName("input")[0].value = ""
    if (x.charAt(0).includes("!") === false) {
        youSay(x); botChat.scrollTop = botChat.scrollHeight;
    }
    question = x.toUpperCase()
    for (i = 0; i < 10; i++) {
        /*          EMPTY RESPONSE          */
        if (question === "" || null) {
            setTimeout(function () { botSays("\nBot : What? You shy?"); botChat.scrollTop = botChat.scrollHeight; }, 600);
            return;
        }
        /*          COMMAND MENU RESPONSES         */
        else if (question === "!MENU") {
            botSays("\n\nCommands are " +
                "\n           !Name yourName - changes users name" +
                "\n           !Bgcolor backgroundColor - changes background color" +
                "\n           !Text textColor  - changes text color" +
                "\n           !Menu - opens this menu" +
                "\n           !Secrets - top secret" +
                "\n           !Tutorial - opens tutorial" +
                "\n           !Botsay textSays - makes the bot say what you type" +
                "\n           !Me textDoes - shows typed text as if you said it" +
                "\n           !Search termYouWantToSearch - searcher a term using Google Search" +
                "\n           !Openfb - opens Facebook" +
                "\n           !Opentw - opens Twitter" +
                "\n           !Openig - opens Instagram" +
                "\n           !Opensite theSitesURLYouWannaOpen - opens typed URL" +
                "\n"); botChat.scrollTop = botChat.scrollHeight;
            return;
        } else if (question.slice(0, 9).includes("!BGCOLOR ")) {
            botSays("\n\n**Changed the background color to " + x.slice(9)); botChat.scrollTop = botChat.scrollHeight; botChat.style.backgroundColor = x.slice(9);
            return;
        } else if (question.slice(0, 6).includes("!TEXT ")) {
            botSays("\n\n**Changed the text color to " + x.slice(6)); botChat.scrollTop = botChat.scrollHeight; botChat.style.color = x.slice(6);
            return;
        } else if (question.slice(0, 6).includes("!NAME ")) {
            you = x.slice(6);
            botSays("\n\n**Your name is " + you); botChat.scrollTop = botChat.scrollHeight;
            return;
        } else if (question.slice(0, 9).includes("!SECRETS")) {
            botSays("\n\n**What? I don't have any secrets. I've got nothing to hide."); botChat.scrollTop = botChat.scrollHeight;
            return;
        }
        else if (question.slice(0, 10).includes("!TUTORIAL")) {
            botSays("\n\n**What? I don't have a tutorial. Read my code, I'm not going to explain myself."); botChat.scrollTop = botChat.scrollHeight;
            return;
        }
        else if (question.slice(0, 10).includes("!BOTSAY")) {
            botSays("\nBot : " + x.slice(8)); botChat.scrollTop = botChat.scrollHeight;
            return;
            /* SEARCH FUNCTION implemented */
        } else if (question.slice(0, 10).includes("!SEARCH")) {
            botSays("\nBot : I´ll search for " + x.slice(8)); botChat.scrollTop = botChat.scrollHeight;
            window.open('https://www.google.com/search?q=' + x.slice(8), '_blank');
            return;
        } else if (question.slice(0, 10).includes("!OPENFB")) {
            botSays("\nBot : I´ll open FaceBook for you " + you); botChat.scrollTop = botChat.scrollHeight;
            window.open('https://www.facebook.com', '_blank');
            return;
        } else if (question.slice(0, 10).includes("!OPENTW")) {
            botSays("\nBot : I´ll open Twitter for you " + you); botChat.scrollTop = botChat.scrollHeight;
            window.open('https://www.twitter.com', '_blank');
            return;
        } else if (question.slice(0, 10).includes("!OPENIG")) {
            botSays("\nBot : I´ll open Instagram for you " + you); botChat.scrollTop = botChat.scrollHeight;
            window.open('https://www.instagram.com', '_blank');
            return;
        } else if (question.slice(0, 10).includes("!OPENSITE")) {
            botSays("\nBot : I´ll open " + x.slice(10) + "  for you " + you); botChat.scrollTop = botChat.scrollHeight;
            window.open('//' + x.slice(10), '_blank');
            return;
        } else if (question.slice(0, 4).includes("!ME")) {
            youDo(x.slice(4)); botChat.scrollTop = botChat.scrollHeight;
            return;
        }
        /* Questions, Answers and Responses */
        if (question.includes(Goodbye[i])) {
            Else = false;
            setTimeout(botSays, 600, "\
                                 Bot : Godspeed. Leave an upvote?")
        } else if (question.includes(Name[i])) {
            Else = false; setTimeout(botSays, 600, "\nBot : My name is MinBot. You can call me MB.")
        } else if (question.includes(HTMLTags1[i])) {
            /*HTML Tag Definitions Courtesy of W3Schools.com*/
            Else = false; if (HTMLTags1[i] === "<P>") { setTimeout(botSays, 600, "\nBot : The HTML tag '<p>' Defines a paragraph.") } else if (HTMLTags1[i] === "<I>") { setTimeout(botSays, 600, "\nBot : The HTML tag '<i>' Defines a part of text in an alternate voice or mood. Italics.") } else if (HTMLTags1[i] === "<SPAN>") { setTimeout(botSays, 600, "\nBot : The HTML tag '<Span>' Defines a section in a document.") } else if (HTMLTags1[i] === "<A>") { setTimeout(botSays, 600, "\nBot : The HTML tag '<Span>' Defines a section in a document.") }
        } else if (question.includes(HTMLTags2[i])) {
            /*HTML Tag Definitions Courtesy of W3Schools.com*/
            Else = false; if (HTMLTags2[i] === "<ABBR>") { setTimeout(botSays, 600, "\nBot : The HTML tag '<abbr>' Defines an abbreviation or acronym.") } else if (HTMLTags2[i] === "<ACRONYM>") { setTimeout(botSays, 600, "\nBot : The HTML tag '<acronym>' Not supported in HTML5, use '<abbr>' instead.") } else if (HTMLTags2[i] === "<ADDRESS>") { setTimeout(botSays, 600, "\nBot : The HTML tag '<address>' Defines contact information for the author/owner of a document.") } else if (HTMLTags2[i] === "<APPLET>") { setTimeout(botSays, 600, "\nBot : The HTML tag '<applet>' Not supported in HTML5, use '<embed>' or '<object>' instead.") } else if (HTMLTags2[i] === "<AREA>") { setTimeout(botSays, 600, "\nBot : The HTML tag '<area>' Defines an area inside an image map") } else if (HTMLTags2[i] === "<ARTICLE>") { setTimeout(botSays, 600, "\nBot : The HTML tag '<article>' Defines an article.") } else if (HTMLTags2[i] === "<ASIDE>") { setTimeout(botSays, 600, "\nBot : The HTML tag '<aside>' Defines content aside from the page content.") } else if (HTMLTags2[i] === "<AUDIO>") { setTimeout(botSays, 600, "\nBot : The HTML tag '<audio>' Defines sound content.") } else if (HTMLTags2[i] === "<B>") { setTimeout(botSays, 600, "\nBot : The HTML tag '<B>' Defines bold text.") }
        } else if (question.includes(HTMLTags3[i])) {
            Else = false;
            if (HTMLTags3[i] === "<BASE>") { setTimeout(botSays, 600, "\nBot : The HTML tag '<base>' Specifies the base URL/target for all relative URLs in a document") } else if (HTMLTags3[i] === "<BASEFONT>") { setTimeout(botSays, 600, "\nBot : The HTML tag '<basefont>' Not supported in HTML5. Use CSS instead.  Specifies a default color, size, and font for all text in a document. ") } else if (HTMLTags3[i] === "<BDI>") { setTimeout(botSays, 600, "\nBot : The HTML tag '<bdi>' Isolates a part of text that might be formatted in a different direction from other text outside it. ") } else if (HTMLTags3[i] === "<BDO>") { setTimeout(botSays, 600, "\nBot : The HTML tag '<bdo>' Overrides the current text direction. ") } else if (HTMLTags3[i] === "<BIG>") { setTimeout(botSays, 600, "\nBot : The HTML tag '<big>' Not supported in HTML5, use CSS instead. Defines big text. ") } else if (HTMLTags3[i] === "<BLOCKQUOTE>") { setTimeout(botSays, 600, "\nBot : The HTML tag '<blockquote>' Defines a section that is quoted from another source. ") } else if (HTMLTags3[i] === "<BODY>") { setTimeout(botSays, 600, "\nBot : The HTML tag '<body>' Defines a document's body. ") } else if (HTMLTags3[i] === "<BR>") { setTimeout(botSays, 600, "\nBot : The HTML tag '<br>' Defines a single line break. ") } else if (HTMLTags3[i] === "<BUTTON>") { setTimeout(botSays, 600, "\nBot : The HTML tag '<button>' Defines a clickable button. ") } else if (HTMLTags3[i] === "<CANVAS>") { setTimeout(botSays, 600, "\nBot : The HTML tag '<canvas>' Used to draw graphics, on the fly, via scripting. Usually Javascript. ") }

            /*} else if ( question.includes(HTMLTags4[i]) ) {
            } else if ( question.includes(HTMLTags5[i]) ) {
                
            } else if ( question.includes(HTMLTags6[i]) ) {    */
            /*} else if ( question.includes(HTMLTags7[i]) ) {
            } else if ( question.includes(HTMLTags8[i]) ) {
                
            } else if ( question.includes(HTMLTags9[i]) ) {    */







        } else if (question.includes(Actions[i])) {
            Else = false; if (question.includes("CHALLENGE")) { setTimeout(botSays, 600, "\nBot : Challenge my creator. Go for it.") } else { setTimeout(botSays, 600, "\nBot : How can I help?  Use my commands !Menu & !Tutorial to see what I can do.") }
        } else if (question.includes(Questions[i])) {
            Else = false; if (question.includes("WHO MADE YOU")) { setTimeout(botSays, 600, "\nBot : So you wanna know something about my creator. Well go to this page why don´t ya. https://beangreen247.github.io/home/") } else { setTimeout(botSays, 600, "\nBot : How can I help?  Use my commands !Menu & !Tutorial to see what I can do.") }
        } else if (question.includes(Questions[i])) {
            Else = false; if (Questions[i].includes("HTML")) { setTimeout(botSays, 600, "\nBot : Ask my creator. Go for it. Post your question in the comments, he'll try to help you. I'm just a code, I don't know HOW to code.") } else { setTimeout(botSays, 600, "\nBot : How can I help? Use my commands !Menu & !Tutorial to see what I can do.") }
        } else if (question.includes(Greeting[i])) {
            Else = false; if (Greeting[i].includes("HOW") && Greeting[i].includes("YOU")) {
                const reactHello = "How am I";
                const reactGreeting = "I would say I am 40% complete."
            }
            else {
                num = Math.ceil(Math.random() * 3)
                let reactHello = Greeting[num]
                reactHello = reactHello.toLowerCase();
                reactHello = reactHello.charAt(0).toUpperCase() + reactHello.slice(1);
                const reactGreeting = "Same old. Getting coded mostly.";
            }
            const reactPleasant = BotPleasant[num]
            setTimeout(botSays, 600, "\nBot : " + reactHello + ". " + reactGreeting + " " + reactPleasant)
        } else if (question.includes(Hello[i])) {
            let reactHello = Hello[i];
            reactHello = reactHello.toLowerCase();
            reactHello = reactHello.charAt(0).toUpperCase() + reactHello.slice(1);
            const reactGreeting = "";
            const reactPleasant = ""
            Else = false;
            setTimeout(botSays, 600, "\nBot : " + reactHello + ".")
        } else { }
    } setTimeout(function () { if (Else === true) { botSays("\n\n**Error 404: Response Not Found."); } }, 700); setTimeout(function () { Else = true; botChat.scrollTop = botChat.scrollHeight; }, 730)
} function botSays(x) {
    document.getElementsByTagName("textarea")[0].innerHTML += x;
} function youSay(x) {
    botSays("\n" + you + " \ : " + x)
}
function youDo(x) {
    botSays("\n" + you + " " + x)
} function enterButton(e, x) { if (e.keyCode == 13) { answer(x); } }    
