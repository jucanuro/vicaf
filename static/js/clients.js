document.addEventListener("DOMContentLoaded", function(e) {
    const templateClients = `
        <div id="clientes" class="mx-auto bg-white max-w-full">
      <section class="py-4 lg:py-8 px-6">
        <div class="container mx-auto">
          <h2 class="text-lg lg:text-2xl font-bold tracking-tight text-gray-900 text-center">Nuestros Clientes</h2>
          <div class="grid grid-cols-2 lg:grid-cols-5 gap-8 gap-y-8 mt-10 items-center">
            <div class="flex justify-center rolled-paper transform transition-transform duration-300 hover:scale-105">
              <img src="/staticvicaf/static/img/clientes/aristos.jpg " alt="Cliente 1" class="max-h-16">
            </div>
            <div class="flex justify-center rolled-paper transform transition-transform duration-300 hover:scale-105">
              <img src="/staticvicaf/static/img/clientes/America-construcciones.jpg" alt="Cliente 2" class="max-h-16">
            </div>
            <div class="flex justify-center rolled-paper transform transition-transform duration-300 hover:scale-105">
              <img src="/staticvicaf/static/img/clientes/CEYCA-logo.png" alt="Cliente 3" class="max-h-16">
            </div>
            <div class="flex justify-center rolled-paper transform transition-transform duration-300 hover:scale-105">
              <img src="/staticvicaf/static/img/clientes/Gesvias.jpg" alt="Cliente 4" class="max-h-16">
            </div>
            <div class="flex justify-center rolled-paper transform transition-transform duration-300 hover:scale-105">
              <img src="/staticvicaf/static/img/clientes/OIP.jpeg" alt="Cliente 5" class="max-h-16">
            </div>
            <div class="flex justify-center rolled-paper transform transition-transform duration-300 hover:scale-105">
              <img src="/staticvicaf/static/img/clientes/gobierno regional.png" alt="Cliente 6" class="max-h-16">
            </div>
            <div class="flex justify-center rolled-paper transform transition-transform duration-300 hover:scale-105">
              <img src="/staticvicaf/static/img/clientes/Hidrandina.png" alt="Cliente 7" class="max-h-16">
            </div>
            <div class="flex justify-center rolled-paper transform transition-transform duration-300 hover:scale-105">
              <img src="/staticvicaf/static/img/clientes/Correa-ingenieros.jpg" alt="Cliente 8" class="max-h-16">
            </div>
            <div class="flex justify-center rolled-paper transform transition-transform duration-300 hover:scale-105">
              <img src="/staticvicaf/static/img/clientes/Stracon.png" alt="Cliente 9" class="max-h-16">
            </div>
            <div class="flex justify-center rolled-paper transform transition-transform duration-300 hover:scale-105">
              <img src="/staticvicaf/static/img/clientes/R.jpeg" alt="Cliente 9" class="max-h-16">
            </div>
            <!-- Añade más logos según sea necesario -->
          </div>
        </div>
      </section>
    </div>
    `;
    document.getElementById("clients-content").innerHTML = templateClients;
});
