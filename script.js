
//Portfolio
function showProject(projectId) {
    var projects = document.getElementsByClassName('project-content');
    for (var i = 0; i < projects.length; i++) {
        projects[i].style.display = 'none';
    }
    document.getElementById(projectId).style.display = 'block';
}

// Show the first project by default
document.getElementById('project1').style.display = 'block';


