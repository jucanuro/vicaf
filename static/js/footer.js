document.addEventListener("DOMContentLoaded", function(e) {
    const templateFooter = `
<footer class="bg-white rounded-lg shadow-sm dark:bg-gray-900 m-4">
    <div class="grid grid grid-cols-1 lg:grid-cols-3 gap-4">
        <div class="col-span-1 mt-3">
            <div class="lg:flex lg:items-center">
                <a href="#" class="text-2xl font-bold lg:px-8 mt-4 lg:mt-0">
                    <img class="w-[autopx] h-[autopx] opacity-100 shadow-none col-span-2 lg:max-h-12 max-h-9 w-full object-contain lg:col-span-1 shadow-2" src="static/img/logos/LogoF.png" alt="Reform" width="175" height="60">
                </a>
                <a href="#" class="text-2xl font-bold lg:px-8 mt-4 lg:mt-0">
                    <img class="lg:mt-0 mt-4 w-[autopx] h-[autopx] opacity-100 shadow-none col-span-2 lg:max-h-12 max-h-9 w-full object-contain lg:col-span-1 shadow-2" src="static/img/logos/LogoInacal.jpg" alt="Reform" width="175" height="60">
                </a>
            </div>
        </div>
        <div class="col-span-1 lg:mt-6 mt-2">
            <div class="flex justify-center space-x-4 lg:px-8  mt-4 lg:mt-0">
                <a target="_blank"  href="https://pe.linkedin.com/company/grupo-vicaf-sac" class="text-blue-600 hover:text-blue-800">
                        <svg class="w-6 h-6 fill-blue-500" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><!--!Font Awesome Free 6.6.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2024 Fonticons, Inc.--><path d="M416 32H31.9C14.3 32 0 46.5 0 64.3v383.4C0 465.5 14.3 480 31.9 480H416c17.6 0 32-14.5 32-32.3V64.3c0-17.8-14.4-32.3-32-32.3zM135.4 416H69V202.2h66.5V416zm-33.2-243c-21.3 0-38.5-17.3-38.5-38.5S80.9 96 102.2 96c21.2 0 38.5 17.3 38.5 38.5 0 21.3-17.2 38.5-38.5 38.5zm282.1 243h-66.4V312c0-24.8-.5-56.7-34.5-56.7-34.6 0-39.9 27-39.9 54.9V416h-66.4V202.2h63.7v29.2h.9c8.9-16.8 30.6-34.5 62.9-34.5 67.2 0 79.7 44.3 79.7 101.9V416z"/></svg>				
                    </a>
                    <a target="_blank"  href="https://www.facebook.com/grupovicaf/" class="text-blue-600 hover:text-blue-800">
                        <svg class="w-6 h-6 fill-blue-600" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><!--!Font Awesome Free 6.5.2 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2024 Fonticons, Inc.--><path d="M512 256C512 114.6 397.4 0 256 0S0 114.6 0 256C0 376 82.7 476.8 194.2 504.5V334.2H141.4V256h52.8V222.3c0-87.1 39.4-127.5 125-127.5c16.2 0 44.2 3.2 55.7 6.4V172c-6-.6-16.5-1-29.6-1c-42 0-58.2 15.9-58.2 57.2V256h83.6l-14.4 78.2H287V510.1C413.8 494.8 512 386.9 512 256h0z"/></svg>
                    </a>
                    <a target="_blank"  href="https://www.instagram.com/grupovicaf/" class="text-pink-600 hover:text-pink-800">
                        <svg class="h-6 w-6 fill-red-800" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><!--!Font Awesome Free 6.5.2 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2024 Fonticons, Inc.--><path d="M194.4 211.7a53.3 53.3 0 1 0 59.3 88.7 53.3 53.3 0 1 0 -59.3-88.7zm142.3-68.4c-5.2-5.2-11.5-9.3-18.4-12c-18.1-7.1-57.6-6.8-83.1-6.5c-4.1 0-7.9 .1-11.2 .1c-3.3 0-7.2 0-11.4-.1c-25.5-.3-64.8-.7-82.9 6.5c-6.9 2.7-13.1 6.8-18.4 12s-9.3 11.5-12 18.4c-7.1 18.1-6.7 57.7-6.5 83.2c0 4.1 .1 7.9 .1 11.1s0 7-.1 11.1c-.2 25.5-.6 65.1 6.5 83.2c2.7 6.9 6.8 13.1 12 18.4s11.5 9.3 18.4 12c18.1 7.1 57.6 6.8 83.1 6.5c4.1 0 7.9-.1 11.2-.1c3.3 0 7.2 0 11.4 .1c25.5 .3 64.8 .7 82.9-6.5c6.9-2.7 13.1-6.8 18.4-12s9.3-11.5 12-18.4c7.2-18 6.8-57.4 6.5-83c0-4.2-.1-8.1-.1-11.4s0-7.1 .1-11.4c.3-25.5 .7-64.9-6.5-83l0 0c-2.7-6.9-6.8-13.1-12-18.4zm-67.1 44.5A82 82 0 1 1 178.4 324.2a82 82 0 1 1 91.1-136.4zm29.2-1.3c-3.1-2.1-5.6-5.1-7.1-8.6s-1.8-7.3-1.1-11.1s2.6-7.1 5.2-9.8s6.1-4.5 9.8-5.2s7.6-.4 11.1 1.1s6.5 3.9 8.6 7s3.2 6.8 3.2 10.6c0 2.5-.5 5-1.4 7.3s-2.4 4.4-4.1 6.2s-3.9 3.2-6.2 4.2s-4.8 1.5-7.3 1.5l0 0c-3.8 0-7.5-1.1-10.6-3.2zM448 96c0-35.3-28.7-64-64-64H64C28.7 32 0 60.7 0 96V416c0 35.3 28.7 64 64 64H384c35.3 0 64-28.7 64-64V96zM357 389c-18.7 18.7-41.4 24.6-67 25.9c-26.4 1.5-105.6 1.5-132 0c-25.6-1.3-48.3-7.2-67-25.9s-24.6-41.4-25.8-67c-1.5-26.4-1.5-105.6 0-132c1.3-25.6 7.1-48.3 25.8-67s41.5-24.6 67-25.8c26.4-1.5 105.6-1.5 132 0c25.6 1.3 48.3 7.1 67 25.8s24.6 41.4 25.8 67c1.5 26.3 1.5 105.4 0 131.9c-1.3 25.6-7.1 48.3-25.8 67z"/></svg>
                    </a>
                    <a target="_blank"  href="mailto:correo@empresa.com?subject=Consulta%20de%20servicios&body=Hola,%20tengo%20una%20consulta..." class="text-blue-600 hover:text-blue-800">
                        <svg class="h-6 w-6 fill-red-600" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><!--!Font Awesome Free 6.6.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2024 Fonticons, Inc.--><path d="M48 64C21.5 64 0 85.5 0 112c0 15.1 7.1 29.3 19.2 38.4L236.8 313.6c11.4 8.5 27 8.5 38.4 0L492.8 150.4c12.1-9.1 19.2-23.3 19.2-38.4c0-26.5-21.5-48-48-48L48 64zM0 176L0 384c0 35.3 28.7 64 64 64l384 0c35.3 0 64-28.7 64-64l0-208L294.4 339.2c-22.8 17.1-54 17.1-76.8 0L0 176z"/></svg>					
                    </a>	
            </div>
        </div> 
        <div class="col-span-1 lg:mt-6 mt-2">
            <ul class="flex flex-wrap items-center justify-center mt-4 lg:mt-0 mb-2 lg:mb-6 text-sm font-semibold text-blue-950 sm:mb-0 dark:text-gray-400">
                <li>
                    <a href="#home" class="hover:underline me-4 md:me-6">Inicio</a>
                </li>
                <li>
                    <a href="#nosotros" class="hover:underline me-4 md:me-6">Nosotros</a>
                </li>
                <li>
                    <a href="#servicios" class="hover:underline me-4 md:me-6">Servicios</a>
                </li>
                <li>
                    <a href="#contactenos" class="hover:underline">Contactenos</a>
                </li>
            </ul>
        </div>     
    </div>
    <div class="w-full max-w-screen-xl mx-auto p-4">
        <hr class="my-2 border-gray-200 sm:mx-auto dark:border-gray-700" />
        <span class="block text-sm text-gray-950 lg:text-center dark:text-gray-400">© 2025 <a href="https://flowbite.com/" class="hover:underline">Grupo Vicaf</a>. Todos los derechos reservados.</span>
    </div>
</footer>
    `;
    document.getElementById("footer-content").innerHTML = templateFooter;
});
