document.addEventListener("DOMContentLoaded", function(e) {
    const templateUs = `<div id="nosotros" class="mx-auto max-w-full mb-4  lg:mb-0">
        <div class="container max-w-full">
          <div class="grid grid-cols-1 lg:grid-cols-5 gap-8">
            <div class="col-span-2 px-4">
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
              <div class="mt-8">
                <div class="flex">
                  <div>
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="w-6 h-6 text-yellow-600">
                      <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8zm-1-13h2v6h-2zm0 8h2v2h-2z"/>
                    </svg>
                  </div>
                  <div>
                    <h2 class="ml-4 text-md lg:text-xl font-bold text-gray-900 mb-4">Misión</h2>
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
              <div class="mt-8">
                <div class="flex">
                  <div>
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="w-6 h-6 text-yellow-600">
                      <circle cx="12" cy="12" r="10" />
                      <line x1="12" y1="6" x2="12" y2="12" />
                      <line x1="6" y1="12" x2="12" y2="12" />
                      <line x1="12" y1="12" x2="18" y2="12" />
                      <line x1="12" y1="12" x2="12" y2="18" />
                    </svg>
                  </div>
                  <div>
                    <h2 class="ml-4 text-md lg:text-xl font-bold text-gray-900 mb-4">Visión</h2>
                  </div>
                </div>
                <p class="text-gray-900 text-xs ml-8 md:text-sm mr-2 text-md text-justify">
                  Ser reconocidos en el ámbito regional y
                          nacional como una empresa que brinda
                          soluciones tangibles e innovadoras
                          para los proyectos de nuestros clientes.
                </p>
              </div>
              <div class="mt-8">
                <div class="flex">
                  <div>
                    <svg xmlns="http://www.w3.org/2000/svg" class="w-6 h-6 text-yellow-600" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                      <path d="M16.87 3.35A6.002 6.002 0 0012 2a6.002 6.002 0 00-4.87 1.35A4.992 4.992 0 004 6c0 2.21 1.46 4.04 3.5 4.67V18H6v1h12v-1h-1.5v-7.33c2.04-.63 3.5-2.46 3.5-4.67a4.992 4.992 0 00-2.87-2.65zM12 4a4 4 0 014 4c0 1.43-.74 2.68-1.85 3.42-.58-.39-1.23-.69-1.88-.95-.27-.12-.53-.24-.79-.34-.25.1-.51.22-.78.34-.64.28-1.3.58-1.9.92A4.978 4.978 0 018 8a4 4 0 014-4zm-3 14v-2h6v2h-6z" />
                    </svg>
                  </div>
                  <div>
                    <h2 class="ml-4 text-md lg:text-xl font-bold text-gray-900">Logros</h2>
                  </div>
                </div>
                <ul class="ml-2 list-disc pl-5 shadow-md px-4 py-4">
                    <li class="ml-2 mb-2 flex items-center mt-3">
                        <div class="flex">
                          <svg class="h-4 w-4 mt-1 fill-gray-600" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><!--!Font Awesome Free 6.6.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2024 Fonticons, Inc.--><path d="M438.6 105.4c12.5 12.5 12.5 32.8 0 45.3l-256 256c-12.5 12.5-32.8 12.5-45.3 0l-128-128c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0L160 338.7 393.4 105.4c12.5-12.5 32.8-12.5 45.3 0z"/></svg>                        
                          <p class="text-gray-900 text-sm text-justify ml-2 mr-2 mb-2">Acreditación</p> 
                        </div>
                        <button data-modal="modal1" class="ml-auto mb-2  text-blue-500 hover:text-blue-700">
                          <svg xmlns="http://www.w3.org/2000/svg" class="w-6 h-6 text-red-600" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                            <path d="M19 2H8.414A2 2 0 006 3.414L4.586 5H4a2 2 0 00-2 2v14a2 2 0 002 2h14a2 2 0 002-2V5a2 2 0 00-2-2zm-1 18H6v-1.5h12V20zm-2.5-4H8V8h7.5v4.5h1V8h1.5v4.5h-1V11h-1.5v5.5zM7.5 13v-1.5h-1v-1h1v-1.5h1V11h-1v1.5h1V13h-1zM12 12.5v-1h-1.5v1H12zm0 1.5v-1h-1.5v1H12z" />
                          </svg>
                        </button>
                    </li>
                    <img class="h-12 w-28 mt-4" src="static/img/logos/LogoT.png" alt="">
                </ul>
                <div class="flex mt-6">
                  <div>
                    <svg class="w-4 h-4 fill-yellow-600"  xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><!--!Font Awesome Free 6.6.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2024 Fonticons, Inc.--><path d="M240.1 4.2c9.8-5.6 21.9-5.6 31.8 0l171.8 98.1L448 104l0 .9 47.9 27.4c12.6 7.2 18.8 22 15.1 36s-16.4 23.8-30.9 23.8L32 192c-14.5 0-27.2-9.8-30.9-23.8s2.5-28.8 15.1-36L64 104.9l0-.9 4.4-1.6L240.1 4.2zM64 224l64 0 0 192 40 0 0-192 64 0 0 192 48 0 0-192 64 0 0 192 40 0 0-192 64 0 0 196.3c.6 .3 1.2 .7 1.8 1.1l48 32c11.7 7.8 17 22.4 12.9 35.9S494.1 512 480 512L32 512c-14.1 0-26.5-9.2-30.6-22.7s1.1-28.1 12.9-35.9l48-32c.6-.4 1.2-.7 1.8-1.1L64 224z"/></svg>
                  </div>
                  <div>
                    <h2 class="ml-4 text-md lg:text-xl font-bold">Políticas</h2>
                  </div>
                </div>
                <ul class="ml-2 list-disc pl-5 shadow-md px-4 py-4">
                  <li class="mb-2 ml-2 flex items-center mt-3">
                    <div class="flex">
                      <svg class="h-4 w-4 mt-1 fill-gray-600" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><!--!Font Awesome Free 6.6.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2024 Fonticons, Inc.--><path d="M438.6 105.4c12.5 12.5 12.5 32.8 0 45.3l-256 256c-12.5 12.5-32.8 12.5-45.3 0l-128-128c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0L160 338.7 393.4 105.4c12.5-12.5 32.8-12.5 45.3 0z"/></svg>                       
                      <p class="text-gray-600 text-sm text-justify ml-2 mr-2 mb-2">Política de Calidad</p> 
                    </div>  
                      <button data-modal="modal2" class="ml-auto  text-blue-500 hover:text-blue-700">
                        <svg xmlns="http://www.w3.org/2000/svg" class="w-6 h-6 text-red-600" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                          <path d="M19 2H8.414A2 2 0 006 3.414L4.586 5H4a2 2 0 00-2 2v14a2 2 0 002 2h14a2 2 0 002-2V5a2 2 0 00-2-2zm-1 18H6v-1.5h12V20zm-2.5-4H8V8h7.5v4.5h1V8h1.5v4.5h-1V11h-1.5v5.5zM7.5 13v-1.5h-1v-1h1v-1.5h1V11h-1v1.5h1V13h-1zM12 12.5v-1h-1.5v1H12zm0 1.5v-1h-1.5v1H12z" />
                        </svg>
                      </button>
                  </li>
                  <li class="mb-2 ml-2 flex items-center">
                    <div class="flex">
                      <svg class="h-4 w-4 mt-1 fill-gray-600" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><!--!Font Awesome Free 6.6.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2024 Fonticons, Inc.--><path d="M438.6 105.4c12.5 12.5 12.5 32.8 0 45.3l-256 256c-12.5 12.5-32.8 12.5-45.3 0l-128-128c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0L160 338.7 393.4 105.4c12.5-12.5 32.8-12.5 45.3 0z"/></svg>                        
                      <p class="text-gray-600 text-sm text-justify ml-2 mr-2 mb-2">Política de Seguridad</p> 
                    </div>
                    <button data-modal="modal3" class="ml-auto  text-blue-500 hover:text-blue-700">
                      <svg xmlns="http://www.w3.org/2000/svg" class="w-6 h-6 text-red-600" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                        <path d="M19 2H8.414A2 2 0 006 3.414L4.586 5H4a2 2 0 00-2 2v14a2 2 0 002 2h14a2 2 0 002-2V5a2 2 0 00-2-2zm-1 18H6v-1.5h12V20zm-2.5-4H8V8h7.5v4.5h1V8h1.5v4.5h-1V11h-1.5v5.5zM7.5 13v-1.5h-1v-1h1v-1.5h1V11h-1v1.5h1V13h-1zM12 12.5v-1h-1.5v1H12zm0 1.5v-1h-1.5v1H12z" />
                      </svg>
                    </button>
                  </li>
                  <li class="mb-2 ml-2 flex items-center">
                    <div class="flex">
                      <svg class="h-4 w-4 mt-1 fill-gray-600" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><!--!Font Awesome Free 6.6.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2024 Fonticons, Inc.--><path d="M438.6 105.4c12.5 12.5 12.5 32.8 0 45.3l-256 256c-12.5 12.5-32.8 12.5-45.3 0l-128-128c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0L160 338.7 393.4 105.4c12.5-12.5 32.8-12.5 45.3 0z"/></svg>                       
                      <p class="text-gray-600 text-sm text-justify ml-2 mr-2 mb-2">Política de Antisoborno</p> 
                    </div>
                    <button data-modal="modal4" class="ml-auto  text-blue-500 hover:text-blue-700">
                      <svg xmlns="http://www.w3.org/2000/svg" class="w-6 h-6 text-red-600" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                        <path d="M19 2H8.414A2 2 0 006 3.414L4.586 5H4a2 2 0 00-2 2v14a2 2 0 002 2h14a2 2 0 002-2V5a2 2 0 00-2-2zm-1 18H6v-1.5h12V20zm-2.5-4H8V8h7.5v4.5h1V8h1.5v4.5h-1V11h-1.5v5.5zM7.5 13v-1.5h-1v-1h1v-1.5h1V11h-1v1.5h1V13h-1zM12 12.5v-1h-1.5v1H12zm0 1.5v-1h-1.5v1H12z" />
                      </svg>
                    </button>
                  </li>
              </ul>
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
            <div class="col-span-3">
              <section class="hidden lg:block">
                <div class="mx-auto max-w-screen-xl text-center">
                    <div class="mx-auto mb-1 max-w-screen-sm lg:mb-12">
                        <h2 class="text-lg lg:text-2xl font-bold tracking-tight text-gray-900 sm:text-3xl text-center  py-4 mb-2">Nuestro Equipo</h2>
                    </div> 
                    <div class="grid gap-8 lg:gap-10 grid-cols-2 md:grid-cols-3 lg:grid-cols-3">
                        <div class="text-center text-gray-500 dark:text-gray-400 hover:rounded-full transform hover:translate-y-2 transition-transform duration-300 ease-in-out">
                            <img class="mx-auto mb-4 w-20 h-20 lg:w-28 lg:h-28 rounded-full" src="static/img/staff/Carmen.png" alt="Bonnie Avatar">
                            <h3 class="mb-1 text-xs lg:text-sm font-semibold tracking-tight text-gray-900 dark:text-white">
                                <a href="#">Carmen Bernui Escobedo</a>
                            </h3>
                            <p class="text-xs lg:text-sm">Gerente General</p>
                            <ul class="flex justify-center mt-4 space-x-4">
                                <li>
                                    <a href="https://www.linkedin.com/in/carmen-bernui-escobedo-19338b28/" target="_blank" class="text-[#39569c] hover:text-gray-900 dark:hover:text-white">
                                      <svg class="w-6 h-6" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><!--!Font Awesome Free 6.6.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2024 Fonticons, Inc.--><path d="M416 32H31.9C14.3 32 0 46.5 0 64.3v383.4C0 465.5 14.3 480 31.9 480H416c17.6 0 32-14.5 32-32.3V64.3c0-17.8-14.4-32.3-32-32.3zM135.4 416H69V202.2h66.5V416zm-33.2-243c-21.3 0-38.5-17.3-38.5-38.5S80.9 96 102.2 96c21.2 0 38.5 17.3 38.5 38.5 0 21.3-17.2 38.5-38.5 38.5zm282.1 243h-66.4V312c0-24.8-.5-56.7-34.5-56.7-34.6 0-39.9 27-39.9 54.9V416h-66.4V202.2h63.7v29.2h.9c8.9-16.8 30.6-34.5 62.9-34.5 67.2 0 79.7 44.3 79.7 101.9V416z"/></svg>                                </a>
                                </li>
                                <li>
                                    <a href="mailto:carmen.bernui@grupovicaf.com" target="_blank" class="text-gray-900 hover:text-gray-900 dark:hover:text-white dark:text-gray-300">
                                      <svg class="w-6 h-6 fill-red-700" fill="currentColor" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><!--!Font Awesome Free 6.6.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2024 Fonticons, Inc.--><path d="M48 64C21.5 64 0 85.5 0 112c0 15.1 7.1 29.3 19.2 38.4L236.8 313.6c11.4 8.5 27 8.5 38.4 0L492.8 150.4c12.1-9.1 19.2-23.3 19.2-38.4c0-26.5-21.5-48-48-48L48 64zM0 176L0 384c0 35.3 28.7 64 64 64l384 0c35.3 0 64-28.7 64-64l0-208L294.4 339.2c-22.8 17.1-54 17.1-76.8 0L0 176z"/></svg>                                  </a>
                                </li>
                            </ul>
                        </div>
                        <div class="text-center text-gray-500 dark:text-gray-400 hover:rounded-full transform hover:translate-y-2 transition-transform duration-300 ease-in-out">
                            <img class="mx-auto mb-4 w-20 h-20 lg:w-28 lg:h-28 rounded-full" src="static/img/staff/Frank.png" alt="Helene Avatar">
                            <h3 class="mb-1 text-xs lg:text-sm font-semibold tracking-tight text-gray-900 dark:text-white">
                                <a href="#">Frank Gonzáles Vásquez</a>
                            </h3>
                            <p class="text-xs lg:text-sm">Gerente Operativo</p>
                            <ul class="flex justify-center mt-4 space-x-4">
                              <li>
                                <a href="https://pe.linkedin.com/in/frank-gonz%C3%A1les-80b2a2a8" target="_blank" class="text-[#39569c] hover:text-gray-900 dark:hover:text-white">
                                  <svg class="w-6 h-6" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><!--!Font Awesome Free 6.6.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2024 Fonticons, Inc.--><path d="M416 32H31.9C14.3 32 0 46.5 0 64.3v383.4C0 465.5 14.3 480 31.9 480H416c17.6 0 32-14.5 32-32.3V64.3c0-17.8-14.4-32.3-32-32.3zM135.4 416H69V202.2h66.5V416zm-33.2-243c-21.3 0-38.5-17.3-38.5-38.5S80.9 96 102.2 96c21.2 0 38.5 17.3 38.5 38.5 0 21.3-17.2 38.5-38.5 38.5zm282.1 243h-66.4V312c0-24.8-.5-56.7-34.5-56.7-34.6 0-39.9 27-39.9 54.9V416h-66.4V202.2h63.7v29.2h.9c8.9-16.8 30.6-34.5 62.9-34.5 67.2 0 79.7 44.3 79.7 101.9V416z"/></svg>                                </a>
                              </li>
                                <li>
                                  <a href="mailto:frank.gonzales@grupovicaf.com" target="_blank" class="text-gray-900 hover:text-gray-900 dark:hover:text-white dark:text-gray-300">
                                    <svg class="w-6 h-6 fill-red-700" fill="currentColor" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><!--!Font Awesome Free 6.6.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2024 Fonticons, Inc.--><path d="M48 64C21.5 64 0 85.5 0 112c0 15.1 7.1 29.3 19.2 38.4L236.8 313.6c11.4 8.5 27 8.5 38.4 0L492.8 150.4c12.1-9.1 19.2-23.3 19.2-38.4c0-26.5-21.5-48-48-48L48 64zM0 176L0 384c0 35.3 28.7 64 64 64l384 0c35.3 0 64-28.7 64-64l0-208L294.4 339.2c-22.8 17.1-54 17.1-76.8 0L0 176z"/></svg>                                  </a>
                                </li>
                            </ul>
                        </div>
                        <div class="text-center text-gray-500 dark:text-gray-400 hover:rounded-full transform hover:translate-y-2 transition-transform duration-300 ease-in-out">
                            <img class="mx-auto mb-4 w-20 h-20 lg:w-28 lg:h-28 rounded-full" src="static/img/staff/Raquel.png" alt="Jese Avatar">
                            <h3 class="mb-1 text-xs lg:text-sm font-semibold tracking-tight text-gray-900 dark:text-white">
                                <a href="#">Jessica Raquel Riojas Ortiz</a>
                            </h3>
                            <p class="text-xs lg:text-sm">Jefe de Laboratorio</p>
                            <ul class="flex justify-center mt-4 space-x-4">
                              <li>
                                <a href="https://www.linkedin.com/in/jessica-raquel-riojas-ortiz-219278140/" target="_blank" class="text-[#39569c] hover:text-gray-900 dark:hover:text-white">
                                  <svg class="w-6 h-6" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><!--!Font Awesome Free 6.6.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2024 Fonticons, Inc.--><path d="M416 32H31.9C14.3 32 0 46.5 0 64.3v383.4C0 465.5 14.3 480 31.9 480H416c17.6 0 32-14.5 32-32.3V64.3c0-17.8-14.4-32.3-32-32.3zM135.4 416H69V202.2h66.5V416zm-33.2-243c-21.3 0-38.5-17.3-38.5-38.5S80.9 96 102.2 96c21.2 0 38.5 17.3 38.5 38.5 0 21.3-17.2 38.5-38.5 38.5zm282.1 243h-66.4V312c0-24.8-.5-56.7-34.5-56.7-34.6 0-39.9 27-39.9 54.9V416h-66.4V202.2h63.7v29.2h.9c8.9-16.8 30.6-34.5 62.9-34.5 67.2 0 79.7 44.3 79.7 101.9V416z"/></svg>                                </a>
                              </li>
                                <li>
                                  <a href="#" class="text-gray-900 hover:text-gray-900 dark:hover:text-white dark:text-gray-300">
                                    <svg class="w-6 h-6 fill-red-700" fill="currentColor" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><!--!Font Awesome Free 6.6.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2024 Fonticons, Inc.--><path d="M48 64C21.5 64 0 85.5 0 112c0 15.1 7.1 29.3 19.2 38.4L236.8 313.6c11.4 8.5 27 8.5 38.4 0L492.8 150.4c12.1-9.1 19.2-23.3 19.2-38.4c0-26.5-21.5-48-48-48L48 64zM0 176L0 384c0 35.3 28.7 64 64 64l384 0c35.3 0 64-28.7 64-64l0-208L294.4 339.2c-22.8 17.1-54 17.1-76.8 0L0 176z"/></svg>                                  </a>
                                </li>
                            </ul>
                        </div>
                        <div class="text-center text-gray-500 dark:text-gray-400 hover:rounded-full transform hover:translate-y-2 transition-transform duration-300 ease-in-out">
                          <img class="mx-auto mb-4 w-20 h-20 lg:w-28 lg:h-28 rounded-full" src="static/img/staff/Romario.png" alt="Bonnie Avatar">
                          <h3 class="mb-1 text-xs lg:text-sm font-semibold tracking-tight text-gray-900 dark:text-white">
                              <a href="#">Romario Idrogo Estela</a>
                          </h3>
                          <p class="text-xs lg:text-sm">Asistente de Operaciones</p>
                          <ul class="flex justify-center mt-4 space-x-4">
                            <li>
                              <a href="https://www.linkedin.com/in/oscar-romario-idrogo-estela-61576a276/" target="_blank" class="text-[#39569c] hover:text-gray-900 dark:hover:text-white">
                                <svg class="w-6 h-6" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><!--!Font Awesome Free 6.6.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2024 Fonticons, Inc.--><path d="M416 32H31.9C14.3 32 0 46.5 0 64.3v383.4C0 465.5 14.3 480 31.9 480H416c17.6 0 32-14.5 32-32.3V64.3c0-17.8-14.4-32.3-32-32.3zM135.4 416H69V202.2h66.5V416zm-33.2-243c-21.3 0-38.5-17.3-38.5-38.5S80.9 96 102.2 96c21.2 0 38.5 17.3 38.5 38.5 0 21.3-17.2 38.5-38.5 38.5zm282.1 243h-66.4V312c0-24.8-.5-56.7-34.5-56.7-34.6 0-39.9 27-39.9 54.9V416h-66.4V202.2h63.7v29.2h.9c8.9-16.8 30.6-34.5 62.9-34.5 67.2 0 79.7 44.3 79.7 101.9V416z"/></svg>                                </a>
                            </li>
                              <li>
                                <a href="#" class="text-gray-900 hover:text-gray-900 dark:hover:text-white dark:text-gray-300">
                                  <svg class="w-6 h-6 fill-red-700" fill="currentColor" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><!--!Font Awesome Free 6.6.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2024 Fonticons, Inc.--><path d="M48 64C21.5 64 0 85.5 0 112c0 15.1 7.1 29.3 19.2 38.4L236.8 313.6c11.4 8.5 27 8.5 38.4 0L492.8 150.4c12.1-9.1 19.2-23.3 19.2-38.4c0-26.5-21.5-48-48-48L48 64zM0 176L0 384c0 35.3 28.7 64 64 64l384 0c35.3 0 64-28.7 64-64l0-208L294.4 339.2c-22.8 17.1-54 17.1-76.8 0L0 176z"/></svg>                                  </a>
                              </li>
                          </ul>
                        </div>
                        <div class="text-center text-gray-500 dark:text-gray-400 hover:rounded-full transform hover:translate-y-2 transition-transform duration-300 ease-in-out">
                          <img class="mx-auto mb-4 w-20 h-20 lg:w-28 lg:h-28 fill-red-700 rounded-full" src="static/img/staff/Romario.png" alt="Helene Avatar">
                          <h3 class="mb-1 text-xs lg:text-sm font-semibold tracking-tight text-gray-900 dark:text-white">
                              <a href="#">Cristian Valdivia Villanueva</a>
                          </h3>
                          <p class="text-xs lg:text-sm">Técnico de Ensayos</p>
                          <ul class="flex justify-center mt-4 space-x-4">
                            <li>
                              <a href="#" class="text-[#39569c] hover:text-gray-900 dark:hover:text-white">
                                <svg class="w-6 h-6" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><!--!Font Awesome Free 6.6.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2024 Fonticons, Inc.--><path d="M416 32H31.9C14.3 32 0 46.5 0 64.3v383.4C0 465.5 14.3 480 31.9 480H416c17.6 0 32-14.5 32-32.3V64.3c0-17.8-14.4-32.3-32-32.3zM135.4 416H69V202.2h66.5V416zm-33.2-243c-21.3 0-38.5-17.3-38.5-38.5S80.9 96 102.2 96c21.2 0 38.5 17.3 38.5 38.5 0 21.3-17.2 38.5-38.5 38.5zm282.1 243h-66.4V312c0-24.8-.5-56.7-34.5-56.7-34.6 0-39.9 27-39.9 54.9V416h-66.4V202.2h63.7v29.2h.9c8.9-16.8 30.6-34.5 62.9-34.5 67.2 0 79.7 44.3 79.7 101.9V416z"/></svg>                                </a>
                            </li>
                              <li>
                                <a href="#" class="text-gray-900 hover:text-gray-900 dark:hover:text-white dark:text-gray-300">
                                  <svg class="w-6 h-6 fill-red-700" fill="currentColor" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><!--!Font Awesome Free 6.6.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2024 Fonticons, Inc.--><path d="M48 64C21.5 64 0 85.5 0 112c0 15.1 7.1 29.3 19.2 38.4L236.8 313.6c11.4 8.5 27 8.5 38.4 0L492.8 150.4c12.1-9.1 19.2-23.3 19.2-38.4c0-26.5-21.5-48-48-48L48 64zM0 176L0 384c0 35.3 28.7 64 64 64l384 0c35.3 0 64-28.7 64-64l0-208L294.4 339.2c-22.8 17.1-54 17.1-76.8 0L0 176z"/></svg>                                  </a>
                              </li>
                          </ul>
                        </div>
                        <div class="text-center text-gray-500 dark:text-gray-400 hover:rounded-full transform hover:translate-y-2 transition-transform duration-300 ease-in-out">
                          <img class="mx-auto mb-4 w-20 h-20 lg:w-28 lg:h-28 rounded-full" src="static/img/staff/Jhonatan.png" alt="Jese Avatar">
                          <h3 class="mb-1 text-xs lg:text-sm font-semibold tracking-tight text-gray-900 dark:text-white">
                              <a href="#">Jhonatan Mejía Huamán</a>
                          </h3>
                          <p class="text-xs lg:text-sm">Asistente de Ensayos</p>
                          <ul class="flex justify-center mt-4 space-x-4">
                            <li>
                              <a href="#" class="text-[#39569c] hover:text-gray-900 dark:hover:text-white">
                                <svg class="w-6 h-6" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><!--!Font Awesome Free 6.6.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2024 Fonticons, Inc.--><path d="M416 32H31.9C14.3 32 0 46.5 0 64.3v383.4C0 465.5 14.3 480 31.9 480H416c17.6 0 32-14.5 32-32.3V64.3c0-17.8-14.4-32.3-32-32.3zM135.4 416H69V202.2h66.5V416zm-33.2-243c-21.3 0-38.5-17.3-38.5-38.5S80.9 96 102.2 96c21.2 0 38.5 17.3 38.5 38.5 0 21.3-17.2 38.5-38.5 38.5zm282.1 243h-66.4V312c0-24.8-.5-56.7-34.5-56.7-34.6 0-39.9 27-39.9 54.9V416h-66.4V202.2h63.7v29.2h.9c8.9-16.8 30.6-34.5 62.9-34.5 67.2 0 79.7 44.3 79.7 101.9V416z"/></svg>                                </a>
                            </li>
                              <li>
                                <a href="#" class="text-gray-900 hover:text-gray-900 dark:hover:text-white dark:text-gray-300">
                                  <svg class="w-6 h-6 fill-red-700" fill="currentColor" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><!--!Font Awesome Free 6.6.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2024 Fonticons, Inc.--><path d="M48 64C21.5 64 0 85.5 0 112c0 15.1 7.1 29.3 19.2 38.4L236.8 313.6c11.4 8.5 27 8.5 38.4 0L492.8 150.4c12.1-9.1 19.2-23.3 19.2-38.4c0-26.5-21.5-48-48-48L48 64zM0 176L0 384c0 35.3 28.7 64 64 64l384 0c35.3 0 64-28.7 64-64l0-208L294.4 339.2c-22.8 17.1-54 17.1-76.8 0L0 176z"/></svg>                                  </a>
                              </li>
                          </ul>
                        </div>
                        <div class="text-center text-gray-500 dark:text-gray-400 hover:rounded-full transform hover:translate-y-2 transition-transform duration-300 ease-in-out">
                          <img class="mx-auto mb-4 w-20 h-20 lg:w-28 lg:h-28 rounded-full" src="static/img/staff/Neivar.png" alt="Jese Avatar">
                          <h3 class="mb-1 text-xs lg:text-sm font-semibold tracking-tight text-gray-900 dark:text-white">
                              <a href="#">Dennis Heras Valdivia</a>
                          </h3>
                          <p class="text-xs lg:text-sm">Asistente de Ensayos</p>
                          <ul class="flex justify-center mt-4 space-x-4 mb-2">
                            <li>
                              <a href="#" class="text-[#39569c] hover:text-gray-900 dark:hover:text-white">
                                <svg class="w-6 h-6" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><!--!Font Awesome Free 6.6.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2024 Fonticons, Inc.--><path d="M416 32H31.9C14.3 32 0 46.5 0 64.3v383.4C0 465.5 14.3 480 31.9 480H416c17.6 0 32-14.5 32-32.3V64.3c0-17.8-14.4-32.3-32-32.3zM135.4 416H69V202.2h66.5V416zm-33.2-243c-21.3 0-38.5-17.3-38.5-38.5S80.9 96 102.2 96c21.2 0 38.5 17.3 38.5 38.5 0 21.3-17.2 38.5-38.5 38.5zm282.1 243h-66.4V312c0-24.8-.5-56.7-34.5-56.7-34.6 0-39.9 27-39.9 54.9V416h-66.4V202.2h63.7v29.2h.9c8.9-16.8 30.6-34.5 62.9-34.5 67.2 0 79.7 44.3 79.7 101.9V416z"/></svg>                                </a>
                            </li>
                              <li>
                                <a href="#" class="text-gray-900 hover:text-gray-900 dark:hover:text-white dark:text-gray-300">
                                  <svg class="w-6 h-6 fill-red-700" fill="currentColor" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><!--!Font Awesome Free 6.6.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2024 Fonticons, Inc.--><path d="M48 64C21.5 64 0 85.5 0 112c0 15.1 7.1 29.3 19.2 38.4L236.8 313.6c11.4 8.5 27 8.5 38.4 0L492.8 150.4c12.1-9.1 19.2-23.3 19.2-38.4c0-26.5-21.5-48-48-48L48 64zM0 176L0 384c0 35.3 28.7 64 64 64l384 0c35.3 0 64-28.7 64-64l0-208L294.4 339.2c-22.8 17.1-54 17.1-76.8 0L0 176z"/></svg>                                  </a>
                              </li>
                          </ul>
                        </div>
                        <div class="text-center text-gray-500 dark:text-gray-400 hover:rounded-full transform hover:translate-y-2 transition-transform duration-300 ease-in-out">
                            <img class="mx-auto mb-4 w-20 h-20 lg:w-28 lg:h-28 rounded-full" src="static/img/staff/Neivar.png" alt="Jese Avatar">
                            <h3 class="mb-1 text-xs lg:text-sm font-semibold tracking-tight text-gray-900 dark:text-white">
                                <a href="#">Jhander Cercado Fustamante</a>
                            </h3>
                            <p class="text-xs lg:text-sm">Asistente de Diseño</p>
                            <ul class="flex justify-center mt-4 space-x-4 mb-2">
                              <li>
                                <a href="https://www.linkedin.com/in/jhander-cercado-fustamante-107495330/" target="_blank" class="text-[#39569c] hover:text-gray-900 dark:hover:text-white">
                                  <svg class="w-6 h-6" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><!--!Font Awesome Free 6.6.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2024 Fonticons, Inc.--><path d="M416 32H31.9C14.3 32 0 46.5 0 64.3v383.4C0 465.5 14.3 480 31.9 480H416c17.6 0 32-14.5 32-32.3V64.3c0-17.8-14.4-32.3-32-32.3zM135.4 416H69V202.2h66.5V416zm-33.2-243c-21.3 0-38.5-17.3-38.5-38.5S80.9 96 102.2 96c21.2 0 38.5 17.3 38.5 38.5 0 21.3-17.2 38.5-38.5 38.5zm282.1 243h-66.4V312c0-24.8-.5-56.7-34.5-56.7-34.6 0-39.9 27-39.9 54.9V416h-66.4V202.2h63.7v29.2h.9c8.9-16.8 30.6-34.5 62.9-34.5 67.2 0 79.7 44.3 79.7 101.9V416z"/></svg>                                </a>
                              </li>
                                <li>
                                  <a href="#" class="text-gray-900 hover:text-gray-900 dark:hover:text-white dark:text-gray-300">
                                    <svg class="w-6 h-6 fill-red-700" fill="currentColor" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><!--!Font Awesome Free 6.6.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2024 Fonticons, Inc.--><path d="M48 64C21.5 64 0 85.5 0 112c0 15.1 7.1 29.3 19.2 38.4L236.8 313.6c11.4 8.5 27 8.5 38.4 0L492.8 150.4c12.1-9.1 19.2-23.3 19.2-38.4c0-26.5-21.5-48-48-48L48 64zM0 176L0 384c0 35.3 28.7 64 64 64l384 0c35.3 0 64-28.7 64-64l0-208L294.4 339.2c-22.8 17.1-54 17.1-76.8 0L0 176z"/></svg>                                  </a>
                                </li>
                            </ul>
                        </div>
                        <div class="text-center text-gray-500 dark:text-gray-400 hover:rounded-full transform hover:translate-y-2 transition-transform duration-300 ease-in-out">
                            <img class="mx-auto mb-4 w-20 h-20 lg:w-28 lg:h-28 rounded-full" src="static/img/staff/Neivar.png" alt="Jese Avatar">
                            <h3 class="mb-1 text-xs lg:text-sm font-semibold tracking-tight text-gray-900 dark:text-white">
                                <a href="#">Martha Ruiz</a>
                            </h3>
                            <p class="text-xs lg:text-sm">Asistente de Diseño</p>
                            <ul class="flex justify-center mt-4 space-x-4 mb-2">
                              <li>
                                <a href="https://www.linkedin.com/in/marthaeruiz25/" target="_blank" class="text-[#39569c] hover:text-gray-900 dark:hover:text-white">
                                  <svg class="w-6 h-6" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><!--!Font Awesome Free 6.6.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2024 Fonticons, Inc.--><path d="M416 32H31.9C14.3 32 0 46.5 0 64.3v383.4C0 465.5 14.3 480 31.9 480H416c17.6 0 32-14.5 32-32.3V64.3c0-17.8-14.4-32.3-32-32.3zM135.4 416H69V202.2h66.5V416zm-33.2-243c-21.3 0-38.5-17.3-38.5-38.5S80.9 96 102.2 96c21.2 0 38.5 17.3 38.5 38.5 0 21.3-17.2 38.5-38.5 38.5zm282.1 243h-66.4V312c0-24.8-.5-56.7-34.5-56.7-34.6 0-39.9 27-39.9 54.9V416h-66.4V202.2h63.7v29.2h.9c8.9-16.8 30.6-34.5 62.9-34.5 67.2 0 79.7 44.3 79.7 101.9V416z"/></svg>                                </a>
                              </li>
                                <li>
                                  <a href="#" class="text-gray-900 hover:text-gray-900 dark:hover:text-white dark:text-gray-300">
                                    <svg class="w-6 h-6 fill-red-700" fill="currentColor" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><!--!Font Awesome Free 6.6.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2024 Fonticons, Inc.--><path d="M48 64C21.5 64 0 85.5 0 112c0 15.1 7.1 29.3 19.2 38.4L236.8 313.6c11.4 8.5 27 8.5 38.4 0L492.8 150.4c12.1-9.1 19.2-23.3 19.2-38.4c0-26.5-21.5-48-48-48L48 64zM0 176L0 384c0 35.3 28.7 64 64 64l384 0c35.3 0 64-28.7 64-64l0-208L294.4 339.2c-22.8 17.1-54 17.1-76.8 0L0 176z"/></svg>                                  </a>
                                </li>
                            </ul>
                        </div>
                    </div>  
                </div>
              </section>
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
