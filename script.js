document.getElementById('form').addEventListener('submit', function (event) {
    event.preventDefault(); // Impede o envio do formulário

    const raio = parseFloat(document.getElementById('raio').value);

    if (isNaN(raio) || raio <= 0) {
        alert('Por favor, insira um valor válido para o raio!');
        return;
    }

    // Calculando as propriedades da esfera
    const pi = Math.PI;

    // Comprimento da esfera: C = 2 * π * R
    const comprimento = 2 * pi * raio;

    // Área da esfera: A = π * R²
    const area = pi * Math.pow(raio, 2);

    // Volume da esfera: V = 4/3 * π * R³
    const volume = (4 / 3) * pi * Math.pow(raio, 3);

    // Exibindo os resultados
    document.getElementById('comprimento').textContent = comprimento.toFixed(2) + ' unidades';
    document.getElementById('area').textContent = area.toFixed(2) + ' unidades²';
    document.getElementById('volume').textContent = volume.toFixed(2) + ' unidades³';

    // Exibindo a seção de resultados
    document.getElementById('resultados').style.display = 'block';
});