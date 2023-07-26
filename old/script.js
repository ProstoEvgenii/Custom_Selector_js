console.log("Evgenii");

// const goals = document.querySelectorAll(".goal");
// console.log(typeof goal)
// window.addEventListener("onclick", function() {
//     goal.classList.add('red');tes

// const arr = [1,2,3,4,5,['apple', 7],8]
// console.log(arr[5][0])
// function createParagraph() {
//     let paragraf = document.createElement('p');
//     paragraf.textContent = 'Это оказывается довольно сложно!';
//     document.body.appendChild(paragraf);
//   }

//   function Greating() {
//     let paragraf = document.createElement('p');
//     paragraf.textContent = 'Привет!';
//     document.body.appendChild(paragraf);

// }

let randomNumber = Math.floor(Math.random() * 100) + 1;

let guesses = document.querySelector('.guesses');
let lastResult = document.querySelector('.lastResult');
let lowOrHi = document.querySelector('.lowOrHi');

let guessSubmit = document.querySelector('.guessSubmit');
let guessField = document.querySelector('.guessField');

let guessCount = 1;
let resetButton;

function checkGuess() {
    alert('I am a placeholder');
  }

let array = [1,100,21,19]
let sum = 0
array.forEach((Element) => {
  sum =+ Element
  

})
console.log(sum)

let list = [
  { user_id: 1,
    attented:[2022,2023]
  },
  { user_id: 2,
    attented:[2022,2023]
  },
  { user_id: 3,
    attented:[2022]
  },
  { user_id: 4,
    attented: [2023]
  },
  { user_id: 5,
    attented: [2022,2023]
  }
]
list.map((item,index)=>{
  item.attented.includes(2022) ? console.log(item.user_id) : console.log(`didnt attend ${item.user_id}`)
  
})
