let container = document.querySelector('.container');
let heading = document.querySelectorAll('.heading');

// for(i=0 ; i< heading.length ; i++){
//     const myTimeout = setTimeout(myGreeting, 2500);
//     function myGreeting() {
//         heading[i].style.color = "red"
//     }
//     const myTimeout2 = setTimeout(myGreeting2, 5000);
//     function myGreeting2() {
//         heading[i].style.color = "yellow"
//     }
//     const myTimeout3 = setTimeout(myGreeting3, 7500);
//     function myGreeting3() {
//         heading[i].style.color = "chocolate"
//     }
//     const myTimeout4 = setTimeout(myGreeting4, 10000);
//     function myGreeting4() {
//         heading[i].style.color = "green"
//     }
// }


let timeout;

function myFunction() {
  timeout = setTimeout(alertFunc, 3000);
}

function alertFunc() {
  alert("Hello!");
}