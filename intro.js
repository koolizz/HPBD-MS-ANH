document.addEventListener("DOMContentLoaded", function() {
    var count = 5;
    var countdownElement = document.getElementById('countdown');

    var countdownInterval = setInterval(function() {
        count--;
        countdownElement.textContent = count;

        if (count <= 0) {
            clearInterval(countdownInterval);
            window.location.href = 'index.html'; 
        }
    }, 1000);
});
