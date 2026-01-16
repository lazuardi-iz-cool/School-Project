function getPilihanKomputer() {
    const comp = Math.random();
    if (comp < 0.34) return 'gajah';
    if (comp >= 0.34 && comp < 0.67) return 'orang';
    return 'semut';
}

function getHasil(comp, player) {
    if(player == comp) return 'TIE!';
    if(player == 'gajah') return (comp == 'orang') ? 'WIN!' : 'LOSE!';
    if(player == 'orang') return (comp == 'gajah') ? 'LOSE!' : 'WIN!';
    if(player == 'semut') return (comp == 'orang') ? 'LOSE!' : 'WIN!';
}

const pilihan = document.querySelectorAll('li img');

pilihan.forEach(function(pil) {
     pil.addEventListener("click", function() {
          const pilihanKomputer = getPilihanKomputer();
          const pilihanPlayer = pil.className;
          const hasil = getHasil(pilihanKomputer, pilihanPlayer);

          const imgKomputer = document.querySelector(".img-komputer");
          imgKomputer.setAttribute('src', 'img/' + pilihanKomputer + '.png');

          const info = document.querySelector('.info');
          info.innerHTML = hasil;
     });
});

















console.log("Gendies Kirana Larasati's the best friend!")