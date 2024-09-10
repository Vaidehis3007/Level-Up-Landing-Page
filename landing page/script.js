document.addEventListener('DOMContentLoaded', function () {
    // Preloader
    setTimeout(function() {
        document.getElementById('preloader').style.display = 'none';
        document.getElementById('main-content').style.display = 'block';
    }, 2000); // Hide after 2 seconds

    // Background video loop logic
    let videos = ['video1', 'video2', 'video3'];
    let currentVideo = 0;

    // Start by making the first video visible
    document.getElementById(videos[currentVideo]).style.opacity = 1;

    function playNextVideo() {
        // Fade out the current video
        document.getElementById(videos[currentVideo]).style.opacity = 0;
        currentVideo = (currentVideo + 1) % videos.length;
        // Fade in the next video
        document.getElementById(videos[currentVideo]).style.opacity = 1;
        // Play the next video
        document.getElementById(videos[currentVideo]).play();
    }

    // Initially, play all videos in sequence and loop them
    document.getElementById(videos[0]).play();
    document.getElementById(videos[1]).play();
    document.getElementById(videos[2]).play();

    // Switch videos every 5 seconds
    setInterval(playNextVideo, 5000);
});

window.onload = function() {
    toggleOption('buy'); // Set the default view to 'Buy'
};

function toggleOption(option) {
    const buyButton = document.getElementById('buy-button');
    const rentButton = document.getElementById('rent-button');
    const additionalFields = document.getElementById('additional-fields');

    if (option === 'buy') {
        buyButton.classList.add('active');
        rentButton.classList.remove('active');

        // Update the form for 'Buy'
        additionalFields.innerHTML = `
            <div class="form-group">
                <label for="property-type">Property Type</label>
                <input type="text" id="property-type" placeholder="Property Type">
            </div>
            <div class="form-group">
                <label for="budget">AED</label>
                <input type="text" id="budget" placeholder="Enter your budget">
            </div>
        `;
    } else if (option === 'rent') {
        rentButton.classList.add('active');
        buyButton.classList.remove('active');

        // Update the form for 'Rent'
        additionalFields.innerHTML = `
            <div class="form-group">
                <label for="property-type">Property Type</label>
                <input type="text" id="property-type" placeholder="Property Type">
            </div>
            <div class="form-group">
                <label for="duration">Duration</label>
                <input type="text" id="duration" placeholder="12 Months">
            </div>
        `;
    }
}

// // Properties Carousel Logic
// let propertyCarousel = document.querySelector('.properties-carousel-inner'); // Target the inner container
// let propertyIndex = 0;
// const properties = propertyCarousel.children.length; // Assuming you have 6 properties
// const propertyWidth = document.querySelector('.property-card').offsetWidth; // Get width from a property card
// const gap = 20; // Adjust if necessary

// function rotateProperties() {
//     propertyCarousel.style.transform = `translateX(${-(propertyWidth + gap) * propertyIndex}px)`;
//     propertyIndex = (propertyIndex + 1) % properties;
// }

// // Set interval to rotate properties every 4 seconds
// setInterval(rotateProperties, 4000); 

let slideIndex = 0;
showSlides(slideIndex);

function plusSlides(n) {
    showSlides(slideIndex += n);
}

function showSlides(n) {
    let slides = document.getElementsByClassName("slide");
    if (n >= slides.length) {
        slideIndex = 0;
    }
    if (n < 0) {
        slideIndex = slides.length - 1;
    }

    // Hide all slides
    for (let i = 0; i < slides.length; i++) {
        slides[i].classList.remove('active');
    }

    // Show the current slide
    slides[slideIndex].classList.add('active');
}

var swiper = new Swiper('.swiper-container', {
    slidesPerView: 3,            // Display 3 cards at a time
    spaceBetween: 20,            // Space between the cards
    loop: true,                  // Enable looping after the last slide
    autoplay: {
      delay: 2500,               // Auto-slide every 2.5 seconds
      disableOnInteraction: false,
    },
    pagination: {
      el: '.swiper-pagination',
      clickable: true,
    },
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
  });