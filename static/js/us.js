document.addEventListener("DOMContentLoaded", function(e) {
    const templateUs = ` <div id="nosotros" class="mx-auto max-w-full mb-4  lg:mb-0">
        <div class="container max-w-full">
          <div class="grid grid-cols-1 lg:grid-cols-12 gap-8">
            <div class="col-span-12 px-4">
              <div class="mt-6">
                <h2 class="text-lg mt-6 lg:text-2xl font-bold tracking-tight text-gray-900 text-center">Sobre Nosotros</h2>
                <p class="mt-6 lg:mt-12 px-2 lg:px-0 text-xs md:text-sm lg:text-md text-gray-900 text-justify">
                        GRUPO VICAF brinda servicios de
                        calidad en la realización de ensayos de
                        materiales de construcción para
                        garantizar información válida para la
                        evaluación del cumplimiento con los
                        estándares de calidad y seguridad
                        necesarios para su uso en proyectos de
                        construcción.
                </p>
              </div>
              <div class="grid lg:grid-cols-2 grid-cols-1 gap-4">
                <div class="col-span-1 mt-8 shadow-lg bg-white p-4 rounded-lg">
                    <div class="flex">
                      <div>
                        <svg  class="w-6 h-6 fill-yellow-400" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512"><!--!Font Awesome Free 6.7.2 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2025 Fonticons, Inc.--><path d="M192 48a48 48 0 1 1 96 0 48 48 0 1 1 -96 0zm51.3 182.7L224.2 307l49.7 49.7c9 9 14.1 21.2 14.1 33.9l0 89.4c0 17.7-14.3 32-32 32s-32-14.3-32-32l0-82.7-73.9-73.9c-15.8-15.8-22.2-38.6-16.9-60.3l20.4-84c8.3-34.1 42.7-54.9 76.7-46.4c19 4.8 35.6 16.4 46.4 32.7L305.1 208l30.9 0 0-24c0-13.3 10.7-24 24-24s24 10.7 24 24l0 55.8c0 .1 0 .2 0 .2s0 .2 0 .2L384 488c0 13.3-10.7 24-24 24s-24-10.7-24-24l0-216-39.4 0c-16 0-31-8-39.9-21.4l-13.3-20zM81.1 471.9L117.3 334c3 4.2 6.4 8.2 10.1 11.9l41.9 41.9L142.9 488.1c-4.5 17.1-22 27.3-39.1 22.8s-27.3-22-22.8-39.1zm55.5-346L101.4 266.5c-3 12.1-14.9 19.9-27.2 17.9l-47.9-8c-14-2.3-22.9-16.3-19.2-30L31.9 155c9.5-34.8 41.1-59 77.2-59l4.2 0c15.6 0 27.1 14.7 23.3 29.8z"/></svg>
                      </div>
                      <div>
                        <h2 class="ml-2 text-md lg:text-xl font-bold text-gray-900 mb-4">Misión</h2>
                      </div>
                    </div>
                    <p class="text-gray-900 text-xs ml-8 md:text-sm mr-2 text-md text-justify">
                      Diseñar obras civiles y brindar servicios
                                  complementarios, que garanticen la
                                  seguridad, comodidad y la optimización
                                  de recursos en la ejecución de los
                                  proyectos de nuestros clientes, acorde
                                  con sus necesidades y expectativas.
                    </p>
                </div>
                <div class="col-span-1 mt-8 shadow-lg bg-white p-4 rounded-lg">
                    <div class="flex">
                      <div>
                         <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" class="w-6 h-6 text-yellow-400">
                          <!-- Cuerpo del telescopio -->
                          <rect x="6" y="8" width="12" height="4" rx="1" class="fill-current" />
                          <circle cx="18" cy="10" r="2" class="fill-current" />
                          <circle cx="6" cy="10" r="2" class="fill-current" />
                          
                          <!-- Soporte del telescopio -->
                          <rect x="10" y="12" width="4" height="6" class="fill-current" />
                          
                          <!-- Trípode -->
                          <path d="M10 18L6 22M14 18L18 22" stroke="currentColor" stroke-width="2" stroke-linecap="round" />
                        </svg>
                      </div>
                      <div>
                        <h2 class="ml-2 text-md lg:text-xl font-bold text-gray-900 mb-4">Visión</h2>
                      </div>
                    </div>
                    <p class="text-gray-900 text-xs ml-8 md:text-sm mr-2 text-md text-justify">
                      Ser reconocidos en el ámbito regional y
                              nacional como una empresa que brinda
                              soluciones tangibles e innovadoras
                              para los proyectos de nuestros clientes.
                    </p>
                </div>
              </div>
              <div class="grid lg:grid-cols-12 grid-cols-1 gap-4">
                <div class="col-span-3 lg:mt-8 mt-4">
                    <div class="flex">
                        <div>
                          <svg xmlns="http://www.w3.org/2000/svg" class="w-6 h-6 text-yellow-400 mt-1" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                            <path d="M16.87 3.35A6.002 6.002 0 0012 2a6.002 6.002 0 00-4.87 1.35A4.992 4.992 0 004 6c0 2.21 1.46 4.04 3.5 4.67V18H6v1h12v-1h-1.5v-7.33c2.04-.63 3.5-2.46 3.5-4.67a4.992 4.992 0 00-2.87-2.65zM12 4a4 4 0 014 4c0 1.43-.74 2.68-1.85 3.42-.58-.39-1.23-.69-1.88-.95-.27-.12-.53-.24-.79-.34-.25.1-.51.22-.78.34-.64.28-1.3.58-1.9.92A4.978 4.978 0 018 8a4 4 0 014-4zm-3 14v-2h6v2h-6z" />
                          </svg>
                        </div>
                        <div>
                          <h2 class="ml-2 text-md lg:text-xl font-bold text-gray-900">Logros</h2>
                        </div>
                    </div>
                    <div class="bg-white shadow-lg mt-4  rounded-2xl overflow-hidden transform transition duration-300 hover:scale-105">
                        <img src="static/img/certificaciones/GRUPO-VICAF-CERTIFICADO.jpg" alt="Imagen" class="w-full h-56 object-contain">
                        <div class="p-4 flex justify-between">
                          <h2 class="text-xs lg:text-lg font-semibold text-gray-800">Acreditación INACAL</h2>
                          <button data-modal="modal1" class="ml-auto mb-1  text-blue-500 hover:text-blue-700">
                            <svg xmlns="http://www.w3.org/2000/svg" class="lg:w-6 lg:h-6 w-4 h-4 text-red-600" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                              <path d="M19 2H8.414A2 2 0 006 3.414L4.586 5H4a2 2 0 00-2 2v14a2 2 0 002 2h14a2 2 0 002-2V5a2 2 0 00-2-2zm-1 18H6v-1.5h12V20zm-2.5-4H8V8h7.5v4.5h1V8h1.5v4.5h-1V11h-1.5v5.5zM7.5 13v-1.5h-1v-1h1v-1.5h1V11h-1v1.5h1V13h-1zM12 12.5v-1h-1.5v1H12zm0 1.5v-1h-1.5v1H12z" />
                            </svg>
                          </button>
                        </div>
                    </div>
                </div>
                <div class="col-span-9 lg:mt-8 mt-4">
                    <div class="flex">
                        <div>
                          <svg class="w-4 h-4 mt-2 fill-yellow-400"  xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><!--!Font Awesome Free 6.6.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2024 Fonticons, Inc.--><path d="M240.1 4.2c9.8-5.6 21.9-5.6 31.8 0l171.8 98.1L448 104l0 .9 47.9 27.4c12.6 7.2 18.8 22 15.1 36s-16.4 23.8-30.9 23.8L32 192c-14.5 0-27.2-9.8-30.9-23.8s2.5-28.8 15.1-36L64 104.9l0-.9 4.4-1.6L240.1 4.2zM64 224l64 0 0 192 40 0 0-192 64 0 0 192 48 0 0-192 64 0 0 192 40 0 0-192 64 0 0 196.3c.6 .3 1.2 .7 1.8 1.1l48 32c11.7 7.8 17 22.4 12.9 35.9S494.1 512 480 512L32 512c-14.1 0-26.5-9.2-30.6-22.7s1.1-28.1 12.9-35.9l48-32c.6-.4 1.2-.7 1.8-1.1L64 224z"/></svg>
                        </div>
                        <div>
                          <h2 class="ml-2 text-md lg:text-xl text-gray-900 font-bold">Políticas</h2>
                        </div>
                    </div>
                    <div class="grid lg:grid-cols-9 grid-cols-1 gap-4 mt-4">
                        <div class="col-span-3">
                            <div class="bg-white shadow-lg  rounded-2xl overflow-hidden transform transition duration-300 hover:scale-105">
                                <img src="static/img/politicas/POLITICA_DE_CALIDAD.jpg" alt="Imagen" class="w-full h-56 object-contain">
                                <div class="p-4 flex justify-between">
                                  <h2 class="text-xs lg:text-lg font-semibold text-gray-800">Política de calidad</h2>
                                  <button data-modal="modal2" class="ml-auto  text-blue-500 hover:text-blue-700">
                                    <svg xmlns="http://www.w3.org/2000/svg" class="lg:w-6 lg:h-6 w-4 h-4 text-red-600" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                                      <path d="M19 2H8.414A2 2 0 006 3.414L4.586 5H4a2 2 0 00-2 2v14a2 2 0 002 2h14a2 2 0 002-2V5a2 2 0 00-2-2zm-1 18H6v-1.5h12V20zm-2.5-4H8V8h7.5v4.5h1V8h1.5v4.5h-1V11h-1.5v5.5zM7.5 13v-1.5h-1v-1h1v-1.5h1V11h-1v1.5h1V13h-1zM12 12.5v-1h-1.5v1H12zm0 1.5v-1h-1.5v1H12z" />
                                    </svg>
                                  </button>
                                </div>
                            </div>
                        </div>
                        <div class="col-span-3">
                            <div class="bg-white shadow-lg  rounded-2xl overflow-hidden transform transition duration-300 hover:scale-105">
                                <img src="static/img/politicas/POLITICA-DE-SEGURIDAD.jpg" alt="Imagen" class="w-full h-56 object-contain">
                                <div class="p-4 flex justify-between">
                                  <h2 class="text-xs lg:text-lg font-semibold text-gray-800">Política de seguridad</h2>
                                  <button data-modal="modal3" class="ml-auto  text-blue-500 hover:text-blue-700">
                                    <svg xmlns="http://www.w3.org/2000/svg" class="lg:w-6 lg:h-6 w-4 h-4 text-red-600" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                                      <path d="M19 2H8.414A2 2 0 006 3.414L4.586 5H4a2 2 0 00-2 2v14a2 2 0 002 2h14a2 2 0 002-2V5a2 2 0 00-2-2zm-1 18H6v-1.5h12V20zm-2.5-4H8V8h7.5v4.5h1V8h1.5v4.5h-1V11h-1.5v5.5zM7.5 13v-1.5h-1v-1h1v-1.5h1V11h-1v1.5h1V13h-1zM12 12.5v-1h-1.5v1H12zm0 1.5v-1h-1.5v1H12z" />
                                    </svg>
                                  </button>
                                </div>
                              </div>
                        </div>
                        <div class="col-span-3">
                            <div class="bg-white shadow-lg  rounded-2xl overflow-hidden transform transition duration-300 hover:scale-105">
                                <img src="static/img/politicas/POLITICA-ANTISOBORNO.jpg" alt="Imagen" class="w-full h-56 object-contain">
                                <div class="p-4 flex justify-between">
                                  <h2 class="text-xs lg:text-lg font-semibold text-gray-800">Política antisoborno</h2>
                                  <button data-modal="modal4" class="ml-auto  text-blue-500 hover:text-blue-700">
                                    <svg xmlns="http://www.w3.org/2000/svg" class="lg:w-6 lg:h-6 w-4 h-4 text-red-600" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                                      <path d="M19 2H8.414A2 2 0 006 3.414L4.586 5H4a2 2 0 00-2 2v14a2 2 0 002 2h14a2 2 0 002-2V5a2 2 0 00-2-2zm-1 18H6v-1.5h12V20zm-2.5-4H8V8h7.5v4.5h1V8h1.5v4.5h-1V11h-1.5v5.5zM7.5 13v-1.5h-1v-1h1v-1.5h1V11h-1v1.5h1V13h-1zM12 12.5v-1h-1.5v1H12zm0 1.5v-1h-1.5v1H12z" />
                                    </svg>
                                  </button>
                                </div>
                              </div>
                        </div>
                    </div>
                </div>
              </div>
              
              <div class="mt-8">
                <!-- Modales -->
                <div id="modal1" class="fixed inset-0 top-2 bg-black bg-opacity-50 hidden flex items-center justify-center z-30">
                    <div class="bg-white p-6 rounded-lg shadow-lg lg:w-1/2 w-full h-full mt-28 relative">
                        <h2 class="text-sm lg:text-lg font-bold mb-4">Acreditación</h2>
                        <iframe src="static/pdf/GRUPO-VICAF-CERFIFICADO.pdf" width="100%" height="100%" class="mb-4" frameborder="0"></iframe>
                        <button data-modal-close="modal1" class="absolute top-2 right-2 text-gray-500">
                            <svg class="w-6 h-6" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><!--!Font Awesome Free 6.6.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2024 Fonticons, Inc.--><path d="M256 512A256 256 0 1 0 256 0a256 256 0 1 0 0 512zM175 175c9.4-9.4 24.6-9.4 33.9 0l47 47 47-47c9.4-9.4 24.6-9.4 33.9 0s9.4 24.6 0 33.9l-47 47 47 47c9.4 9.4 9.4 24.6 0 33.9s-24.6 9.4-33.9 0l-47-47-47 47c-9.4 9.4-24.6 9.4-33.9 0s-9.4-24.6 0-33.9l47-47-47-47c-9.4-9.4-9.4-24.6 0-33.9z"/></svg>
                        </button>
                    </div>
                </div>
                <div id="modal2" class="fixed inset-0 top-2 bg-black bg-opacity-50 hidden flex items-center justify-center z-30">
                    <div class="bg-white p-6 rounded-lg shadow-lg lg:w-1/2 w-full h-full mt-28 relative">
                        <h2 class="text-sm lg:text-lg font-bold mb-4">Políticas de calidad</h2>
                        <iframe src="static/pdf/POLÍTICA_DE_CALIDAD.pdf" width="100%" height="100%" class="mb-4" frameborder="0"></iframe>
                        <button data-modal-close="modal2" class="absolute top-2 right-2 text-gray-500">
                            <svg class="w-6 h-6" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><!--!Font Awesome Free 6.6.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2024 Fonticons, Inc.--><path d="M256 512A256 256 0 1 0 256 0a256 256 0 1 0 0 512zM175 175c9.4-9.4 24.6-9.4 33.9 0l47 47 47-47c9.4-9.4 24.6-9.4 33.9 0s9.4 24.6 0 33.9l-47 47 47 47c9.4 9.4 9.4 24.6 0 33.9s-24.6 9.4-33.9 0l-47-47-47 47c-9.4 9.4-24.6 9.4-33.9 0s-9.4-24.6 0-33.9l47-47-47-47c-9.4-9.4-9.4-24.6 0-33.9z"/></svg>
                        </button>
                    </div>
                </div>
                <div id="modal3" class="fixed inset-0 top-2 bg-black bg-opacity-50 hidden flex items-center justify-center z-30">
                    <div class="bg-white p-6 rounded-lg shadow-lg lg:w-1/2 w-full h-full mt-28 relative">
                        <h2 class="text-sm lg:text-lg font-bold mb-4">Políticas de seguridad</h2>
                        <iframe src="static/pdf/VCF-SGS-POL-001-POLITICA-DE-SEGURIDAD.pdf" width="100%" height="100%" class="mb-4" frameborder="0"></iframe>
                        <button data-modal-close="modal3" class="absolute top-2 right-2 text-gray-500">
                            <svg class="w-6 h-6" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><!--!Font Awesome Free 6.6.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2024 Fonticons, Inc.--><path d="M256 512A256 256 0 1 0 256 0a256 256 0 1 0 0 512zM175 175c9.4-9.4 24.6-9.4 33.9 0l47 47 47-47c9.4-9.4 24.6-9.4 33.9 0s9.4 24.6 0 33.9l-47 47 47 47c9.4 9.4 9.4 24.6 0 33.9s-24.6 9.4-33.9 0l-47-47-47 47c-9.4 9.4-24.6 9.4-33.9 0s-9.4-24.6 0-33.9l47-47-47-47c-9.4-9.4-9.4-24.6 0-33.9z"/></svg>
                        </button>
                    </div>
                </div>
                <div id="modal4" class="fixed inset-0 top-2 bg-black bg-opacity-50 hidden flex items-center justify-center z-30">
                    <div class="bg-white p-6 rounded-lg shadow-lg lg:w-1/2 w-full h-full mt-28 relative">
                        <h2 class="text-sm lg:text-lg font-bold mb-4">Políticas de antisoborno</h2>
                        <iframe src="static/pdf/VCF-SGAS-POL-001-POLÍTICA-ANTISOBORNO.pdf" width="100%" height="100%" class="mb-4" frameborder="0"></iframe>
                        <button data-modal-close="modal4" class="absolute top-2 right-2 text-gray-500">
                            <svg class="w-6 h-6" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><!--!Font Awesome Free 6.6.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2024 Fonticons, Inc.--><path d="M256 512A256 256 0 1 0 256 0a256 256 0 1 0 0 512zM175 175c9.4-9.4 24.6-9.4 33.9 0l47 47 47-47c9.4-9.4 24.6-9.4 33.9 0s9.4 24.6 0 33.9l-47 47 47 47c9.4 9.4 9.4 24.6 0 33.9s-24.6 9.4-33.9 0l-47-47-47 47c-9.4 9.4-24.6 9.4-33.9 0s-9.4-24.6 0-33.9l47-47-47-47c-9.4-9.4-9.4-24.6 0-33.9z"/></svg>
                        </button>
                    </div>
                </div>
              </div>
            </div>
          </div>
        </div>  
    </div>  
    `;
    document.getElementById("us-content").innerHTML = templateUs;

      // Obtener todos los botones que abren modales
      const modalButtons = document.querySelectorAll('[data-modal]');
        
      // Añadir evento de click a los botones para abrir los modales
      modalButtons.forEach(button => {
          button.addEventListener('click', function () {
              const modalId = this.getAttribute('data-modal');
              const modal = document.getElementById(modalId);
              if (modal) {
                  modal.classList.remove('hidden');
              }
          });
      });

      // Obtener todos los botones que cierran modales
      const closeModalButtons = document.querySelectorAll('[data-modal-close]');
      
      // Añadir evento de click a los botones para cerrar los modales
      closeModalButtons.forEach(button => {
          button.addEventListener('click', function () {
              const modalId = this.getAttribute('data-modal-close');
              const modal = document.getElementById(modalId);
              if (modal) {
                  modal.classList.add('hidden');
              }
          });
      });

      // Cerrar el modal al hacer clic fuera del contenido
      window.addEventListener('click', function (e) {
          if (e.target.classList.contains('bg-black')) {
              e.target.classList.add('hidden');
          }
      });
});
