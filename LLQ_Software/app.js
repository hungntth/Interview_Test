
var champsApi = "https://6283b76a92a6a5e4622840e2.mockapi.io/champ"

function start() {
    getChamps(renderChamps);
}

start();

function getChamps(callback) {
    fetch(champsApi)
        .then(function (res) {
            return res.json();
        })
        .then(callback)
}

function renderChamps(champs) {
    var listChampsBlock = document.querySelector('#list-champs')
    var htmls = champs.map(function (champ) {
        return `
        <div class="box">
        <img src=${champ.img}>
        <div class="info">
            <h3>${champ.name}</h3>
            <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Rerum, harum.</p>
            <a href="#" class="btn">learn more</a>
        </div>
    </div>
        `

            ;
    })
    listChampsBlock.innerHTML = htmls.join("");

}