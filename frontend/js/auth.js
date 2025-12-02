const loginForm = document.getElementById ('loginForm')

if (loginForm) {
  loginForm.addEventListener ('submit', async (e) => {
    e.preventDefault()

    const data = {
      email: document.getElementById ('email').value,
      password: document.getElementById ('password').value
    }

    const res = await apiRequest('/auth/login', 'POST', data)

    if (res.token) {
      localStorage.setItem ('token', res.token)
      window.location.href = 'courses.html'
    } else {
      alert(res.error || 'Erro no login')
    }
  })
}

const registerForm = document.getElementById ('registerForm')

if (registerForm) {
  registerForm.addEventListener ('submit', async (e) => {
    e.preventDefault()

    const data = {
      name: document.getElementById ('name').value,
      email: document.getElementById ('email').value,
      password: document.getElementById ('password').value
    }

    const res = await apiRequest('/auth/register', 'POST', data)

    if (res.token) {
      localStorage.setItem ('token', res.token)
      window.location.href = 'courses.html'
    } else {
      alert(res.error || 'Erro ao registrar')
    }
  })
}

function logout() {
  localStorage.removeItem ('token')
  window.location.href = 'login.html'
}
