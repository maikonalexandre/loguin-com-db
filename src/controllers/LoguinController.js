const Database = require("../database/config");

module.exports={
    async create(req, res){
        const db = await Database();
        const nome = req.body.name;
        const senha = req.body.senha;

    const isNome = await db.all(`SELECT * FROM loguin WHERE nome == "${nome}" AND pass == "${senha}"`);
    console.log(isNome);

    if(isNome.length==0){
        res.redirect(`/senhaincorreta`);
    }else{
        res.redirect(`/usuario`);
    }

    // const isSenha = await db.all(`SELECT pass FROM loguin`);
    // const isNome = await db.all(`SELECT nome FROM loguin`);


    // console.log(isNome, isSenha);
   
    // arrayNumValue = isNome.map(isNome => isNome.nome);
    // console.log(arrayNumValue);
    // arraySenhaValue = isSenha.map(isSenha => isSenha.pass);
    // console.log(arraySenhaValue);

    // nomeExist =  arrayNumValue.some(isNome => isNome === nome);
    // senhaExist =  arraySenhaValue.some(isSenha => isSenha === senha);
          
    // console.log(nomeExist, senhaExist);

    // if(nomeExist===true & senhaExist===true){
    // res.redirect(`/usuario`);
            
    //     }else{  
    //    res.redirect(`/senhaincorreta`);
    // } 
},

async novo(req, res){
    const db = await Database();
    const nome = req.body.name;
    const senha = req.body.senha;

    const isNome = await db.all(`SELECT nome FROM loguin WHERE nome == "${nome}"`);
    console.log(isNome);

if(isNome.length==0){
    console.log('cadastrado com sucesso');

    await db.run(`INSERT INTO loguin(
        nome,
        pass
        )VALUES(
            "${nome}",
            "${senha}"
        )`);
        
    await db.close();
    res.redirect(`/`);

}else{
    res.redirect(`/senhaincorreta`);
}
}
}
    