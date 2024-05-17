document.getElementById('contactForm').addEventListener('submit', function(event) {
    event.preventDefault();
    let name = document.getElementById('name').value;
    let email = document.getElementById('email').value;
    let message = document.getElementById('message').value;

    // Here you can add code to handle form submission, like sending the data to a server or displaying a confirmation message
    console.log('Name: ' + name);
    console.log('Email: ' + email);
    console.log('Message: ' + message);

    // You can also reset the form after submission
    document.getElementById('contactForm').reset();
});
