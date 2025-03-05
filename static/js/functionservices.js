const menuItems = document.querySelectorAll('.menu-item');
const imagesContainer = document.getElementById('images');
const modal = document.getElementById('modal');
const modalTitle = document.getElementById('modalTitle');
const modalContent = document.getElementById('modalContent');
const closeModalButton = document.getElementById('closeModal');

const images = [
    [
        '../static/img/detailservices/controlcalidad/CC-1.jpeg',
        '../static/img/detailservices/controlcalidad/CC-4.jpeg',
        '../static/img/detailservices/controlcalidad/CC-5.jpg',
        '../static/img/detailservices/controlcalidad/CC-6.jpg',
        '../static/img/detailservices/controlcalidad/CC-7.jpg',
        '../static/img/detailservices/controlcalidad/CC-8.jpg',
        '../static/img/detailservices/controlcalidad/CC-9.jpg',
        '../static/img/detailservices/controlcalidad/CC-10.jpg',
        '../static/img/detailservices/controlcalidad/CC-11.jpg',
        '../static/img/detailservices/controlcalidad/CC-12.jpeg',
        '../static/img/detailservices/controlcalidad/CC-13.jpeg',
        '../static/img/detailservices/controlcalidad/CC-14.jpeg',
        '../static/img/detailservices/controlcalidad/CC-15.jpeg',
        '../static/img/detailservices/controlcalidad/CC-16.jpeg',
        '../static/img/detailservices/controlcalidad/CC-2.jpeg',
        '../static/img/detailservices/controlcalidad/CC-3.jpeg',
    ],
    [
        '../static/img/detailservices/ems/EMS-2.jpg',
        '../static/img/detailservices/ems/EMS-1.jpg',
        '../static/img/detailservices/ems/EMS-3.jpg',
        '../static/img/detailservices/ems/EMS-4.jpg',
        '../static/img/detailservices/ems/EMS-5.jpg',
        '../static/img/detailservices/ems/EMS-6.jpg',
        '../static/img/detailservices/ems/EMS-7.jpg',
        '../static/img/detailservices/ems/EMS-8.jpg',
        '../static/img/detailservices/ems/EMS-9.jpg',
        '../static/img/detailservices/ems/EMS-10.jpg',
        '../static/img/detailservices/ems/EMS-11.jpg',
    ],
    [
      '../static/img/detailservices/canteras/CC-1.jpg',
      '../static/img/detailservices/canteras/CC-2.jpg',
      '../static/img/detailservices/canteras/CC-3.jpg',
      '../static/img/detailservices/canteras/CC-4.jpg',
      '../static/img/detailservices/canteras/CC-5.jpg',
      '../static/img/detailservices/canteras/CC-6.jpg',
    ],
    [
        '../static/img/detailservices/estructuras/ES-1.jpeg',
        '../static/img/detailservices/estructuras/ES-2.jpg',
        '../static/img/detailservices/estructuras/ES-3.jpeg',
        '../static/img/detailservices/estructuras/ES-4.jpg',
      ],
      [
        '../static/img/detailservices/mezclas/DM-1.jpg',
        '../static/img/detailservices/mezclas/DM-2.jpg',
        '../static/img/detailservices/mezclas/DM-3.jpg',
        '../static/img/detailservices/mezclas/DM-4.jpg',
        '../static/img/detailservices/mezclas/DM-5.jpg',
      ],
      [
        '../static/img/detailservices/laboratorio/LB-1.jpg',
        '../static/img/detailservices/laboratorio/LB-3.jpg',
        '../static/img/detailservices/laboratorio/LB-4.jpg',
        '../static/img/detailservices/laboratorio/LB-5.jpg',
        '../static/img/detailservices/laboratorio/LB-6.jpg',
        '../static/img/detailservices/laboratorio/LB-7.jpg',
        '../static/img/detailservices/laboratorio/LB-8.jpg',
        '../static/img/detailservices/laboratorio/LB-9.jpg',
        '../static/img/detailservices/laboratorio/LB-10.jpg',
        '../static/img/detailservices/laboratorio/LB-11.jpg',
        '../static/img/detailservices/laboratorio/LB-12.jpg',
        '../static/img/detailservices/laboratorio/LB-14.jpeg',
        '../static/img/detailservices/laboratorio/LB-15.jpeg',
        '../static/img/detailservices/laboratorio/LB-16.jpeg',
        '../static/img/detailservices/laboratorio/LB-17.jpeg',
        '../static/img/detailservices/laboratorio/LB-18.jpeg',
        '../static/img/detailservices/laboratorio/LB-19.jpeg',
      ],
      [
        '../static/img/detailservices/quimicos/QM-1.jpg',
        '../static/img/detailservices/quimicos/QM-2.jpg',
        '../static/img/detailservices/quimicos/QM-3.jpg',
        '../static/img/detailservices/quimicos/QM-4.jpg',
        '../static/img/detailservices/quimicos/QM-5.jpg',
        '../static/img/detailservices/quimicos/QM-6.jpg',
        '../static/img/detailservices/quimicos/QM-7.jpg',
        '../static/img/detailservices/quimicos/QM-8.jpg',
        '../static/img/detailservices/quimicos/QM-9.jpg',
        '../static/img/detailservices/quimicos/QM-10.jpg',
        '../static/img/detailservices/quimicos/QM-11.jpg',
        '../static/img/detailservices/quimicos/QM-12.jpg',
        '../static/img/detailservices/quimicos/QM-13.jpg',
      ],
      [
        '../static/img/detailservices/equipos/EQ-1.jpg',
        '../static/img/detailservices/equipos/EQ-2.jpg',
        '../static/img/detailservices/equipos/EQ-3.jpg',
        '../static/img/detailservices/equipos/EQ-4.jpg',
        '../static/img/detailservices/equipos/EQ-5.jpg',
      ],
    // Añadir imágenes para otros elementos del menú aquí
];

