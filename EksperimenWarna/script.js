// .addEventListener: Deklarasikan aksi jika/if
const button = document.querySelector("button");
button.addEventListener("click", function() {
    document.body.classList.add('warna-kesukaan-Gendies');
    console.log("Button clicked!");
    console.log(document.body.classList);

    document.body.classList.toggle("bg-merah");
    console.log(document.body.classList);
})


const button2 = document.getElementById("button2");
button2.addEventListener("click", function() {
    const r = Math.round(Math.random() * 255 + 1);
    const b = Math.round(Math.random() * 255 + 1);
    const g = Math.round(Math.random() * 255 + 1);
    console.log(r);
    document.body.style.backgroundColor = 'rgb('+ r +','+ g +','+ b +')';
})