window.addEventListener('DOMContentLoaded', () => {

    /* ─── Content strings ───────────────────────────────────────── */

    const about = `Shahjahan Iqbal is a researcher at the Tata Institute of Fundamental Research, Mumbai. When he is not internally screaming at that one bug in his code or trying to understand what a 5σ confidence is for the ninth time, he spends his time reading books, watching movies and playing music.\nMidway through writing this, he has realized that speaking in the third person was a questionable choice, but it's too late now.\nIf the references scattered across this website wasn't a dead giveaway, you should know that he is a sucker for everything retro and rock n' roll. So much that he would inconvenience himself to carry a cassette tape and a walkman for music instead of spotify like a normal person would. Something about the warmth of analog music, he says.\nShahjahan is also passionate about bikes and goes on rides in the weekends if he wants to get away from the city and people. One day he might just fall out of society and travel the world on his faithful GT 535.`;

    const help = `[[;#fbb34d;]whoareyou]  — my tragic origin story\n[[;#fbb34d;]socials]     — slide into my dms\n[[;#fbb34d;]skills]      — a very specific set thereof ¬‿¬\n[[;#fbb34d;]cv]          — pay me to do your dirty work\n[[;#fbb34d;]interests]   — things that keep me alive\n[[;#fbb34d;]setup]       — my questionable life choices in hardware\n\n[[;#555555;]// there are also a few commands the legends call]\n[[;#555555;]// "the eggs of easter". good luck out there.]`;

    const socials = `
<span style="color:#fbb34d;">insta</span>    — <a href="https://instagram.com/the.retro.phile" target="_blank"><u>@the.retro.phile</u></a>
<span style="color:#fbb34d;">mail</span>     — <a href="mailto:iqbal.shahjahan1981@gmail.com"><u>iqbal.shahjahan1981@gmail.com</u></a>
<span style="color:#fbb34d;">github</span>   — <a href="https://github.com/shahjahanIqbal" target="_blank"><u>shahjahanIqbal</u></a>
<span style="color:#fbb34d;">linkedin</span> — <a href="https://linkedin.com/in/sj-iqbal" target="_blank"><u>sj-iqbal</u></a>
<span style="color:#fbb34d;">orcid</span>    — <a href="https://orcid.org/0000-0003-3413-2178" target="_blank"><u>0000-0003-3413-2178</u></a>`;

    const skills = `<span style="color:#fbb34d;">research</span>  X-ray astronomy · spectral analysis · timing analysis · AGN\n<span style="color:#fbb34d;">code</span>      Python · HEASoft · XSPEC · bash · a little JS when cornered\n<span style="color:#fbb34d;">music</span>     guitar (rhythm & lead) · a decent ear for tone\n<span style="color:#fbb34d;">other</span>     surviving Mumbai traffic · questionable life decisions`;

    const interests = `<span style="color:#fbb34d;">physics</span>   Black holes. AGN. The kind of stuff that makes you feel appropriately small.\n<span style="color:#fbb34d;">music</span>     Classic rock. Blues. Anything that breathes. Clapton, Page, Gilmour.\n<span style="color:#fbb34d;">bikes</span>     Royal Enfield GT 535. Weekend rides. The Western Ghats when possible.\n<span style="color:#fbb34d;">books</span>     Science, fiction, occasional philosophy. Check /bookshelf for receipts.\n<span style="color:#fbb34d;">film</span>      70s cinema. Kubrick. Tarkovsky. Films that don't explain themselves.`;

    const setup = `<span style="color:#fbb34d;">audio</span>     Sony WM-D6C Walkman · TDK SA-90 cassettes · Sennheiser HD 558\n<span style="color:#fbb34d;">laptop</span>    ThinkPad (of course) — because the keyboard is still better than yours\n<span style="color:#fbb34d;">editor</span>    VS Code · dark theme · font size that makes your ophthalmologist cry\n<span style="color:#fbb34d;">desk</span>      Controlled chaos. There is a system. You just can't see it.\n<span style="color:#fbb34d;">bike</span>      Royal Enfield GT 535 · stock exhaust · no stickers (this is not a food truck)`;

    const cv_msg = `Glad you're considering it. My CV is at:\n<a href="/assets/cv.pdf" target="_blank" style="color:#fbb34d;"><u>/assets/cv.pdf</u></a>\n\nOr email me: <a href="mailto:iqbal.shahjahan1981@gmail.com" style="color:#fbb34d;"><u>iqbal.shahjahan1981@gmail.com</u></a>`;

    /* ─── Easter eggs ───────────────────────────────────────────── */
    const sudo_msg    = `[sudo] password for shah:\n...\n...\nnice try.`;
    const rm_msg      = `rm: cannot remove '/': Permission denied\nalso: please don't.`;
    const hello_msg   = `oh hello there. you found a thing. good for you. ✓`;
    const coffee_msg  = `Error: coffee not found.\nHave you tried: [[;#fbb34d;]chai]`;
    const music_msg   = `Currently playing: [[;#fbb34d;]Eric Clapton — Wonderful Tonight]\nSource: Maxell XLII-90 · Side A · Track 3\nStatus: ██████████░░ warm. analog. correct.`;
    const tifr_msg    = `Tata Institute of Fundamental Research\nHomi Bhabha Road, Navy Nagar, Colaba\nMumbai 400 005 · Maharashtra · India\n\nHome of very smart people and very strong filter coffee.`;
    const bike_msg    = `Royal Enfield GT 535 · 2016 · Racing Red\nMileage: enough to know the Western Ghats by smell\nMods: none. she's perfect as she is.\nStatus: weekend-ready`;
    const existential = `...\n...\nprocessing query...\n\nthe universe is ~13.8 billion years old.\nyou are reading a terminal on a personal website.\nboth of these facts are equally improbable.\n\ncarry on.`;
    const uname_msg   = `SHAH-OS v7.1 (Retro Edition)\nKernel: coffee-5.sigma-generic\nUptime: too long\nLoad avg: 0.99 1.00 1.00\nUsers: 1 (currently overthinking)`;

    /* Matrix rain easter egg */
    function runMatrix(term) {
        const cols      = Math.floor((term.cols() || 80) * 0.98);
        const chars     = 'アイウエオカキクケコ01 ABCDEFabcdef░▒▓█▀▄';
        let   frames    = 0;
        const maxFrames = 35;
        const interval  = setInterval(() => {
            let line = '';
            for (let i = 0; i < cols; i++) {
                line += chars[Math.floor(Math.random() * chars.length)];
            }
            term.echo(`[[;#00ff41;]${line}]`);
            if (++frames >= maxFrames) {
                clearInterval(interval);
                term.echo(`\n[[;#fbb34d;]there is no spoon.]\n`);
            }
        }, 55);
    }

    /* ─── Command map ───────────────────────────────────────────── */
    const commands = {

        whoareyou()  { this.echo(about, { keepWords: true }); },
        help()       { this.echo(help); },
        socials()    { this.echo($(socials)); },
        skills()     { this.echo($(skills)); },
        interests()  { this.echo($(interests)); },
        setup()      { this.echo($(setup)); },
        cv()         { this.echo($(cv_msg)); },

        /* ── Easter eggs ─────────────────────── */

        sudo()       { this.echo(sudo_msg); },
        hello()      { this.echo(hello_msg); },
        coffee()     { this.echo(coffee_msg); },
        music()      { this.echo($(music_msg)); },
        tifr()       { this.echo($(tifr_msg)); },
        bike()       { this.echo($(bike_msg)); },
        why()        { this.echo(existential); },
        uname()      { this.echo($(uname_msg)); },

        matrix() {
            const self = this;
            self.echo(`[[;#00ff41;]initiating matrix sequence...]`);
            setTimeout(() => runMatrix(self), 300);
        },

        '42'()       { this.echo(`[[;#fbb34d;]Yes. But what was the question?]`); },

        '5sigma'()   {
            this.echo(
                `A 5σ result means the null hypothesis probability is ~0.0000003.\n` +
                `It means you can publish.\n` +
                `It does not mean you're right — it means you're probably right.\n` +
                `There's a difference. Physicists learn this the hard way.`
            );
        },

        ls() {
            this.echo(
                `[[;#fbb34d;]./]\n../\nwhoareyou.txt\nsocials.lnk\nskills.dat\n` +
                `interests.md\nsetup.cfg\ncv.pdf\n[[;#555555;]*.secret   (no you can't cat these)]`
            );
        },

        pwd()  { this.echo(`/home/shahjahan/tifr/mumbai/india/earth`); },
        whoami(){ this.echo(`shahjahan_iqbal\ngroups: astrophysicist guitarist human`); },
        date() { this.echo(`[[;#fbb34d;]${new Date().toDateString()} — and yes, the deadline is tomorrow.]`); },
        clear(){ this.clear(); },

        // rm -rf must be caught in the not-found handler since it has a flag
    };

    /* ─── Terminal init ─────────────────────────────────────────── */
    const term = $('#term').terminal(commands, {
        greetings:
            `Hello mortal.. I sense that you seek knowledge about me.\n` +
            `Enter [[;#fbb34d;]help] to see commands. But be warned..\n` +
            `there are plenty more spells hidden from your sights.\n` +
            `The legends call them [[;#555555;]the eggs of easter]. You must seek them out yourself.`,
        keepWords: true,
        prompt: '[[;#fbb34d;]>>>] ',
        checkArity: false,
        onCommandNotFound(cmd) {
            // catch rm -rf / here
            if (cmd.trim().startsWith('rm')) {
                this.echo(`rm: cannot remove '/': Permission denied\nalso: please don't.`);
                return;
            }
            const quips = [
                `'${cmd}': command not found. (try [[;#fbb34d;]help])`,
                `command not found: ${cmd} — but nice try.`,
                `${cmd}? I'm a physicist, not a magician.`,
                `ERROR 404: '${cmd}' not found in this dimension.`,
            ];
            this.echo(`[[;#d62d5b;]${quips[Math.floor(Math.random() * quips.length)]}]`);
        },
    });

});
