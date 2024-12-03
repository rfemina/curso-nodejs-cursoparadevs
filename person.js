class Person {
  constructor(name) {
    this.name = name;
  }

  sayMyName() {
    return `My name is: ${this.name}`;
  }
}

// Processo para exportar os módulo criados
// 1º Forma mais simples
// module.exports = Person;
// Várias classes para serem exportadas, é como a parte e herança
module.exports = {
  Person,
};
