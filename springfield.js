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