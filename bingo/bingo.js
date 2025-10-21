const BINGOS = ["CO is Dead", '"Bolting Fervor is not even that strong"', 
                '"Oh my god bruh" GIF', "Add New Content", "Ultimax Suggestions",
                "OV in TA", "Tank Role is Dead", "BPM new tech", "Asking for VOD", 
                "Ooo, heh~", "Ape Fireball", "No one is running rampage", "CO Players failing to read",
                "Nerf X Powerset", "V", "Retained", "COH", "PVDs should be Nerfed", "MPREG", "Emma Frost", 
                "Vore", "Kane VS MPH Key War", "INT Glaze", "PA is B Tier", "Ramaster Quote", 
                "DPS Check", "NINJA", "Spreadsheets", "Zoroark Responds", "Raven Loki Suffering GIF",
                "X Powerset needs a buff", "Hybrid Libel", "Jumping Puzzles", "Iniquity", "Ship of Heroes",
                "Eyes turning Green", "Mag 5 or Bust", "Pets at Cosmics", "Marvel at AH prices", "Add CON form",
                "Badger Petting", "Caprice Mentioned", "Who allowed this to happen", "Nac's Gator Gifs",
                "MHA Hoppy GIF", "Emoji Spamming a Good Take", "Perk Unlock", "Don't Try Freak/Thelposting"];

function shuffleArray(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
}
shuffleArray(BINGOS);
const canvas = document.getElementById("myCanvas");
const ctx = canvas.getContext("2d");
ctx.font = "30px Arial";
ctx.textBaseline = "middle";
ctx.textAlign = "center";

for(let i = 0; i < 5; i++) {
    for (let j = 0; j < 5; j++) {
        ctx.rect(i * 200, j * 200, (i+1)* 200, (j+1) * 200);
        ctx.stroke();
        let txt = "";
        if(i == 2 && j == 2) {
            txt = "[REDACTED]";
        }
        else txt = BINGOS.pop();
        if(txt.length > 10) {
            let spaceSplit = txt.indexOf(" ", (txt.length/2 - 3));
            txt = [txt.substring(0, spaceSplit), txt.substring(spaceSplit)];

        }
        if(Array.isArray(txt)) {
            ctx.fillText(txt[0], i * 200 + 100, j * 200 + 80, 180);
            ctx.fillText(txt[1], i * 200 + 100, j * 200 + 110, 180);
        }
        else {
            ctx.fillText(txt, i * 200 + 100, j * 200 + 100, 180);
        }
    }
}