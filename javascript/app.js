// function merge(first, second){
//     var a = first + ' love ' + second;
//     console.log(a);
// }

// merge('I', 'you')

// merge('I', 'coding')

// function merge(first, second){
//     var a = first + ' love ' + second;
//     return a;
// }

// var result1 = merge('I', 'you');
// var result2 = merge('I', 'coding');
// var result3 = merge('I', 'wife');

// console.log(result1, result2, result3);

// var name = prompt('What is your name?');
// alert('Hi ' + name);

// var dob = prompt('What year you were born?');
// var ageTil = prompt('What is the current year?');
// alert('Hi, you are ' + (ageTil - dob) + ' years od.');


// function declaration / function statement
function mergeText(text1, text2){
    var merged = text1 + ' ' + text2;
    console.log(merged)
}

// function expression
var mergeTextTwo = function(text1, text2){
    var merged= (text1 + ' ' + text2);
    console.log(merged)
}

// function invocation
  mergeText('Farhan', 'Mia');
  mergeTextTwo('Mike', 'Mia');