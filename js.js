// Tester at JavaScript forbindelsen virker - vises i browser konsollen
console.log("Hello World");

/* Oliver og Clara - Forfattere af koden */

// ==================== INIT ====================
// Venter med at køre JS til HTML'en er loaded
document.addEventListener('DOMContentLoaded', function() {

    // Klik på Hugo -> bange()
    document.getElementById('hugo').addEventListener('click', bange);

    // Klik på fisk2 -> fisk2Click()
    document.getElementById('fisk2').addEventListener('click', fisk2Click);

    // Klik på fisk3 -> fisk3Click()
    document.getElementById('fisk3').addEventListener('click', fisk3Click);

    // “Easter egg”: klik andre steder end på hugo eller fisk2
    document.body.addEventListener('click', function(event) {
        if (
            !document.getElementById('hugo').contains(event.target) &&
            !document.getElementById('fisk2').contains(event.target)
        ) {
            alert("Av FOR DÆLEN");
        }
    });

    // Sprogknap med flag
    const langBtn = document.getElementById("lang-btn");
    const flagImg = document.getElementById("flag-img");
    let currentLang = "dk";

    if (langBtn && flagImg) {
        langBtn.addEventListener("click", function() {
            if (currentLang === "dk") {
                // Skift til engelsk
                flagImg.src = "images/uk.png";
                flagImg.alt = "English flag";
                document.title = "Shopping Center North";
                currentLang = "en";
            } else {
                // Skift tilbage til dansk
                flagImg.src = "images/dk.png";
                flagImg.alt = "Dansk flag";
                document.title = "Storcenter Nord";
                currentLang = "dk";
            }
        });
    }
});

// ==================== FISK 1: HUGO ====================

// Klik på Hugo
function bange(event) {
    // Stopper bubbling, så body ikke også får klik-event
    event.stopPropagation();

    // Skifter Hugo-billedet ud med info-boks
    document.querySelector("#hugo").innerHTML = `
        <div onclick="avForDaelen(event)">
            <h2>Jeg er en Hugo fisk</h2>
            <p>Jeg lever i vandet.</p>
            <button onclick="nulstilFisk(event)">Klik for at se fisken igen</button>
        </div>
    `;
}

// Klik inde i Hugos info-boks
function avForDaelen(event) {
    event.stopPropagation();
    alert("Du klikkede på fisken!");
}

// Nulstiller Hugo til almindeligt billede
function nulstilFisk(event) {
    event.stopPropagation();

    document.querySelector("#hugo").innerHTML = `
        <img src="images/png.gif" alt="Hugo">
    `;

    // Skal sættes på igen, fordi innerHTML fjerner events
    document.getElementById('hugo').addEventListener('click', bange);
}


// ==================== FISK 2 ====================

// Klik på fisk 2
function fisk2Click(event) {
    event.stopPropagation();

    document.querySelector("#fisk2").innerHTML = `
        <div onclick="fisk2Alert(event)">
            <h2>Jeg er fisk nummer 2</h2>
            <p>Jeg svømmer længere nede!</p>
            <button onclick="nulstilFisk2(event)">Klik for at se fisken igen</button>
        </div>
    `;
}

// Klik inde i fisk 2's info
function fisk2Alert(event) {
    event.stopPropagation();
    alert("Du klikkede på fisk 2!");
}

// Nulstiller fisk 2
function nulstilFisk2(event) {
    event.stopPropagation();

    document.querySelector("#fisk2").innerHTML = `
        <img src="images/fisk2.2.gif" alt="Fisk 2">
    `;

    document.getElementById('fisk2').addEventListener('click', fisk2Click);
}


// ==================== FISK 3 ====================

// Klik på fisk 3
function fisk3Click(event) {
    event.stopPropagation();

    document.querySelector("#fisk3").innerHTML = `
        <div onclick="fisk3Alert(event)">
            <h2>Jeg er din nye fisk!</h2>
            <button onclick="nulstilFisk3(event)">Tilbage</button>
        </div>
    `;
}

// Klik inde i fisk 3's info
function fisk3Alert(event) {
    event.stopPropagation();
    alert("Du klikkede på fisk 3!");
}

// Nulstiller fisk 3
function nulstilFisk3(event) {
    event.stopPropagation();

    document.querySelector("#fisk3").innerHTML = `
        <img src="images/antias.gif" alt="Antias fisk">
    `;

    document.getElementById('fisk3').addEventListener('click', fisk3Click);
}
