document.addEventListener("DOMContentLoaded", function(e) {
  const templateClients = `
     <div id="clientes" class="mx-auto bg-white max-w-full">
        <section class="py-8 lg:py-12 px-6">
          <div class="w-full px-6">
            <h2 class="text-xl lg:text-3xl font-bold tracking-tight text-gray-900 text-center">
              Nuestros Clientes
            </h2>
            <div id="clients-container" class="grid grid-cols-[repeat(auto-fit,minmax(150px,1fr))] gap-8 mt-10 items-center justify-center">
              <div class="flex justify-center p-4 bg-white rounded-xl shadow-lg transition-transform duration-300 hover:scale-110">
                <img src="static/img/clients/aristos.jpg" alt="Cliente 1" class="h-20 object-contain">
              </div>
              <div class="flex justify-center p-4 bg-white rounded-xl shadow-lg transition-transform duration-300 hover:scale-110">
                <img src="static/img/clients/America-construcciones.jpg" alt="Cliente 2" class="h-20 object-contain">
              </div>
              <div class="flex justify-center p-4 bg-white rounded-xl shadow-lg transition-transform duration-300 hover:scale-110">
                <img src="static/img/clients/CEYCA-logo.png" alt="Cliente 3" class="h-20 object-contain">
              </div>
              <div class="flex justify-center p-4 bg-white rounded-xl shadow-lg transition-transform duration-300 hover:scale-110">
                <img src="static/img/clients/Gesvias.jpg" alt="Cliente 4" class="h-20 object-contain">
              </div>
              <div class="flex justify-center p-4 bg-white rounded-xl shadow-lg transition-transform duration-300 hover:scale-110">
                <img src="static/img/clients/OIP.jpeg" alt="Cliente 5" class="h-20 object-contain">
              </div>
              <div class="flex justify-center p-4 bg-white rounded-xl shadow-lg transition-transform duration-300 hover:scale-110">
                <img src="static/img/clients/gobierno regional.png" alt="Cliente 6" class="h-20 object-contain">
              </div>
              <div class="flex justify-center p-4 bg-white rounded-xl shadow-lg transition-transform duration-300 hover:scale-110">
                <img src="static/img/clients/Hidrandina.png" alt="Cliente 7" class="h-20 object-contain">
              </div>
              <div class="flex justify-center p-4 bg-white rounded-xl shadow-lg transition-transform duration-300 hover:scale-110">
                <img src="static/img/clients/Correa-ingenieros.jpg" alt="Cliente 8" class="h-20 object-contain">
              </div>
              <div class="flex justify-center p-4 bg-white rounded-xl shadow-lg transition-transform duration-300 hover:scale-110">
                <img src="static/img/clients/Stracon.png" alt="Cliente 9" class="h-20 object-contain">
              </div>
              <div class="flex justify-center p-4 bg-gray-50 rounded-xl shadow-lg transition-transform duration-300 hover:scale-110">
                <img src="static/img/clients/R.jpeg" alt="Cliente 10" class="h-20 object-contain">
              </div>
            </div>
          </div>
        </section>
     </div>
  `;

  document.getElementById("clients-content").innerHTML = templateClients;

  // Validar cantidad de clientes y agregar scroll si son más de 10
  const clientsContainer = document.getElementById("clients-container");
  const cards = clientsContainer.children.length;

  if (cards > 10) {
      clientsContainer.classList.add("max-h-96", "overflow-y-auto");
  }
});
