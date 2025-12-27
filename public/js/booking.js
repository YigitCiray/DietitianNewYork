// Booking form handling
document.addEventListener('DOMContentLoaded', () => {
    const form = document.getElementById('bookingForm');
    
    if (form) {
        form.addEventListener('submit', async (e) => {
            e.preventDefault();
            
            const formData = new FormData(form);
            const data = Object.fromEntries(formData);
            
            try {
                // Create payment session via Stripe
                const response = await fetch('/api/payment/create-session', {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json',
                    },
                    body: JSON.stringify({
                        consultationType: data.consultationType,
                        appointmentDate: data.date,
                        appointmentTime: data.time,
                        amount: data.consultationType === 'initial' ? 200 : 150
                    })
                });
                
                const result = await response.json();
                
                if (result.url) {
                    // Redirect to Stripe Checkout
                    window.location.href = result.url;
                } else {
                    alert('Error creating payment session. Please try again.');
                }
            } catch (error) {
                console.error('Error:', error);
                alert('An error occurred. Please try again.');
            }
        });
    }
});
