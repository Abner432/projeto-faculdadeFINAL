# Modelo de Banco de Dados

## Entidades e Relacionamentos

- Usuário (id, nome, email, senha, perfil)  
- Curso (id, título, descrição, status)  
- Matrícula (id, id_usuario, id_curso, data)  

Relacionamentos:  
- Um usuário pode ter várias matrículas (1:N)  
- Um curso pode ter várias matrículas (1:N)  

## Diagrama ER

O diagrama será incluído em docs/database/diagrama_er.png.

## Dicionário de Dados

- Usuário.email – string, único, obrigatório  
- Curso.status – enum (ativo/inativo)  
- Matrícula.data – datetime  
