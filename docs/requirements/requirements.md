# Requisitos do Sistema

## Requisitos Funcionais (RF)

- RF01 – Cadastrar usuários  
- RF02 – Autenticar usuários  
- RF03 – Listar cursos  
- RF04 – Cadastrar cursos  
- RF05 – Realizar matrícula  

## Requisitos Não Funcionais (RNF)

- RNF01 – Sistema deve rodar em ambiente web e mobile  
- RNF02 – Deve ser responsivo e acessível  
- RNF03 – Segurança via autenticação JWT  
- RNF04 – Código modular e escalável  

## Regras de Negócio

- Um usuário só pode se matricular em cursos ativos  
- Apenas administradores podem cadastrar cursos  
- Cada matrícula é única por usuário e curso  

## Histórias de Usuário

- Como aluno, quero me cadastrar para acessar cursos  
- Como administrador, quero cadastrar cursos para oferecer à comunidade  
- Como aluno, quero visualizar cursos disponíveis e me matricular  

## Perfis de Usuários

- Aluno: pode se cadastrar, listar cursos e se matricular  
- Administrador: pode cadastrar cursos e gerenciar usuários  
- Instrutor (futuro): poderá gerenciar conteúdo de cursos  
