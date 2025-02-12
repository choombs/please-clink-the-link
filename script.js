// script.js

// Function to handle button click events
function selectOption(option) {
    if (option === 'yes') {
        // Flash rainbow colors
        flashRainbowColors(function() {
            document.getElementById('question').style.display = 'none'; // Hide the question
            displayCatHeart(); // Show the dancing cat GIF
        });
    } else if (option === 'no') {
        // Change text on the "No" button to "You sure?"
        document.getElementById('no-button').innerText = 'You sure?'; 
        // Increase font size of "Yes" button
        var yesButton = document.getElementById('yes-button');
        var currentFontSize = window.getComputedStyle(yesButton).getPropertyValue('font-size');
        var newSize = parseFloat(currentFontSize) * 2; // Increase font size
        yesButton.style.fontSize = newSize + 'px';
    } else {
        alert('Invalid option!');
    }
}

// Function to flash rainbow colors and then execute a callback function
function flashRainbowColors(callback) {
    var colors = ['#ff0000', '#ff7f00', '#ffff00', '#00ff00', '#0000ff', '#4b0082', '#9400d3'];
    var i = 0;
    var interval = setInterval(function() {
        document.body.style.backgroundColor = colors[i];
        i = (i + 1) % colors.length;
    }, 200);
    setTimeout(function() {
        clearInterval(interval);
        document.body.style.backgroundColor = '';
        if (callback) {
            callback();
        }
    }, 2000);
}

// Function to display the sad cat GIF initially
function displayCat() {
    var imageContainer = document.getElementById('image-container');
    imageContainer.innerHTML = '';
    var catImage = new Image();
    catImage.src = 'sad-cat-uwu-sad-cat.gif'; // Ensure this file exists
    catImage.alt = 'Sad Cat Uwu';
    catImage.onload = function() {
        imageContainer.appendChild(catImage);
    };
}

// Function to display the dancing cat GIF and show the redirect link
function displayCatHeart() {
    document.getElementById('image-container').innerHTML = '';
    var imageContainer = document.getElementById('image-container');
    var catHeartImage = new Image();
    catHeartImage.src = 'cat.gif'; // Ensure this file exists
    catHeartImage.alt = 'Dancing Cat';
    catHeartImage.onload = function() {
        imageContainer.appendChild(catHeartImage);
        document.getElementById('options').style.display = 'none';
        createRedirectLink(); // Show redirect link after displaying the image
    };
}

// Function to create and display a redirect link to your Google Drive video
function createRedirectLink() {
    var linkContainer = document.getElementById('link-container');
    linkContainer.innerHTML = ''; // Clear previous content

    var videoLink = document.createElement('a');
    videoLink.href = 'https://drive.google.com/file/d/1HW5xQ_9vSO1TdvXjGKNmwLsFP9pMwhUp/view?usp=drive_link'; 
    videoLink.innerText = 'Click here for a surprise!';
    videoLink.style.display = 'block';
    videoLink.style.marginTop = '20px';
    videoLink.style.fontSize = '20px';
    videoLink.style.color = 'blue';
    videoLink.style.textDecoration = 'underline';
    videoLink.target = '_blank'; // Opens in a new tab

    // Redirect when clicked
    videoLink.onclick = function(event) {
        event.preventDefault(); // Prevent default link behavior
        window.open(videoLink.href, '_blank'); // Open the video in a new tab
    };

    linkContainer.appendChild(videoLink);
}

// Display the sad cat.gif initially
displayCat();
