document.addEventListener("DOMContentLoaded", function(e) {
    const templateServices = `
        <div id="servicios" class="mx-auto bg-gradient-to-r from-gray-100 via-gray-200 to-gray-300 max-w-full py-12">
    <div class="max-w-7xl mx-auto px-6">
        <div class="text-center mb-12">
            <h2 class="text-3xl lg:text-4xl font-bold tracking-tight text-gray-900">Nuestros Servicios</h2>
            <p class="mt-2 text-lg text-gray-700">Ofrecemos soluciones especializadas para garantizar calidad y seguridad en cada proyecto.</p>
        </div>

        <!-- Grid Container for Cards -->
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
            <!-- Card Template -->
            <div class="bg-white shadow-lg hover:shadow-2xl transition-shadow duration-300 rounded-lg overflow-hidden">
                <img src="static/img/services/CC-1.jpeg" alt="Control de calidad en obra" class="w-full h-56 object-cover hover:scale-105 transition-transform duration-300">
                <div class="p-6">
                    <h3 class="text-xl font-semibold text-gray-900 hover:text-blue-600 transition-colors duration-300">
                        <a href="#">Control de calidad en obra</a>
                    </h3>
                    <p class="mt-3 text-gray-600 text-justify leading-relaxed">Garantizamos que los proyectos se completen de manera satisfactoria y cumplan con los estándares de calidad requeridos.</p>
                </div>
            </div>
            
            <div class="bg-white shadow-lg hover:shadow-2xl transition-shadow duration-300 rounded-lg overflow-hidden">
                <img src="static/img/services/e_mecanica_suelos1.jpg" alt="Estudio de mecánica de suelos" class="w-full h-56 object-cover hover:scale-105 transition-transform duration-300">
                <div class="p-6">
                    <h3 class="text-xl font-semibold text-gray-900 hover:text-blue-600 transition-colors duration-300">
                        <a href="#">Estudio de mecánica de suelos</a>
                    </h3>
                    <p class="mt-3 text-gray-600 text-justify leading-relaxed">Optimización de diseño y costos de cimentación, prevención de problemas de cimentación debido a suelos perjudiciales.</p>
                </div>
            </div>
            
            <div class="bg-white shadow-lg hover:shadow-2xl transition-shadow duration-300 rounded-lg overflow-hidden">
                <img src="static/img/services/EC-1.jpg" alt="Estudio de canteras" class="w-full h-56 object-cover hover:scale-105 transition-transform duration-300">
                <div class="p-6">
                    <h3 class="text-xl font-semibold text-gray-900 hover:text-blue-600 transition-colors duration-300">
                        <a href="#">Estudio de canteras</a>
                    </h3>
                    <p class="mt-3 text-gray-600 text-justify leading-relaxed">Analizamos los materiales en base a las especificaciones de tu proyecto y normas estandarizadas.</p>
                </div>
            </div>
        </div>
    </div>
</div>


        <!-- Botón flotante -->
      <a href="templates/services.html">
    <button id="verMasServicios" class="fixed bottom-1/2 right-0 z-30 transform -translate-y-1/2 bg-gradient-to-r from-blue-700 to-blue-900 text-white font-semibold px-6 py-3 rounded-full shadow-lg flex items-center space-x-3 transition-all duration-300 ease-in-out hover:shadow-2xl hover:from-blue-600 hover:to-blue-800 hover:scale-105">
        <span class="text-white text-sm tracking-wide">Más servicios</span>
        <svg class="h-5 w-5 text-yellow-300" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" fill="currentColor">
            <path d="M128 40c0-22.1 17.9-40 40-40s40 17.9 40 40v148.2c8.5-7.6 19.7-12.2 32-12.2 20.6 0 38.2 13 45 31.2 8.8-9.3 21.2-15.2 35-15.2 25.3 0 46 19.5 47.9 44.3 8.5-7.7 19.8-12.3 32.1-12.3 26.5 0 48 21.5 48 48v48c0 70.7-57.3 128-128 128h-80c-5 0-9.9-.3-14.7-1-55.3-5.6-106.2-34-140-79L8 336c-13.3-17.7-9.7-42.7 8-56s42.7-9.7 56 8l56 74.7L128 40zM240 304c0-8.8-7.2-16-16-16s-16 7.2-16 16v96c0 8.8 7.2 16 16 16s16-7.2 16-16v-96zm48-16c-8.8 0-16 7.2-16 16v96c0 8.8 7.2 16 16 16s16-7.2 16-16v-96c0-8.8-7.2-16-16-16zm80 16c0-8.8-7.2-16-16-16s-16 7.2-16 16v96c0 8.8 7.2 16 16 16s16-7.2 16-16v-96z"/>
        </svg>
    </button>
</a>



    `;
    document.getElementById("services-content").innerHTML = templateServices;

    // Observador para mostrar y ocultar el botón flotante
    const serviciosSection = document.getElementById('servicios');
    const verMasButton = document.getElementById('verMasServicios');

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                // Mostrar el botón si la sección "servicios" está visible
                verMasButton.classList.remove('hidden');
            } else {
                // Ocultar el botón si sale de la vista
                verMasButton.classList.add('hidden');
            }
        });
    }, { threshold: 0.5 }); // 0.5 significa que el 50% del div debe estar visible

    // Empezar a observar la sección de servicios
    observer.observe(serviciosSection);
});
