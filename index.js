const tutorials = [
  'what does the this keyword mean?',
  'What is the Contutorialuctor OO pattern?',
  'implementing Blockchain Web API',
  'The Test Driven Development Workflow',
  'What is NaN and how Can we Check for it',
  'What is the difference between stopPropagation and preventDefault?',
  'Immutable State and Pure Functions',
  'what is the difference between == and ===?',
  'what is the difference between event capturing and bubbling?',
  'what is JSONP?'
];

function titleCased(){
  return tutorials.map(function (tutorial){
    tutorial = tutorial.split(' ');
    for (var i = 0; i < tutorial.length; i++) {
      tutorial[i] = tutorial[i].charAt(0).toUpperCase() + tutorial[i].slice(1);
    }
    return tutorial.join(' ');
  })
}






// function titleCase(tutorials) {
//   return str.toLowerCase().split(' ').map(function(word) {
//     return word.replace(word[0], word[0].toUpperCase());
//   }).join(' ');
// }

// firstLetter = string.charAt(0); Next, we use the uppercase function in JavaScript to set this string to be in capitals.
// uppercaseFirstLetter = string.charAt(0).toUpperCase(); ...
// stringWithoutFirstLetter = string







// let students = ["harry", "ron", "hermione", "ginevra"];
// let rollCall = students.map( student => student + " the wizard" )

// => rollCall = ["harry the wizard", "ron the wizard", "hermione the wizard", "ginevra the wizard"];
