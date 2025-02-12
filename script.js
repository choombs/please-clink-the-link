// Function to handle button click events
function selectOption(option) {
    if (option === 'yes') {
        flashRainbowColors(function() {
            document.getElementById('question').style.display = 'none'; // Hide the question
            displayCatHeart(); // Display the GIF and Video
        });
    } else if (option === 'no') {
        document.getElementById('no-button').innerText = 'You sure?'; 
        var yesButton = document.getElementById('yes-button');
        var currentFontSize = window.getComputedStyle(yesButton).getPropertyValue('font-size');
        var newSize = parseFloat(currentFontSize) * 2; 
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
    }, 200);

    setTimeout(function() {
        clearInterval(interval);
        document.body.style.backgroundColor = '';
        if (callback) callback();
    }, 2000);
}

// Function to display the first GIF (Sad Cat Uwu)
function displayCat() {
    var imageContainer = document.getElementById('image-container');
    var catImage = new Image();
    catImage.src = 'sad-cat-uwu-sad-cat.gif'; 
    catImage.alt = 'Sad Cat Uwu';
    
    catImage.onload = function() {
        imageContainer.appendChild(catImage);
    };
}

// Function to display GIF first, then video
function displayCatHeart() {
    document.getElementById('image-container').innerHTML = '';

    var imageContainer = document.getElementById('image-container');

    // Create GIF element
    var catHeartImage = new Image();
    catHeartImage.src = 'cat.gif';
    catHeartImage.alt = 'Dancing Cat';

    catHeartImage.onload = function() {
        imageContainer.appendChild(catHeartImage);

        // Create video element
        var catVideo = document.createElement('video');
        catVideo.src = './ValentinesVid.mp4'; // Ensure correct path
        catVideo.alt = 'Valentine Video';
        catVideo.autoplay = true;
        catVideo.loop = true;
        catVideo.muted = true; // Fix autoplay issues
        catVideo.playsinline = true; // Helps on mobile browsers
        catVideo.controls = true;
        catVideo.style.display = 'block';
        catVideo.style.maxWidth = '100%';

        catVideo.onloadeddata = function() {
            console.log('Video loaded successfully.');
            catVideo.play().catch(error => console.log('Autoplay prevented:', error));
        };

        imageContainer.appendChild(catVideo);
    };

    document.getElementById('options').style.display = 'none';
}
