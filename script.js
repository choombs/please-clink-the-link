// Function to handle button click events
function selectOption(option) {
    if (option === 'yes') {
        // Flash rainbow colors
        flashRainbowColors(function() {
            document.getElementById('question').style.display = 'none'; // Hide the question
            displayCatHeart(); // Display the GIF and Video
        });
    } else if (option === 'no') {
        // Change text on the "No" button to "You sure?"
        document.getElementById('no-button').innerText = 'You sure?'; 

        // Increase font size of "Yes" button
        var yesButton = document.getElementById('yes-button');
        var currentFontSize = window.getComputedStyle(yesButton).getPropertyValue('font-size');
        var newSize = parseFloat(currentFontSize) * 2; // Increase font size by 2x
        yesButton.style.fontSize = newSize + 'px';
    } else {
        alert('Invalid option!');
    }
}

// Function to flash rainbow colors
function flashRainbowColors(callback) {
    var colors = ['#ff0000', '#ff7f00', '#ffff00', '#00ff00', '#0000ff', '#4b0082', '#9400d3'];
    var i = 0;
    var interval = setInterval(function() {
        document.body.style.backgroundColor = colors[i];
        i = (i + 1) % colors.length;
    }, 200); // Change color every 200ms

    setTimeout(function() {
        clearInterval(interval);
        document.body.style.backgroundColor = ''; // Reset background color
        if (callback) callback();
    }, 2000); // Flash colors for 2 seconds
}

// Function to display the first GIF (Sad Cat Uwu)
function displayCat() {
    var imageContainer = document.getElementById('image-container');
    var catImage = new Image();
    catImage.src = 'sad-cat-uwu-sad-cat.gif'; // Ensure the file is in the correct directory
    catImage.alt = 'Sad Cat Uwu';

    catImage.onload = function() {
        imageContainer.appendChild(catImage);
    };
}

// Function to display the second GIF and video when clicking "Yes"
function displayCatHeart() {
    // Clear existing content
    document.getElementById('image-container').innerHTML = '';

    var imageContainer = document.getElementById('image-container');

    // Create GIF element
    var catHeartImage = new Image();
    catHeartImage.src = 'cat.gif'; // Dancing Cat GIF
    catHeartImage.alt = 'Dancing Cat';

    catHeartImage.onload = function() {
        imageContainer.appendChild(catHeartImage);

        // Create video element
        var catVideo = document.createElement('video');
        catVideo.src = 'ValentinesVid.mp4'; // Valentine's Video
        catVideo.alt = 'Valentine Video';
        catVideo.autoplay = true;
        catVideo.loop = true;
        catVideo.controls = true;
        catVideo.style.display = 'block';
        catVideo.style.maxWidth = '100%';

        // Append video below the GIF
        imageContainer.appendChild(catVideo);
    };

    // Hide the options
    document.getElementById('options').style.display = 'none';
}

// Display the first GIF initially
displayCat();
