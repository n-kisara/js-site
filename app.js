'use strict';

//[javascriptで書いたハンバーガーメニュー]
// const hamburger = document.getElementById('js-hamburger');
// const nav = document.getElementById('js-nav');

// hamburger.addEventListener('click',()=>{
//     hamburger.classList.toggle('active');
//     nav.classList.toggle('active');
// });


$(function(){
    // ハンバーガーメニュー
    $('#js-hamburger').on('click',function(){
        $('#js-hamburger').toggleClass('active');
        $('#js-nav').toggleClass('active');
    });

    // アコーディオン
    $('#js-qa dt').on('click',function(){
        $(this).next().slideToggle();
        $(this).toggleClass('open');
    });
});

// サムネイル
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
    if(e.target.src) {
        image.src = e.target.src;
        description.textContent = e.target.alt;
    }

});

// おみくじ
const fortune = ["大吉","中吉","小吉","末吉","凶"];

const omikuziArea = document.getElementById('js-omikuziBox');
const omikuzi = () => {
    let random = Math.floor(Math.random() * fortune.length);
    omikuziArea.textContent = fortune[random];
}
omikuziArea.addEventListener('click',omikuzi);

// カウンター
const keyUp = () => {
    let src = mainText.value;
    let num = 10 - src.length;
    
    const count = document.getElementById('count');
    count.textContent = num;

    if(num > 0) {
        count.style.color="black";
    } else {
        count.style.color="red";
    }
}
const mainText = document.getElementById('main_text');
mainText.addEventListener('keyup',keyUp);

//pagetop
const pagetop = document.getElementById('js-pagetop');

function pageUp() {
    window.scroll({
        top: 0,
        behavior: "smooth"
    });
}
pagetop.addEventListener('click',pageUp);

function scrollEvent() {
    if(pageYOffset > 100) {
        pagetop.style.opacity = "1";
    } else {
        pagetop.style.opacity = "0";
    }
}

window.addEventListener('scroll',scrollEvent);
