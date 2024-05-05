class funcionario{
    constructor(nome, cargo, salario){
        this.nome = nome;
        this.cargo = cargo;
        this.salario = salario;
    }

    salarioNovo(novosalario){
        this.salario = novosalario;
    }

    getInformacoes(){
        console.log(` nome ${this.nome}, cargo ${this.cargo}, salario${this.salario}`)
    }
}

const funcionarionovo = new funcionario("Adaylson", "ser lindo", "R$ 30000")

console.log(funcionarionovo)
funcionarionovo.salarioNovo("R$ 300000")
funcionarionovo.getInformacoes()