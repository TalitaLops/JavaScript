//Ler as propriedades de um objeto e exibir somente as que forem Strings

const filme = {
    titulo : 'Robin Hood',
    ano : 2018,
    categoria : 'Aventura'
}

exibirPropriedades(filme);
function exibirPropriedades(obj) {
    for (prop in obj)
    if (typeof obj[prop] === 'string')
    console.log(prop,obj[prop])
}

