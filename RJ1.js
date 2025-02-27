const capitao = {
    nome: 'Steve Rogers',
    codinome: 'Capitao America',
    armaPrincipal: "Escudo",
    armaSecundaria: '',
    velocidade: 85,
    forca: 75,
    resistencia: 80,
    descricao: function(){
        return "Nome do personagem: " + this.nome + "\n" +
        "Codinome: " + this.codinome + "\n" +
        "Arma Principal: " + this.armaPrincipal + "\n" +
        "Arma Secundaria: " + this.armaSecundaria + "\n" +
        "Nivel de força: " + this.forca + "\n" +
        "Nivel de velocidade: " + this.velocidade + "\n" +
        "Nivel de resistencia: " + this.resistencia
    }   
}

const thanos = {
    nome: 'Thanos',
    codinome: 'Thanos',
    armaPrincipal: "Manopla",
    armaSecundaria: '',
    velocidade: 100,
    forca: 100,
    resistencia: 100,
    descricao: function(){
        return "Nome do personagem: " + this.nome + "\n" +
        "Codinome: " + this.codinome + "\n" +
        "Arma Principal: " + this.armaPrincipal + "\n" +
        "Arma Secundaria: " + this.armaSecundaria + "\n" +
        "Nivel de força: " + this.forca + "\n" +
        "Nivel de velocidade: " + this.velocidade + "\n" +
        "Nivel de resistencia: " + this.resistencia
    }   
}


const thor = {
    nome: 'Thor Odinson',
    codinome: 'Thor',
    armaPrincipal: "Mjolnir",
    armaSecundaria: 'Stormbreaker',
    velocidade: 90,
    forca: 80,
    resistencia: 95,
    descricao: function(){
        return "Nome do personagem: " + this.nome + "\n" +
        "Codinome: " + this.codinome + "\n" +
        "Arma Principal: " + this.armaPrincipal + "\n" +
        "Arma Secundaria: " + this.armaSecundaria + "\n" +
        "Nivel de força: " + this.forca + "\n" +
        "Nivel de velocidade: " + this.velocidade + "\n" +
        "Nivel de resistencia: " + this.resistencia
    }   
}

const hulk = {
    nome: 'Bruce Banner',
    codinome: 'Hulk',
    armaPrincipal: "Socos",
    armaSecundaria: '',
    velocidade: 45,
    forca: 100,
    resistencia: 100,
    descricao: function(){
        return "Nome do personagem: " + this.nome + "\n" +
        "Codinome: " + this.codinome + "\n" +
        "Arma Principal: " + this.armaPrincipal + "\n" +
        "Arma Secundaria: " + this.armaSecundaria + "\n" +
        "Nivel de força: " + this.forca + "\n" +
        "Nivel de velocidade: " + this.velocidade + "\n" +
        "Nivel de resistencia: " + this.resistencia
    }   
}


const personagens = [thanos, capitao, hulk, thor]; 

function compara(lista) {
    let maisForte = lista[0];
    let maisRapido = lista[0];
    let maisResistente = lista[0];

    for (let p of lista) { 
        if (p.forca > maisForte.forca) { 
            maisForte = p;
        }
        if (p.velocidade > maisRapido.velocidade) { 
            maisRapido = p;
        }
        if (p.resistencia > maisResistente.resistencia) { 
            maisResistente = p;
        }
    }

    return "Mais forte é " + maisForte.nome + "\n" + "Mais rápido é " + maisRapido.nome + "\n" + "Mais resistente é " + maisResistente.nome;
}

for (let p of personagens) {
    console.log(p.descricao() + "\n");
}

console.log(compara(personagens));