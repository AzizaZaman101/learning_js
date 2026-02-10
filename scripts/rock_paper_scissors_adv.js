




let advScore = JSON.parse(localStorage.getItem('advScore')) ||{
                wins : 0,
                loses : 0,
                tie: 0
            };

updateScoreElement();

            function updateScoreElement()
            {
                document.querySelector('.js-score')
                    .innerHTML = (`Wins: ${advScore.wins}, Loses: ${advScore.loses}, Ties : ${advScore.tie}`);
            }



            function playGame(userMove) {

                let randomNumber = Math.random();

                
                let computerMove = '';

                if (randomNumber > 0 && randomNumber < (1 / 3)) 
                {
                    computerMove = 'Rock';
                } 
                else if (randomNumber >= (1 / 3) && randomNumber < (2 / 3)) 
                {
                    computerMove = 'Paper';
                } 
                else 
                {
                    computerMove = 'Scissors';
                }

                let result = '';
                if (userMove === computerMove) 
                {
                    result = `Tie.`;
                    advScore.tie +=1;
                    document.querySelector('.js-result').innerHTML =
                    `${result}`;
                    
                } 
                else if (
                    (userMove === 'Rock' && computerMove === 'Scissors') ||
                    (userMove === 'Paper' && computerMove === 'Rock') ||
                    (userMove === 'Scissors' && computerMove === 'Paper')
                ) 
                {
                    result = `You Win.`;
                    advScore.wins+=1;
                    document.querySelector('.js-result').innerHTML =
                    `${result}`;
                } 
                else 
                {
                    result = `You Lose.`;
                    advScore.loses+=1;
                    document.querySelector('.js-result').innerHTML =
                    `${result}`;
                }

                //here we are updating the emojis based on the dynamic choice of move of both the user and the computer
                document.querySelector('.js-move')
                    .innerHTML = `You 
                    <img src="./images/${userMove}-emoji.png" alt="This was the emoji of ${userMove}" class="move-icon">
                    <img src="./images/${computerMove}-emoji.png" alt="This was the emoji of ${computerMove}" class="move-icon">
                    Computer`;

                localStorage.setItem('advScore', JSON.stringify(advScore));

                updateScoreElement();
            }