document.getElementById('present').addEventListener('click', function() {
    var presentImage = document.getElementById('present-image');
    var birthdaySong = document.getElementById('birthday-song');
    var birthdayMessage = document.getElementById('birthday-message');
    var photo = document.getElementById('photo');
    
    // Change the image to a gif
    presentImage.src = 'present_opened.gif';

    // Play the birthday song
    birthdaySong.play();

    // Display the birthday message
    birthdayMessage.style.display = 'block';

    // Display the photo
    photo.classList.remove('hidden');
});

// Function to randomly add the wiggle class
function addWiggle() {
    var present = document.getElementById('present');
    present.classList.add('wiggle');

    // Remove the wiggle class after the animation is done
    setTimeout(function() {
        present.classList.remove('wiggle');
    }, 500);
}

// Randomly trigger the wiggle effect more frequently
setInterval(function() {
    if (Math.random() < 0.75) { // 75% chance to wiggle
        addWiggle();
    }
}, 1000); // Check every 1.5 seconds
