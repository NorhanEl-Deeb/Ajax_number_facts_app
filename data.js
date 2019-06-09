/*########################### This code is written by Norhan El-Deeb @2019 #########################*/

let fact = document.querySelector('#fact');
let factText = document.querySelector('#factText');
let numberInput = document.querySelector('#numberInput');
numberInput.addEventListener('input' , getFactAjax);

 // Fetch with XHR (AJAX Method)
 function getFactAjax(){
    let number = numberInput.value;
    if(number != ''){
      let xhr = new XMLHttpRequest();
      xhr.open('GET', 'http://numbersapi.com/'+number); // get the data from the api

      xhr.onload = function(){ // get the data
        if(this.status == 200){
          fact.style.display = 'block';
          factText.innerText = this.responseText;
        }
      }
      xhr.send(); 
      }
  }

  
  // Fetch with Fetch API (ES6 method)
// function getFactFetch(){
//     let number = numberInput.value;
//     if(number != ''){
//         fetch('http://numbersapi.com/'+number) // fetch the data from the api
//         .then(response => response.text()) // get the data
//         .then(data => { // deal with data 
//           fact.style.display = 'block';
//           factText.innerText = data;
//         })
//         .catch(err => console.log(err)); // catch the error 
//       }
// }

