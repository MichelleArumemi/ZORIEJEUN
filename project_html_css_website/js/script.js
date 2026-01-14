import check from '../assets/check.svg'
import star from '../assets/star.svg'
// Ensure soup1 and soup2 are imported if you are using them in your 'cards' array!
// import soup1 from '../assets/soup1.png' 

import AOS from "aos";
import "aos/dist/aos.css";

// init AOS animation
AOS.init({
    duration: 1000,
    offset: 100,
});

// Use a function to initialize the menu once the DOM is ready
document.addEventListener('DOMContentLoaded', () => {
    const menuToggle = document.getElementById('menu-toggle');
    const mobileDrawer = document.getElementById('mobile-drawer');
    const menuIcon = document.getElementById('menu-icon');

    // Add a check to prevent errors if the elements are missing on certain pages
    if (menuToggle && mobileDrawer && menuIcon) {
        menuToggle.addEventListener('click', () => {
            // 1. Slide the menu in/out
            mobileDrawer.classList.toggle('active');
            
            // 2. Animate the book icon container
            menuToggle.classList.toggle('active');

            // 3. Swap book icon for an 'X'
            if (mobileDrawer.classList.contains('active')) {
                menuIcon.classList.replace('fa-book-open', 'fa-xmark');
            } else {
                menuIcon.classList.replace('fa-xmark', 'fa-book-open');
            }
        });

        // Close the menu automatically when a link is clicked
        document.querySelectorAll('.mobile-drawer li a').forEach(link => {
            link.addEventListener('click', () => {
                mobileDrawer.classList.remove('active');
                menuToggle.classList.remove('active');
                menuIcon.classList.replace('fa-xmark', 'fa-book-open');
            });
        });
    }
});