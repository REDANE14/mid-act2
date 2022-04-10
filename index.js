var button = document.querySelector('button');
var winner = document.querySelector('.rcp');
button.addEventListener('click', function() {

    var dice1 = Math.floor(Math.random() * 6) + 1;
    var dice2 = Math.floor(Math.random() * 6) + 1;

    var toPlayer1 = document.querySelector('.img1');
    var toPlayer2 = document.querySelector('.img2');

    toPlayer1.setAttribute('src', `dice${dice1}.png`);
    toPlayer2.setAttribute('src', `dice${dice2}.png`);
    console.log(dice1)

    if (dice1 > dice2) {
        var results = document.querySelector('h1');
        results.innerText = `Player 1 wins with dice #${dice1}`

        var player1Rest = document.querySelector('.p1').innerHTML = `<u>You win!</u>`
        var player2Rest = document.querySelector('.p2').innerText = `You lose!`

    } else if (dice2 > dice1) {
        var results = document.querySelector('h1');
        results.innerText = `Player 2 wins with dice #${dice2}`

        var player1Rest = document.querySelector('.p1').innerText = `You lose!`
        var player2Rest = document.querySelector('.p2').innerHTML = `<u>You win!</u>`
    } else if (dice2 == dice1) {
        var results = document.querySelector('h1');
        results.innerText = `Draw!`

        var player1Rest = document.querySelector('.p1').innerText = `Draw!`
        var player2Rest = document.querySelector('.p2').innerText = `Draw!`
    }
})