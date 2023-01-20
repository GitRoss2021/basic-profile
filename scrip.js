// Identify target
var nav = document.querySelector('nav'); 


// To listen for event
window.addEventListener('scroll', function(event) { 
    event.preventDefault();

    // Scroll animation
    if (window.scrollY <= 100) { 
        nav.style.backgroundColor = 'transparent'; // or default color
    } else {
        nav.style.backgroundColor = '#191919';
        nav.style.backgroundWidth = '100%';
    }
});


// Modal
const modal = document.querySelector ('.modal');
const OpenModal = document.querySelector ('.open-btn');
const CloseModal = document.querySelector ('.close-btn');


// Open Modal
OpenModal.addEventListener('click',() => {
    modal.showModal();
})


// Close Modal
CloseModal.addEventListener('click',() => {
    modal.close();
})


// slider images
