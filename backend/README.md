# Plataforma Backend

1. Copie `.env.example` para `.env` e ajuste as variáveis.
2. Instale dependências:
   npm install
3. Crie o banco de dados `plataforma` no Postgres.
4. Rode as migrations (psql) ou execute o SQL em seu client favorito:
   psql -U <user> -d plataforma -f src/migrations/init.sql
5. Inicie em dev:
   npm run dev

API base: http://localhost:3001/api

Endpoints principais:
- POST /api/auth/register
- POST /api/auth/login
- GET /api/courses
- GET /api/courses/:id
- POST /api/courses (auth required)
