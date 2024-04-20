// *** [AVIRAM] JS code to integrate FormEasy into website, see: https://github.com/Basharath/FormEasy ***
// const siteKey = '<YOUR_SITE_KEY>';
// const url = 'https://script.google.com/macros/s/AKfycbxo0crdRI619kf-99RZIrq7XNDbn-5bxLpN50JyyMZlrRnZSJjGuRY-Z1O96jlmh4TkyQ/exec'; // {{ site.formeasy.url }}

// function handleSubmit(event) {
//   event.preventDefault();
function submitForm() {
  var data = {
    "name": document.getElementById('name').value,
    "email": document.getElementById('email').value,
    "message": document.getElementById('message').value
  };

  // data.name = document.getElementById('name').value;
  // data.email = document.getElementById('email').value;
  // data.message = document.getElementById('message').value;

  const url = 'https://script.google.com/macros/s/AKfycbxo0crdRI619kf-99RZIrq7XNDbn-5bxLpN50JyyMZlrRnZSJjGuRY-Z1O96jlmh4TkyQ/exec';

  fetch(url, {
    method: 'POST',
    headers: {
      'Content-Type': 'text/plain;charset=utf-8',
    },
    body: JSON.stringify(data),
  })
    .then((res) => res.json())
    .then((data) => console.log('data', data))
    .catch((err) => console.log('err', err));
}

// document.getElementById('contact_formeasy').addEventListener('submit', handleSubmit);
