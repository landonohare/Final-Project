document.addEventListener('DOMContentLoaded', (event) => {
    // Get the modal
    var modal = document.getElementById("signup-modal");

    // Get the <span> element that closes the modal
    var span = document.getElementsByClassName("close")[0];

    // When the user clicks on <span> (x), close the modal
    span.onclick = function() {
        modal.style.display = "none";
    }

    // When the user clicks anywhere outside of the modal, close it
    window.onclick = function(event) {
        if (event.target == modal) {
            modal.style.display = "none";
        }
    }

    // Select all 'Buy Now' buttons and add click event listeners to each button
    const buyButtons = document.querySelectorAll('.buy-btn');
    
    buyButtons.forEach(button => {
        button.addEventListener('click', function() {
            // Check if language selection is needed (if there are radio buttons for language)
            let selectedLanguage = document.querySelector('input[name="language"]:checked');
            if (selectedLanguage) {
                // Log the selected language and price
                let service = selectedLanguage.value;
                let price = selectedLanguage.getAttribute('data-price');
                console.log(`Selected Service: ${service}, Price: ${price}`);
            }

            // Display the modal instead of redirecting
            modal.style.display = "block";

            // If you still want to log the service and price or redirect, you can do it here
            // But now it should show the modal instead of redirecting.
        });
    });
});
document.getElementById('contactForm').addEventListener('submit', function(event) {
    event.preventDefault();

    var name = document.getElementById('name').value;
    var email = document.getElementById('email').value;
    var message = document.getElementById('message').value;

    // Here you can simulate sending an email
    console.log('Sending message:', { name, email, message });

    alert('Message sent!');
});
