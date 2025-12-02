const courseForm = document.getElementById ('courseForm')

if (courseForm) {
  courseForm.addEventListener ('submit', async (e) => {
    e.preventDefault()

    const data = {
      title: document.getElementById ('title').value,
      slug: document.getElementById ('slug').value,
      description: document.getElementById ('description').value
    };

    const res = await apiRequest ('/courses', 'POST', data, true)

    if (res.id) {
      alert ('Curso cadastrado com sucesso!')
      window.location.href = 'courses.html'
    } else {
      alert (res.error || 'Erro ao cadastrar curso')
    }
  })
}

if (!localStorage.getItem ('token')) {
  window.location.href = 'login.html'
}
