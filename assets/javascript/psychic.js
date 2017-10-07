    var compD;
    var wins = 0;
    var losses = 0;
    var tries = 10;
    var incorrect = [];
    var resetTries = 10;

    function compStart() {

        var options = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];


        var computerSelect = options[Math.floor(Math.random() * options.length)];

        console.log(computerSelect)
        compD = computerSelect;


    }


    document.onkeyup = function userStart() {


        var userGuess = String.fromCharCode(event.keyCode).toLowerCase();


        console.log(userGuess);

 
        if (userGuess !== compD) {

            if (incorrect.indexOf(userGuess) === -1) {
                incorrect.push(userGuess);
                 tries--;
                
            }
           

            gamePlay();

        }

        if (userGuess === compD) {
            wins++;
            compStart();
            alert("you win");
            incorrect = [];
            tries = resetTries;
            gamePlay();

        }

        if (tries < 1) {
            losses++;
            compStart();
            tries = resetTries;
            incorrect = [];
            gamePlay();


        }

        if (losses === 10) {

            var GameOver = "<h1>This game is over, but thats subjective.</h1>"

            document.getElementById('game').innerHTML = GameOver;
        }

        if (wins === 10) {

            var Congrats = "<h1>Congratulations, you think you're psychic!</h1>"

            document.getElementById('game').innerHTML = Congrats;
        }



    }


    function gamePlay() {

        var html = "<h1>Psychic Game</h1><br>" +
            "<p> Guess which letter the computer has selected.</p>" +
            "<p>wins:" + wins + "</p>" +
            "<p>losses:" + losses + "</p>" +
            "<p>guesses:" + tries + "</p>" +
            "<p>Your guesses so far:" + incorrect + "</p>";

        console.log(html);

        document.getElementById('game').innerHTML = html;





    }

    window.onload = function() {
        gamePlay();
        compStart();
    }


