const prompt = require('prompt-sync')();



class contaBancaria{
    constructor(Cpf, Nome, numeroConta, saldo){
        this.Cpf = Cpf;
        this.Nome = Nome;
        this.numeroConta = numeroConta;
        this.saldo = saldo;
    }

    deposistar(deposito){
        this.saldo = this.saldo + deposito;
    }

    retirar(retiro){
        this.saldo = this.saldo - retiro;
    }
}


console.log("Bem Vindo ao Banco Novo")
console.log("Coloque suas informções para que possamos criar uma conta para você: ")

const cpf = prompt('Digite o seu cpf: ')
const Nome = prompt('Digite o seu Nome: ')

const novaconta = new contaBancaria(cpf, Nome, Math.random(), 0)

console.log('Parabens sua conta foi criada com sucesso')

let repeticão = 0
while (repeticão < 1) {
    console.log('deseja fazer alguma mais coisa ?')
    console.log()
    const decisao = prompt("s ou n : ")

    if(decisao == 's'){
        console.log('lista de opção')
        console.log('consultar seu saldo    : 1')
        console.log('Depositar em seu saldo : 2')
        console.log('Retirar de sua conta   : 3')

        const op = prompt('Digite o numero de sua ação: ')
        if(op == 1){
            console.log(novaconta.saldo)
        }else
        if(op == 2){
            const d = parseInt(prompt('qual a quantidade em que vc deseja retirar')) 
            novaconta.deposistar(d)
            console.log('seu novo saldo é :')
            console.log(novaconta.saldo)
        }else
        if(op == 3){
            const d = parseInt(prompt('qual a quantidade em que vc deseja sacar')) 
            novaconta.retirar(d)
            console.log('seu novo saldo é :')
            console.log(novaconta.saldo)
        }
        else{
            console.log('me desculpe, mas não consegui entender')
        }
    }
    else{
        repeticão = 2
    }
}
