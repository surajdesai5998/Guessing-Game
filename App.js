const max=prompt("Enter the max number.");
console.log(max);

let random= Math.floor(Math.random()*max)+1;
//alert(`Number: ${random}`);

let guess=prompt("Guess the number:");
let score=100;
while(true){
    if(guess=='quit'){
        alert('user quit.');
        break;
     }
    else{
        if(guess==random){
            alert(` Your are right!! Congrats!! random number was ${random}.`);
            alert(`Score:${score}`);
            break;
        }
         else if(guess<random){
            guess=prompt("hint: your guess was too small. please try again.");
            score-=10;
         }
         else{
            guess=prompt('hint: your number was to large.please try again.');
            score-=10;
         }
    }
    
}