let currentIndex = 0;
let currentImages = images[0];

// Función para actualizar el carrusel
function updateCarousel(index) {
    currentImages = images[index];
    imagesContainer.innerHTML = currentImages.map((src, i) => {
        return `<img src="${src}" alt="Imagen ${i + 1}" class="carousel-image w-full h-full object-cover ${i === 0 ? '' : 'hidden'}">`;
    }).join('');
    currentIndex = 0;
}

// Cambiar imagen en el carrusel
function changeImage(direction) {
    currentIndex += direction;
    if (currentIndex < 0) {
        currentIndex = currentImages.length - 1;
    } else if (currentIndex >= currentImages.length) {
        currentIndex = 0;
    }
    const images = document.querySelectorAll('.carousel-image');
    images.forEach((img, i) => {
        img.classList.toggle('hidden', i !== currentIndex);
    });
}

const mobileMenu = document.getElementById('mobile-menu');
mobileMenu.addEventListener('change', function () {
    const selectedIndex = this.value;
    updateCarousel(selectedIndex);
    openModal();  // Abrir el modal al seleccionar una opción
});

function highlightMenuItem(index) {
    menuItems.forEach((item, i) => {
        item.classList.toggle('bg-blue-300', i === index); // Cambia el color de fondo
        item.classList.toggle('text-white', i === index); // Cambia el color del texto
    });
}

function openModal() {
    modal.classList.remove('hidden');
}

// Cerrar el modal
function closeModal() {
    modal.classList.add('hidden');
}

menuItems.forEach((item, index) => {
    item.addEventListener('click', () => {
        updateCarousel(index);
        openModal();  // Abrir el modal al seleccionar un elemento del menú
    });
})

// Event listeners
document.getElementById('prev').addEventListener('click', () => {
    changeImage(-1);
});

document.getElementById('next').addEventListener('click', () => {
    changeImage(1);
});

// Inicializar con el primer elemento del menú
updateCarousel(0);

document.addEventListener('DOMContentLoaded', function () {
    const menuItems = document.querySelectorAll('.menu-item');
    const tooltips = document.querySelectorAll('.tooltip');
    
    menuItems.forEach(item => {
        item.addEventListener('click', function () {
            // Cierra todos los tooltips abiertos
            tooltips.forEach(tooltip => tooltip.classList.add('hidden'));
            
            // Muestra el tooltip correspondiente
            const modalId = this.getAttribute('data-modal');
            const tooltip = document.getElementById(modalId);
            tooltip.classList.remove('hidden');
        });
    });

    // Cerrar tooltip
    document.querySelectorAll('.close-tooltip').forEach(button => {
        button.addEventListener('click', function () {
            this.closest('.tooltip').classList.add('hidden');
        });
    });
});

const menuItems1 = document.querySelectorAll('.menu-item');
    
    menuItems1.forEach(item => {
        item.addEventListener('click', function() {
            // Remove active class from all items
            menuItems1.forEach(i => i.classList.remove('bg-blue-200', 'border-blue-400'));
            
            // Add active class to the clicked item
            this.classList.add('bg-blue-200', 'border-blue-400');
        });
    });

//Imagenes animaciones

