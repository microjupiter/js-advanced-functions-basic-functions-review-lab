// Your code here
function saturdayFun(activity="roller-skate") {
  return (`This Saturday, I want to ${activity}!`)
}
saturdayFun()

function mondayWork(work="go to the office"){
  return (`This Monday, I will ${work}.`)
}
mondayWork()

function wrapAdjective(flair="*"){
  return function(adjective="special") {
    return `You are ${flair}${adjective}${flair}!`
  } 
}

const Calculator = {
  add: function(a,b) {
    return a + b;
  },
  subtract: function(a,b) {
    return a - b
  },
  multiply: function(a,b) {
    return a * b
  },
  divide: function(a,b) {
    return a / b
  }
}