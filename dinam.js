function search_towar() {
    let input = document.getElementById('searchbar').value
    input = input.toLowerCase();
    let x = document.getElementsByClassName('part2');
   
    for (i = 0; i < x.length; i++) {
      if (!x[i].innerHTML.toLowerCase().includes(input)) {
        x[i].style.display = "none";
      }
      else {
        x[i].style.display = "list-item";
      }
    }
  }


 // Added event listener to the scroll 
 window.addEventListener('scroll', 
 moveScrollIndicator); 

// Getting scrollIndicator element by ID 
const scrollIndicatorElt =  
document.getElementById('scrollIndicator'); 

// Height of entire web page - height 
// of viewable portion of browser 
const maxHeight =  
window.document.body.scrollHeight  
- window.innerHeight; 

function moveScrollIndicator(e) { 

// Calculating width of the  
// scrollIndicator element 
const percentage =  
 ((window.scrollY) / maxHeight) * 100; 

// Pixels scrolled by the user  
// to total scrollable Pixels 
scrollIndicatorElt.style.width 
      = percentage + '%'; 
}



let counter = 0;
 
const counterValue = document.getElementById('counter-value');
const incrementBtn = document.getElementById('increment-btn');
const decrementBtn = document.getElementById('decrement-btn');
const resetBtn = document.querySelector('#reset');
 
// To increment the value of counter
incrementBtn.addEventListener('click', () => {
    counter++;
    counterValue.innerHTML = counter;
});
 
// To decrement the value of counter
decrementBtn.addEventListener('click', () => {
    counter--;
    counterValue.innerHTML = counter;
});
 
// To reset the counter to zero
resetBtn.addEventListener('click', reset);
 
function reset() {
    counter = 0;
    counterValue.innerHTML = counter;
}