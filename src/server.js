const database = require("./database/sqlite");

//Aqui temos a primeira variável que informa que é NECESSÁRIO o express pra funcionar 
//tendo isso importado (e para não precisarmos ficar chamando sempre dessa forma), colocamos o express (a variável) em outra
const express = require("express");

const app = express();
app.use(express.json());

app.post("/users", (request, response) => {
    const { name, email, password } = request.body;

    response.send(`Usuário: ${name}`);
});


database();

const PORT = 3333;
app.listen(PORT, () => console.log(`Server is running on PORT ${PORT}`));