
const carouselIndices = {
    carousel1: 0,
    carousel2: 0
};

function moveCarousel(direction, carouselId) {
    const carousel = document.querySelector(`#${carouselId} .carousel`);
    const items = carousel.querySelectorAll('.carousel-item');
    const totalItems = 3;

    const itemWidth = items[0].getBoundingClientRect().width; 
    const visibleItemsCount = Math.min(totalItems, 1); 
    const totalWidth = itemWidth * visibleItemsCount; 
    const maxIndex = Math.ceil(totalItems / visibleItemsCount) - 1; 

 
    if (direction === -1) {
        carouselIndices[carouselId] -= 1;
        if (carouselIndices[carouselId] < 0) {
            carouselIndices[carouselId] = maxIndex; 
        }
    } else {
        carouselIndices[carouselId] += 1;
        if (carouselIndices[carouselId] > maxIndex) {
            carouselIndices[carouselId] = 0; 
        }
    }

    const offset = -carouselIndices[carouselId] * 100;
    carousel.style.transform = `translateX(${offset}%)`; 
    carousel.style.transition = 'transform 0.5s ease'; 
}


document.querySelectorAll('.carousel').forEach(carousel => {
    const carouselId = carousel.parentNode.id; 
    carouselIndices[carouselId] = 0; 
});

function Volver(){
     window.location.href = "Principal.php";
}