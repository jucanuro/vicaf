document.addEventListener("DOMContentLoaded", function(e) {
    const templateHome = `
        <div class="bg-gray-50 mt-16">
            <!-- Modal -->
            <div id="myModalHome" class="fixed inset-0 bg-gray-800 bg-opacity-75 flex items-center justify-center z-50">
                <div class="bg-white rounded-lg shadow-lg w-full max-w-3xl h-[90vh] relative mt-16">
                    <div class="flex justify-between items-center p-4 border-b">
                        <h2 class="text-lg font-bold">Certificado</h2>
                        <button id="closeModalHome" class="bg-gray-900 text-white w-8 h-8 rounded-full hover:bg-red-600 flex items-center justify-center">
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                                <line x1="18" y1="6" x2="6" y2="18"></line>
                                <line x1="6" y1="6" x2="18" y2="18"></line>
                            </svg>
                        </button>
                    </div>

                    <!-- Iframe para mostrar el PDF con estilos responsivos -->
                    <iframe id="pdfFrame" src="static/pdf/GRUPO-VICAF-CERFIFICADO.pdf" class="w-full h-[85%]" frameborder="0"></iframe>
                </div>
            </div>

            <!-- Carousel -->
            <div id="carousel" class="carousel relative w-full h-screen overflow-hidden">
                <!-- Carousel Items -->
                <div class="carousel-item active w-full h-full">
                    <img src="static/img/home/PORTADA5.jpg" alt="Image 1" class="w-full h-full object-cover transform transition duration-500 hover:scale-110">
                    <div class="absolute inset-0 flex items-center justify-center">
                        <h2 class="text-white text-3xl font-bold opacity-0 transition-opacity duration-500 ease-in-out hover:opacity-100">Texto sobre Imagen 1</h2>
                    </div>
                </div>
                <div class="carousel-item w-full h-full hidden">
                    <img src="static/img/home/PORTADA4.jpeg" alt="Image 2" class="w-full h-full object-cover transform transition duration-500 hover:scale-110">
                    <div class="absolute inset-0 flex items-center justify-center">
                        <h2 class="text-white text-3xl font-bold opacity-0 transition-opacity duration-500 ease-in-out hover:opacity-100">Texto sobre Imagen 2</h2>
                    </div>
                </div>
                <div class="carousel-item w-full h-full hidden">
                    <img src="static/img/home/PORTADA3.jpg" alt="Image 3" class="w-full h-full object-cover transform transition duration-500 hover:scale-110">
                    <div class="absolute inset-0 flex items-center justify-center">
                        <h2 class="text-white text-3xl font-bold opacity-0 transition-opacity duration-500 ease-in-out hover:opacity-100">Texto sobre Imagen 3</h2>
                    </div>
                </div>
                <div class="carousel-item w-full h-full hidden">
                    <img src="static/img/home/PORTADA2.jpg" alt="Image 4" class="w-full h-full object-cover transform transition duration-500 hover:scale-110">
                    <div class="absolute inset-0 flex items-center justify-center">
                        <h2 class="text-white text-3xl font-bold opacity-0 transition-opacity duration-500 ease-in-out hover:opacity-100">Texto sobre Imagen 4</h2>
                    </div>
                </div>
                <div class="carousel-item w-full h-full hidden">
                    <img src="static/img/home/PORTADA1.jpg" alt="Image 5" class="w-full h-full object-cover transform transition duration-500 hover:scale-110">
                    <div class="absolute inset-0 flex items-center justify-center">
                        <h2 class="text-white text-3xl font-bold opacity-0 transition-opacity duration-500 ease-in-out hover:opacity-100">Texto sobre Imagen 5</h2>
                    </div>
                </div>
            </div>
        </div>
    `;
    document.getElementById("home-content").innerHTML = templateHome;

    // Función para cerrar el modal
    document.getElementById("closeModalHome").addEventListener("click", function() {
        document.getElementById("myModalHome").style.display = "none";
    });

    // Función para cambiar de imagen automáticamente
    let currentIndex = 0;
    const carouselItems = document.querySelectorAll(".carousel-item");
    const totalItems = carouselItems.length;

    function changeImage() {
        // Eliminar clase 'active' de la imagen actual y ocultarla
        carouselItems[currentIndex].classList.remove("active");
        carouselItems[currentIndex].classList.add("hidden");

        // Actualizar el índice
        currentIndex = (currentIndex + 1) % totalItems;

        // Mostrar la siguiente imagen y agregar clase 'active'
        carouselItems[currentIndex].classList.remove("hidden");
        carouselItems[currentIndex].classList.add("active");
    }

    // Cambiar imagen cada 5 segundos (5000 ms)
    setInterval(changeImage, 5000);
});
