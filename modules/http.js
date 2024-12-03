const http = require("http");
const { url } = require("inspector");

// Definindo a porta para o servidor
const port = 8080;

// Criando o servidor de acordo com a requisição do servidor (req -> requisição, res -> resposta da requisição)
const server = http.createServer((req, res) => {
  // Caso a url digitada (localhost ou o domínio configurado), seja incremento com /home, entra no if
  if (req.url === "/home") {
    // A requisição 200, é o status de OK, quando foi retornado que está em ordem, e a frente o objeto é o tipo de objeto sendo arquivo html
    res.writeHead(200, { "Content-Type": "text/html" });
    // Esse é o retorno após realizar a requisição, para que seja entregue a quem solicitou
    res.end("<h1>Home Page</h1>");
  }
  // Criando um novo recurso para verificar os usuário, sendo localhost/users
  if (req.url === "/users") {
    // Objeto usuários com todas informações
    const users = [
      { name: "John Doe", email: "john@doe.com" },
      { name: "Jane Doe", email: "Jane@doe.com" },
    ];
    res.writeHead(200, { "Content-Type": "application/json" });
    res.end(JSON.stringify(users));
  }
});

server.listen(port, () => console.log(`Rodando na porta ${port}`));
