const images = [
  'Images/img1.jpg',
  'Images/img2.jpg',
  'images/img3.jpg',
  'images/img4.jpg',
  'images/img5.jpg'
];

let currentIndex = 0;

function showImage(index) {
  const img = document.getElementById('mainImage');
  img.src = images[index];

  const caption = document.getElementById('caption');
  caption.textContent = `Image ${index + 1} of ${images.length}`;

  const thumbnails = document.querySelectorAll('.thumbnail');
  thumbnails.forEach((thumb, idx) => {
    thumb.classList.toggle('active', idx === index);
  });
}

function nextImage() {
  currentIndex = (currentIndex + 1) % images.length;
  showImage(currentIndex);
}

function prevImage() {
  currentIndex = (currentIndex - 1 + images.length) % images.length;
  showImage(currentIndex);
}

function selectImage(index) {
  currentIndex = index;
  showImage(currentIndex);
}

document.addEventListener('DOMContentLoaded', () => {
  const thumbnailContainer = document.getElementById('thumbnails');

  images.forEach((src, index) => {
    const img = document.createElement('img');
    img.src = src;
    img.className = 'thumbnail';
    img.onclick = () => selectImage(index);
    thumbnailContainer.appendChild(img);
  });

  showImage(currentIndex);
});

