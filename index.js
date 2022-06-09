function saturdayFun (activity = 'roller-skate') {
    if (saturdayFun){
        return `This Saturday, I want to ${activity}!`
    }
} 

function mondayWork(activity = 'go to the office') {
    if (mondayWork){
        return `This Monday, I will ${activity}.`
    }
}

function wrapAdjective(wrapper = '*') {
    return function innerFunction(des = 'special') { 
        return `You are ${wrapper}${des}${wrapper}!`
    } 
}

//function called wrapAdjective
//innerFunction parameter description "special"
//return You are a dedicated programmer

