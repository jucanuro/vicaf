document.addEventListener("DOMContentLoaded", function(e) {
    const templateServices = `
        <div id="servicios" class="mx-auto bg-gradient-to-r from-slate-50 via-gray-100 to-gray-200 max-w-full">
            <div class="py-8">
                <div class="mx-auto max-w-full">
                    <div class="mx-auto max-w-2xl mt-2 text-center">
                        <h2 class="text-lg lg:text-2xl font-bold tracking-tight text-blue-950">Nuestros Servicios</h2>
                    </div>

                    <!-- Grid Container for Cards -->
                    <div class="mx-auto mt-8 grid grid-cols-1 lg:grid-cols-3 gap-x-8 gap-y-20">
                        
                        <!-- Card 1 -->
                        <div class="shadow-lg hover:shadow-xl transition-shadow duration-300 rounded-lg overflow-hidden">
                            <article class="flex flex-col items-start justify-between px-6 py-4">
                                <div class="relative w-full">
                                    <img src="static/img/services/CC-1.jpeg" alt="" class="aspect-[16/9] w-full rounded-t-lg bg-gray-100 object-cover hover:scale-105 transition-transform duration-300">
                                </div>
                                <div class="max-w-xl card-content">
                                    <div class="px-4 py-4 bg-white hover:bg-gray-50 transition-all duration-300 ease-in-out">
                                        <h3 class="mt-4 text-lg font-semibold leading-6 text-blue-950 hover:text-amber-600">
                                            <a href="#"><span class="absolute inset-0"></span> Control de calidad en obra </a>
                                        </h3>
                                        <p class="mt-3 text-sm text-justify leading-6 text-gray-600">Garantizamos que los proyectos se completen de manera satisfactoria y cumplan con los estándares de calidad requeridos.</p>
                                    </div>
                                </div>
                            </article>
                        </div>

                        <!-- Card 2 -->
                        <div class="shadow-lg hover:shadow-xl transition-shadow duration-300 rounded-lg overflow-hidden">
                            <article class="flex flex-col items-start justify-between px-6 py-4">
                                <div class="relative w-full">
                                    <img src="static/img/services/e_mecanica_suelos1.jpg" alt="" class="aspect-[16/9] w-full rounded-t-lg bg-gray-100 object-cover hover:scale-105 transition-transform duration-300">
                                </div>
                                <div class="max-w-xl card-content">
                                    <div class="px-4 py-4 bg-white hover:bg-gray-50 transition-all duration-300 ease-in-out">
                                        <h3 class="mt-4 text-lg font-semibold leading-6 text-blue-950 hover:text-amber-600">
                                            <a href="#"><span class="absolute inset-0"></span> Estudio de mecánica de suelos </a>
                                        </h3>
                                        <p class="mt-3 text-sm text-justify leading-6 text-gray-600">Optimización de diseño y costos de Cimentación, Previsión de posibles problemas de cimentación a causa de suelos perjudiciales.</p>
                                    </div>
                                </div>
                            </article>
                        </div>

                        <!-- Card 3 -->
                        <div class="shadow-lg hover:shadow-xl transition-shadow duration-300 rounded-lg overflow-hidden">
                            <article class="flex flex-col items-start justify-between px-6 py-4">
                                <div class="relative w-full">
                                    <img src="static/img/services/EC-1.jpg" alt="" class="aspect-[16/9] w-full rounded-t-lg bg-gray-100 object-cover hover:scale-105 transition-transform duration-300">
                                </div>
                                <div class="max-w-xl card-content">
                                    <div class="px-4 py-4 bg-white hover:bg-gray-50 transition-all duration-300 ease-in-out">
                                        <h3 class="mt-4 text-lg font-semibold leading-6 text-blue-950 hover:text-amber-600">
                                            <a href="#"><span class="absolute inset-0"></span> Estudio de canteras </a>
                                        </h3>
                                        <p class="mt-3 text-sm text-justify leading-6 text-gray-600">Analizamos los materiales en base a las especificaciones de tu proyecto y en base a normas estandarizadas.</p>
                                    </div>
                                </div>
                            </article>
                        </div>
                        
                    </div>
                </div>
            </div>
        </div>    

        <!-- Botón flotante -->
      <a href="templates/services.html">
    <button id="verMasServicios" class="border border-gray-200 fixed bottom-1/2 z-30 right-0   transform -translate-x-1/2 -translate-y-1/2 bg-gradient-to-r from-gray-200 to-gray-400 text-white hover:text-yellow-300 font-bold px-6 py-3 rounded-full shadow-lg hidden hover:shadow-2xl transition-all duration-300 ease-in-out flex items-center space-x-2">
        <span class="text-gray-900 text-sm hover:text-white drop-shadow-lg">Más servicios click Aquí</span>
        <svg class="h-6 w-6 fill-yellow-400 hover:fill-yellow-400 text-white drop-shadow-lg" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><!-- Icono de mano -->
            <path d="M128 40c0-22.1 17.9-40 40-40s40 17.9 40 40l0 148.2c8.5-7.6 19.7-12.2 32-12.2c20.6 0 38.2 13 45 31.2c8.8-9.3 21.2-15.2 35-15.2c25.3 0 46 19.5 47.9 44.3c8.5-7.7 19.8-12.3 32.1-12.3c26.5 0 48 21.5 48 48v48c0 70.7-57.3 128-128 128h-16-64-5.2c-5 0-9.9-.3-14.7-1c-55.3-5.6-106.2-34-140-79L8 336c-13.3-17.7-9.7-42.7 8-56s42.7-9.7 56 8l56 74.7L128 40zM240 304c0-8.8-7.2-16-16-16s-16 7.2-16 16v96c0 8.8 7.2 16 16 16s16-7.2 16-16v-96zm48-16c-8.8 0-16 7.2-16 16v96c0 8.8 7.2 16 16 16s16-7.2 16-16v-96c0-8.8-7.2-16-16-16zm80 16c0-8.8-7.2-16-16-16s-16 7.2-16 16v96c0 8.8 7.2 16 16 16s16-7.2 16-16v-96z"/>
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
