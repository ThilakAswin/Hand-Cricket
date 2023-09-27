let userScoreDisplay = document.getElementById("user-score-display")
let cpuScoreDisplay = document.getElementById("cpu-score-display")

let userScore = document.getElementById("user-score").innerHTML
let cpuScore = document.getElementById("cpu-score").innerHTML

let result = document.getElementById("result")

let buttons = document.querySelectorAll('.c-button')

let cpuChoice
let userChoice
let target;

let isOut = false


function batting(){


    buttons.forEach(btn => btn.addEventListener('click',()=>
{


    if (!isOut) {
        userChoice = btn.value
        userScoreDisplay.innerHTML =  userChoice
        userScore = parseInt(userScore) + parseInt(btn.value)
        document.querySelector("#user-score").innerHTML = userScore
        generateCpuScore()
    } else {
        target = userScore;
        document.querySelector('#target').innerHTML = target;
        userChoice = btn.value;
        userScoreDisplay.innerHTML =  userChoice;
        generateCpuScore();
        cpuScore = parseInt(cpuScore) + parseInt(cpuChoice);
        document.querySelector("#cpu-score").innerHTML = cpuScore
            if(+userChoice == cpuChoice)
            {
                if(cpuScore < target){
                        result.innerHTML = "You Won"
                        document.getElementById('play-again-button').style.display = 'block'
                        buttons.removeEventListener()
                        return
                }

            }    
        else if(cpuScore > target)
        {
            result.innerHTML  = "Cpu Won"
            document.getElementById('play-again-button').style.display = 'block'
            
        }

    }

if(userChoice == cpuChoice && !isOut)
{
    isOut = true
    result.innerHTML = "User OUT, CPU Batting"
}

}))
}


function generateCpuScore()
{
    cpuChoice = Math.floor(Math.random() * 10)+ 1
    cpuScoreDisplay.innerHTML = cpuChoice
}




