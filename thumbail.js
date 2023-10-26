'use strict';

const images = [
    {src:"img/photo1.jpg",description:"画像1"},
    {src:"img/photo2.jpg",description:"画像2"},
    {src:"img/photo3.jpg",description:"画像3"},
    {src:"img/photo4.jpg",description:"画像4"},
    {src:"img/photo5.jpg",description:"画像5"},
    {src:"img/photo6.jpg",description:"画像6"},
    {src:"img/photo7.jpg",description:"画像7"},
    {src:"img/photo8.jpg",description:"画像8"},
    {src:"img/photo9.jpg",description:"画像9"},
    {src:"img/photo10.jpg",description:"画像10"}
];

const image = document.createElement('img');
image.setAttribute('src',images[0].src);
image.setAttribute('alt',images[0].description);

const description = document.createElement('p');
const mainImage = document.getElementById('main_image');
mainImage.insertBefore(image,null);
mainImage.insertBefore(description,null);

description.textContent = images[0].description;

const thumbnails = document.getElementById('thumbnails');

for(let i = 0;i < images.length;i++) {
    const thumbnailImage = document.createElement('img');
    thumbnailImage.setAttribute('src',images[i].src);
    thumbnailImage.setAttribute('alt',images[i].description);
    thumbnails.insertBefore(thumbnailImage,null);
}

thumbnails.addEventListener('click',(e)=> {
    image.src = e.target.src;
    description.textContent = e.target.alt;
});