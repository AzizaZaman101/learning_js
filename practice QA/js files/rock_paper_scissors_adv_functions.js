
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

            let isAutoPlaying = false;
            //we will keep this undefined
            let intervalId;

            function autoPlay()
            {
                if(!isAutoPlaying)
                {
                    //setInterval() returns a number, we can use it to stop the interval 
                    intervalId = setInterval (function()
                    {
                        const playerMove = pickComputerMove();
                        playGame(playerMove);
                    },1000);
                    isAutoPlaying = true;
                }
                else
                {
                    //that's how we stop the interval
                    clearInterval(intervalId);
                    isAutoPlaying = false;
                }
                
            }

            //added eventListner to the auto-play button
            document.querySelector('.auto-play')
            .addEventListener('click', autoPlay);

            function resetScore ()
            {
                advScore.wins = 0;
                advScore.tie = 0;
                advScore.loses = 0;

                localStorage.removeItem('advScore');
                document.querySelector('.js-result').innerHTML = '';
                updateScoreElement();
            }

            document.querySelector('.reset')
            .addEventListener('click', resetScore);

            function playGame(userMove) {

                const computerMove = pickComputerMove();

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
                    <img src="../../images/${userMove}-emoji.png" alt="This was the emoji of ${userMove}" class="move-icon">
                    <img src="../../images/${computerMove}-emoji.png" alt="This was the emoji of ${computerMove}" class="move-icon">
                    Computer`;

                localStorage.setItem('advScore', JSON.stringify(advScore));

                updateScoreElement();
            }

            function pickComputerMove()
            {
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

                return computerMove;
            }

            //we are also making sure we can play this game is using keyboard
            document.body.addEventListener('keydown' , (event) =>
            {
                console.log(event.key);
                if(event.key ==='s')
                {
                    playGame('Scissors');
                }
                else if(event.key ==='r')
                {
                    playGame('Rock');
                }
                else if(event.key ==='p')
                {
                    playGame('Paper');
                }
                else if(event.key === 'a')
                {
                    autoPlay();
                }
                else if(event.key === 'Backspace')
                {
                    resetScore();
                }
                else
                {
                    console.log("Invalid Input");
                }
            });