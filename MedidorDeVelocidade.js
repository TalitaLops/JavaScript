// Velocidade máxima de até 70 km/h
// Cada 5km acima do limite resulta em 1 ponto
// Pontos > 15 = "Carteira suspensa"

verificarVelocidade(90);

function verificarVelocidade(velocidade) {
    const velocidadeMax = 70;
    const kmPorPonto = 5;
    if (velocidade > velocidadeMax) {
    const pontos = Math.floor(((velocidade - velocidadeMax) / kmPorPonto));

    if (pontos >= 15) {
        console.log('Carteira suspensa',pontos);
    } else {
        console.log('Pontos:',pontos)
    }
    } else {
        console.log('Ok')
    }
}