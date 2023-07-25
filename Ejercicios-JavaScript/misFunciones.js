/**
 * Descripción
 * @method Nombre de la función
 * @param Parámetro A
 * @param Parámetro B
 * @return Valor que retorna
 */

function mostrar_ocultar(valorMO){

    if (valorMO == "val_mostrar"){
        document.getElementById("divMO").style.display = 'block';
    }else if (valorMO == "val_ocultar"){
        document.getElementById("divMO").style.display = 'none';
    }

}

function calcularSuma(){
    var num1, num2;

    num1 = Number(document.getElementsByName("sum_num1")[0].value);
    num2 = document.getElementsByName("sum_num2")[0].value;
    document.getElementsByName("sum_total")[0].value = num1 + Number(num2);

}

function calcularResta(){
    var num1, num2;

    num1 = Number(document.getElementsByName("res_num1")[0].value);
    num2 = document.getElementsByName("res_num2")[0].value;
    document.getElementsByName("res_total")[0].value = num1 - Number(num2);

}
function calcularMultiplicacion(){
    var num1, num2;

    num1 = Number(document.getElementsByName("mul_num1")[0].value);
    num2 = document.getElementsByName("mul_num2")[0].value;
    document.getElementsByName("mul_total")[0].value = num1 * Number(num2);

}
function calcularDivision(){
    var num1, num2;

    num1 = Number(document.getElementsByName("div_num1")[0].value);
    num2 = document.getElementsByName("div_num2")[0].value;
    document.getElementsByName("div_total")[0].value = num1 * Number(num2);

}