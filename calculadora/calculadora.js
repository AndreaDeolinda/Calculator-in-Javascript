const txtOp1 = document.getElementById("op1")
const txtOperacion = document.getElementById("operacion")
const txtOp2 = document.getElementById("op2")
const btnCalcular = document.getElementById("calcular")
const pResultado = document.getElementById("resultado")


function calcular() {
    const operacion = txtOperacion.value;
    const op1 = parseFloat(txtOp1.value)
    const op2 = parseFloat(txtOp2.value)
    if (isNaN(op1) || isNaN(op2)) {
        pResultado.style.color = "red";
        pResultado.innerText = "Ingresaste operandos inválidos";
    } else if (operacion === "+" || operacion === "-" || operacion === "*" || operacion === "/") {
        let resultado;
        switch (operacion) {
            case "+":
                resultado = op1 + op2
                break; //el break tiene que estar para que no se ejecute de seguido//
            case "-":
                resultado = op1 - op2
                break;
            case "*":
                resultado = op1 * op2
                break;
            case "/":
                resultado = op1 / op2
                break;
        }
        pResultado.style = "color:black"
        pResultado.innerText = "=" + resultado
    } else {
        pResultado.style = "color:red"
        pResultado.innerText = "calculo imposible"
    }

}
