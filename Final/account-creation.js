document.addEventListener('DOMContentLoaded', (event) => {
    const accountForm = document.getElementById('create-account-form');
    const paymentForm = document.getElementById('payment-form');

    // Initially hide the payment form
    paymentForm.style.display = 'none';

    accountForm.addEventListener('submit', function(event) {
        event.preventDefault();

        // Get account form values
        var username = document.getElementById('username').value;
        var email = document.getElementById('email').value;
        var password = document.getElementById('password').value;

        // Log account form values to the console
        console.log('Account Creation Details:');
        console.log('Username:', username);
        console.log('Email:', email);
        console.log('Password:', password);

        // Now, show the payment form
        accountForm.style.display = 'none';
        paymentForm.style.display = 'block';
    });

    paymentForm.addEventListener('submit', function(event) {
        event.preventDefault();

        // Get payment form values
        var cardName = document.getElementById('card-name').value;
        var cardNumber = document.getElementById('card-number').value;
        var cardExpiration = document.getElementById('card-expiration').value;
        var cardCVC = document.getElementById('card-cvc').value;

        // Log payment form values to the console
        console.log('Payment Details:');
        console.log('Name on Card:', cardName);
        console.log('Card Number:', cardNumber);
        console.log('Expiration Date:', cardExpiration);
        console.log('CVC:', cardCVC);

        // "Send" an invoice to the email from the account creation
        console.log('Sending invoice to email:', email);

        // Here you could clear the forms or provide further user instructions.
    });
});
