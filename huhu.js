const navLinks = document.querySelectorAll('.nav-link');
const backLinks = document.querySelectorAll('.back-link');
const navBoxes = document.querySelectorAll('.nav-box');

navLinks.forEach(link => {
  link.addEventListener('click', (e) => {
    e.preventDefault();
    const target = document.getElementById(link.dataset.target);
    navBoxes.forEach(box => box.classList.remove('active'));
    target.classList.add('active');
  });
});

backLinks.forEach(link => {
  link.addEventListener('click', (e) => {
    e.preventDefault();
    const target = document.getElementById(link.dataset.target);
    navBoxes.forEach(box => box.classList.remove('active'));
    target.classList.add('active');
  });
});