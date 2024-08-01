const img = document.querySelector(".ball-img");
const input = document.querySelector(".input");
const answer = document.querySelector(".answer");
const error = document.querySelector(".error");




img.addEventListener('click', el => {
    el.preventDefault();
    img.classList.add('shake-animation')
const animationDuration = 1000;

setTimeout(() => {
    img.classList.remove('shake-animation');

    if (checkInput()) { 
        genAnswer();
    }
},animationDuration)

    
})

const checkInput = () => {
    const value = input.value.trim();
        if(value == ''){
            error.textContent='Zadaj pytanie, a otrzymasz odpowiedź !!!';
            answer.textContent='';
        } else if (!value.endsWith('?')){
            error.textContent='Zdanie musi kończyć się pytajnikiem !!!';
            answer.textContent='';
        } else{ 
            error.textContent='';
            genAnswer();
        }
}

const genAnswer = () => {

    const answerTab = [
        "Tak!",
        "Nie!",
        "Nie wiem",
        " Nie wiem, ale się domyślam",
        "Nie chcesz znać odpowiedzi na to pytanie",
        "Następnie pytanie :)",
      ];

      const randIdx = Math.floor(Math.random() * answerTab.length);
     const randAnswer = answerTab[randIdx];

     answer.innerHTML = `<span>Odpowiedź:</span> ${randAnswer}`;
}