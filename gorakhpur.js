document.getElementById('contact-form').addEventListener('submit', function (event) {
    event.preventDefault();
    const name = document.getElementById('name').value;
    const phone = document.getElementById('phone').value;
    const email = document.getElementById('email').value;

    if (name && phone && email) {
        document.getElementById('response-message').innerText = `Thank you, ${name}! Your message has been received.`;
        document.getElementById('contact-form').reset();
    } else {
        document.getElementById('response-message').innerText = "Please fill out all fields.";
        document.getElementById('response-message').style.color = 'red';
    }
});
