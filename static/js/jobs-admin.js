document.addEventListener("DOMContentLoaded", function(e) {
    const templateAdminJobs = `
  <div class="max-w-7xl mt-6 mx-auto bg-white p-10 rounded-2xl shadow-xl border border-gray-300">
        <h1 class="text-3xl font-extrabold text-gray-900 mb-8 text-center">Administración de bolsa de trabajo</h1>
        
        <form id="job-form" class="mb-8 bg-gray-100 p-8 rounded-2xl shadow-md border border-gray-300">
            <div class="grid grid-cols-2 gap-6">
                <div class="col-span-1">
                    <label for="job-title" class="block text-base font-semibold text-gray-800 mb-2">Título del Puesto</label>
                    <input type="text" id="job-title" placeholder="Ejemplo: Jefe de laboratorio" class="w-full text-base p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500" required>
                </div>
                <div class="col-span-1">
                    <label for="job-file" class="block text-base font-semibold text-gray-800 mb-2">Adjuntar PDF</label>
                    <input type="file" id="job-file" accept="application/pdf" class="w-full text-base p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500">
                </div>
            </div>
            <button type="submit" class="mt-6 bg-indigo-600 hover:bg-indigo-700 text-white font-semibold px-8 py-3 rounded-lg transition duration-300">Agregar Puesto</button>
        </form>
        
        <ul id="job-list" class="space-y-6 bg-gray-50 p-6 rounded-lg shadow-md border border-gray-300">
            <!-- Los elementos de la lista se agregarán aquí -->
        </ul>
        
        <button id="publish-button" class="bg-emerald-600 hover:bg-emerald-700 text-white font-semibold px-8 py-3 rounded-lg transition duration-300 mt-8 hidden">Publicar Puestos</button>
    </div
`;
    document.getElementById("jobs-admin-content").innerHTML = templateAdminJobs;
    const jobForm = document.getElementById('job-form');
    const jobList = document.getElementById('job-list');
    const publishButton = document.getElementById('publish-button');

    function togglePublishButton() {
        if (jobList.children.length > 0) {
            publishButton.classList.remove('hidden');
        } else {
            publishButton.classList.add('hidden');
        }
    }

    jobForm.addEventListener('submit', function(event) {
        event.preventDefault();
        const title = document.getElementById('job-title').value;
        const fileInput = document.getElementById('job-file');
        if (!title) return;
        
        const li = document.createElement('li');
        li.className = "bg-white p-4 rounded-lg shadow-md flex justify-between items-center border border-gray-300";
        
        let fileLink = '';
        if (fileInput.files.length > 0) {
            const file = fileInput.files[0];
            fileLink = URL.createObjectURL(file);
        }
        
        li.innerHTML = `
            <span class="text-lg font-medium text-gray-800">${title} ${fileLink ? `<a href="${fileLink}" target="_blank" class="text-blue-500 underline">(Ver Requisitos)</a>` : ''}</span>
            <div>
                <button class="bg-red-600 hover:bg-red-700 text-white px-4 py-2 rounded-lg transition duration-300 mr-2" onclick="this.parentElement.parentElement.remove(); togglePublishButton();">Eliminar</button>
            </div>
        `;
        
        jobList.appendChild(li);
        jobForm.reset();
        togglePublishButton();
    });

    publishButton.addEventListener('click', function() {
        const jobs = [];
        document.querySelectorAll('#job-list li').forEach(li => {
            jobs.push(li.querySelector('span').innerHTML);
        });
        localStorage.setItem('jobList', JSON.stringify(jobs));
        window.location.href = '../index.html';
    });
});
