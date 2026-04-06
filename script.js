   
function showCourses(type) {
  const sections = document.querySelectorAll('.course-section');
  sections.forEach(sec => sec.style.display = 'none');
  document.getElementById(type).style.display = 'block';
}

  