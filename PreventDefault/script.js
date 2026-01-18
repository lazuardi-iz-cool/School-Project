const testLink = document.getElementById('testLink')
const testForm = document.getElementById('testForm')
const msg = document.getElementById('msg')
const inputField = document.querySelector('input')

testLink.addEventListener("click", function(e) {
    e.preventDefault();
    msg.innerText = "Navigasi dibatalkan."
    console.log("Link dicegah.")
});

testForm.addEventListener('submit', function(e) {
    e.preventDefault();
    inputField.focus()
    msg.innerText = "Form dikirim tanpa me-refresh halaman."
    console.log("Data form tertahan di client-side.")
});