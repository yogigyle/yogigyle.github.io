// *** [AVIRAM] JS code to integrate FormEasy into website, see: https://github.com/Basharath/FormEasy ***

function submitForm() {
  var data = {
    "name": document.getElementById('name').value,
    "email": document.getElementById('email').value,
    "message": document.getElementById('message').value,
    // "gCaptchaResponse": document.getElementById('g-recaptcha-response').value
  };

  fetch(formEasyUrl, {
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
