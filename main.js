const links = document.querySelectorAll('nav ul li a');
const sections = document.querySelectorAll('section');
const menuToggle = document.getElementById("menu-toggle");
const nav = document.querySelector("nav");
const navLinks = document.querySelectorAll("nav a");

//agarra cada link (a del nav) y lo esconde y solo activa el que se paso como argumento
function changeActiveLink(id, link = null) {
    links.forEach(a => a.classList.remove('active'));
    if (link) link.classList.add('active');
}

//le pone listener a los links para pasarlo a la otra funcion
links.forEach((link, index) => link.addEventListener('click', () => changeActiveLink(index, link)));

//spy para el scroll
window.addEventListener('scroll', () => {
    let currentSection = '';
    const scrollPos = window.scrollY + 150; //saca cuanto bajo y le agrega 150 por el header
    sections.forEach(section => {
        const sectionTop = section.offsetTop; //saca donde arranca
        const sectionHeight = section.offsetHeight; //saca cuanto ocupa
        if (scrollPos >= sectionTop && scrollPos < sectionTop + sectionHeight) currentSection = section.getAttribute('id'); //si lo scrolleado esta dentro de la seccion la pasa como actual
    });

    //le manda al a que esta activo cual tiene que ir
    links.forEach(link => {
        link.classList.remove('active');
        if (link.getAttribute('href').includes(currentSection)) link.classList.add('active');
    });
});

//si toco el menu lo muestra, si lo vuelve a tocar lo esconde
menuToggle.addEventListener("click", () => {
    nav.classList.toggle("open");
    document.body.style.overflow = nav.classList.contains("open") ? "hidden" : "auto";
});

//esto no va, ya estaba
navLinks.forEach(link => {
    link.addEventListener("click", () => {
        nav.classList.remove("open");
        document.body.style.overflow = "auto";
    });
});

const main = document.querySelector('main');

//la ventana que se pidio la abre y la lleva arriba
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

//resetea el form y los datos
function resetCartForm() {
    cartForm.reset();
    cantidadInput.value = 1;
    precioInput.value = `$${precio}`;
    cartForm.classList.remove('hidden');
    thankYou.classList.add('hidden');
}

//listener para el modal de comprar
buyBtn.addEventListener('click', () => {
    openModal(cart);
    resetCartForm();
});

//listener para cerrar el modal de comprar
backBtn.addEventListener('click', () => {
    closeModal(cart);
    resetCartForm();
});

//envia form y tira mensaje
cartForm.addEventListener('submit', (e) => {
    e.preventDefault();
    cartForm.classList.add('hidden');
    thankYou.classList.remove('hidden');
});

//agarrra el numero del input y le calcula cuando sale en total
cantidadInput.addEventListener('input', () => {
    const cantidad = parseInt(cantidadInput.value) || 1; //sin parseint no lo toma
    const total = precio * cantidad;
    precioInput.value = `$${total}`;
});

const contact = document.getElementById('contact');
const backContactBtn = document.getElementById('backContactBtn');
const emailForm = document.getElementById('emailForm');
const contactThanks = contact.querySelector('h2');
const contactLink = document.querySelector('a[href="#contact"]');

//resetea el form de contacto
function resetContactForm() {
    emailForm.reset();
    emailForm.classList.remove('hidden');
    contactThanks.classList.add('hidden');
}

//llama al modal del boton de contacto
contactLink.addEventListener('click', (e) => {
    e.preventDefault();
    openModal(contact);
    resetContactForm();
});

//para volver
backContactBtn.addEventListener('click', () => {
    closeModal(contact);
    resetContactForm();
});

//muestra mensaje al enviar email
emailForm.addEventListener('submit', (e) => {
    e.preventDefault();
    emailForm.classList.add('hidden');
    contactThanks.classList.remove('hidden');
});
