const Restart = document.querySelector("#restart");
const endGame = document.querySelector('.gameOver');
const livesNumber = document.querySelector(".livesRemaining");
const lostOrWonParagraph = document.getElementById("lostOrWon");
const STARTGAME = document.getElementById("toStart");
const revealsLuckyNumber = document.querySelector("#showLuckyNumber");
const numHint = document.getElementById("range");
const playButtons = document.querySelectorAll('.btn');
const boxNumber = document.getElementById("numberBox");
const pInstruction0 = document.getElementById("pInstruc0");
const pInstruction1 = document.getElementById("pInstruc1");
const pInstruction2 = document.getElementById("pInstruc2");
const pInstruction3 = document.getElementById("pInstruc3");
const paragraph = document.getElementById("p");

document.getElementById("title").style.height = "20vh"
endGame.style.display = "none";
livesNumber.style.display = "none";
Restart.style.display = "none";
revealsLuckyNumber.style.display = "none";
boxNumber.style.display = "none";
paragraph.style.display = "none";

Restart.addEventListener("click",  restartTheGame); STARTGAME.addEventListener("click", showBox);

function restartTheGame() {
    window.location.reload();
}

// styling number box
boxNumber.style.marginTop = "40vh"

function showBox() {
    shuffleNumbers();
    endGame.innerText = "LIVES REMAINING:"
    endGame.style.display = ""
    livesNumber.style.display = ""
    livesNumber.innerText = 7
    Restart.style.display = "inline-block"
    Restart.value = "RESTART"
    
    document.getElementById("title").style.backgroundColor = "#093738"
    document.getElementById("title").style.height = "32vh"
    document.getElementById("numberBox").style.display = "grid";
    STARTGAME.style.display = "none";     document.getElementById("howtoplay").style.display = "none";
    document.querySelector(".p-instructions").style.display = "none";
    revealsLuckyNumber.style.display = "block"
    
    paragraph.style.display = "block"
}


