document.addEventListener("DOMContentLoaded", function(e) {
    const templateTeam = `
    <section class="py-8 bg-gray-100">
    <div class="max-w-6xl mx-auto text-center">
        <h2 class="text-lg lg:text-2xl font-bold text-gray-900 mb-8">Nuestro Equipo</h2>

        <div class="space-y-6">
            <!-- Miembro 1 (Izquierda) -->
            <div class="flex items-center space-x-4 hover:bg-white hover:shadow-lg p-1 rounded-lg transition duration-300">
                <img src="static/img/staff/Carmen.png" alt="Carmen Bernui" class="w-20 h-20 rounded-full border-4 border-gray-300 hover:border-blue-500 transition duration-300">
                <div class="text-left">
                    <h3 class="text-sm lg:text-lg font-semibold text-gray-900">Carmen Bernui Escobedo</h3>
                    <p class="text-gray-500 text-xs lg:text-sm">Gerente General</p>
                    <div class="mt-1 flex space-x-3">
                        <a href="https://www.linkedin.com/in/carmen-bernui-escobedo-19338b28/" target="_blank" class="text-blue-600 hover:text-blue-800">
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" class="w-5 h-5">
                                <path fill="currentColor" d="M416 32H31.9C14.3 32 0 46.5 0 64.3v383.4C0 465.5 14.3 480 31.9 480H416c17.6 0 32-14.5 32-32.3V64.3c0-17.8-14.4-32.3-32-32.3zM135.4 416H69V202.2h66.5V416zm-33.2-243c-21.3 0-38.5-17.3-38.5-38.5S80.9 96 102.2 96c21.2 0 38.5 17.3 38.5 38.5 0 21.3-17.2 38.5-38.5 38.5zm282.1 243h-66.4V312c0-24.8-.5-56.7-34.5-56.7-34.6 0-39.9 27-39.9 54.9V416h-66.4V202.2h63.7v29.2h.9c8.9-16.8 30.6-34.5 62.9-34.5 67.2 0 79.7 44.3 79.7 101.9V416z"/>
                            </svg>
                        </a>
                        <a href="mailto:carmen.bernui@grupovicaf.com" class="text-red-600 hover:text-red-800">
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" class="w-5 h-5">
                                <path fill="currentColor" d="M48 64C21.5 64 0 85.5 0 112c0 15.1 7.1 29.3 19.2 38.4L236.8 313.6c11.4 8.5 27 8.5 38.4 0L492.8 150.4c12.1-9.1 19.2-23.3 19.2-38.4c0-26.5-21.5-48-48-48L48 64zM0 176L0 384c0 35.3 28.7 64 64 64l384 0c35.3 0 64-28.7 64-64l0-208L294.4 339.2c-22.8 17.1-54 17.1-76.8 0L0 176z"/>
                            </svg>
                        </a>
                    </div>
                </div>
            </div>

            <!-- Miembro 2 (Derecha) -->
            <div class="flex items-center space-x-4 hover:bg-white hover:shadow-lg p-1 rounded-lg transition duration-300 md:flex-row-reverse">
                <img src="static/img/staff/Frank.png" alt="Frank Gonzáles" class="w-20 h-20 rounded-full border-4 border-gray-300 hover:border-blue-500 transition duration-300">
                <div class="text-left">
                    <h3 class="text-sm lg:text-lg font-semibold text-gray-900">Frank Gonzáles Vásquez</h3>
                    <p class="text-gray-500 text-xs lg:text-sm">Gerente Operativo</p>
                    <div class="mt-1 flex space-x-3">
                        <a href="https://pe.linkedin.com/in/frank-gonz%C3%A1les-80b2a2a8" target="_blank" class="text-blue-600 hover:text-blue-800">
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" class="w-5 h-5">
                                <path fill="currentColor" d="M416 32H31.9C14.3 32 0 46.5 0 64.3v383.4C0 465.5 14.3 480 31.9 480H416c17.6 0 32-14.5 32-32.3V64.3c0-17.8-14.4-32.3-32-32.3zM135.4 416H69V202.2h66.5V416zm-33.2-243c-21.3 0-38.5-17.3-38.5-38.5S80.9 96 102.2 96c21.2 0 38.5 17.3 38.5 38.5 0 21.3-17.2 38.5-38.5 38.5zm282.1 243h-66.4V312c0-24.8-.5-56.7-34.5-56.7-34.6 0-39.9 27-39.9 54.9V416h-66.4V202.2h63.7v29.2h.9c8.9-16.8 30.6-34.5 62.9-34.5 67.2 0 79.7 44.3 79.7 101.9V416z"/>
                            </svg>
                        </a>
                        <a href="mailto:frank.gonzales@grupovicaf.com" class="text-red-600 hover:text-red-800">
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" class="w-5 h-5">
                                <path fill="currentColor" d="M48 64C21.5 64 0 85.5 0 112c0 15.1 7.1 29.3 19.2 38.4L236.8 313.6c11.4 8.5 27 8.5 38.4 0L492.8 150.4c12.1-9.1 19.2-23.3 19.2-38.4c0-26.5-21.5-48-48-48L48 64zM0 176L0 384c0 35.3 28.7 64 64 64l384 0c35.3 0 64-28.7 64-64l0-208L294.4 339.2c-22.8 17.1-54 17.1-76.8 0L0 176z"/>
                            </svg>
                        </a>
                    </div>
                </div>
            </div>

            <!-- Miembro 3 (Izquierda) -->
            <div class="flex items-center space-x-4 hover:bg-white hover:shadow-lg p-1 rounded-lg transition duration-300">
               <img src="static/img/staff/Raquel.png" alt="Carmen Bernui" class="w-20 h-20 rounded-full border-4 border-gray-300 hover:border-blue-500 transition duration-300">
                <div class="text-left">
                    <h3 class="text-sm lg:text-lg font-semibold text-gray-900">Jessica Raquel Riojas Ortiz</h3>
                    <p class="text-gray-500 text-xs lg:text-sm">Jefe de Laboratorio</p>
                    <div class="mt-1 flex space-x-3">
                        <a href="https://www.linkedin.com/in/jessica-raquel-riojas-ortiz-219278140/" target="_blank" class="text-blue-600 hover:text-blue-800">
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" class="w-5 h-5">
                                <path fill="currentColor" d="M416 32H31.9C14.3 32 0 46.5 0 64.3v383.4C0 465.5 14.3 480 31.9 480H416c17.6 0 32-14.5 32-32.3V64.3c0-17.8-14.4-32.3-32-32.3zM135.4 416H69V202.2h66.5V416zm-33.2-243c-21.3 0-38.5-17.3-38.5-38.5S80.9 96 102.2 96c21.2 0 38.5 17.3 38.5 38.5 0 21.3-17.2 38.5-38.5 38.5zm282.1 243h-66.4V312c0-24.8-.5-56.7-34.5-56.7-34.6 0-39.9 27-39.9 54.9V416h-66.4V202.2h63.7v29.2h.9c8.9-16.8 30.6-34.5 62.9-34.5 67.2 0 79.7 44.3 79.7 101.9V416z"/>
                            </svg>
                        </a>
                        <a href="mailto:carmen.bernui@grupovicaf.com" class="text-red-600 hover:text-red-800">
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" class="w-5 h-5">
                                <path fill="currentColor" d="M48 64C21.5 64 0 85.5 0 112c0 15.1 7.1 29.3 19.2 38.4L236.8 313.6c11.4 8.5 27 8.5 38.4 0L492.8 150.4c12.1-9.1 19.2-23.3 19.2-38.4c0-26.5-21.5-48-48-48L48 64zM0 176L0 384c0 35.3 28.7 64 64 64l384 0c35.3 0 64-28.7 64-64l0-208L294.4 339.2c-22.8 17.1-54 17.1-76.8 0L0 176z"/>
                            </svg>
                        </a>
                    </div>
            </div>

        </div>
    </div>
</section>


    `;
    document.getElementById("team-content").innerHTML = templateTeam;
   
});
