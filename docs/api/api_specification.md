# 🔗 Especificação da API

## Endpoints

### Autenticação

- `POST /usuarios` → cria usuário  
- `POST /login` → autentica usuário e retorna token  

### Cursos

- `GET /cursos` → lista cursos  
- `POST /cursos` → cadastra curso (somente admin)  

### Matrículas

- `POST /matriculas` → cria matrícula  

## Parâmetros de Requisição

- `POST /usuarios` → { "nome": "...", "email": "...", "senha": "..." }  
- `POST /login` → { "email": "...", "senha": "..." }  

## Formatos de Resposta

```json
{
  "id": 1,
  "nome": "Curso de Informática",
  "status": "ativo"
}
```

## Autenticação

- Todas as rotas (exceto cadastro/login) requerem **Bearer Token (JWT)**  

## Exemplos de Chamadas

```bash
curl -X POST http://localhost:3000/login -d '{"email":"teste@email.com","senha":"123"}'
```
