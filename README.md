<h1 align="center">
	Aulas Chapter II - Ignite Rocketseat
</h1>

<p align="center"> dtmoney - controle de finanças</p>

<p align="center">
		<a href="https://aula-ignite-chapter-2.vercel.app/"><img alt="License" src="https://github.com/Luccasoncini/Aula-ignite-chapter-2/blob/main/src/assets/projetodtmoney.jpg"></a>
</p>

## 🚀 Projeto

dtMoney uma aplicação para controle de finanças.


## 🔧 Tecnologias

- ReactJS
- NodeJS
- TypeScript
- Styled Components
- MirageJS
- useContext
- VS Code

## 🚀 Clonando e Rodando o Projeto

para clonar o projeto basta criar uma nova pasta e colocar o comando no terminal:

Git clone https://github.com/Luccasoncini/Aula-ignite-chapter-2

Assim que o projeto já estiver clonado, vc vai precisar instalar as dependências do projeto com o comando:

Yarn install

ou 

Npm install

Quando as dependências já estiverem instaladas adequadamente use o comando:

Yarn start

O projeto irá abrir no http://localhost:3000/ porém você pode ver que os dados das transações não estão sendo pegados no MirageJs, 
isso porque meu código já está em ambiente de produção e url da minha api é a mesma da url do meu site, para seu site funcionar 
no local e também se conectar ao mirageJS você precisa trocar a BaseURL que está em dtmoney/src/services/api.ts para http://localhost:3000/
e assim o seu projeto irá funcionar perfeitamente!

---

Feito com ♥ por <a href="https://www.linkedin.com/in/lucca-soncini-727930207/">Lucca Dias Soncini</a>
