const API_URL = 'http://localhost:3001/api'

async function apiRequest (endpoint, method = 'GET', data = null, auth = false) {
  const headers = { 'Content-Type': 'application/json' }

  if (auth) {
    const token = localStorage.getItem ('token')
    if (token) headers ['Authorization'] = `Bearer ${token}`
  }

  const res = await fetch (API_URL + endpoint, {
    method,
    headers,
    body: data ? JSON.stringify (data) : null
  })

  return res.json()
}
