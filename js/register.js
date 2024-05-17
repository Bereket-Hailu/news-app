document.getElementById('registration-form').addEventListener('submit', function(event) {
    event.preventDefault();
  
    var username = document.getElementById('username').value;
    var email = document.getElementById('email').value;
    var password = document.getElementById('password').value;
    var confirmPassword = document.getElementById('confirm-password').value;
  
    if (password !== confirmPassword) {
      alert('Passwords do not match!');
      return;
    }
  
    // Here, you can add your registration logic, such as sending the data to a server or storing it in local storage.
    console.log('Username:', username);
    console.log('Email:', email);
    console.log('Password:', password);
  
    // Reset the form
    this.reset();
  });
  