/** Filter projects according to its skillset**/
var nav = document.querySelector('nav'); // Identify target

window.addEventListener('scroll', function(event) { // To listen for event
    event.preventDefault();

    if (window.scrollY <= 100) { // Just an example
        nav.style.backgroundColor = 'transparent'; // or default color
    } else {
        nav.style.backgroundColor = '#191919';
    }
});

// function filterBoxs(c){
//    var x, i;
// x = document.getElementsByClassName(card1)
// if (c == "All") c = "";
// for (i = 0; i< x.length; i++){
//     removeClass(x[i], "Show");
//     if(x[i].className.iindexOf(c) > -1) addClass(x[i],"Show")
//     }
// }



// function addClass(element, className){
//     var i, arr1, arr2;
//  arr1 = element.className.split("");
//  arr2 = name.split("");
//  for (i = 0; i< arr2.length; i++){
//      if(arr1.indexOf(arr2[i]) == -1){
//         element.className += "" + arr2[i]
//         }
//     }
//  }


 
// function removeClass(element, name){
//     var i, arr1, arr2;
//  arr1 = element.className.split(""); 
//  arr2 = name.split("");
//  for (i = 0; i < arr2.length; i++){
//      while(arr1.indexOf(arr2[i]) > -1){
//     arr1.splice(arr1.indexOf(arr2[i]), 1)
//      }
//  }
// }