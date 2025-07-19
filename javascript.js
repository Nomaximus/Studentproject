let menuIcon = document.querySelector('#menu-icon');
let navbar= document.querySelector('.navbar');

let sections = document.querySelectorAll('section');
let navLinks = document.querySelector('header nav ul li a[href*="' + id + '"]').classList.add('active');


window.onscroll = () => {
  sections.forEach(sec => {
    let top = window.scrollY;
    let offset = sec.offsetTop - 150;
    let height = sec.offsetHeight;
    let id = sec.getAttribute('id');

    if (top >= offset && top < offset + height) {
      navLinks.forEach(link => {
        link.classList.remove('active');
        document.querySelector('header nav ul li a[href*="' + id + '"]').classList.add('active');
      });
    }
  });
};


menuIcon.onclick = () => {
    menuIcon.classList.toggle('bx-x');
    navbar.classList.toggle('active');
}

function openFullscreen(imgSrc) {
  const lightbox = document.getElementById('lightbox');
  const lightboxImg = document.getElementById('lightbox-img');
  lightboxImg.src = imgSrc;
  lightbox.style.display = 'flex';
  document.body.style.overflow = 'hidden';
}

function closeFullscreen() {
  const lightbox = document.getElementById('lightbox');
  const lightboxImg = document.getElementById('lightbox-img');
  lightbox.style.display = 'none';
  lightboxImg.src = '';
  document.body.style.overflow = ''; 
}
function openModal(title, imgSrc) {
    document.getElementById('modal-title').innerText = title;
    document.getElementById('modal-image').src = imgSrc;
    document.getElementById('myModal').style.display = "block";
  }

  function closeModal() {
    document.getElementById('myModal').style.display = "none";
  }

  window.onclick = function(event) {
    const modal = document.getElementById('myModal');
    if (event.target == modal) {
      modal.style.display = "none";
    }
  }
