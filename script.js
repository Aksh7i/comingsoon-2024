// Set the target launch date for countdown (replace with your own date)
const launchDate = new Date("2024-10-15T12:00:00").getTime();


// Function to update countdown every second
const countdownInterval = setInterval(() => {
    const now = new Date().getTime(); // Get current time
    const distance = launchDate - now; // Calculate time difference

    // Time calculations for days, hours, minutes, and seconds
    const days = Math.floor(distance / (1000 * 60 * 60 * 24));
    const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((distance % (1000 * 60)) / 1000);

    // Display the calculated time in the HTML
    document.getElementById("days").innerText = days;
    document.getElementById("hours").innerText = hours;
    document.getElementById("minutes").innerText = minutes;
    document.getElementById("seconds").innerText = seconds;

    // If countdown reaches zero, stop the countdown and show "We're Live"
    if (distance < 0) {
        clearInterval(countdownInterval); // Stop the countdown
        document.getElementById("countdown").innerHTML = "We're Live!"; // Display message
    }
}, 1000); // Update countdown every second

// Notify Me form submission handler
document.getElementById("notify-form").addEventListener("submit", function (event) {
    event.preventDefault(); // Prevent default form submission behavior
    const email = document.getElementById("email").value; // Get entered email value
    alert(`Thank you! You will be notified at ${email}.`); // Display confirmation message
    document.getElementById("email").value = ''; // Clear email input field
});
