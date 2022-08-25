//***************************************OPERACIONES DE LA PANTALLA CALC****************/
let pantalla = document.querySelector('#screen-result');
function getDatos(ref){
    let value = ref.value;
    pantalla.value += value;
}
function clean(){
    pantalla.value = '';
}
function calcular(){
    try{
        pantalla.value = eval(pantalla.value);
    }catch (error){
        pantalla.value = 'Error';
        setTimeout(() => {
            clean();
        }, 500);
    }
};
//********************** FACTORY PATTERN *********************************/
const calculadora = ()=>{
    function operar(){
        pantalla.value = eval(pantalla.value);
    }
    return {operar};
}

const calcPadre = calculadora();
const calculadoraBasica = Object.create(calcPadre);
const calculadoraCientifica = Object.create(calcPadre);
calculadoraCientifica.__proto__.absoluto = function(){
    pantalla.value = eval(Math.abs(pantalla.value));
}
calculadoraCientifica.__proto__.clean = function(){
    pantalla.value = '';
}
