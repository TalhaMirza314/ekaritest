const gallery = document.getElementById('gallery');
const imageContainer = document.querySelector('#image-container');

// Populate the gallery with images
const images = ['image1', 'image2']; // Add more image names as needed
images.forEach((image) => {
  const img = document.createElement('img');
  img.src = `assets/images/${image}.jpg`;
  img.addEventListener('click', () => loadImage(image));
  gallery.appendChild(img);
});

function loadImage(image) {
  const newImage = document.createElement('a-image');
  newImage.setAttribute('src', `#${image}`);
  newImage.setAttribute('position', '0 0 -3');
  newImage.setAttribute('scale', '1 1 1');
  imageContainer.appendChild(newImage);
}
