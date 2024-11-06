// Store the button to add the event and the div element that will show the advice
let advice = document.getElementById('advice');
let diceButton = document.getElementById('dice-btn');


// Get advice function fetch's the advice and shows it via inner html
const getAdvice = () => {
    advice.innerHTML = "<p>Loading...</p>";
  
    fetch("https://api.adviceslip.com/advice")
      .then(response => response.json())
      .then(data => {
        advice.innerHTML = `
          <h2>A D V I C E #${data.slip.id}</h2>
          <blockquote>"${data.slip.advice}"</blockquote>
        `;
      })
      .catch(err => {
        advice.innerHTML = `
            <p>${err.message}.</p>
        `;
      });
  };
  
  // Adds an event to the dice button
  diceButton.addEventListener("click", getAdvice);
  
  // Generates an advice when refresh
  getAdvice();