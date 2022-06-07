// code your solution here
function saturdayFun(game = "roller-skate"){
    return `This Saturday, I want to ${game}!`;
}

function mondayWork(work = "go to the office"){
    return `This Monday, I will ${work}.`;
}

function wrapAdjective(gift){
    return function(special = "special"){

        return `You are ${gift}${special}${gift}!`
    }
}