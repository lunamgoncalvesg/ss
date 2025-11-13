const links = document.querySelectorAll('nav ul li a');
const sections = document.querySelectorAll('section');
const menuToggle = document.getElementById("menu-toggle");
const nav = document.querySelector("nav");
const navLinks = document.querySelectorAll("nav a");

function changeActiveLink(id, link = null) {
    links.forEach(a => a.classList.remove('active'));
    if (link) link.classList.add('active');
}

links.forEach((link, index) => link.addEventListener('click', () => changeActiveLink(index, link)));

<<<<<<< HEAD
let cart = document.querySelector('#cart');
let home = document.querySelector('#home');
let btns = document.querySelectorAll('#buy, #back');
let form = document.querySelector('form');
let msg = document.querySelector('#msg');
let h1 = document.querySelector('#cart h1');

btns.forEach(btn => {
    btn.addEventListener('click', () => {
        cart.classList.toggle('active');
        home.classList.toggle('active');
        form.style.display = cart.classList.contains('active') ? 'grid' : 'none';
        if (!cart.classList.contains('active')) msg.innerHTML = '';
        else h1.style.display = 'block';
=======
window.addEventListener('scroll', () => {
    let currentSection = '';
    const scrollPos = window.scrollY + 150;
    sections.forEach(section => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.offsetHeight;
        if (scrollPos >= sectionTop && scrollPos < sectionTop + sectionHeight) currentSection = section.getAttribute('id');
    });

    links.forEach(link => {
        link.classList.remove('active');
        if (link.getAttribute('href').includes(currentSection)) link.classList.add('active');
>>>>>>> 1ac6797 (ultima)
    });
});

menuToggle.addEventListener("click", () => {
    nav.classList.toggle("open");
    document.body.style.overflow = nav.classList.contains("open") ? "hidden" : "auto";
});

navLinks.forEach(link => {
    link.addEventListener("click", () => {
        nav.classList.remove("open");
        document.body.style.overflow = "auto";
    });
});

const main = document.querySelector('main');

function openModal(modal) {
    modal.classList.remove('hidden');
    modal.classList.add('active');
    main.classList.add('hide-content');
    window.scrollTo({ top: 0, behavior: 'smooth' });
}

function closeModal(modal) {
    modal.classList.add('hidden');
    modal.classList.remove('active');
    main.classList.remove('hide-content');
}

const cart = document.getElementById('cart');
const buyBtn = document.getElementById('buyBtn');
const backBtn = document.getElementById('backBtn');
const cartForm = cart.querySelector('form');
const thankYou = cart.querySelector('h2');
const cantidadInput = document.getElementById('cantidad');
const precioInput = document.getElementById('precio');
const precio = 15000;

function resetCartForm() {
    cartForm.reset();
    cantidadInput.value = 1;
    precioInput.value = `$${precio}`;
    cartForm.classList.remove('hidden');
    thankYou.classList.add('hidden');
}

buyBtn.addEventListener('click', () => {
    openModal(cart);
    resetCartForm();
});

backBtn.addEventListener('click', () => {
    closeModal(cart);
    resetCartForm();
});

cartForm.addEventListener('submit', (e) => {
    e.preventDefault();
<<<<<<< HEAD
    form.style.display = 'none';
    msg.innerHTML = '<h1>Su pedido llega en 3 días hábiles.</h1>';
    let h1 = document.querySelector('#cart h1');
    h1.style.display = 'none';
    let backBtn = document.querySelector("#back");
    backBtn.style.justifySelf = 'center';
    form.reset();
});
=======
    cartForm.classList.add('hidden');
    thankYou.classList.remove('hidden');
});

cantidadInput.addEventListener('input', () => {
    const cantidad = parseInt(cantidadInput.value) || 1;
    const total = precio * cantidad;
    precioInput.value = `$${total}`;
});

const contact = document.getElementById('contact');
const backContactBtn = document.getElementById('backContactBtn');
const emailForm = document.getElementById('emailForm');
const contactThanks = contact.querySelector('h2');
const contactLink = document.querySelector('a[href="#contact"]');

function resetContactForm() {
    emailForm.reset();
    emailForm.classList.remove('hidden');
    contactThanks.classList.add('hidden');
}

contactLink.addEventListener('click', (e) => {
    e.preventDefault();
    openModal(contact);
    resetContactForm();
});

backContactBtn.addEventListener('click', () => {
    closeModal(contact);
    resetContactForm();
});

emailForm.addEventListener('submit', (e) => {
    e.preventDefault();
    emailForm.classList.add('hidden');
    contactThanks.classList.remove('hidden');
});
>>>>>>> 1ac6797 (ultima)
