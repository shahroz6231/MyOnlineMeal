const form = document.querySelector('#myForm');

form.addEventListener('submit', function(event) {
  // prevent default form submission
  event.preventDefault();

  // display alert message
  window.alert('Thanks for contacting us will revert soon!');

  // handle form data here
  // ...
});
