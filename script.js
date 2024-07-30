// scripts.js

function showImage(imageId, imageUrl) {
    const imageContainer = document.getElementById(imageId);
    imageContainer.style.display = 'block';
    imageContainer.innerHTML = `<img src="${imageUrl}" alt="Instagram Photo">`;
}
