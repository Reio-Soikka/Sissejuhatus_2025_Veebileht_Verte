document.addEventListener('DOMContentLoaded', function() {
    
    var form = document.querySelector('.booking-form');
    var successMessage = document.getElementById('success-message');

    if (form) {
        form.addEventListener('submit', function(event) {
            event.preventDefault(); 
            
            form.style.display = 'none';
            
            successMessage.style.display = 'block';
            
            window.scrollTo(0, 0);
        });
    }
});