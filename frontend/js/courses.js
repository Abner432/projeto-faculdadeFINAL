async function loadCourses() {
  const courses = await apiRequest ('/courses')

  const container = document.getElementById ('courses')
  container.innerHTML = ''

  courses.forEach (course => {
    const div = document.createElement ('div')
    div.classList.add ('course-card')

    div.innerHTML = `
      <h3>${course.title}</h3>
      <p>${course.description || 'Sem descrição'}</p>
      <small>Curso disponível para comunidade</small>
      <button onclick="enroll(${course.id})">Matricular-se</button>
    `;

    container.appendChild (div)
  });
}

async function enroll (courseId) {
  alert ("Função de matrícula pronta para integrar depois ao backend (enrollments).")
}

loadCourses()
