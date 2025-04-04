document.addEventListener("DOMContentLoaded", function(e) {
    const templateTeam = `
  <section class="py-12 bg-gray-100">
    <div class="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
        <!-- Imagen del equipo a la izquierda con mejor ajuste -->
        <div class="flex justify-center">
            <img src="static/img/staff/Personal.jpg" alt="Nuestro Equipo" class="w-full max-w-lg rounded-xl shadow-xl object-cover">
        </div>
        
        <!-- Lista de integrantes a la derecha con mejor diseño -->
        <div>
            <h2 class="text-3xl font-bold text-gray-900 mb-6 text-center md:text-left">Nuestro Equipo</h2>
            <ul class="space-y-6">
                <li class="p-6 bg-white rounded-xl shadow-lg border-l-4 border-blue-600 flex flex-col md:flex-row md:items-center">
                    <div class="flex-1">
                        <h3 class="text-xl font-semibold text-gray-900">Carmen Bernui Escobedo</h3>
                        <p class="text-gray-600 text-sm">Gerente General | Coordinadora de SG</p>
                    </div>
                    <div class="flex-1 mt-3 md:mt-0 text-right">
                        <p class="text-gray-500 text-sm">carmen.bernui@grupovicaf.com</p>
                        <a href="https://www.linkedin.com/in/carmen-bernui-escobedo-19338b28/" target="_blank" class="text-blue-600 font-medium hover:underline text-sm">Perfil en LinkedIn</a>
                    </div>
                </li>
                <li class="p-6 bg-white rounded-xl shadow-lg border-l-4 border-blue-600 flex flex-col md:flex-row md:items-center">
                    <div class="flex-1">
                        <h3 class="text-xl font-semibold text-gray-900">Frank Gonzáles Vásquez</h3>
                        <p class="text-gray-600 text-sm">Gerente Operativo | Supervisor de Ensayos</p>
                    </div>
                    <div class="flex-1 mt-3 md:mt-0 text-right">
                        <p class="text-gray-500 text-sm">frank.gonzales@grupovicaf.com</p>
                        <a href="https://www.linkedin.com/in/frank-gonz%C3%A1les-80b2a2a8/" target="_blank" class="text-blue-600 font-medium hover:underline text-sm">Perfil en LinkedIn</a>
                    </div>
                </li>
                <li class="p-6 bg-white rounded-xl shadow-lg border-l-4 border-blue-600 flex flex-col md:flex-row md:items-center">
                    <div class="flex-1">
                        <h3 class="text-xl font-semibold text-gray-900">Jessica Raquel Riojas Ortiz</h3>
                        <p class="text-gray-600 text-sm">Jefe de Laboratorio</p>
                    </div>
                    <div class="flex-1 mt-3 md:mt-0 text-right">
                        <p class="text-gray-500 text-sm">raquel.riojas@grupovicaf.com</p>
                        <a href="https://www.linkedin.com/in/jessica-raquel-riojas-ortiz-219278140/" target="_blank" class="text-blue-600 font-medium hover:underline text-sm">Perfil en LinkedIn</a>
                    </div>
                </li>
                <li class="p-6 bg-white rounded-xl shadow-lg border-l-4 border-blue-600 flex flex-col md:flex-row md:items-center">
                    <div class="flex-1">
                        <h3 class="text-xl font-semibold text-gray-900">Jessica Raquel Riojas Ortiz</h3>
                        <p class="text-gray-600 text-sm">Jefe de Laboratorio</p>
                    </div>
                    <div class="flex-1 mt-3 md:mt-0 text-right">
                        <p class="text-gray-500 text-sm">raquel.riojas@grupovicaf.com</p>
                        <a href="https://www.linkedin.com/in/jessica-raquel-riojas-ortiz-219278140/" target="_blank" class="text-blue-600 font-medium hover:underline text-sm">Perfil en LinkedIn</a>
                    </div>
                </li>
                <li class="p-6 bg-white rounded-xl shadow-lg border-l-4 border-blue-600 flex flex-col md:flex-row md:items-center">
                    <div class="flex-1">
                        <h3 class="text-xl font-semibold text-gray-900">Jessica Raquel Riojas Ortiz</h3>
                        <p class="text-gray-600 text-sm">Jefe de Laboratorio</p>
                    </div>
                    <div class="flex-1 mt-3 md:mt-0 text-right">
                        <p class="text-gray-500 text-sm">raquel.riojas@grupovicaf.com</p>
                        <a href="https://www.linkedin.com/in/jessica-raquel-riojas-ortiz-219278140/" target="_blank" class="text-blue-600 font-medium hover:underline text-sm">Perfil en LinkedIn</a>
                    </div>
                </li>
                <li class="p-6 bg-white rounded-xl shadow-lg border-l-4 border-blue-600 flex flex-col md:flex-row md:items-center">
                    <div class="flex-1">
                        <h3 class="text-xl font-semibold text-gray-900">Jessica Raquel Riojas Ortiz</h3>
                        <p class="text-gray-600 text-sm">Jefe de Laboratorio</p>
                    </div>
                    <div class="flex-1 mt-3 md:mt-0 text-right">
                        <p class="text-gray-500 text-sm">raquel.riojas@grupovicaf.com</p>
                        <a href="https://www.linkedin.com/in/jessica-raquel-riojas-ortiz-219278140/" target="_blank" class="text-blue-600 font-medium hover:underline text-sm">Perfil en LinkedIn</a>
                    </div>
                </li>
                <li class="p-6 bg-white rounded-xl shadow-lg border-l-4 border-blue-600 flex flex-col md:flex-row md:items-center">
                    <div class="flex-1">
                        <h3 class="text-xl font-semibold text-gray-900">Jessica Raquel Riojas Ortiz</h3>
                        <p class="text-gray-600 text-sm">Jefe de Laboratorio</p>
                    </div>
                    <div class="flex-1 mt-3 md:mt-0 text-right">
                        <p class="text-gray-500 text-sm">raquel.riojas@grupovicaf.com</p>
                        <a href="https://www.linkedin.com/in/jessica-raquel-riojas-ortiz-219278140/" target="_blank" class="text-blue-600 font-medium hover:underline text-sm">Perfil en LinkedIn</a>
                    </div>
                </li>
                <li class="p-6 bg-white rounded-xl shadow-lg border-l-4 border-blue-600 flex flex-col md:flex-row md:items-center">
                    <div class="flex-1">
                        <h3 class="text-xl font-semibold text-gray-900">Jessica Raquel Riojas Ortiz</h3>
                        <p class="text-gray-600 text-sm">Jefe de Laboratorio</p>
                    </div>
                    <div class="flex-1 mt-3 md:mt-0 text-right">
                        <p class="text-gray-500 text-sm">raquel.riojas@grupovicaf.com</p>
                        <a href="https://www.linkedin.com/in/jessica-raquel-riojas-ortiz-219278140/" target="_blank" class="text-blue-600 font-medium hover:underline text-sm">Perfil en LinkedIn</a>
                    </div>
                </li>
                <li class="p-6 bg-white rounded-xl shadow-lg border-l-4 border-blue-600 flex flex-col md:flex-row md:items-center">
                    <div class="flex-1">
                        <h3 class="text-xl font-semibold text-gray-900">Jessica Raquel Riojas Ortiz</h3>
                        <p class="text-gray-600 text-sm">Jefe de Laboratorio</p>
                    </div>
                    <div class="flex-1 mt-3 md:mt-0 text-right">
                        <p class="text-gray-500 text-sm">raquel.riojas@grupovicaf.com</p>
                        <a href="https://www.linkedin.com/in/jessica-raquel-riojas-ortiz-219278140/" target="_blank" class="text-blue-600 font-medium hover:underline text-sm">Perfil en LinkedIn</a>
                    </div>
                </li>
            </ul>
        </div>
    </div>
</section>





    `;
    document.getElementById("team-content").innerHTML = templateTeam;
   
});
