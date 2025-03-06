document.addEventListener("DOMContentLoaded", function(e) {
    const templateHome = `
        <div class="bg-gray-50 mt-16">
            <!-- Modal -->
            <div id="myModalHome" class="fixed inset-0 bg-gray-800 bg-opacity-75 flex items-center justify-center z-50">
                <div class="bg-white rounded-lg shadow-lg w-full max-w-3xl h-[90vh] relative mt-20 lg:mt-16 flex flex-col">
                    <div class="flex justify-between items-center p-4 border-b-2 border-pruple-900">
                        <h2 class="text-lg font-bold">Certificado</h2>
                        <button id="closeModalHome" class="bg-purple-900 text-white w-8 h-8 rounded-full hover:bg-red-600 flex items-center justify-center">
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                                <line x1="18" y1="6" x2="6" y2="18"></line>
                                <line x1="6" y1="6" x2="18" y2="18"></line>
                            </svg>
                        </button>
                    </div>
                    <!-- Imagen responsiva -->
                    <div class="flex-1 flex items-center justify-center p-1">
                        <img src="static/img/certificaciones/GRUPO-VICAF-CERTIFICADO.jpg" 
                            class="w-full h-full object-contain" 
                            alt="Certificado">
                    </div>
                </div>
                < /div>
            </div>
            <div class="relative">
                <div class="absolute z-10 px-4 py-4">
                    <p class="text-white lg:text-lg text-sm text-semibold">LABORATORIO DE ENSAYOS ACREDITADO POR INACAL - DA CON REGISTRO N° LE-230</p>
                    <p class="text-white lg:text-xs text-xs text-semibold mt-1">SUELOS - AGREGADOS - CONCRETO - ASFALTO - ROCAS - CAL - CARBÓN</p>
                    <div class="flex mt-4">
                        <button type="button" class="text-gray-800 lg-text-sm text-xs bg-yellow-500 hover:text-white hover:bg-blue-950 focus:outline-none font-medium rounded-lg text-sm px-3 py-1.5 text-center me-2 mb-2 flex"
                            onclick="document.getElementById('servicios').scrollIntoView({ behavior: 'smooth' });"
                            onmouseup="this.blur()">
                            Ver Servicios
                            <svg class="w-4 h-4 fill-gray-800 hover:fill-white ml-2 mt-1 transition-transform duration-300 ease-in-out hover:translate-x-1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512">
                                <path d="M288 32c-80.8 0-145.5 36.8-192.6 80.6C48.6 156 17.3 208 2.5 243.7c-3.3 7.9-3.3 16.7 0 24.6C17.3 304 48.6 356 95.4 399.4C142.5 443.2 207.2 480 288 480s145.5-36.8 192.6-80.6c46.8-43.5 78.1-95.4 93-131.1c3.3-7.9 3.3-16.7 0-24.6c-14.9-35.7-46.2-87.7-93-131.1C433.5 68.8 368.8 32 288 32zM144 256a144 144 0 1 1 288 0 144 144 0 1 1 -288 0zm144-64c0 35.3-28.7 64-64 64c-7.1 0-13.9-1.2-20.3-3.3c-5.5-1.8-11.9 1.6-11.7 7.4c.3 6.9 1.3 13.8 3.2 20.7c13.7 51.2 66.4 81.6 117.6 67.9s81.6-66.4 67.9-117.6c-11.1-41.5-47.8-69.4-88.6-71.1c-5.8-.2-9.2 6.1-7.4 11.7c2.1 6.4 3.3 13.2 3.3 20.3z"/>
                            </svg>
                        </button>
                        <a href="static/pdf/BROCHURE_2025_VICAF_2025.pdf" target="_blank" rel="noopener noreferrer">
                            <button type="button" class="ml-4 text-gray-800 lg-text-sm text-xs bg-yellow-500 hover:text-white hover:bg-blue-950 focus:outline-none font-medium rounded-lg text-sm px-3 py-1.5 text-center me-2 mb-2 flex">
                                Descargar Brochure
                                <svg class="w-4 h-4 ml-2 mt-1 transition-transform duration-300 ease-in-out hover:translate-x-1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" fill="currentColor">
                                    <path d="M288 32c0-17.7-14.3-32-32-32s-32 14.3-32 32v242.7l-73.4-73.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3l128 128c12.5 12.5 32.8 12.5 45.3 0l128-128c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L288 274.7V32zM64 352c-35.3 0-64 28.7-64 64v32c0 35.3 28.7 64 64 64h384c35.3 0 64-28.7 64-64v-32c0-35.3-28.7-64-64-64H64zm368 56a24 24 0 1 1 0 48 24 24 0 1 1 0-48z"></path>
                                </svg>
                            </button>
                        </a>
                    </div>
                </div>
            </div>
            <!-- Carousel -->
            <div id="carousel" class="carousel relative w-full h-screen overflow-hidden inset-0 bg-black/50">
                <!-- Carousel Items -->
                <div class="carousel-item active w-full h-full">
                    <img src="static/img/home/PORTADA5.jpg" alt="Image 1" class="w-full h-full object-cover transform transition duration-500 hover:scale-110">
                    <div class="absolute inset-0 flex items-center justify-center">
                        <h2 class="lg:w-96 w-64 h-20 bg-yellow-500 text-gray-800 text-xs lg:text-lg px-2 py-1 font-bold opacity-0 transition-opacity duration-500 ease-in-out hover:opacity-100">
                            Texto sobre Imagen 1
                        </h2>
                    </div>
                </div>
                <div class="carousel-item w-full h-full hidden">
                    <img src="static/img/home/PORTADA4.jpeg" alt="Image 2" class="w-full h-full object-cover transform transition duration-500 hover:scale-110">
                    <div class="absolute inset-0 flex items-center justify-center">
                        <h2 class="lg:w-96 w-64 h-20 bg-yellow-500 text-gray-800 text-xs lg:text-lg px-2 py-1 font-bold opacity-0 transition-opacity duration-500 ease-in-out hover:opacity-100">
                            Texto sobre Imagen 2
                        </h2>
                    </div>
                </div>
                <div class="carousel-item w-full h-full hidden">
                    <img src="static/img/home/PORTADA3.jpg" alt="Image 3" class="w-full h-full object-cover transform transition duration-500 hover:scale-110">
                    <div class="absolute inset-0 flex items-center justify-center">
                        <h2 class="lg:w-96 w-64 h-20 bg-yellow-500 text-gray-800 text-xs lg:text-lg px-2 py-1 font-bold opacity-0 transition-opacity duration-500 ease-in-out hover:opacity-100">
                            Texto sobre Imagen 3
                        </h2>
                    </div>
                </div>
                <div class="carousel-item w-full h-full hidden">
                    <img src="static/img/home/PORTADA2.jpg" alt="Image 4" class="w-full h-full object-cover transform transition duration-500 hover:scale-110">
                    <div class="absolute inset-0 flex items-center justify-center">
                        <h2 class="lg:w-96 w-64 h-20 bg-yellow-500 text-gray-800 text-xs lg:text-lg px-2 py-1 font-bold opacity-0 transition-opacity duration-500 ease-in-out hover:opacity-100">
                            Texto sobre Imagen 4
                        </h2>
                    </div>
                </div>
                <div class="carousel-item w-full h-full hidden">
                    <img src="static/img/home/PORTADA1.jpg" alt="Image 5" class="w-full h-full object-cover transform transition duration-500 hover:scale-110">
                    <div class="absolute inset-0 flex items-center justify-center">
                        <h2 class="lg:w-96 w-64 h-20 bg-yellow-500 text-gray-800 text-xs lg:text-lg px-2 py-1 font-bold opacity-0 transition-opacity duration-500 ease-in-out hover:opacity-100">
                            Texto sobre Imagen 5
                        </h2>
                    </div>
                </div>
                <div class="absolute bottom-16 w-full overflow-hidden">
                    <div class="whitespace-nowrap animate-marquee text-center text-white text-sm font-semibold">
                        PRECISIÓN EN RESULTADOS • ACOMPAÑAMIENTO TÉCNICO • IMPARCIALIDAD Y CONFIDENCIALIDAD • PERSONAL COMPETENTE • EQUIPOS CALIBRADOS POR ENTIDADES ACREDITADAS POR INACAL
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
