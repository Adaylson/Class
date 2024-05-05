

class Carro {
    constructor(marca, modelo, ano, cor){
        this.marca = marca;
        this.modelo = modelo;
        this.ano = ano;
        this.cor = cor;
    }

    imprimirInformações() {
        console.log(`Carro: ${this.marca} ${this.modelo} ${this.ano} ${this.cor}`)
    }

}

const ver = new Carro("Chavolett", "Classic", 2018, "Beje")

ver.imprimirInformações();

console.log(ver.ano)