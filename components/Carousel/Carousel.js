/* If You've gotten this far, you're on your own! Although we will give you some hints:
    1. You will need to write a function that creates the carousel component, you will find the HTML below.
    2. You will need to grab a reference to all of the images
    3. Create a current index
    4. Those buttons are gonna need some click handlers.
    5. Think of how you would animate this component. Make the cards slide in and out, or fade. It's up to you!
    6. Have fun!
*/

/* HTML:
  <div class="carousel">
    <div class="left-button"> < </div>
    <img src="./assets/carousel/mountains.jpeg" />
    <img src="./assets/carousel/computer.jpeg" />
    <img src="./assets/carousel/trees.jpeg" />
    <img src="./assets/carousel/turntable.jpeg" />
    <div class="right-button"> > </div>
  </div>
*/

let carouselContainer = document.querySelector(".carousel-container");

function MakeCarousel () {

  let carousel = document.createElement("div");
  let leftButton = document.createElement("div");
  let img1 = document.createElement("img");
  let img2 = document.createElement("img");
  let img3 = document.createElement("img");
  let img4 = document.createElement("img");
  let rightButton = document.createElement("div");

  carousel.classList.add("carousel");
  leftButton.classList.add("left-button");
  rightButton.classList.add("right-button");

  img1.setAttribute("src", "./assets/carousel/mountains.jpeg");
  img2.setAttribute("src", "./assets/carousel/computer.jpeg");
  img3.setAttribute("src", "./assets/carousel/trees.jpeg");
  img4.setAttribute("src", "./assets/carousel/turntable.jpeg");

  carousel.appendChild(leftButton);
  carousel.appendChild(img1);
  carousel.appendChild(img2);
  carousel.appendChild(img3);
  carousel.appendChild(img4);
  carousel.appendChild(rightButton);

  carouselContainer.appendChild(carousel);
  let photoArray = [img1, img2, img3, img4];

  let currentPhoto = 0;

  leftButton.addEventListener("click", event => {
    gsap.to(".notHidden", { display: "none" });
    photoArray[currentPhoto].classList.toggle("notHidden");
    currentPhoto = currentPhoto - 1;
    if ( currentPhoto < 0 ) {
      currentPhoto = 3;
    }
    photoArray[currentPhoto].classList.toggle("notHidden")
    gsap.to(".notHidden", { display: "block" });
  });
  rightButton.addEventListener("click", event => {
    gsap.to(".notHidden", { display: "none" });
    photoArray[currentPhoto].classList.toggle("notHidden");
    currentPhoto++;
    if ( currentPhoto > 3 ) {
      currentPhoto = 0;
    }
    photoArray[currentPhoto].classList.toggle("notHidden");
    gsap.to(".notHidden", 0.3, {opacity:1,display:'block'});
  });
  img1.style.display = "block";
  img1.classList.add("notHidden");
  console.log(photoArray[currentPhoto]);
}
MakeCarousel();