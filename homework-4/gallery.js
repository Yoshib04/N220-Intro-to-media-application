const photos = [
   'images/boat.jpg',
   'images/forest.jpg',
   'images/man.jpg',
   'images/sand.jpg'
];

const galleryElement = document.getElementById('photoGallery');

for (let i = 0; i < photos.length; i++) {
   const img = document.createElement('img');
   img.src = photos[i];
   img.alt = 'Image ' + (i + 1);
   img.height = 300;
   galleryElement.appendChild(img);
}

