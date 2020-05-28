(function () {
  var formInput = document.querySelector('#email-input');
  var form = document.querySelector('.form');
  var feedbackText = document.querySelector('.form__feedback');

  var regEx = new RegExp(
    /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
  );

  form.addEventListener('submit', validateEmail);

  function validateEmail(e) {
    e.preventDefault();

    var email = formInput.value.trim();
    if (regEx.test(email)) {
      form.reset();
      feedbackText.innerHTML = 'Thanks for signing up';
    } else {
      formInput.classList.add('form__input--invalid');
      feedbackText.innerHTML = 'Please provide a valid email';
    }
  }
})();
