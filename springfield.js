function avaaSivu(sivu) {
      window.location.href = sivu;
}
function avaaKuva(kuvaPolku) {
    var popup = document.getElementById("popup");
    var popupKuva = document.getElementById("popupKuva");

    popupKuva.src = kuvaPolku;
    popup.style.display = "flex";
}

function suljeKuva() {
    var popup = document.getElementById("popup");
    popup.style.display = "none";
}

function avaaTabi(nimi, event) {
    var tabit = document.getElementsByClassName('tabcontent');
    for (var i = 0; i < tabit.length; i++) {
        tabit[i].style.display = 'none';
    }
    var napit = document.getElementsByClassName('tab');
    for (var i = 0; i < napit.length; i++) {
        napit[i].classList.remove('active');
    }
    document.getElementById(nimi).style.display = 'block';
    event.target.classList.add('active');
}
function avaaMeemi(kuva) {
    document.getElementById('meemiPopup').style.display = 'flex';
    document.getElementById('meemiKuva').src = kuva;
}
function suljeMeemi() {
    document.getElementById('meemiPopup').style.display = 'none';
}
function soitaAani() {
    var audio = document.getElementById("1990");
    var audio = document.getElementById("alcohol");
    audio.currentTime = 0; // aloituskohta alkuun
    audio.play();
}

var viestit = [
    {
        name: "mr customer",
        date: "2010-05-10",
        title: "looking for someone",
        content: "Hi, I'm looking for someone I used to know in high school. I'm wondering if I could find him here?"
    },
    {
        name: "Moe",
        date: "2010-05-10",
        title: "re: looking for someone",
        content: "Let's ask around. What's his name?"
    }
];

function naytaViesti() { // kaikki sivun viestit näkyviin
    var viestitDiv = document.getElementById('forummsgs');
    viestitDiv.innerHTML = '';
    for (var i = 0; i < viestit.length; i++) {
        var viesti = viestit[i];
        viestitDiv.innerHTML +=
            "<div class='message'>" +
                "<div><b>" + viesti.name + "</b> - " + viesti.date + "</div>" +
                "<div class='message-title'>" + viesti.title + "</div>" +
                "<div>" + viesti.content + "</div>" +
            "</div>" +
            (i < viestit.length - 1 ? "<hr class='message-divider'>" : "");
    }
}

naytaViesti(); // näyttää viestit kun sivu ladataan

document.getElementById("newMSGbttn").onclick = function() {
    document.getElementById("commentinbg").style.display = "flex";
    document.getElementById("msgsform").reset();
};

document.getElementById("cancelMSGbttn").onclick = function() {
    document.getElementById("commentinbg").style.display = "none";
};

document.getElementById("msgsform").onsubmit = function(event) {
    event.preventDefault();
    var name = document.getElementById("name").value;
    var msgtitle = document.getElementById("msgtitle").value;
    var msgtext = document.getElementById("comment_text").value;
    var now = new Date();
    var date = now.getDate() + "." + (now.getMonth() + 1) + "." + now.getFullYear(); // suomen aika
    viestit.push({
        name: name, date: date, title: msgtitle, content: msgtext
    });
    naytaViesti();
    document.getElementById("commentinbg").style.display = "none";
};