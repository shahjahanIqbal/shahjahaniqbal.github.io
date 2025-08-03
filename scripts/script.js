/*initialize */
init = document.getElementById("initializer")
init.style.fontSize = "1em";
init.style.textAlign = "left"

const typewriter1 = new Typewriter (init, {
    loop: false 
});

typewriter1
    
    .deleteAll()
    .pasteString(">>")
    .typeString("initializing... ")
    .pauseFor(2000)
    .pasteString("<br>>>")
    .typeString("conversion_software_v7.0")
    .pauseFor(400)
    .pasteString("<br>&nbsp;&nbsp;loading brag_statements.dat")
    .pauseFor(600)
    .pasteString("<br>>>")
    .typeString("success!!!") 
    .pauseFor(1000)
    .pasteString("<br>$$")
    .typeString("ckear") 
    .pauseFor(300)
    .deleteChars(4)
    .typeString("lear")
    
    .callFunction(() => {

        init.innerHTML = "";
        init.style.fontSize = "100pt";
        init.style.textAlign = "center";
        init.innerHTML = '<p>shahjahan_iqbal<br> <span id="whatami"> </span>';

        const bragArray = [ 'astrophysicist <img src = "images/agn1.png" width="100px" style="display:inline; vertical-align: middle; margin:-0.25em; margin-right:0.2em;">',
            'guitarist <img src = "images/guitar.png" width="100px" style="display:inline; vertical-align: middle; margin:-0.25em;margin-right:0.2em;">',
            '&lt;/coder\&gt; <img src = "images/computer.png" width="100px" style="display:inline; vertical-align: middle; margin:-0.25em;margin-right:0.2em;">',
            'woke up like this <img src = "images/bug.png" width="150px" style="display:inline; vertical-align: middle; margin:-0.25em;margin-right:0.2em;">',
            'doesn\'t make typos :P',
            'probably won\'t finish this site *_*'
        ];

        typewriter1.stop()

        const app = document.getElementById("whatami");
        const typewriter = new Typewriter(app, {
        
            loop: true, 
            delay: 75

        });

        bragArray.forEach((entry) => {
            
            typewriter
            
            .typeString(entry)
            .pauseFor(2000)
            .deleteAll()
            
       });

        typewriter.start();


    })
    .start();
        
cursor_color_set = document.getElementsByClassName("Typewriter__cursor")[0];
cursor_color_set.style.backgroundColor = "#d62d5b";

    


