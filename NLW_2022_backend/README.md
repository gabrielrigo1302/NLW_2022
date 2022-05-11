# NLW_2022

## SMTP

Mailtrap

## SOLID

### 1. Single Responsibility Principle

- Cada classe/estrutura tem uma responsabilidade única

### 2. Open/Closed Principle

- As classes da aplicação devem ser abertas para extensão mas fechadas para modificação

### 3. Liskov Substitution Principle

- Nós devemos poder substituir uma classe pai por uma herança dela e tudo continuar funcionando

### 4. Interface Segregation Principle

- Implementar o máximo de interfaces possíveis

### Dependency Inversion Principle

- O contexto externo deve passar as dependências e não a classe buscar

## Observation

For some reason, prisma doesn't work when the project is imported in another environment. Until now, the solution is copy the content from
'/prisma/schema.prisma' and delete the '/prisma' folder. After this, run:

    - npx prisma init

Switch the content from '/prisma/schema.prisma' by the copy and run:

    - npx prisma migrate

After this the api should work.
