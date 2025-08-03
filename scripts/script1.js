window.addEventListener('DOMContentLoaded', () => {
    const init = document.getElementById("initializer");
    init.style.fontSize = "1em";
    init.style.textAlign = "left";

    let typewriter1;
    
    function initAnim() {
        typewriter1 = new Typewriter(init, {
            loop: false
        });

        // Wait for typewriter to initialize and then set cursor color
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
                mainScreenSetup();
                mainAnim();
            })
            .start();

        // Set the cursor color after the animation starts
        setTimeout(() => {
            const cursor = document.getElementsByClassName("Typewriter__cursor")[0];
            if (cursor) {
                cursor.style.backgroundColor = "#d62d5b";
            }
        }, 200); // Slightly delayed to ensure the typewriter initializes first
    }

    function mainScreenSetup() {
        init.innerHTML = "";
        init.style.fontSize = "100pt";
        init.style.textAlign = "center";
        init.innerHTML = '<p>shahjahan_iqbal<br> <span id="whatami"> </span>';
    }
    const bragArray = [ 'astrophysicist <img src = "../images/agn1.png" width="100px" style="display:inline; vertical-align: middle; margin:-0.25em; margin-right:0.2em;">',
        'guitarist <img src = "../images/guitar.png" width="100px" style="display:inline; vertical-align: middle; margin:-0.25em;margin-right:0.2em;">',
        '&lt;/coder\&gt; <img src = "../images/computer.png" width="100px" style="display:inline; vertical-align: middle; margin:-0.25em;margin-right:0.2em;">',
        'woke up like this <img src = "../images/bug.png" width="150px" style="display:inline; vertical-align: middle; margin:-0.25em;margin-right:0.2em;">',
        'doesn\'t make typos :P',
        'left his site half done ¬_¬'
    ];

    function mainAnim() {
        const app = document.getElementById("whatami");
        const typewriter = new Typewriter(app, {
            loop: true,
            delay: 75
        });

        bragArray.forEach((entry) => {
            typewriter
                .typeString(entry)
                .pauseFor(2000)
                .deleteAll();
        });

        typewriter.start();
    }

    // Check if user has visited before and handle animations

   visit = sessionStorage.getItem('hasVisited');
   console.log(visit)
   if(visit === null){
    sessionStorage.setItem('hasVisited','true');

    console.log("First Time")
    initAnim();
   }
   else if(visit === 'true') {
    console.log("Repeat Visitor")
    mainScreenSetup()
    mainAnim();
   }

   /* var x = document.cookie
    
    if(x.indexOf('SJvisited=True') > -1){
        mainScreenSetup();
        mainAnim();
        console.log('Repeated Visitor')
    }
    else{   
        console.log('New Visitor')
        document.cookie = 'SJvisited=True;' // Add Time variable here to expire in some time. 
        initAnim();
    }*/
    
}); 
    
