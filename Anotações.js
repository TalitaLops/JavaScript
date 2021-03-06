// TIPO PRIMITIVO

let nome = 'Talita'; //string literal
let idade = 20; //number literal
let estaAprovado = true; //boolean
let sobrenome; //Undefined
let corSelecionada = null; //Redefinir um valor 


// TIPAGEM DINÂMICA
// Você não precisa definir o título a princípio, ele descobre conforme esta sendo feito
// "typeof" no console descobre o tipo de variavel


// OBJETOS
// É um tipo por referência.
let pessoa = {
    nome: 'Estela',
    idade: '17',
    estaAprovado: false,
    sobrenome: 'Rocha'
}; 


// ARRAYS 
// Conjunto de dados acessado por um índice.
// Começa sempre no 0.
// É um objeto

let irma = ['Yasmin', 19, 'São Paulo'];
//console.log(irma[1]);


// FUNÇÕES

// Controla a entrada e saída de dados.
// Como criar : Verbo + Substantivo 
// Exemplos : alterarTamanho, mudarCor

// Função sem parâmetro :
let corSite = "azul";
function mudarCor(){
    corSite = "";
};

// Função com parâmetro(argumento)
let corSite2 = "azul";
function mudarCor2(cor){
    corSite2 = cor;
};
mudarCor2("vermelho");


//TIPOS DE FUNÇÕES 

// 1º Tipo: Realiza uma tarefa e não devolve nada.
function dizerNome(){
    console.log('Talita');
};

// 2º Tipo: Tem retorno.

function multiplicar(valor){
    return valor * 2;
}
// console.log(multiplicar(8));

// Também pode usar o valor numa variável:

let resultado = multiplicar(8);
// console.log(resultado)


// OPERADORES LÓGICOS 

// Aritméticos (+, -, *, /, **(Exponencial) )
// -- -> Diminui 1 
// ++ -> Acrescenta 1

// Atribuição ( = )
// -= -> O valor menos ele mesmo
// += -> O valor mais ele mesmo

// Operadores de Igualdade
//Igualdade estrita
( 1 === 1);
//Igualdade solta
( 1 == 1); //não é recomendado.
//Comparacão
let pontos = 130;
let tipo = pontos > 100 ? 'premium' : 'comum';

//-----------------------------------------------------

//Lógicos (and, or, not)
// e/and (&&)
// Retorna true se os dois operandos forem true.

let maiorDeIdade = true;
let carteiraDeTrabalho = true;
let podeAplicar = maiorDeIdade && carteiraDeTrabalho;

// ou/or (||)
// Retorna se true se um for verdadeiro
let maiorDeIdade1 = false;
let carteiraDeTrabalho1 = true;
let podeAplicar1 = maiorDeIdade1 || carteiraDeTrabalho1;

// não/not (!)
let candidatoRecusado = !podeAplicar1;


// Comparações com não boleanos

//Falsy
//Todos os valores que são: undefined, null, 0, false, '', NaN(not a number)

//Truthy = todos os outros
let corPersonalizada = '';
let corPadrao = 'Azul';
let corPerfil = corPersonalizada || corPadrao;

// Condicionais
//If .. Else

let hora = 15;
if (hora > 06 && hora < 12) {
    console.log('Bom dia!');
} else if (hora > 12 && hora < 18) {
    console.log('Boa tarde!')
} else {
    console.log('Boa noite!')
}

//Switch .. case

let permissao;

switch (permissao){
    case 'comum':
        console.log('Usuário comum');
    break; //Para não continuar a comparação
    
    case 'gerente':
        console.log('Usuário gerente');
    break;

    case 'diretor':
        console.log('Usuário diretor');
    break;

    default:
        console.log('Usuário não reconhecido');
}

//Loop (laço de repetição)
// 1.For 
// for (let i = 1; i < 5; i++) {

//     if (i % 2 !== 0) {
//         console.log(i)
//     }
// }

// 2.While
// let i = 5;
// while (i >= 1){
//     if (i % 2 !== 0) {
//         console.log(i);
//     }
//     i--;
// }

// 3. Do..while
let i = 0;
do{
    console.log('digitando', i);
    i++;
} while (i < 5)
// *Não esquecer do i++, para não vira um loop infinito

// 4.For..in
//Usado geralmente para objeto
const pessoa2 = {
    nome: 'Lopes',
    idade: 20
};

for (let chave in pessoa2) {
    console.log(chave,pessoa2);
}

// 5.For..of
const cores = ['red', 'yellow', 'blue']
for (let cor of cores){
    console.log(cor);
}
let valorMaior = max(9,4);
function max(a, b){
    if (a > b) {
        console.log('O número', a, 'é maior que', b)
    } else {
        console.log('O número', b, 'é maior que', a)
    }
}
//simplificando
let num = max2(3, 5);
console.log(num)

function max2(c, d) {
    return c > d ? c : d;
}

// FACTORY FUNCTION (funções de fábrica)
// É pra facilitar o uso de vários objetos na mesma função.

function criarCelular(marcaCelular,tamanhoTela,capacidadeBateria) {
    return{
        marcaCelular,
        tamanhoTela,
        capacidadeBateria,
        ligar(){
            console.log("Fazendo ligação...")
        }
    }
}

const celular1 = criarCelular('Motorola',5.5,5000);
console.log(celular1);

const celular2 = criarCelular('Samsung',5.2,5200);
console.log(celular2);

