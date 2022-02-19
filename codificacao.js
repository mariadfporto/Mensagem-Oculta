var texto;
var operacao;
var incremento;
function cifrarCesar() {
    incremento = parseInt(document.getElementById("incremento").value);
    texto = texto.toUpperCase();
    let textoCodificado = "";
    Array.from(texto).forEach(function (t) {
        if (t == " ") {
            textoCodificado = textoCodificado + t;
        } else {
            let codigoAscii = t.charCodeAt();
            if (codigoAscii > 64 && codigoAscii < 91) {
                let posicao = codigoAscii + incremento;
                if (posicao > 90) {
                    posicao = posicao - 90 + 64;
                }
                textoCodificado += String.fromCharCode(posicao);
            }
        }
    });
    return textoCodificado;
}

function decifrarCesar() {
    incremento = parseInt(document.getElementById("incremento").value);
    texto = texto.toUpperCase();
    let textoDecodificado = "";
    Array.from(texto).forEach(function (t) {
        if (t == " ") {
            textoDecodificado = textoDecodificado + t;
        } else {
            let codigoAscii = t.charCodeAt();
            if (codigoAscii > 64 && codigoAscii < 91) {
                let posicao = codigoAscii - incremento;
                if (posicao <= 64) {
                    posicao = 90 - (64 - posicao);
                }
                textoDecodificado += String.fromCharCode(posicao);
            }
        }
    });
    return textoDecodificado;
}
function cifrarBase64() {
    return btoa(texto);
}
function decifrarBase64() {
    return atob(texto);
}
// Atualiza o texto do botao
function atualizarBotao(o) {
    let botao = document.getElementById("executar");
    if (o == "codificar") {
        botao.innerText = "Codificar Mensagem!";
    } else {
        botao.innerText = "Decodificar Mensagem!";
    }
    operacao = o;
}

// Mostra a box de elemento se for do tipo Cifra de Cesar
function atualizarTipo(tipo) {
    let incremento = document.getElementById("boxIncremento");
    incremento.hidden = tipo != "cesar";
}

function cifrar() {
    texto = document.getElementById("texto").value;
    let tipo = document.getElementById("tipo").value;
    var resultado;
    if (tipo == "cesar") {
        if (operacao == "codificar") {
            resultado = cifrarCesar();
        } else {
            resultado = decifrarCesar();
        }
    } else {
        if (operacao == "codificar") {
            resultado = cifrarBase64();
        } else {
            resultado = decifrarBase64();
        }
    }
    document.getElementById("resultado").innerHTML = resultado;
}
