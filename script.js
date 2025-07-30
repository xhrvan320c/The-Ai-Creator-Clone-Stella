document
  .getElementById('questionForm')
  .addEventListener('submit', function (event) {
    event.preventDefault();
    const question = document.getElementById('questionInput').value;
    const response = getAIResponse(question);
    displayResponse(question, response);
  });

function getAIResponse(question) {
  // Simulated AI response
  return 'This is a simulated response from Stella.';
}

function displayResponse(question, response) {
  const responseSection = document.createElement('div');
  responseSection.innerHTML = `<strong>Q:</strong> ${question} <br> <strong>A:</strong> ${response}`;
  document.body.appendChild(responseSection);
}
