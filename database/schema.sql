-- database/schema.sql
-- Exemplo de esquema para começar. Substitua pelas tabelas reais do projeto.

CREATE TABLE users (
    id SERIAL PRIMARY KEY,
    name VARCHAR(150) NOT NULL,
    email VARCHAR(150) UNIQUE NOT NULL,
    password_hash VARCHAR(255) NOT NULL,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- Adicione aqui as tabelas do domínio do seu projeto.
