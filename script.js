const form = document.getElementById('askForm');
const messageDiv = document.getElementById('message');

form.addEventListener('submit', async (e) => {
  e.preventDefault();

  const email = form.email.value.trim();
  const question = form.question.value.trim();

  if (!email || !question) {
    messageDiv.textContent = 'Please enter both email and question.';
    return;
  }

  // Disable button to prevent multiple submits
  form.querySelector('button').disabled = true;
  messageDiv.textContent = 'Sending your question...';

  try {
    const response = await fetch('https://hooks.zapier.com/hooks/catch/24004772/uuvvt4z/', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ email, question })
    });

    if (response.ok) {
      messageDiv.textContent = 'Your question was sent successfully! Check your email soon.';
      form.reset();
    } else {
      messageDiv.textContent = 'Failed to send your question. Please try again later.';
    }
  } catch (error) {
    console.error(error);
    messageDiv.textContent = 'An error occurred. Please try again later.';
  }

  form.querySelector('button').disabled = false;
});
