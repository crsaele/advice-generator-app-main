// Store the button to add the event and the div element that will show the advice
let adviceElement = document.getElementById('advice-element');
let adviceButton = document.getElementById('advice-btn');


// Get advice function fetch's the advice and shows it via inner html
const getAdvice = () => {
    adviceElement.innerHTML = "<p>Loading...</p>";
  
    fetch("https://api.adviceslip.com/advice")
      .then(response => response.json())
      .then(data => {
        adviceElement.innerHTML = `
          <h2>A D V I C E #${data.slip.id}</h2>
          <blockquote>"${data.slip.advice}"</blockquote>
        `;
      })
      .catch(err => {
        adviceElement.innerHTML = `
            <p>${err.message}.</p>
        `;
      });
  };
  
  // Adds an event to the dice button
  adviceButton.addEventListener("click", getAdvice);
  
  // Generates an advice when refresh
  getAdvice();