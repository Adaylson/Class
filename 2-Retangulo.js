const prompt = require('prompt-sync')();

const largura = prompt('largura do triangulo:');
const altura = prompt('altura do triangulo:')

class retangunlo{
    constructor(largura, altura){
        this.largura = largura;
        this.altura = altura;
    }

    perimetro(){

        let l = this.largura*2+this.altura*2
        return(
            "o perimetro do retangulo é: " + l
        )
    }

    area(){

        let a = this.largura*this.altura
        return(
            "A area do triangulo é: " + a
        )
    }
}


const novoRetangulo = new retangunlo(largura, altura)


console.log(novoRetangulo)
console.log(novoRetangulo.perimetro())
console.log(novoRetangulo.area())