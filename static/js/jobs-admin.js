document.addEventListener("DOMContentLoaded", function(e) {
    const templateAdminJobs = `
   <div class="max-w-7xl mt-4 mx-auto bg-white p-8 rounded-lg shadow-lg border border-gray-200">
        <h1 class="text-3xl font-extrabold text-gray-800 mb-6 text-center">Administración</h1>
        
        <form id="job-form" class="mb-6 bg-gray-50 p-6 rounded-lg shadow-sm border border-gray-300">
            <div class="grid grid-cols-2 gap-4">
                <div class="col-span-1">
                    <label for="job-title" class="block text-sm font-semibold text-gray-700 mb-2">Título del trabajo</label>
                    <input type="text" id="job-title" placeholder="Ejemplo: Jefe de laboratorio" class="w-full text-sm p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 mb-4" required>
                </div>
                <div class="col-span-1">
                    <label for="job-file" class="block text-sm font-semibold text-gray-700 mb-2">Adjuntar PDF</label>
                    <input type="file" id="job-file" accept="application/pdf" class="w-full text-sm p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 mb-4">
                </div>
            </div>
            <button type="submit" class="bg-blue-600 hover:bg-blue-700 text-white font-semibold px-6 py-3 rounded-lg transition duration-300">Agregar</button>
        </form>
        
        <ul id="job-list" class="space-y-4"></ul>
        
        <button id="publish-button" class="bg-green-600 hover:bg-green-700 text-white font-semibold px-6 py-3 rounded-lg transition duration-300 mt-6 hidden">Publicar</button>
    </div>
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
            <span class="text-lg font-medium text-gray-800">${title} ${fileLink ? `<a href="${fileLink}" target="_blank" class="text-blue-500 underline">(Ver PDF)</a>` : ''}</span>
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
