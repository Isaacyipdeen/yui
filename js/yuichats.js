// Get all draggable images
const draggables = document.querySelectorAll('.draggable');

// Variables to track position and movement
let activeImage = null;
let offsetX = 0;
let offsetY = 0;

// Mouse down: start dragging
draggables.forEach(image => {
    image.addEventListener('mousedown', (e) => {
        activeImage = image; // Set the active image to the one being clicked
        offsetX = e.clientX - image.offsetLeft; // Calculate offset
        offsetY = e.clientY - image.offsetTop;   // Calculate offset

        image.style.cursor = 'grabbing';  // Change cursor style
    });
});

// Mouse move: drag the image only if activeImage is set
document.addEventListener('mousemove', (e) => {
    if (activeImage) {
        activeImage.style.left = `${e.clientX - offsetX}px`; // Update position
        activeImage.style.top = `${e.clientY - offsetY}px`;  // Update position
    }
});

// Mouse up: stop dragging and release the image
document.addEventListener('mouseup', () => {
    if (activeImage) {
        activeImage.style.cursor = 'grab';  // Reset cursor style
        activeImage = null;  // Stop tracking the active image
    }
});
