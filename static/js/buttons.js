document.addEventListener("DOMContentLoaded", function(e) {
    const templateButtons = `
      <div class="flex justify-between bg-gradient-to-r from-gray-50 via-gray-100 to-gray-200 p-6 rounded-lg shadow-md">
    <div class="flex w-full">
        <a href="static/pdf/BROCHURE_2025_VICAF_2025.pdf" download="Brochure.pdf" target="_blank">
            <button type="button" class="flex items-center text-white bg-gradient-to-r from-blue-600 via-blue-700 to-blue-800 hover:from-blue-500 hover:via-blue-600 hover:to-blue-700 focus:ring-4 focus:ring-blue-300 transition-all duration-300 ease-in-out rounded-full text-sm px-6 py-3 font-semibold shadow-md">
                Descargar Brochure
                <svg class="w-4 h-4 ml-3 transition-transform duration-300 ease-in-out hover:translate-x-1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" fill="currentColor">
                    <path d="M288 32c0-17.7-14.3-32-32-32s-32 14.3-32 32v242.7l-73.4-73.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3l128 128c12.5 12.5 32.8 12.5 45.3 0l128-128c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L288 274.7V32zM64 352c-35.3 0-64 28.7-64 64v32c0 35.3 28.7 64 64 64h384c35.3 0 64-28.7 64-64v-32c0-35.3-28.7-64-64-64H64zm368 56a24 24 0 1 1 0 48 24 24 0 1 1 0-48z"/>
                </svg>
            </button>
        </a>
    </div>
    <div class="flex w-full justify-end mr-6 hidden">
      <a href="templates/services.html">
          <button type="button" 
              class="flex items-center text-white bg-gradient-to-r from-blue-600 via-blue-700 to-blue-800 hover:from-blue-500 hover:via-blue-600 hover:to-blue-700 focus:ring-4 focus:ring-blue-300 transition-all duration-300 ease-in-out rounded-full text-sm px-7 py-3 font-medium shadow-lg border border-blue-500">
              Más Servicios
              <svg class="w-5 h-5 ml-3 transition-transform duration-300 ease-in-out group-hover:translate-x-1" 
                  xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10" stroke="currentColor" 
                  stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                  <path d="M1 5h12m0 0L9 1m4 4L9 9"></path>
              </svg>
          </button>
      </a>
  </div>

</div>

    `;
    document.getElementById("buttons-content").innerHTML = templateButtons;
    document.getElementById("downloadLink").addEventListener("click", function (event) {
      event.preventDefault(); // Evita la navegación estándar
      const link = document.createElement("a");
      link.href = "static/pdf/BROCHURE_2025_VICAF_2025.pdf";
      link.download = "Brochure.pdf";
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
  });
});
