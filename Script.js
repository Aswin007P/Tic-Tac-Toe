let player = 'O'
let gameOver= false;
let clicked=0;


function markPlayer(box_id) {
    clicked++;
    if (gameOver) return; 
    let box = document.getElementById(box_id);
    if (box.innerText.trim() !== '') {
        return; 
    }   
    if (player === 'O') {
        box.style.color = 'darkgreen';
        box.innerHTML = player;
    } else {
        box.style.color = 'darkRed';
        box.innerHTML = player;
    } 
    checkWinner();
    if (!gameOver) {
        player = (player === 'O') ? 'X' : 'O';
    }
}


function restartGame(){
    window.location="index.html"
}


function checkWinner(){
    let c1 = document.getElementById('box1').innerHTML
    let c2 = document.getElementById('box2').innerHTML
    let c3 = document.getElementById('box3').innerHTML
    let c4 = document.getElementById('box4').innerHTML
    let c5 = document.getElementById('box5').innerHTML
    let c6 = document.getElementById('box6').innerHTML
    let c7 = document.getElementById('box7').innerHTML
    let c8 = document.getElementById('box8').innerHTML
    let c9 = document.getElementById('box9').innerHTML

    if(c1==player && c2 == player && c3==player){
        document.getElementById('result').innerHTML="<span style='font-size: 97px;color: Goldenrod ;font-style:poppins;'> Congrats.. 🎉</span> <br><br>  <span style='font-size:100px'>"+ player+ " </span> is the winner"
        document.getElementById('box1').classList.add('win')
      document.getElementById('box2').classList.add('win')
      document.getElementById('box3').classList.add('win')
        gameOver=true;
        stopPointerCelebration();
        confetti({
        particleCount: 150,
        spread: 100,
        origin: { y: 0.6 },
    });
    
    }
    else if(c4==player && c5 == player && c6==player){
         document.getElementById('result').innerHTML="<span style='font-size: 97px;color: Goldenrod ;font-style:poppins;'> Congrats.. 🎉</span> <br><br>  <span style='font-size:100px'>"+ player+ " </span> is the winner"
         document.getElementById('box4').classList.add('win')
      document.getElementById('box5').classList.add('win')
      document.getElementById('box6').classList.add('win')
         gameOver=true;
         stopPointerCelebration();
        confetti({
        particleCount: 150,
        spread: 100,
        origin: { y: 0.6 },
    });
    
    }
    else if(c7==player && c8 == player && c9==player){
        document.getElementById('result').innerHTML="<span style='font-size: 97px;color: Goldenrod ;font-style:poppins;'> Congrats.. 🎉</span> <br><br>  <span style='font-size:100px'>"+ player+ " </span> is the winner"
        document.getElementById('box7').classList.add('win')
      document.getElementById('box8').classList.add('win')
      document.getElementById('box9').classList.add('win')
        gameOver=true;
        stopPointerCelebration();
        confetti({
        particleCount: 150,
        spread: 100,
        origin: { y: 0.6 },
    });
    
    }
    else if(c1==player && c4 == player && c7==player){
        document.getElementById('result').innerHTML="<span style='font-size: 97px;color: Goldenrod ;font-style:poppins;'> Congrats.. 🎉</span> <br><br>  <span style='font-size:100px'>"+ player+ " </span> is the winner"
        document.getElementById('box1').classList.add('win')
      document.getElementById('box4').classList.add('win')
      document.getElementById('box7').classList.add('win')
        gameOver=true;
        stopPointerCelebration();
        confetti({
        particleCount: 150,
        spread: 100,
        origin: { y: 0.6 },
    });
    
    }
    else if(c2==player && c5 == player && c8==player){
         document.getElementById('result').innerHTML="<span style='font-size: 97px;color: Goldenrod ;font-style:poppins;'> Congrats.. 🎉</span> <br><br>  <span style='font-size:100px'>"+ player+ " </span> is the winner"
         document.getElementById('box2').classList.add('win')
      document.getElementById('box5').classList.add('win')
      document.getElementById('box8').classList.add('win')
         gameOver=true;
         stopPointerCelebration();
        confetti({
        particleCount: 150,
        spread: 100,
        origin: { y: 0.6 },
    });
    
    }
    else if(c3==player && c6 == player && c9==player){
         document.getElementById('result').innerHTML="<span style='font-size: 97px;color: Goldenrod ;font-style:poppins;'> Congrats.. 🎉</span> <br><br>  <span style='font-size:100px'>"+ player+ " </span> is the winner"
         document.getElementById('box3').classList.add('win')
      document.getElementById('box6').classList.add('win')
      document.getElementById('box9').classList.add('win')
         gameOver=true;
         stopPointerCelebration();
        confetti({
        particleCount: 150,
        spread: 100,
        origin: { y: 0.6 },
    });
    
    }
    else if(c1==player && c5 == player && c9==player){
         document.getElementById('result').innerHTML="<span style='font-size: 97px;color: Goldenrod ;font-style:poppins;'> Congrats.. 🎉</span> <br><br>  <span style='font-size:100px'>"+ player+ " </span> is the winner"
         document.getElementById('box1').classList.add('win')
      document.getElementById('box5').classList.add('win')
      document.getElementById('box9').classList.add('win')
         gameOver=true;
         stopPointerCelebration();
        confetti({
        particleCount: 150,
        spread: 100,
        origin: { y: 0.6 },
    });
    
    }
    else if(c3==player && c5 == player && c7==player){
         document.getElementById('result').innerHTML="<span style='font-size: 97px;color: Goldenrod ;font-style:poppins;'> Congrats.. 🎉</span> <br><br>  <span style='font-size:100px'>"+ player+ " </span> is the winner"
         document.getElementById('box3').classList.add('win')
      document.getElementById('box5').classList.add('win')
      document.getElementById('box7').classList.add('win')
         gameOver=true;
         stopPointerCelebration();
        confetti({
        particleCount: 150,
        spread: 100,
        origin: { y: 0.6 },
    });
    
    }
    else if(clicked===9 && gameOver==false) {
        document.getElementById('result').innerHTML =
            "<span style='font-size:200px;padding-top:0px'>😵‍💫</span><br><span style='font-size: 98px; color: orange; font-weight: bold;font-style:italic; text-shadow: 5px 5px 6px black'>Match Drawn!</span>";
         gameOver=true;
         stopPointerCelebration();
    }
}



function stopPointerCelebration() {
      document.getElementById('pointing').style.display = 'none'; 
  }