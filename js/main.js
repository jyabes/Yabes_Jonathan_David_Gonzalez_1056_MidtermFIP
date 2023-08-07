function hideHeader() {
    const header = document.querySelector('.mobile-menu');
    header.style.display = 'none';
    document.querySelector('.open-button').style.display = 'block';
}

function showHeader() {
    const header = document.querySelector('.mobile-menu');
    header.style.display = 'block';
    document.querySelector('.open-button').style.display = 'none';
}


// added by JONATHAN   
//OVERLAY AREA

const image = document.getElementById('image');
const overlay = document.getElementById('overlay');

image1.addEventListener('click', () => {
overlay1.classList.add('active');
});

image2.addEventListener('click', () => {
overlay2.classList.add('active'); 
});

thumbnail1.addEventListener('click', () => {
overlay3.classList.add('active'); 
});

thumbnail2.addEventListener('click', () => {
overlay4.classList.add('active'); 
});

thumbnail3.addEventListener('click', () => {
overlay5.classList.add('active'); 
});



overlay1.addEventListener('click', () => {
overlay1.classList.remove('active');
});

overlay2.addEventListener('click', () => {
  overlay2.classList.remove('active');
});

overlay3.addEventListener('click', () => {
overlay3.classList.remove('active');
});

overlay4.addEventListener('click', () => {
overlay4.classList.remove('active');
});

overlay5.addEventListener('click', () => {
overlay5.classList.remove('active');
});