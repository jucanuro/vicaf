document.addEventListener("DOMContentLoaded", function(e) {
  const templateClients = `
     <div id="clientes" class="mx-auto bg-white max-w-full">
        <section class="py-8 lg:py-12 px-6 mb-4">
          <div class="w-full px-6">
            <h2 class="text-xl lg:text-3xl font-bold tracking-tight text-gray-900 text-center">
              Nuestros Clientes
              
            </h2>
            <div id="clients-container" class="grid grid-cols-[repeat(auto-fit,minmax(150px,1fr))] px-3 gap-8 mt-10 items-center justify-center">
              <div class="flex justify-center p-4 bg-white rounded-xl shadow-lg transition-transform duration-300 hover:scale-110">
                <img src="static/img/clients/1.jpeg" alt="Cliente 1" class="h-20 object-contain">
              </div>
              <div class="flex justify-center p-4 bg-white rounded-xl shadow-lg transition-transform duration-300 hover:scale-110">
                <img src="static/img/clients/2.jpg" alt="Cliente 2" class="h-20 object-contain">
              </div>
              <div class="flex justify-center p-4 bg-white rounded-xl shadow-lg transition-transform duration-300 hover:scale-110">
                <img src="static/img/clients/3.jpg" alt="Cliente 3" class="h-20 object-contain">
              </div>
              <div class="flex justify-center p-4 bg-white rounded-xl shadow-lg transition-transform duration-300 hover:scale-110">
                <img src="static/img/clients/4.jpg" alt="Cliente 4" class="h-20 object-contain">
              </div>
              <div class="flex justify-center p-4 bg-white rounded-xl shadow-lg transition-transform duration-300 hover:scale-110">
                <img src="static/img/clients/5.jpg" alt="Cliente 6" class="h-20 object-contain">
              </div>
              <div class="flex justify-center p-4 bg-white rounded-xl shadow-lg transition-transform duration-300 hover:scale-110">
                <img src="static/img/clients/6.jpg" alt="Cliente 7" class="h-20 object-contain">
              </div>
              <div class="flex justify-center p-4 bg-white rounded-xl shadow-lg transition-transform duration-300 hover:scale-110">
                <img src="static/img/clients/7.jpg" alt="Cliente 8" class="h-20 object-contain">
              </div>
              <div class="flex justify-center p-4 bg-white rounded-xl shadow-lg transition-transform duration-300 hover:scale-110">
                <img src="static/img/clients/8.jpg" alt="Cliente 9" class="h-20 object-contain">
              </div>
              <div class="flex justify-center p-4 bg-white rounded-xl shadow-lg transition-transform duration-300 hover:scale-110">
                <img src="static/img/clients/9.jpg" alt="Cliente 10" class="h-20 object-contain">
              </div>
              <div class="flex justify-center p-4 bg-white rounded-xl shadow-lg transition-transform duration-300 hover:scale-110">
                <img src="static/img/clients/10.jpg" alt="Cliente 10" class="h-20 object-contain">
              </div>
               <div class="flex justify-center p-4 bg-white rounded-xl shadow-lg transition-transform duration-300 hover:scale-110">
                <img src="static/img/clients/11.jpg" alt="Cliente 11" class="h-20 object-contain">
              </div>
               <div class="flex justify-center p-4 bg-white rounded-xl shadow-lg transition-transform duration-300 hover:scale-110">
                <img src="static/img/clients/12.jpg" alt="Cliente 12" class="h-20 object-contain">
              </div>
               <div class="flex justify-center p-4 bg-white rounded-xl shadow-lg transition-transform duration-300 hover:scale-110">
                <img src="static/img/clients/13.jpg" alt="Cliente 13" class="h-20 object-contain">
              </div>
              <div class="flex justify-center p-4 bg-white rounded-xl shadow-lg transition-transform duration-300 hover:scale-110">
                <img src="static/img/clients/14.jpg" alt="Cliente 14" class="h-20 object-contain">
              </div>
              <div class="flex justify-center p-4 bg-white rounded-xl shadow-lg transition-transform duration-300 hover:scale-110">
                <img src="static/img/clients/15.png" alt="Cliente 15" class="h-20 object-contain">
              </div>
              <div class="flex justify-center p-4 bg-white rounded-xl shadow-lg transition-transform duration-300 hover:scale-110">
                <img src="static/img/clients/16.png" alt="Cliente 16" class="h-20 object-contain">
              </div>
              <div class="flex justify-center p-4 bg-white rounded-xl shadow-lg transition-transform duration-300 hover:scale-110">
                <img src="static/img/clients/17.png" alt="Cliente 17" class="h-20 object-contain">
              </div>
              <div class="flex justify-center p-4 bg-white rounded-xl shadow-lg transition-transform duration-300 hover:scale-110">
                <img src="static/img/clients/18.png" alt="Cliente 18" class="h-20 object-contain">
              </div>
              <div class="flex justify-center p-4 bg-white rounded-xl shadow-lg transition-transform duration-300 hover:scale-110">
                <img src="static/img/clients/19.png" alt="Cliente 19" class="h-20 object-contain">
              </div>
              <div class="flex justify-center p-4 bg-white rounded-xl shadow-lg transition-transform duration-300 hover:scale-110">
                <img src="static/img/clients/20.png" alt="Cliente 20" class="h-20 object-contain">
              </div>
              <div class="flex justify-center p-4 bg-white rounded-xl shadow-lg transition-transform duration-300 hover:scale-110">
                <img src="static/img/clients/21.png" alt="Cliente 21" class="h-20 object-contain">
              </div>
              <div class="flex justify-center p-4 bg-white rounded-xl shadow-lg transition-transform duration-300 hover:scale-110">
                <img src="static/img/clients/22.png" alt="Cliente 22" class="h-20 object-contain">
              </div>
              <div class="flex justify-center p-4 bg-white rounded-xl shadow-lg transition-transform duration-300 hover:scale-110">
                <img src="static/img/clients/23.png" alt="Cliente 16" class="h-20 object-contain">
              </div>
              <div class="flex justify-center p-4 bg-white rounded-xl shadow-lg transition-transform duration-300 hover:scale-110">
                <img src="static/img/clients/24.png" alt="Cliente 16" class="h-20 object-contain">
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
