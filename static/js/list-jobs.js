document.addEventListener("DOMContentLoaded", function(e) {
    const jobListContainer = document.getElementById("list-job-content");
    
    // Verificamos si hay datos en localStorage
    const jobs = JSON.parse(localStorage.getItem('jobList')) || [];

    if (jobs.length > 0) {
        let jobListHTML = '<ul id="job-list" class="space-y-4">';
        jobs.forEach(job => {
            jobListHTML += `<li class="bg-white p-4 rounded-lg shadow-md border border-gray-300">${job}</li>`;
        });
        jobListHTML += '</ul>';
        jobListContainer.innerHTML = jobListHTML;
    } else {
        jobListContainer.innerHTML = "<p class='text-center text-gray-600'>No hay trabajos disponibles.</p>";
    }
});
