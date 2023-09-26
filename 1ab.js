function validateForm() {
        // validatinf the tagline (restricting it to 10 characters)
        const taglineInput = document.getElementById('tagline');
        if (taglineInput.value.length > 10) {
            alert('Tagline must be 10 characters or less.');
            return false;
        }

        // validating the phone number (9 digits)
        const phoneInput = document.getElementById('phone');
        const phonePattern = /^\d{9}$/;
        if (!phonePattern.test(phoneInput.value)) {
            alert('Please enter a valid 9-digit phone number.');
            return false;
        }

        return true; // Form is valid
    }

    function generateReceipt() {
      if(validateForm()){
            // Get form data
            const tagline = document.getElementById('tagline').value;
            const color = document.getElementById('color').value;
            const size = document.getElementById('size').value;
            const quantity = document.getElementById('quantity').value;
            const deliveryDate = document.getElementById('delivery_date').value;
            const streetAddress = document.getElementById('street_address').value;
            const city = document.getElementById('city').value;
            const state = document.getElementById('state').value;
            const zipcode = document.getElementById('zipcode').value;
            const email = document.getElementById('email').value;
            const phone = document.getElementById('phone').value;


            const receiptDate = new Date().toLocaleDateString(); // Get the current date

            // Creating a summary of form data
            const summary = `
                Tagline: ${tagline}
                Color: ${color}
                Size: ${size}
                Quantity: ${quantity}
                Delivery Date: ${deliveryDate}
                Street Address: ${streetAddress}
                City: ${city}
                State: ${state}
                Zip Code: ${zipcode}
                Email Address: ${email}
                Phone Number: ${phone}
            `;

            // Displaying the receipt with the summary
            alert(`Order received on ${receiptDate}. Thank you for your order!\n\nOrder Summary:\n${summary}`);
          }
        }
