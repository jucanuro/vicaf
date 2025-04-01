document.addEventListener("DOMContentLoaded", function(e) {
    const jobs = JSON.parse(localStorage.getItem('jobList')) || [];
    const templateListJob = jobs.length > 0 
        ? `<ul class="space-y-4">${jobs.map(job => `<li class="bg-white p-4 rounded-lg shadow-md border border-gray-300">${job}</li>`).join('')}</ul>` 
        : "<p class='text-center text-gray-600'>No hay trabajos disponibles.</p>";

    document.getElementById("list-job-content").innerHTML = templateListJob;
});