window.addEventListener('DOMContentLoaded', () => {
    const container = document.getElementById("ascii-container");
    const files = ["Ascii1.txt", "Ascii2.txt", "Ascii3.txt", "Ascii5.txt"];
    let index = 0;



    function loadascii(){
        fetch(`/ascii/${files[index]}`)
        .then(res=>res.text())
        .then(text=>{
            container.innerHTML  = text;
            index = (index + 1) % files.length;
        })
        .catch(err=>{
            container.textContent = 'Error Fetching ASCII art';
            console.error(err);
        });
    }
    loadascii();
    setInterval(loadascii, 3000);


    /* Terminal */
    const about = `Shahjahan Iqbal is a researcher at the Tata Institute of Fundamental Research, Mumbai. When he is not internally screaming at that one bug in his code or trying to understand what a 5σ confidence is for the ninth time, he spends his time reading books, watching movies and playing music.\nMidway through writing this, he has realized that speaking in the third person was a questionable choice, but it's too late now.\nIf the references scattered across this website wasn't a dead giveaway, you should know that he is a sucker for everything retro and rock n' roll. So much that he would inconvenience himself to carry a cassette tape and a walkmann for music instead of spotify like a normal person would. Something about the warmth of analog music, he says. \nShahjahan is also passionate about bikes and goes on rides in the weekends if he wants to get away from the city and people. One day he might just fall out of society and travel the world on his faithful GT 535.`
    const help = `[[;#fbb34d;]whoareyou] \n\t- If you want a short backstory of my tragic past and my plans on world domination \n[[;#fbb34d;]socials] \n\t- Wanna slide into my dms? I'll give you my social ids \n[[;#fbb34d;]skills] \n\t- I have a very specific set of skills ¬‿¬ \n[[;#fbb34d;]cv] \n\t- Wanna pay me to do your dirty work? Download my cv`
const socials = `
<span style="color:#fbb34d;">insta</span>  \n\t- <a href="https://instagram.com/fanaticphysicist" target="_blank"><u>@fanaticphysicist</u></a><br>
<span style="color:#fbb34d;">mail</span> \n\t- <a href="mailto:iqbal.shahjahan1981@gmail.com"><u>iqbal.shahjahan1981@gmail.com</u></a><br>
<span style="color:#fbb34d;">github</span>  \n\t- <a href="https://github.com/shahjahanIqbal" target="_blank"><u>shahjahanIqbal</u></a><br>
<span style="color:#fbb34d;">linkedin</span>  \n\t- <a href="https://linkedin.com/in/sj-iqbal" target="_blank"><u>sj-iqbal</u></a><br>
<span style="color:#fbb34d;">orcid</span>  \n\t- <a href="https://orcid.org/0000-0003-3413-2178" target="_blank"><u>0000-0003-3413-2178</u></a>
`;   
    // Terminal init

    function wrapAtWhitespace(text, maxWidth) {
    const words = text.split(' ');
    let line = '';
    let result = '';

    words.forEach(word => { 
        if ((line + word).length > maxWidth) {
            result += line.trimEnd() + '\n';
            line = word + ' ';
        } else {
            line += word + ' ';
        }
    });

    result += line.trimEnd();
    return result;
}
    const commands = {
            whoareyou: function() {
            const wrapped = wrapAtWhitespace(about, this.cols());
            console.log('cols %d', this.cols());
            this.echo(about, {keepWords: true});
        },
            help: function() {
            this.echo(help);
        },
            socials: function() {
            this.echo($(socials));
        },
    };
    const term = $('#term').terminal(commands, {
            greetings: "Hello mortal.. I sense that you seek knowledge about me. \nEnter [[;#fbb34d;]help] to know the list of commands. \nBut be warned.. there are plenty more spells hidden from your sights. \nThe legends call them the eggs of easter. You must seek them out yourself.",
            keepWords: true,
            prompt: '>>>',
    });

});

