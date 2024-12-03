const path = require("path");

// Basename
// No javascript é possível acessar uma variável com __, e o nome do arquivo, ficando __nomeArquivo
// Apenas o nome do arquivo atual.
console.log(path.basename(__filename));

// Nome do diretório atual
console.log(path.dirname(__filename));

// Extensão do arquivo
console.log(path.extname(__filename));

// Criar objeto Path
console.log(path.parse(__filename));

// Juntar caminhos de arquivo
console.log(path.join(__dirname, "test"));
