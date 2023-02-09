import fs from 'fs';

const dir = "./upload";

if (!fs.existsSync(dir)) {
  console.log("criando diretório");
  fs.mkdirSync(dir);
  setTimeout(() => {
    console.log("----------------");
    console.log("Diretorio criado com sucesso");
  }, 1000);
} else {
    console.log("acessando diretorio", dir);

    }

    let msg = "O melhor time do mundo é o Palmeiras";
    let file = "palmeiras.txt";
    let path = `${dir}/${file}`;

    if (!fs.existsSync(path)) {
      fs.writeFileSync(path, msg);
      console.log("Arquivo criado com sucesso", file);
    }