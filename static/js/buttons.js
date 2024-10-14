document.addEventListener("DOMContentLoaded", function(e) {
    const templateButtons = `
       <div class="flex justify-between bg-gradient-to-r from-slate-50 via-gray-100 to-gray-200">
    <div class="flex p-4 w-full">
        <a href="static/pdf/Invoice-0003.pdf" download="Brochure.pdf">
          <button type="button" class="flex items-center text-gray-900 bg-gradient-to-r from-gray-200 via-gray-300 to-gray-400 hover:bg-gradient-to-r hover:from-amber-400 hover:via-amber-500 hover:to-amber-600 hover:text-white focus:ring-4 focus:ring-amber-300 transition-all duration-300 ease-in-out rounded-full text-xs lg:text-sm px-5 py-2.5 me-2 mb-2 shadow-lg">
            Descargar Brochure
            <svg class="rtl:rotate-180 w-3 h-3 lg:w-4 lg:h-4 ms-1 lg:ms-2 ml-2 transition-transform duration-300 ease-in-out hover:translate-x-1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><!--!Font Awesome Free 6.6.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2024 Fonticons, Inc.--><path d="M288 32c0-17.7-14.3-32-32-32s-32 14.3-32 32l0 242.7-73.4-73.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3l128 128c12.5 12.5 32.8 12.5 45.3 0l128-128c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L288 274.7 288 32zM64 352c-35.3 0-64 28.7-64 64l0 32c0 35.3 28.7 64 64 64l384 0c35.3 0 64-28.7 64-64l0-32c0-35.3-28.7-64-64-64l-101.5 0-45.3 45.3c-25 25-65.5 25-90.5 0L165.5 352 64 352zm368 56a24 24 0 1 1 0 48 24 24 0 1 1 0-48z"/></svg>
          </button>
        </a>
    </div>
    <div class="flex p-4 w-full justify-end mr-6 lg:hidden block">
        <a href="templates/services.html">
          <button type="button" class="flex items-center text-gray-900 bg-gradient-to-r from-gray-200 via-gray-300 to-gray-400 hover:bg-gradient-to-r hover:from-amber-400 hover:via-amber-500 hover:to-amber-600 hover:text-white focus:ring-4 focus:ring-amber-300 transition-all duration-300 ease-in-out rounded-full text-xs lg:text-sm px-5 py-2.5 me-2 mb-2 shadow-lg">
            Más Servicios
            <svg class="rtl:rotate-180 w-3 h-3 lg:w-4 lg:h-4 ms-1 lg:ms-2 ml-2 transition-transform duration-300 ease-in-out hover:translate-x-1" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10" aria-hidden="true">
              <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 5h12m0 0L9 1m4 4L9 9"></path>
            </svg>
          </button>
        </a>
    </div>
</div>
    `;
    document.getElementById("buttons-content").innerHTML = templateButtons;
});
