
    let score = JSON.parse(localStorage.getItem('score')) || {
        wins:0,
        losses:0,
        ties:0
      };

      updateScoreElement();
      
//getting data from local storage so that old data is restored and do get vanished...

      

  let compMove ='';

    function updateScoreElement(){
      document.querySelector('.js-score')
        .innerHTML = `wins: ${score.wins}, losses : ${score.losses},ties:${score.ties}`;
    }


    function fxn1 (){
        const randomNum = Math.random();

        if(randomNum >=0 && randomNum <1/3){
          compMove = 'rock';
        }else if (randomNum >=1/3 && randomNum < 2/3){
          compMove = 'paper';
        }else if(randomNum >=2/3 && randomNum < 1) {
          compMove = 'scissor';
        }
      }
    
   

    function fxn2(playerMove){
      let result = '';
     
        if(playerMove === 'scissor'){ 
        if(compMove==='rock'){
          result='you lose';
        }else if (compMove==='paper'){
          result='you win';
        }else if(compMove==='scissor'){
          result='tie';
        }

      }else if (playerMove === 'rock'){

        if(compMove==='rock'){
          result='tie';
        }else if (compMove==='paper'){
          result='you lose';
        }else if (compMove==='scissor'){
          result='you win';
        }

      }else if (playerMove === 'paper'){

        if(compMove==='rock'){
          result='you win';
        }else if (compMove==='paper'){
          result='tie';
        }else if (compMove==='scissor'){
          result='you lose';
        }
      } 

      if(result==='you win'){
        score.wins++;
      }else if (result==='you lose'){
        score.losses++;
      }else if (result==='tie'){
        score.ties++;
      }

      localStorage.setItem('score',JSON.stringify(score)); //setting data into local storage...

      updateScoreElement();

      document.querySelector('.js-result').
        innerHTML = result;

      document.querySelector('.js-moves').
        innerHTML =  ` You
  <img src="${playerMove}-emoji.png" class="icon">
  <img src="${compMove}-emoji.png" class="icon">
  Computer`;

//         alert (`you picked ${playerMove}. computer picked ${compMove}. ${result}
// wins: ${score.wins}, losses : ${score.losses},ties:${score.ties}`);

}

function updateScoreElement(){
      document.querySelector('.js-score')
        .innerHTML = `wins: ${score.wins}, losses : ${score.losses},ties:${score.ties}`;
    }
