// const { configDotenv } = require("dotenv");

const mongoose = require("mongoose");

const connectToDatabase = async () => {
  await mongoose.connect(
    `mongodb+srv://${process.env.MONGODB_USERNAME}:${process.env.MONGODB_PASSWORD}@cursonodejsdicasparadev.kebid.mongodb.net/?retryWrites=true&w=majority&appName=CursoNodeJsDicasparadevs`,
    (error) => {
      if (error) {
        return console.log(
          "Ocorreu um erro ao se conectar com o banco de dados: ",
          error
        );
      }
      console.log("Conexão com o banco de dados realizado com sucesso! ");
    }
  );
};

module.exports = connectToDatabase;
