// Defining text characters for the empty and full hearts for you to use later.
const EMPTY_HEART = '♡'
const FULL_HEART = '♥'

// Your JavaScript code goes here!
const exampleHeart = document.getElementsByClassName("like-glyph");
console.log(exampleHeart)

for(let heart of exampleHeart){
  console.log(heart)
  heart.addEventListener('click', () => {
    mimicServerCall()
    .then(() => {
      if(heart.className === 'activated-heart'){
        heart.textContent = EMPTY_HEART
        heart.classList.remove('activated-heart')
      }else{
        heart.textContent = FULL_HEART
        heart.className = "activated-heart"
      }
    })
    .catch((errorMessage)=>{
      const error = document.getElementById('modal')
      error.classList.remove('hidden')
      error.textContent = errorMessage;
      setTimeout(() => error.classList.add('hidden'), 3000)
    })
  })
}



//------------------------------------------------------------------------------
// Don't change the code below: this function mocks the server response
//------------------------------------------------------------------------------

function mimicServerCall(url="http://mimicServer.example.com", config={}) {
  return new Promise(function(resolve, reject) {
    setTimeout(function() {
      let isRandomFailure = Math.random() < .2
      if (isRandomFailure) {
        reject("Random server error. Try again.");
      } else {
        resolve("Pretend remote server notified of action!");
      }
    }, 300);
  });
}
