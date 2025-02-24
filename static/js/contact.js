document.addEventListener("DOMContentLoaded", function(e) {
    const templateWhatsapp = `
      <div id="contactenos" class="py-10">
  <div class="relative isolate bg-blue-950">
    <div class="mx-auto grid max-w-7xl grid-cols-1 lg:grid-cols-2">
      <div class="relative px-6 lg:static lg:px-8 lg:py-8">
        <div class="mx-auto max-w-xl lg:mx-0 lg:max-w-lg">
          <h2 class="text-xl font-bold tracking-tight text-white">Contáctenos</h2>
          <dl class="mt-10 space-y-4 text-base leading-7 text-gray-300">
            <div class="flex gap-x-4">
              <dt class="flex-none">
                <span class="sr-only">Dirección</span>
                <svg class="h-7 w-6 text-gray-400" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" aria-hidden="true">
                  <path stroke-linecap="round" stroke-linejoin="round" d="M2.25 21h19.5m-18-18v18m10.5-18v18m6-13.5V21M6.75 6.75h.75m-.75 3h.75m-.75 3h.75m3-6h.75m-.75 3h.75m-.75 3h.75M6.75 21v-3.375c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21M3 3h12m-.75 4.5H21m-3.75 3.75h.008v.008h-.008v-.008zm0 3h.008v.008h-.008v-.008zm0 3h.008v.008h-.008v-.008z" />
                </svg>
              </dt>
              <dd>Jr. Los Topacios 440, Cajamarca – Perú</dd>
            </div>
            <div class="flex gap-x-4">
              <dt class="flex-none">
                <span class="sr-only">Teléfono</span>
                <svg class="h-7 w-6 text-gray-400" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" aria-hidden="true">
                  <path stroke-linecap="round" stroke-linejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z" />
                </svg>
              </dt>
              <dd><a class="hover:text-white" href="tel:+51 941 573 750">(+51) 941 573 750</a></dd>
            </div>
            <div class="flex gap-x-4">
              <dt class="flex-none">
                <span class="sr-only">Email</span>
                <svg class="h-7 w-6 text-gray-400" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" aria-hidden="true">
                  <path stroke-linecap="round" stroke-linejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75" />
                </svg>
              </dt>
              <dd><a class="hover:text-white" href="mailto:informes@grupovicaf.com">informes@grupovicaf.com</a></dd>
            </div>
          </dl>

          <!-- Aquí agregamos el mapa -->
          <div class="relative w-full h-72 mt-4">
            <iframe class="absolute top-0 left-0 w-full h-full" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3958.673114329961!2d-78.50616452251471!3d-7.163736351805353!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x91b25b1e2edf78d5%3A0x36c22d620773f189!2sLos%20Topacios%20440%2C%20Cajamarca%2006002!5e0!3m2!1ses-419!2spe!4v1717916320277!5m2!1ses-419!2spe" width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
          </div>
          <!-- Fin del mapa -->

        </div>
      </div>
      <form id="contact-form" class="px-6 lg:px-8 lg:py-8" action="https://formspree.io/f/mgvewgla" method="POST">
  <div class="mx-auto max-w-xl lg:mr-0 lg:max-w-lg">
    <div class="grid grid-cols-1 gap-x-8 gap-y-6 sm:grid-cols-2">
      <div>
        <label for="business-name" class="block text-sm font-semibold leading-6 text-white">Razón Social/Nombres</label>
        <div class="mt-2.5">
          <input type="text" name="Razón Social" id="business-name" required class="block w-full rounded-md border-0 bg-white/5 px-3.5 py-2 text-white shadow-sm ring-1 ring-inset ring-white/10 focus:ring-2 focus:ring-inset focus:ring-cyan-700 sm:text-sm sm:leading-6">
        </div>
      </div>
      <div>
        <label for="ruc" class="block text-sm font-semibold leading-6 text-white">RUC/DNI</label>
        <div class="mt-2.5">
          <input type="text" name="RUC" id="ruc" required class="block w-full rounded-md border-0 bg-white/5 px-3.5 py-2 text-white shadow-sm ring-1 ring-inset ring-white/10 focus:ring-2 focus:ring-inset focus:ring-cyan-700 sm:text-sm sm:leading-6">
        </div>
      </div>
      <div class="sm:col-span-2">
        <label for="email" class="block text-sm font-semibold leading-6 text-white">Correo</label>
        <div class="mt-2.5">
          <input type="email" name="Correo" id="email" required class="block w-full rounded-md border-0 bg-white/5 px-3.5 py-2 text-white shadow-sm ring-1 ring-inset ring-white/10 focus:ring-2 focus:ring-inset focus:ring-cyan-700 sm:text-sm sm:leading-6">
        </div>
      </div>
      <div class="sm:col-span-2">
        <label for="phone-number" class="block text-sm font-semibold leading-6 text-white">Móvil</label>
        <div class="mt-2.5">
          <input type="tel" name="Móvil" id="phone-number" required class="block w-full rounded-md border-0 bg-white/5 px-3.5 py-2 text-white shadow-sm ring-1 ring-inset ring-white/10 focus:ring-2 focus:ring-inset focus:ring-cyan-700 sm:text-sm sm:leading-6">
        </div>
      </div>
      <div class="sm:col-span-2">
        <label for="message" class="block text-sm font-semibold leading-6 text-white">Mensaje</label>
        <div class="mt-2.5">
          <textarea name="Mensaje" id="message" required rows="4" class="block w-full rounded-md border-0 bg-white/5 px-3.5 py-2 text-white shadow-sm ring-1 ring-inset ring-white/10 focus:ring-2 focus:ring-inset focus:ring-cyan-700 sm:text-sm sm:leading-6"></textarea>
        </div>
      </div>
    </div>
    <div class="mt-6 mb-4">
      <button type="submit" class="inline-block rounded-md px-3.5 py-1.5 text-sm font-semibold text-white bg-cyan-600 hover:bg-cyan-700 focus:outline-none focus:ring-2 focus:ring-cyan-700 focus:ring-offset-2">Enviar</button>
    </div>
  </div>
</form>

    </div>
  </div>
</div>

    `;
    document.getElementById("contact-content").innerHTML = templateWhatsapp;
});
