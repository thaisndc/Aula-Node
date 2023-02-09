import fs from 'fs';

const dir = "./upload";

if (!fs.existsSync(dir)) {
  console.log("criando diretório");
  fs.mkdir(dir, (err) => {
    console.log("Diretorio criado com sucesso");
});
} else {
    console.log("acessando diretorio", dir);

    }

    let msg = "O segundo melhor time do mundo é o Palmeiras-20";
    let file = "palmeiras-20.txt";
    let path = `${dir}/${file}`;

    if (!fs.existsSync(path)) {
      fs.writeFileSync(path, msg);
      console.log("Arquivo criado com sucesso", file);
    }