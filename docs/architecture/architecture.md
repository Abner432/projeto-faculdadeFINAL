# Arquitetura do Sistema

## Descrição

O sistema seguirá uma arquitetura baseada em camadas e serviços independentes.  

## Componentes do Sistema

- Frontend Web (React + Vite) – interface para acesso via navegador  
- Mobile App (React Native) – interface planejada para smartphones  
- Backend API (Node.js + Express) – responsável pelas regras de negócio e autenticação  
- Banco de Dados (PostgreSQL + Prisma ORM) – armazenamento de dados  

## Padrões Arquiteturais

- REST para comunicação cliente-servidor  
- MVC no backend  
- Autenticação via JWT  

## Diagrama de Arquitetura

O diagrama será incluído no arquivo docs/architecture/arquitetura.png.

## Decisões Técnicas

- Node.js → escolha pela flexibilidade e ecossistema amplo  
- React/React Native → uso de componentes reutilizáveis e multiplataforma  
- PostgreSQL → banco relacional robusto e gratuito  
