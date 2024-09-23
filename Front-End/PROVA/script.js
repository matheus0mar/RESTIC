function toggleMenu() {
    var menu = document.getElementById("menu");
    var menuIcon = document.querySelector(".menu-icon");
    menu.classList.toggle("active");

    var isExpanded = menu.classList.contains("active");
    menuIcon.setAttribute("aria-expanded", isExpanded);
}

document.querySelectorAll('#menu a').forEach(function (link) {
    link.addEventListener('click', function () {
        var menu = document.getElementById("menu");
        var menuIcon = document.querySelector(".menu-icon");
        if (menu.classList.contains('active')) {
            menu.classList.remove('active');
        }
    });
});

var peso = document.getElementById('imcPeso');
var altura = document.getElementById('imcAltura');
var idade = document.getElementById('imcIdade');
var nivelFisico = document.getElementById('imcNivelFisico');
var mensagemResultado = document.getElementById('mensagemFinal');

function calculaImc(e) {
    e.preventDefault(); // Previne o envio do formulário

    // Verifica se os campos estão preenchidos
    if (!peso.value || !altura.value || !idade.value) {
        mensagemResultado.innerHTML = 'Por favor, preencha os campos corretamente.';
        return;
    }

    var imc = peso.value / (altura.value * altura.value);
    imc = imc.toFixed(2);
    var mensagem = '';

    // Mensagens de acordo com o IMC
    if (imc <= 16.9) {
        mensagem = 'Sinto muito, seu IMC é de ' + imc + ' kg/m² e você precisa ganhar peso. Neste momento, você pode estar apresentando os seguintes sintomas: queda de cabelo, infertilidade, ausência menstrual. Procure uma nutricionista.';
    } else if (imc > 16.9 && imc <= 18.4) {
        mensagem = 'Sinto muito, seu IMC é de ' + imc + ' kg/m² e você precisa ganhar peso. Neste momento, você pode estar apresentando os seguintes sintomas: fadiga, stress, ansiedade. Procure uma nutricionista.';
    } else if (imc > 18.4 && imc <= 24.9) {
        mensagem = 'Parabéns, seu IMC é de ' + imc + ' kg/m² e você está dentro do peso adequado! Você tem menor risco de doenças cardíacas e vasculares.';
    } else if (imc > 24.9 && imc <= 29.9 && nivelFisico.value !== 'intenso') {
        mensagem = 'Sinto muito, seu IMC é de ' + imc + ' kg/m² e você está acima do peso! Neste momento, você pode estar apresentando os seguintes sintomas: fadiga, má circulação, varizes. Procure uma nutricionista.';
    } else if (imc > 24.9 && imc <= 29.9 && nivelFisico.value === 'intenso') {
        mensagem = 'Seu IMC indica ' + imc + ' kg/m², mas como você pratica muita atividade física, o seu peso pode ser devido aos músculos, o que é uma coisa boa. Para confirmar isso, o ideal é que você procure um nutricionista ou médico para avaliar sua composição corporal.';
    } else if (imc > 29.9 && imc <= 34.9 && nivelFisico.value !== 'intenso') {
        mensagem = 'Sinto muito, seu IMC é de ' + imc + ' kg/m² e você está acima do peso! Neste momento, você pode estar apresentando os seguintes sintomas: diabetes, angina, infarto, aterosclerose. Procure uma nutricionista.';
    } else if (imc > 29.9 && imc <= 34.9 && nivelFisico.value === 'intenso') {
        mensagem = 'Seu IMC indica ' + imc + ' kg/m², mas como você pratica muita atividade física, o seu peso pode ser devido aos músculos, o que é uma coisa boa. Para confirmar isso, o ideal é que você procure um nutricionista ou médico para avaliar sua composição corporal.';
    } else if (imc > 34.9 && imc <= 40 && nivelFisico.value !== 'intenso') {
        mensagem = 'Sinto muito, seu IMC é de ' + imc + ' kg/m² e você está acima do peso! Neste momento, você pode estar apresentando os seguintes sintomas: apneia do sono e falta de ar. Procure uma nutricionista.';
    } else if (imc > 34.9 && imc <= 40 && nivelFisico.value === 'intenso') {
        mensagem = 'Seu IMC indica ' + imc + ' kg/m², mas como você pratica muita atividade física, o seu peso pode ser devido aos músculos, o que é uma coisa boa. Para confirmar isso, o ideal é que você procure um nutricionista ou médico para avaliar sua composição corporal.';
    } else if (imc > 40 && nivelFisico.value !== 'intenso') {
        mensagem = 'Sinto muito, seu IMC é de ' + imc + ' kg/m² e você está acima do peso! Neste momento, você pode estar apresentando os seguintes sintomas: refluxo, dificuldade para se mover, escaras, diabetes, infarto, AVC. Procure uma nutricionista.';
    } else if (imc > 40 && nivelFisico.value === 'intenso') {
        mensagem = 'Seu IMC indica ' + imc + ' kg/m², mas como você pratica muita atividade física, o seu peso pode ser devido aos músculos, o que é uma coisa boa. Para confirmar isso, o ideal é que você procure um nutricionista ou médico para avaliar sua composição corporal.';
    }

    mensagemResultado.innerHTML = mensagem; // Exibe a mensagem
}