function shuffleNumbers() {
    let btnLength = document.getElementsByClassName("btn").length;
    let nameOfButton = new Array();
    let indexOfButton = new Array();
    let combBtn = new Array();
    let nonPerm;
    let shuffle;
    
    for (let i = 1; i<=btnLength;i++) {
        nameOfButton[i] = document.getElementById("btn" + i).value;
        indexOfButton[i]=i;
    }

    for (n in indexOfButton) {
        shuffle = Math.floor((Math.random() * btnLength) + 1);
        nonPerm = indexOfButton[n];
        indexOfButton[n] = indexOfButton[shuffle];
        indexOfButton[shuffle] = nonPerm;
    }

    for (let i = 1; i<=btnLength;i++) {
        combBtn[i] =  nameOfButton[indexOfButton[i]];
    }

    for (let i=1; i<=btnLength;i++) {
        document.getElementById("btn" + i).value = combBtn[i];
    }

    let num_to_compare = random();


function notCorrect(pickedNumber) {
    pickedNumber.disabled = true;
    pickedNumber.style.backgroundColor= "#f96565"; pickedNumber.style.color= "#cd2121"; pickedNumber.style.cursor="not-allowed"; pickedNumber.style.transform="none"
    LR = parseInt(livesNumber.innerText) - 1;
    livesNumber.innerText = LR

    if (LR == 0) { endGame.innerText = "GAME OVER!";
    livesNumber.style.display = "none"
    revealsLuckyNumber.innerText = "THE LUCKY NUMBER IS: " + num_to_compare
    // revealsLuckyNumber.style.color = "white"
    lostOrWonParagraph.innerHTML = "OOPS!&nbsp; SORRY,&nbsp;&nbsp;YOU LOST!";
    numHint.style.display= "none"

    boxNumber.disabled = true;
    document.getElementById('btn1').disabled = true; document.getElementById('btn1').style.cursor= "not-allowed"; document.getElementById('btn1').style.backgroundColor= "#f96565"; document.getElementById('btn1').style.transform= "none";
    document.getElementById('btn2').disabled = true; document.getElementById('btn2').style.cursor= "not-allowed"; document.getElementById('btn2').style.backgroundColor= "#f96565"; document.getElementById('btn2').style.transform= "none";
    document.getElementById('btn3').disabled = true; document.getElementById('btn3').style.cursor= "not-allowed"; document.getElementById('btn3').style.backgroundColor= "#f96565"; document.getElementById('btn3').style.transform= "none";
    document.getElementById('btn4').disabled = true; document.getElementById('btn4').style.cursor= "not-allowed"; document.getElementById('btn4').style.backgroundColor= "#f96565"; document.getElementById('btn4').style.transform= "none";
    document.getElementById('btn5').disabled = true; document.getElementById('btn5').style.cursor= "not-allowed"; document.getElementById('btn5').style.backgroundColor= "#f96565"; document.getElementById('btn5').style.transform= "none";
    document.getElementById('btn6').disabled = true; document.getElementById('btn6').style.cursor= "not-allowed"; document.getElementById('btn6').style.backgroundColor= "#f96565"; document.getElementById('btn6').style.transform= "none";
    document.getElementById('btn7').disabled = true; document.getElementById('btn7').style.cursor= "not-allowed"; document.getElementById('btn7').style.backgroundColor= "#f96565"; document.getElementById('btn7').style.transform= "none";
    document.getElementById('btn8').disabled = true; document.getElementById('btn8').style.cursor= "not-allowed"; document.getElementById('btn8').style.backgroundColor= "#f96565"; document.getElementById('btn8').style.transform= "none";
    document.getElementById('btn9').disabled = true; document.getElementById('btn9').style.cursor= "not-allowed"; document.getElementById('btn9').style.backgroundColor= "#f96565"; document.getElementById('btn9').style.transform= "none";
    document.getElementById('btn10').disabled = true; document.getElementById('btn10').style.cursor= "not-allowed"; document.getElementById('btn10').style.backgroundColor= "#f96565"; document.getElementById('btn10').style.transform= "none";
    document.getElementById('btn11').disabled = true; document.getElementById('btn11').style.cursor= "not-allowed"; document.getElementById('btn11').style.backgroundColor= "#f96565"; document.getElementById('btn11').style.transform= "none";
    document.getElementById('btn12').disabled = true; document.getElementById('btn12').style.cursor= "not-allowed"; document.getElementById('btn12').style.backgroundColor= "#f96565"; document.getElementById('btn12').style.transform= "none";
    document.getElementById('btn13').disabled = true; document.getElementById('btn13').style.cursor= "not-allowed"; document.getElementById('btn13').style.backgroundColor= "#f96565"; document.getElementById('btn13').style.transform= "none";
    document.getElementById('btn14').disabled = true; document.getElementById('btn14').style.cursor= "not-allowed"; document.getElementById('btn14').style.backgroundColor= "#f96565"; document.getElementById('btn14').style.transform= "none";
    document.getElementById('btn15').disabled = true; document.getElementById('btn15').style.cursor= "not-allowed"; document.getElementById('btn15').style.backgroundColor= "#f96565"; document.getElementById('btn15').style.transform= "none";
    document.getElementById('btn16').disabled = true; document.getElementById('btn16').style.cursor= "not-allowed"; document.getElementById('btn16').style.backgroundColor= "#f96565"; document.getElementById('btn16').style.transform= "none";
    document.getElementById('btn17').disabled = true; document.getElementById('btn17').style.cursor= "not-allowed"; document.getElementById('btn17').style.backgroundColor= "#f96565"; document.getElementById('btn17').style.transform= "none";
    document.getElementById('btn18').disabled = true; document.getElementById('btn18').style.cursor= "not-allowed"; document.getElementById('btn18').style.backgroundColor= "#f96565"; document.getElementById('btn18').style.transform= "none";
    document.getElementById('btn19').disabled = true; document.getElementById('btn19').style.cursor= "not-allowed"; document.getElementById('btn19').style.backgroundColor= "#f96565"; document.getElementById('btn19').style.transform= "none";
    document.getElementById('btn20').disabled = true; document.getElementById('btn20').style.cursor= "not-allowed"; document.getElementById('btn20').style.backgroundColor= "#f96565"; document.getElementById('btn20').style.transform= "none";
    document.getElementById('btn21').disabled = true; document.getElementById('btn21').style.cursor= "not-allowed"; document.getElementById('btn21').style.backgroundColor= "#f96565"; document.getElementById('btn21').style.transform= "none";
    document.getElementById('btn22').disabled = true; document.getElementById('btn22').style.cursor= "not-allowed"; document.getElementById('btn22').style.backgroundColor= "#f96565"; document.getElementById('btn22').style.transform= "none";
    document.getElementById('btn23').disabled = true; document.getElementById('btn23').style.cursor= "not-allowed"; document.getElementById('btn23').style.backgroundColor= "#f96565"; document.getElementById('btn23').style.transform= "none";
    document.getElementById('btn24').disabled = true; document.getElementById('btn24').style.cursor= "not-allowed"; document.getElementById('btn24').style.backgroundColor= "#f96565"; document.getElementById('btn24').style.transform= "none";
    document.getElementById('btn25').disabled = true; document.getElementById('btn25').style.cursor= "not-allowed"; document.getElementById('btn25').style.backgroundColor= "#f96565"; document.getElementById('btn25').style.transform= "none";
    document.getElementById('btn26').disabled = true; document.getElementById('btn26').style.cursor= "not-allowed"; document.getElementById('btn26').style.backgroundColor= "#f96565"; document.getElementById('btn26').style.transform= "none";
    document.getElementById('btn27').disabled = true; document.getElementById('btn27').style.cursor= "not-allowed"; document.getElementById('btn27').style.backgroundColor= "#f96565"; document.getElementById('btn27').style.transform= "none";
    document.getElementById('btn28').disabled = true; document.getElementById('btn28').style.cursor= "not-allowed"; document.getElementById('btn28').style.backgroundColor= "#f96565"; document.getElementById('btn28').style.transform= "none";
    document.getElementById('btn29').disabled = true; document.getElementById('btn29').style.cursor= "not-allowed"; document.getElementById('btn29').style.backgroundColor= "#f96565"; document.getElementById('btn29').style.transform= "none";
    document.getElementById('btn30').disabled = true; document.getElementById('btn30').style.cursor= "not-allowed"; document.getElementById('btn30').style.backgroundColor= "#f96565"; document.getElementById('btn30').style.transform= "none";
    document.getElementById('btn31').disabled = true; document.getElementById('btn31').style.cursor= "not-allowed"; document.getElementById('btn31').style.backgroundColor= "#f96565"; document.getElementById('btn31').style.transform= "none";
    document.getElementById('btn32').disabled = true; document.getElementById('btn32').style.cursor= "not-allowed"; document.getElementById('btn32').style.backgroundColor= "#f96565"; document.getElementById('btn32').style.transform= "none";
    document.getElementById('btn23').disabled = true; document.getElementById('btn33').style.cursor= "not-allowed"; document.getElementById('btn33').style.backgroundColor= "#f96565"; document.getElementById('btn33').style.transform= "none";
    document.getElementById('btn34').disabled = true; document.getElementById('btn34').style.cursor= "not-allowed"; document.getElementById('btn34').style.backgroundColor= "#f96565"; document.getElementById('btn34').style.transform= "none";
    document.getElementById('btn35').disabled = true; document.getElementById('btn35').style.cursor= "not-allowed"; document.getElementById('btn35').style.backgroundColor= "#f96565"; document.getElementById('btn35').style.transform= "none";
    document.getElementById('btn36').disabled = true; document.getElementById('btn36').style.cursor= "not-allowed"; document.getElementById('btn36').style.backgroundColor= "#f96565"; document.getElementById('btn36').style.transform= "none";
    document.getElementById('btn37').disabled = true; document.getElementById('btn37').style.cursor= "not-allowed"; document.getElementById('btn37').style.backgroundColor= "#f96565"; document.getElementById('btn37').style.transform= "none";
    document.getElementById('btn38').disabled = true; document.getElementById('btn38').style.cursor= "not-allowed"; document.getElementById('btn38').style.backgroundColor= "#f96565"; document.getElementById('btn38').style.transform= "none";
    document.getElementById('btn39').disabled = true; document.getElementById('btn39').style.cursor= "not-allowed"; document.getElementById('btn39').style.backgroundColor= "#f96565"; document.getElementById('btn39').style.transform= "none";
    document.getElementById('btn40').disabled = true; document.getElementById('btn40').style.cursor= "not-allowed"; document.getElementById('btn40').style.backgroundColor= "#f96565"; document.getElementById('btn40').style.transform= "none";
    document.getElementById('btn41').disabled = true; document.getElementById('btn41').style.cursor= "not-allowed"; document.getElementById('btn41').style.backgroundColor= "#f96565"; document.getElementById('btn41').style.transform= "none";
    document.getElementById('btn42').disabled = true; document.getElementById('btn42').style.cursor= "not-allowed"; document.getElementById('btn42').style.backgroundColor= "#f96565"; document.getElementById('btn42').style.transform= "none";
    document.getElementById('btn43').disabled = true; document.getElementById('btn43').style.cursor= "not-allowed"; document.getElementById('btn43').style.backgroundColor= "#f96565"; document.getElementById('btn43').style.transform= "none";
    document.getElementById('btn44').disabled = true; document.getElementById('btn44').style.cursor= "not-allowed"; document.getElementById('btn44').style.backgroundColor= "#f96565"; document.getElementById('btn44').style.transform= "none";
    document.getElementById('btn45').disabled = true; document.getElementById('btn45').style.cursor= "not-allowed"; document.getElementById('btn45').style.backgroundColor= "#f96565"; document.getElementById('btn45').style.transform= "none";
    document.getElementById('btn46').disabled = true; document.getElementById('btn46').style.cursor= "not-allowed"; document.getElementById('btn46').style.backgroundColor= "#f96565"; document.getElementById('btn46').style.transform= "none";
    document.getElementById('btn47').disabled = true; document.getElementById('btn47').style.cursor= "not-allowed"; document.getElementById('btn47').style.backgroundColor= "#f96565"; document.getElementById('btn47').style.transform= "none";
    document.getElementById('btn48').disabled = true; document.getElementById('btn48').style.cursor= "not-allowed"; document.getElementById('btn48').style.backgroundColor= "#f96565"; document.getElementById('btn48').style.transform= "none";
    document.getElementById('btn49').disabled = true; document.getElementById('btn49').style.cursor= "not-allowed"; document.getElementById('btn49').style.backgroundColor= "#f96565"; document.getElementById('btn49').style.transform= "none";
    document.getElementById('btn50').disabled = true; document.getElementById('btn50').style.cursor= "not-allowed"; document.getElementById('btn50').style.backgroundColor= "#f96565"; document.getElementById('btn50').style.transform= "none";
    document.getElementById('btn51').disabled = true; document.getElementById('btn51').style.cursor= "not-allowed"; document.getElementById('btn51').style.backgroundColor= "#f96565"; document.getElementById('btn51').style.transform= "none";
    document.getElementById('btn52').disabled = true; document.getElementById('btn52').style.cursor= "not-allowed"; document.getElementById('btn52').style.backgroundColor= "#f96565"; document.getElementById('btn52').style.transform= "none";
    document.getElementById('btn53').disabled = true; document.getElementById('btn53').style.cursor= "not-allowed"; document.getElementById('btn53').style.backgroundColor= "#f96565"; document.getElementById('btn53').style.transform= "none";
    document.getElementById('btn54').disabled = true; document.getElementById('btn54').style.cursor= "not-allowed"; document.getElementById('btn54').style.backgroundColor= "#f96565"; document.getElementById('btn54').style.transform= "none";
    document.getElementById('btn55').disabled = true; document.getElementById('btn55').style.cursor= "not-allowed"; document.getElementById('btn55').style.backgroundColor= "#f96565"; document.getElementById('btn55').style.transform= "none";
    document.getElementById('btn56').disabled = true; document.getElementById('btn56').style.cursor= "not-allowed"; document.getElementById('btn56').style.backgroundColor= "#f96565"; document.getElementById('btn56').style.transform= "none";
    document.getElementById('btn57').disabled = true; document.getElementById('btn57').style.cursor= "not-allowed"; document.getElementById('btn57').style.backgroundColor= "#f96565"; document.getElementById('btn57').style.transform= "none";
    document.getElementById('btn58').disabled = true; document.getElementById('btn58').style.cursor= "not-allowed"; document.getElementById('btn58').style.backgroundColor= "#f96565"; document.getElementById('btn58').style.transform= "none";
    document.getElementById('btn59').disabled = true; document.getElementById('btn59').style.cursor= "not-allowed"; document.getElementById('btn59').style.backgroundColor= "#f96565"; document.getElementById('btn59').style.transform= "none";
    document.getElementById('btn60').disabled = true; document.getElementById('btn60').style.cursor= "not-allowed"; document.getElementById('btn60').style.backgroundColor= "#f96565"; document.getElementById('btn60').style.transform= "none";
    document.getElementById('btn61').disabled = true; document.getElementById('btn61').style.cursor= "not-allowed"; document.getElementById('btn61').style.backgroundColor= "#f96565"; document.getElementById('btn61').style.transform= "none";
    document.getElementById('btn62').disabled = true; document.getElementById('btn62').style.cursor= "not-allowed"; document.getElementById('btn62').style.backgroundColor= "#f96565"; document.getElementById('btn62').style.transform= "none";
    document.getElementById('btn63').disabled = true; document.getElementById('btn63').style.cursor= "not-allowed"; document.getElementById('btn63').style.backgroundColor= "#f96565"; document.getElementById('btn63').style.transform= "none";
    document.getElementById('btn64').disabled = true; document.getElementById('btn64').style.cursor= "not-allowed"; document.getElementById('btn64').style.backgroundColor= "#f96565"; document.getElementById('btn64').style.transform= "none";
    document.getElementById('btn65').disabled = true; document.getElementById('btn65').style.cursor= "not-allowed"; document.getElementById('btn65').style.backgroundColor= "#f96565"; document.getElementById('btn65').style.transform= "none";
    document.getElementById('btn66').disabled = true; document.getElementById('btn66').style.cursor= "not-allowed"; document.getElementById('btn66').style.backgroundColor= "#f96565"; document.getElementById('btn66').style.transform= "none";
    document.getElementById('btn67').disabled = true; document.getElementById('btn67').style.cursor= "not-allowed"; document.getElementById('btn67').style.backgroundColor= "#f96565"; document.getElementById('btn67').style.transform= "none";
    document.getElementById('btn68').disabled = true; document.getElementById('btn68').style.cursor= "not-allowed"; document.getElementById('btn68').style.backgroundColor= "#f96565"; document.getElementById('btn68').style.transform= "none";
    document.getElementById('btn69').disabled = true; document.getElementById('btn69').style.cursor= "not-allowed"; document.getElementById('btn69').style.backgroundColor= "#f96565"; document.getElementById('btn69').style.transform= "none";
    document.getElementById('btn70').disabled = true; document.getElementById('btn70').style.cursor= "not-allowed"; document.getElementById('btn70').style.backgroundColor= "#f96565"; document.getElementById('btn70').style.transform= "none";
    document.getElementById('btn71').disabled = true; document.getElementById('btn71').style.cursor= "not-allowed"; document.getElementById('btn71').style.backgroundColor= "#f96565"; document.getElementById('btn71').style.transform= "none";
    document.getElementById('btn72').disabled = true; document.getElementById('btn72').style.cursor= "not-allowed"; document.getElementById('btn72').style.backgroundColor= "#f96565"; document.getElementById('btn72').style.transform= "none";
    document.getElementById('btn73').disabled = true; document.getElementById('btn73').style.cursor= "not-allowed"; document.getElementById('btn73').style.backgroundColor= "#f96565"; document.getElementById('btn73').style.transform= "none";
    document.getElementById('btn74').disabled = true; document.getElementById('btn74').style.cursor= "not-allowed"; document.getElementById('btn74').style.backgroundColor= "#f96565"; document.getElementById('btn74').style.transform= "none";
    document.getElementById('btn75').disabled = true; document.getElementById('btn75').style.cursor= "not-allowed"; document.getElementById('btn75').style.backgroundColor= "#f96565"; document.getElementById('btn75').style.transform= "none";
    document.getElementById('btn76').disabled = true; document.getElementById('btn76').style.cursor= "not-allowed"; document.getElementById('btn76').style.backgroundColor= "#f96565"; document.getElementById('btn76').style.transform= "none";
    document.getElementById('btn77').disabled = true; document.getElementById('btn77').style.cursor= "not-allowed"; document.getElementById('btn77').style.backgroundColor= "#f96565"; document.getElementById('btn77').style.transform= "none";
    document.getElementById('btn78').disabled = true; document.getElementById('btn78').style.cursor= "not-allowed"; document.getElementById('btn78').style.backgroundColor= "#f96565"; document.getElementById('btn78').style.transform= "none";
    document.getElementById('btn79').disabled = true; document.getElementById('btn79').style.cursor= "not-allowed"; document.getElementById('btn79').style.backgroundColor= "#f96565"; document.getElementById('btn79').style.transform= "none";
    document.getElementById('btn80').disabled = true; document.getElementById('btn80').style.cursor= "not-allowed"; document.getElementById('btn80').style.backgroundColor= "#f96565"; document.getElementById('btn80').style.transform= "none";
    document.getElementById('btn81').disabled = true; document.getElementById('btn81').style.cursor= "not-allowed"; document.getElementById('btn81').style.backgroundColor= "#f96565"; document.getElementById('btn81').style.transform= "none";
    document.getElementById('btn82').disabled = true; document.getElementById('btn82').style.cursor= "not-allowed"; document.getElementById('btn82').style.backgroundColor= "#f96565"; document.getElementById('btn82').style.transform= "none";
    document.getElementById('btn83').disabled = true; document.getElementById('btn83').style.cursor= "not-allowed"; document.getElementById('btn83').style.backgroundColor= "#f96565"; document.getElementById('btn83').style.transform= "none";
    document.getElementById('btn84').disabled = true; document.getElementById('btn84').style.cursor= "not-allowed"; document.getElementById('btn84').style.backgroundColor= "#f96565"; document.getElementById('btn84').style.transform= "none";
    document.getElementById('btn85').disabled = true; document.getElementById('btn85').style.cursor= "not-allowed"; document.getElementById('btn85').style.backgroundColor= "#f96565"; document.getElementById('btn85').style.transform= "none";
    document.getElementById('btn86').disabled = true; document.getElementById('btn86').style.cursor= "not-allowed"; document.getElementById('btn86').style.backgroundColor= "#f96565"; document.getElementById('btn86').style.transform= "none";
    document.getElementById('btn87').disabled = true; document.getElementById('btn87').style.cursor= "not-allowed"; document.getElementById('btn87').style.backgroundColor= "#f96565"; document.getElementById('btn87').style.transform= "none";
    document.getElementById('btn88').disabled = true; document.getElementById('btn88').style.cursor= "not-allowed"; document.getElementById('btn88').style.backgroundColor= "#f96565"; document.getElementById('btn88').style.transform= "none";
    document.getElementById('btn89').disabled = true; document.getElementById('btn89').style.cursor= "not-allowed"; document.getElementById('btn89').style.backgroundColor= "#f96565"; document.getElementById('btn89').style.transform= "none";
    document.getElementById('btn90').disabled = true; document.getElementById('btn90').style.cursor= "not-allowed"; document.getElementById('btn90').style.backgroundColor= "#f96565"; document.getElementById('btn90').style.transform= "none";
    document.getElementById('btn91').disabled = true; document.getElementById('btn91').style.cursor= "not-allowed"; document.getElementById('btn91').style.backgroundColor= "#f96565"; document.getElementById('btn91').style.transform= "none";
    document.getElementById('btn92').disabled = true; document.getElementById('btn92').style.cursor= "not-allowed"; document.getElementById('btn92').style.backgroundColor= "#f96565"; document.getElementById('btn92').style.transform= "none";
    document.getElementById('btn93').disabled = true; document.getElementById('btn93').style.cursor= "not-allowed"; document.getElementById('btn93').style.backgroundColor= "#f96565"; document.getElementById('btn93').style.transform= "none";
    document.getElementById('btn94').disabled = true; document.getElementById('btn94').style.cursor= "not-allowed"; document.getElementById('btn94').style.backgroundColor= "#f96565"; document.getElementById('btn94').style.transform= "none";
    document.getElementById('btn95').disabled = true; document.getElementById('btn95').style.cursor= "not-allowed"; document.getElementById('btn95').style.backgroundColor= "#f96565"; document.getElementById('btn95').style.transform= "none";
    document.getElementById('btn96').disabled = true; document.getElementById('btn96').style.cursor= "not-allowed"; document.getElementById('btn96').style.backgroundColor= "#f96565"; document.getElementById('btn96').style.transform= "none";
    document.getElementById('btn97').disabled = true; document.getElementById('btn97').style.cursor= "not-allowed"; document.getElementById('btn97').style.backgroundColor= "#f96565"; document.getElementById('btn97').style.transform= "none";
    document.getElementById('btn98').disabled = true; document.getElementById('btn98').style.cursor= "not-allowed"; document.getElementById('btn98').style.backgroundColor= "#f96565"; document.getElementById('btn98').style.transform= "none";
    document.getElementById('btn99').disabled = true; document.getElementById('btn99').style.cursor= "not-allowed"; document.getElementById('btn99').style.backgroundColor= "#f96565"; document.getElementById('btn99').style.transform= "none";
    document.getElementById('btn100').disabled = true; document.getElementById('btn100').style.cursor= "not-allowed"; document.getElementById('btn100').style.backgroundColor= "#f96565"; document.getElementById('btn100').style.transform= "none";
    
    }
}

function random() {
    endGame.innerText = "LIVES"
    livesNumber.innerText = 7
    let randomNum = Math.random() * btnLength;
    let luckyNumber = Math.ceil(randomNum);
    return luckyNumber;
}

    playButtons.forEach((item) => {
        item.onclick = () => {
            let clickedButton = item
             if (item.value != num_to_compare.toString()) {
                notCorrect(clickedButton);
            } 
            else {
                document.getElementById('btn1').disabled = true; document.getElementById('btn1').style.cursor= "not-allowed"; document.getElementById('btn1').style.backgroundColor= "#080c28"; document.getElementById("btn1").style.color = "#f96565"; document.getElementById('btn1').style.transform= "none";
                document.getElementById('btn2').disabled = true; document.getElementById('btn2').style.cursor= "not-allowed"; document.getElementById('btn2').style.backgroundColor= "#080c28"; document.getElementById("btn2").style.color = "#f96565"; document.getElementById('btn2').style.transform= "none";
                document.getElementById('btn3').disabled = true; document.getElementById('btn3').style.cursor= "not-allowed"; document.getElementById('btn3').style.backgroundColor= "#080c28"; document.getElementById("btn3").style.color = "#f96565"; document.getElementById('btn3').style.transform= "none";
                document.getElementById('btn4').disabled = true; document.getElementById('btn4').style.cursor= "not-allowed"; document.getElementById('btn4').style.backgroundColor= "#080c28"; document.getElementById("btn4").style.color = "#f96565"; document.getElementById('btn4').style.transform= "none";
                document.getElementById('btn5').disabled = true; document.getElementById('btn5').style.cursor= "not-allowed"; document.getElementById('btn5').style.backgroundColor= "#080c28"; document.getElementById("btn5").style.color = "#f96565"; document.getElementById('btn5').style.transform= "none";
                document.getElementById('btn6').disabled = true; document.getElementById('btn6').style.cursor= "not-allowed"; document.getElementById('btn6').style.backgroundColor= "#080c28"; document.getElementById("btn6").style.color = "#f96565"; document.getElementById('btn6').style.transform= "none";
                document.getElementById('btn7').disabled = true; document.getElementById('btn7').style.cursor= "not-allowed"; document.getElementById('btn7').style.backgroundColor= "#080c28"; document.getElementById("btn7").style.color = "#f96565"; document.getElementById('btn7').style.transform= "none";
                document.getElementById('btn8').disabled = true; document.getElementById('btn8').style.cursor= "not-allowed"; document.getElementById('btn8').style.backgroundColor= "#080c28"; document.getElementById("btn8").style.color = "#f96565"; document.getElementById('btn8').style.transform= "none";
                document.getElementById('btn9').disabled = true; document.getElementById('btn9').style.cursor= "not-allowed"; document.getElementById('btn9').style.backgroundColor= "#080c28"; document.getElementById("btn9").style.color = "#f96565"; document.getElementById('btn9').style.transform= "none";
                document.getElementById('btn10').disabled = true; document.getElementById('btn10').style.cursor= "not-allowed"; document.getElementById('btn10').style.backgroundColor= "#080c28"; document.getElementById("btn10").style.color = "#f96565"; document.getElementById('btn10').style.transform= "none";
                document.getElementById('btn11').disabled = true; document.getElementById('btn11').style.cursor= "not-allowed"; document.getElementById('btn11').style.backgroundColor= "#080c28"; document.getElementById("btn11").style.color = "#f96565"; document.getElementById('btn11').style.transform= "none";
                document.getElementById('btn12').disabled = true; document.getElementById('btn12').style.cursor= "not-allowed"; document.getElementById('btn12').style.backgroundColor= "#080c28"; document.getElementById("btn12").style.color = "#f96565"; document.getElementById('btn12').style.transform= "none";
                document.getElementById('btn13').disabled = true; document.getElementById('btn13').style.cursor= "not-allowed"; document.getElementById('btn13').style.backgroundColor= "#080c28"; document.getElementById("btn13").style.color = "#f96565"; document.getElementById('btn13').style.transform= "none";
                document.getElementById('btn14').disabled = true; document.getElementById('btn14').style.cursor= "not-allowed"; document.getElementById('btn14').style.backgroundColor= "#080c28"; document.getElementById("btn14").style.color = "#f96565"; document.getElementById('btn14').style.transform= "none";
                document.getElementById('btn15').disabled = true; document.getElementById('btn15').style.cursor= "not-allowed"; document.getElementById('btn15').style.backgroundColor= "#080c28"; document.getElementById("btn15").style.color = "#f96565"; document.getElementById('btn15').style.transform= "none";
                document.getElementById('btn16').disabled = true; document.getElementById('btn16').style.cursor= "not-allowed"; document.getElementById('btn16').style.backgroundColor= "#080c28"; document.getElementById("btn16").style.color = "#f96565"; document.getElementById('btn16').style.transform= "none";
                document.getElementById('btn17').disabled = true; document.getElementById('btn17').style.cursor= "not-allowed"; document.getElementById('btn17').style.backgroundColor= "#080c28"; document.getElementById("btn17").style.color = "#f96565"; document.getElementById('btn17').style.transform= "none";
                document.getElementById('btn18').disabled = true; document.getElementById('btn18').style.cursor= "not-allowed"; document.getElementById('btn18').style.backgroundColor= "#080c28"; document.getElementById("btn18").style.color = "#f96565"; document.getElementById('btn18').style.transform= "none";
                document.getElementById('btn19').disabled = true; document.getElementById('btn19').style.cursor= "not-allowed"; document.getElementById('btn19').style.backgroundColor= "#080c28"; document.getElementById("btn19").style.color = "#f96565"; document.getElementById('btn19').style.transform= "none";
                document.getElementById('btn20').disabled = true; document.getElementById('btn20').style.cursor= "not-allowed"; document.getElementById('btn20').style.backgroundColor= "#080c28"; document.getElementById("btn20").style.color = "#f96565"; document.getElementById('btn20').style.transform= "none";
                document.getElementById('btn21').disabled = true; document.getElementById('btn21').style.cursor= "not-allowed"; document.getElementById('btn21').style.backgroundColor= "#080c28"; document.getElementById("btn21").style.color = "#f96565"; document.getElementById('btn21').style.transform= "none";
                document.getElementById('btn22').disabled = true; document.getElementById('btn22').style.cursor= "not-allowed"; document.getElementById('btn22').style.backgroundColor= "#080c28"; document.getElementById("btn22").style.color = "#f96565"; document.getElementById('btn22').style.transform= "none";
                document.getElementById('btn23').disabled = true; document.getElementById('btn23').style.cursor= "not-allowed"; document.getElementById('btn23').style.backgroundColor= "#080c28"; document.getElementById("btn23").style.color = "#f96565"; document.getElementById('btn23').style.transform= "none";
                document.getElementById('btn24').disabled = true; document.getElementById('btn24').style.cursor= "not-allowed"; document.getElementById('btn24').style.backgroundColor= "#080c28"; document.getElementById("btn24").style.color = "#f96565"; document.getElementById('btn24').style.transform= "none";
                document.getElementById('btn25').disabled = true; document.getElementById('btn25').style.cursor= "not-allowed"; document.getElementById('btn25').style.backgroundColor= "#080c28"; document.getElementById("btn25").style.color = "#f96565"; document.getElementById('btn25').style.transform= "none";
                document.getElementById('btn26').disabled = true; document.getElementById('btn26').style.cursor= "not-allowed"; document.getElementById('btn26').style.backgroundColor= "#080c28"; document.getElementById("btn26").style.color = "#f96565"; document.getElementById('btn26').style.transform= "none";
                document.getElementById('btn27').disabled = true; document.getElementById('btn27').style.cursor= "not-allowed"; document.getElementById('btn27').style.backgroundColor= "#080c28"; document.getElementById("btn27").style.color = "#f96565"; document.getElementById('btn27').style.transform= "none";
                document.getElementById('btn28').disabled = true; document.getElementById('btn28').style.cursor= "not-allowed"; document.getElementById('btn28').style.backgroundColor= "#080c28"; document.getElementById("btn28").style.color = "#f96565"; document.getElementById('btn28').style.transform= "none";
                document.getElementById('btn29').disabled = true; document.getElementById('btn29').style.cursor= "not-allowed"; document.getElementById('btn29').style.backgroundColor= "#080c28"; document.getElementById("btn29").style.color = "#f96565"; document.getElementById('btn29').style.transform= "none";
                document.getElementById('btn30').disabled = true; document.getElementById('btn30').style.cursor= "not-allowed"; document.getElementById('btn30').style.backgroundColor= "#080c28"; document.getElementById("btn30").style.color = "#f96565"; document.getElementById('btn30').style.transform= "none";
                document.getElementById('btn31').disabled = true; document.getElementById('btn31').style.cursor= "not-allowed"; document.getElementById('btn31').style.backgroundColor= "#080c28"; document.getElementById("btn31").style.color = "#f96565"; document.getElementById('btn31').style.transform= "none";
                document.getElementById('btn32').disabled = true; document.getElementById('btn32').style.cursor= "not-allowed"; document.getElementById('btn32').style.backgroundColor= "#080c28"; document.getElementById("btn32").style.color = "#f96565"; document.getElementById('btn32').style.transform= "none";
                document.getElementById('btn23').disabled = true; document.getElementById('btn33').style.cursor= "not-allowed"; document.getElementById('btn33').style.backgroundColor= "#080c28"; document.getElementById("btn33").style.color = "#f96565"; document.getElementById('btn33').style.transform= "none";
                document.getElementById('btn34').disabled = true; document.getElementById('btn34').style.cursor= "not-allowed"; document.getElementById('btn34').style.backgroundColor= "#080c28"; document.getElementById("btn34").style.color = "#f96565"; document.getElementById('btn34').style.transform= "none";
                document.getElementById('btn35').disabled = true; document.getElementById('btn35').style.cursor= "not-allowed"; document.getElementById('btn35').style.backgroundColor= "#080c28"; document.getElementById("btn35").style.color = "#f96565"; document.getElementById('btn35').style.transform= "none";
                document.getElementById('btn36').disabled = true; document.getElementById('btn36').style.cursor= "not-allowed"; document.getElementById('btn36').style.backgroundColor= "#080c28"; document.getElementById("btn36").style.color = "#f96565"; document.getElementById('btn36').style.transform= "none";
                document.getElementById('btn37').disabled = true; document.getElementById('btn37').style.cursor= "not-allowed"; document.getElementById('btn37').style.backgroundColor= "#080c28"; document.getElementById("btn37").style.color = "#f96565"; document.getElementById('btn37').style.transform= "none";
                document.getElementById('btn38').disabled = true; document.getElementById('btn38').style.cursor= "not-allowed"; document.getElementById('btn38').style.backgroundColor= "#080c28"; document.getElementById("btn38").style.color = "#f96565"; document.getElementById('btn38').style.transform= "none";
                document.getElementById('btn39').disabled = true; document.getElementById('btn39').style.cursor= "not-allowed"; document.getElementById('btn39').style.backgroundColor= "#080c28"; document.getElementById("btn39").style.color = "#f96565"; document.getElementById('btn39').style.transform= "none";
                document.getElementById('btn40').disabled = true; document.getElementById('btn40').style.cursor= "not-allowed"; document.getElementById('btn40').style.backgroundColor= "#080c28"; document.getElementById("btn40").style.color = "#f96565"; document.getElementById('btn40').style.transform= "none";
                document.getElementById('btn41').disabled = true; document.getElementById('btn41').style.cursor= "not-allowed"; document.getElementById('btn41').style.backgroundColor= "#080c28"; document.getElementById("btn41").style.color = "#f96565"; document.getElementById('btn41').style.transform= "none";
                document.getElementById('btn42').disabled = true; document.getElementById('btn42').style.cursor= "not-allowed"; document.getElementById('btn42').style.backgroundColor= "#080c28"; document.getElementById("btn42").style.color = "#f96565"; document.getElementById('btn42').style.transform= "none";
                document.getElementById('btn43').disabled = true; document.getElementById('btn43').style.cursor= "not-allowed"; document.getElementById('btn43').style.backgroundColor= "#080c28"; document.getElementById("btn43").style.color = "#f96565"; document.getElementById('btn43').style.transform= "none";
                document.getElementById('btn44').disabled = true; document.getElementById('btn44').style.cursor= "not-allowed"; document.getElementById('btn44').style.backgroundColor= "#080c28"; document.getElementById("btn44").style.color = "#f96565"; document.getElementById('btn44').style.transform= "none";
                document.getElementById('btn45').disabled = true; document.getElementById('btn45').style.cursor= "not-allowed"; document.getElementById('btn45').style.backgroundColor= "#080c28"; document.getElementById("btn45").style.color = "#f96565"; document.getElementById('btn45').style.transform= "none";
                document.getElementById('btn46').disabled = true; document.getElementById('btn46').style.cursor= "not-allowed"; document.getElementById('btn46').style.backgroundColor= "#080c28"; document.getElementById("btn46").style.color = "#f96565"; document.getElementById('btn46').style.transform= "none";
                document.getElementById('btn47').disabled = true; document.getElementById('btn47').style.cursor= "not-allowed"; document.getElementById('btn47').style.backgroundColor= "#080c28"; document.getElementById("btn47").style.color = "#f96565"; document.getElementById('btn47').style.transform= "none";
                document.getElementById('btn48').disabled = true; document.getElementById('btn48').style.cursor= "not-allowed"; document.getElementById('btn48').style.backgroundColor= "#080c28"; document.getElementById("btn48").style.color = "#f96565"; document.getElementById('btn48').style.transform= "none";
                document.getElementById('btn49').disabled = true; document.getElementById('btn49').style.cursor= "not-allowed"; document.getElementById('btn49').style.backgroundColor= "#080c28"; document.getElementById("btn49").style.color = "#f96565"; document.getElementById('btn49').style.transform= "none";
                document.getElementById('btn50').disabled = true; document.getElementById('btn50').style.cursor= "not-allowed"; document.getElementById('btn50').style.backgroundColor= "#080c28"; document.getElementById("btn50").style.color = "#f96565"; document.getElementById('btn50').style.transform= "none";
                document.getElementById('btn51').disabled = true; document.getElementById('btn51').style.cursor= "not-allowed"; document.getElementById('btn51').style.backgroundColor= "#080c28"; document.getElementById("btn51").style.color = "#f96565"; document.getElementById('btn51').style.transform= "none";
                document.getElementById('btn52').disabled = true; document.getElementById('btn52').style.cursor= "not-allowed"; document.getElementById('btn52').style.backgroundColor= "#080c28"; document.getElementById("btn52").style.color = "#f96565"; document.getElementById('btn52').style.transform= "none";
                document.getElementById('btn53').disabled = true; document.getElementById('btn53').style.cursor= "not-allowed"; document.getElementById('btn53').style.backgroundColor= "#080c28"; document.getElementById("btn53").style.color = "#f96565"; document.getElementById('btn53').style.transform= "none";
                document.getElementById('btn54').disabled = true; document.getElementById('btn54').style.cursor= "not-allowed"; document.getElementById('btn54').style.backgroundColor= "#080c28"; document.getElementById("btn54").style.color = "#f96565"; document.getElementById('btn54').style.transform= "none";
                document.getElementById('btn55').disabled = true; document.getElementById('btn55').style.cursor= "not-allowed"; document.getElementById('btn55').style.backgroundColor= "#080c28"; document.getElementById("btn55").style.color = "#f96565"; document.getElementById('btn55').style.transform= "none";
                document.getElementById('btn56').disabled = true; document.getElementById('btn56').style.cursor= "not-allowed"; document.getElementById('btn56').style.backgroundColor= "#080c28"; document.getElementById("btn56").style.color = "#f96565"; document.getElementById('btn56').style.transform= "none";
                document.getElementById('btn57').disabled = true; document.getElementById('btn57').style.cursor= "not-allowed"; document.getElementById('btn57').style.backgroundColor= "#080c28"; document.getElementById("btn57").style.color = "#f96565"; document.getElementById('btn57').style.transform= "none";
                document.getElementById('btn58').disabled = true; document.getElementById('btn58').style.cursor= "not-allowed"; document.getElementById('btn58').style.backgroundColor= "#080c28"; document.getElementById("btn58").style.color = "#f96565"; document.getElementById('btn58').style.transform= "none";
                document.getElementById('btn59').disabled = true; document.getElementById('btn59').style.cursor= "not-allowed"; document.getElementById('btn59').style.backgroundColor= "#080c28"; document.getElementById("btn59").style.color = "#f96565"; document.getElementById('btn59').style.transform= "none";
                document.getElementById('btn60').disabled = true; document.getElementById('btn60').style.cursor= "not-allowed"; document.getElementById('btn60').style.backgroundColor= "#080c28"; document.getElementById("btn60").style.color = "#f96565"; document.getElementById('btn60').style.transform= "none";
                document.getElementById('btn61').disabled = true; document.getElementById('btn61').style.cursor= "not-allowed"; document.getElementById('btn61').style.backgroundColor= "#080c28"; document.getElementById("btn61").style.color = "#f96565"; document.getElementById('btn61').style.transform= "none";
                document.getElementById('btn62').disabled = true; document.getElementById('btn62').style.cursor= "not-allowed"; document.getElementById('btn62').style.backgroundColor= "#080c28"; document.getElementById("btn62").style.color = "#f96565"; document.getElementById('btn62').style.transform= "none";
                document.getElementById('btn63').disabled = true; document.getElementById('btn63').style.cursor= "not-allowed"; document.getElementById('btn63').style.backgroundColor= "#080c28"; document.getElementById("btn63").style.color = "#f96565"; document.getElementById('btn63').style.transform= "none";
                document.getElementById('btn64').disabled = true; document.getElementById('btn64').style.cursor= "not-allowed"; document.getElementById('btn64').style.backgroundColor= "#080c28"; document.getElementById("btn64").style.color = "#f96565"; document.getElementById('btn64').style.transform= "none";
                document.getElementById('btn65').disabled = true; document.getElementById('btn65').style.cursor= "not-allowed"; document.getElementById('btn65').style.backgroundColor= "#080c28"; document.getElementById("btn65").style.color = "#f96565"; document.getElementById('btn65').style.transform= "none";
                document.getElementById('btn66').disabled = true; document.getElementById('btn66').style.cursor= "not-allowed"; document.getElementById('btn66').style.backgroundColor= "#080c28"; document.getElementById("btn66").style.color = "#f96565"; document.getElementById('btn66').style.transform= "none";
                document.getElementById('btn67').disabled = true; document.getElementById('btn67').style.cursor= "not-allowed"; document.getElementById('btn67').style.backgroundColor= "#080c28"; document.getElementById("btn67").style.color = "#f96565"; document.getElementById('btn67').style.transform= "none";
                document.getElementById('btn68').disabled = true; document.getElementById('btn68').style.cursor= "not-allowed"; document.getElementById('btn68').style.backgroundColor= "#080c28"; document.getElementById("btn68").style.color = "#f96565"; document.getElementById('btn68').style.transform= "none";
                document.getElementById('btn69').disabled = true; document.getElementById('btn69').style.cursor= "not-allowed"; document.getElementById('btn69').style.backgroundColor= "#080c28"; document.getElementById("btn69").style.color = "#f96565"; document.getElementById('btn69').style.transform= "none";
                document.getElementById('btn70').disabled = true; document.getElementById('btn70').style.cursor= "not-allowed"; document.getElementById('btn70').style.backgroundColor= "#080c28"; document.getElementById("btn70").style.color = "#f96565"; document.getElementById('btn70').style.transform= "none";
                document.getElementById('btn71').disabled = true; document.getElementById('btn71').style.cursor= "not-allowed"; document.getElementById('btn71').style.backgroundColor= "#080c28"; document.getElementById("btn71").style.color = "#f96565"; document.getElementById('btn71').style.transform= "none";
                document.getElementById('btn72').disabled = true; document.getElementById('btn72').style.cursor= "not-allowed"; document.getElementById('btn72').style.backgroundColor= "#080c28"; document.getElementById("btn72").style.color = "#f96565"; document.getElementById('btn72').style.transform= "none";
                document.getElementById('btn73').disabled = true; document.getElementById('btn73').style.cursor= "not-allowed"; document.getElementById('btn73').style.backgroundColor= "#080c28"; document.getElementById("btn73").style.color = "#f96565"; document.getElementById('btn73').style.transform= "none";
                document.getElementById('btn74').disabled = true; document.getElementById('btn74').style.cursor= "not-allowed"; document.getElementById('btn74').style.backgroundColor= "#080c28"; document.getElementById("btn74").style.color = "#f96565"; document.getElementById('btn74').style.transform= "none";
                document.getElementById('btn75').disabled = true; document.getElementById('btn75').style.cursor= "not-allowed"; document.getElementById('btn75').style.backgroundColor= "#080c28"; document.getElementById("btn75").style.color = "#f96565"; document.getElementById('btn75').style.transform= "none";
                document.getElementById('btn76').disabled = true; document.getElementById('btn76').style.cursor= "not-allowed"; document.getElementById('btn76').style.backgroundColor= "#080c28"; document.getElementById("btn76").style.color = "#f96565"; document.getElementById('btn76').style.transform= "none";
                document.getElementById('btn77').disabled = true; document.getElementById('btn77').style.cursor= "not-allowed"; document.getElementById('btn77').style.backgroundColor= "#080c28"; document.getElementById("btn77").style.color = "#f96565"; document.getElementById('btn77').style.transform= "none";
                document.getElementById('btn78').disabled = true; document.getElementById('btn78').style.cursor= "not-allowed"; document.getElementById('btn78').style.backgroundColor= "#080c28"; document.getElementById("btn78").style.color = "#f96565"; document.getElementById('btn78').style.transform= "none";
                document.getElementById('btn79').disabled = true; document.getElementById('btn79').style.cursor= "not-allowed"; document.getElementById('btn79').style.backgroundColor= "#080c28"; document.getElementById("btn79").style.color = "#f96565"; document.getElementById('btn79').style.transform= "none";
                document.getElementById('btn80').disabled = true; document.getElementById('btn80').style.cursor= "not-allowed"; document.getElementById('btn80').style.backgroundColor= "#080c28"; document.getElementById("btn80").style.color = "#f96565"; document.getElementById('btn80').style.transform= "none";
                document.getElementById('btn81').disabled = true; document.getElementById('btn81').style.cursor= "not-allowed"; document.getElementById('btn81').style.backgroundColor= "#080c28"; document.getElementById("btn81").style.color = "#f96565"; document.getElementById('btn81').style.transform= "none";
                document.getElementById('btn82').disabled = true; document.getElementById('btn82').style.cursor= "not-allowed"; document.getElementById('btn82').style.backgroundColor= "#080c28"; document.getElementById("btn82").style.color = "#f96565"; document.getElementById('btn82').style.transform= "none";
                document.getElementById('btn83').disabled = true; document.getElementById('btn83').style.cursor= "not-allowed"; document.getElementById('btn83').style.backgroundColor= "#080c28"; document.getElementById("btn83").style.color = "#f96565"; document.getElementById('btn83').style.transform= "none";
                document.getElementById('btn84').disabled = true; document.getElementById('btn84').style.cursor= "not-allowed"; document.getElementById('btn84').style.backgroundColor= "#080c28"; document.getElementById("btn84").style.color = "#f96565"; document.getElementById('btn84').style.transform= "none";
                document.getElementById('btn85').disabled = true; document.getElementById('btn85').style.cursor= "not-allowed"; document.getElementById('btn85').style.backgroundColor= "#080c28"; document.getElementById("btn85").style.color = "#f96565"; document.getElementById('btn85').style.transform= "none";
                document.getElementById('btn86').disabled = true; document.getElementById('btn86').style.cursor= "not-allowed"; document.getElementById('btn86').style.backgroundColor= "#080c28"; document.getElementById("btn86").style.color = "#f96565"; document.getElementById('btn86').style.transform= "none";
                document.getElementById('btn87').disabled = true; document.getElementById('btn87').style.cursor= "not-allowed"; document.getElementById('btn87').style.backgroundColor= "#080c28"; document.getElementById("btn87").style.color = "#f96565"; document.getElementById('btn87').style.transform= "none";
                document.getElementById('btn88').disabled = true; document.getElementById('btn88').style.cursor= "not-allowed"; document.getElementById('btn88').style.backgroundColor= "#080c28"; document.getElementById("btn88").style.color = "#f96565"; document.getElementById('btn88').style.transform= "none";
                document.getElementById('btn89').disabled = true; document.getElementById('btn89').style.cursor= "not-allowed"; document.getElementById('btn89').style.backgroundColor= "#080c28"; document.getElementById("btn89").style.color = "#f96565"; document.getElementById('btn89').style.transform= "none";
                document.getElementById('btn90').disabled = true; document.getElementById('btn90').style.cursor= "not-allowed"; document.getElementById('btn90').style.backgroundColor= "#080c28"; document.getElementById("btn90").style.color = "#f96565"; document.getElementById('btn90').style.transform= "none";
                document.getElementById('btn91').disabled = true; document.getElementById('btn91').style.cursor= "not-allowed"; document.getElementById('btn91').style.backgroundColor= "#080c28"; document.getElementById("btn91").style.color = "#f96565"; document.getElementById('btn91').style.transform= "none";
                document.getElementById('btn92').disabled = true; document.getElementById('btn92').style.cursor= "not-allowed"; document.getElementById('btn92').style.backgroundColor= "#080c28"; document.getElementById("btn92").style.color = "#f96565"; document.getElementById('btn92').style.transform= "none";
                document.getElementById('btn93').disabled = true; document.getElementById('btn93').style.cursor= "not-allowed"; document.getElementById('btn93').style.backgroundColor= "#080c28"; document.getElementById("btn93").style.color = "#f96565"; document.getElementById('btn93').style.transform= "none";
                document.getElementById('btn94').disabled = true; document.getElementById('btn94').style.cursor= "not-allowed"; document.getElementById('btn94').style.backgroundColor= "#080c28"; document.getElementById("btn94").style.color = "#f96565"; document.getElementById('btn94').style.transform= "none";
                document.getElementById('btn95').disabled = true; document.getElementById('btn95').style.cursor= "not-allowed"; document.getElementById('btn95').style.backgroundColor= "#080c28"; document.getElementById("btn95").style.color = "#f96565"; document.getElementById('btn95').style.transform= "none";
                document.getElementById('btn96').disabled = true; document.getElementById('btn96').style.cursor= "not-allowed"; document.getElementById('btn96').style.backgroundColor= "#080c28"; document.getElementById("btn96").style.color = "#f96565"; document.getElementById('btn96').style.transform= "none";
                document.getElementById('btn97').disabled = true; document.getElementById('btn97').style.cursor= "not-allowed"; document.getElementById('btn97').style.backgroundColor= "#080c28"; document.getElementById("btn97").style.color = "#f96565"; document.getElementById('btn97').style.transform= "none";
                document.getElementById('btn98').disabled = true; document.getElementById('btn98').style.cursor= "not-allowed"; document.getElementById('btn98').style.backgroundColor= "#080c28"; document.getElementById("btn98").style.color = "#f96565"; document.getElementById('btn98').style.transform= "none";
                document.getElementById('btn99').disabled = true; document.getElementById('btn99').style.cursor= "not-allowed"; document.getElementById('btn99').style.backgroundColor= "#080c28"; document.getElementById("btn99").style.color = "#f96565"; document.getElementById('btn99').style.transform= "none";
                document.getElementById('btn100').disabled = true; document.getElementById('btn100').style.cursor= "not-allowed"; document.getElementById('btn100').style.backgroundColor= "#080c28"; document.getElementById("btn100").style.color = "#f96565";  document.getElementById('btn100').style.transform= "none";
                numHint.style.display = "none"
                lostOrWonParagraph.innerHTML = "YAYY! &nbsp;&nbsp;&nbsp;YOU WON!";
                lostOrWonParagraph.style.backgroundColor = "#53b698"
                clickedButton.style.backgroundColor= "#1ce709";
                clickedButton.style.color= "#080c28";
            }

            //NUMBER PICKED "LESSER" THAN THE LUCKY NUMBER
            if( item.value < num_to_compare && Math.abs(item.value - num_to_compare) >= 80) {
                numHint.innerHTML = "AHH, VERY VERY LOW!"
            }
            else if (item.value < num_to_compare && Math.abs(item.value - num_to_compare) >= 50 && Math.abs(item.value - num_to_compare) < 80) {
                numHint.innerHTML = "LOW!"
            }
            else if (item.value < num_to_compare && Math.abs(item.value - num_to_compare) >= 20 && Math.abs(item.value - num_to_compare) < 50) {
                numHint.innerHTML = "MID-WAY LOW!"
            }
            else if (item.value < num_to_compare && Math.abs(item.value - num_to_compare) >= 10 && Math.abs(item.value - num_to_compare) < 20) {
                numHint.innerHTML = "FAIRLY LOW!"
            }
            else if (item.value < num_to_compare && Math.abs(item.value - num_to_compare) > 0 && Math.abs(item.value - num_to_compare) < 10) {
                numHint.innerHTML = "Number picked is Low, But You're almost there!"
            }

            //NUMBER PICKED "GREATER" THAN THE LUCK NUMBER
            else if(item.value > num_to_compare && Math.abs(item.value - num_to_compare) >= 80) {
                numHint.innerHTML = "OUCH, VERY HIGH!"
            }
            else if (item.value > num_to_compare && Math.abs(item.value - num_to_compare) >= 50 && Math.abs(item.value - num_to_compare) < 80) {
                numHint.innerHTML = "HIGH!"
            }
            else if (item.value > num_to_compare && Math.abs(item.value - num_to_compare) >= 20 && Math.abs(item.value - num_to_compare) < 50) {
                numHint.innerHTML = "MID-WAY HIGH!"
            }
            else if (item.value > num_to_compare && Math.abs(item.value - num_to_compare) >= 10 && Math.abs(item.value - num_to_compare) < 20) {
                numHint.innerHTML = "FAIRLY HIGH!"
            }
            else if (item.value > num_to_compare && Math.abs(item.value - num_to_compare) > 0 && Math.abs(item.value - num_to_compare) < 10) {
                numHint.innerHTML = "Number chosen is High, But You're almost there!"
            }



        }
    })

}
