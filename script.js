// JavaScript code

var images = document.querySelectorAll('.back img');
var currentIndex = 0;

function showImage(index) {
  // Hide all images
  images.forEach(function(image) {
    image.style.display = 'none';
  });

  // Show the image at the specified index
  images[index].style.display = 'block';
  images[index].src = images[index].getAttribute('data-src');
}

function handleImageHover(event) {
  // Get the index of the hovered image
  var hoveredIndex = Array.from(images).indexOf(event.target);

  // Show the hovered image
  showImage(hoveredIndex);
}

function handleImageMouseout() {
  // Show the current image
  showImage(currentIndex);
}

// Attach event listeners to each image
images.forEach(function(image) {
  image.addEventListener('mouseover', handleImageHover);
  image.addEventListener('mouseout', handleImageMouseout);
});

// Initially show the first image
showImage(currentIndex);
const inputs = document.querySelectorAll(".login-box input");

function addClass() {
	let parent = this.parentNode.parentNode;
	parent.classList.add("active");
}

function removeClass() {
	let parent = this.parentNode.parentNode;
	if (this.value === "") {
		parent.classList.remove("active");
	}
}

inputs.forEach((input) => {
	input.addEventListener("focus", addClass);
	input.addEventListener("blur", removeClass);
});
