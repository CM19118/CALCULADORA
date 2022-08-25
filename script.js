const calculadora = () =>{
    const sumar = (num1,num2)=>{
        let resultado = num1 + num2;
        console.log(resultado);
    }
    const restar = (num1,num2)=>{
        let resultado = num1 - num2;
        console.log(resultado);
    }
    const multiplicar = (num1,num2)=>{
        let resultado = num1 * num2;
        console.log(resultado);
    }
    const dividir = (num1,num2)=>{
        let resultado = num1 / num2;
        console.log(resultado);
    }
    return {sumar, restar, multiplicar, dividir}
};


const calculadoraCientifica = ()=>{
    const potenciacion = (num1,exp)=>{
        let resultado = Math.pow(num1,exp);
        console.log(resultado);
    }
    const absoluto = (num1)=>{
        let resultado = Math.abs(num1);
        console.log(resultado);
    }
    const raiz = (num1)=>{
        let resultado = Math.sqrt(num1);
        console.log(resultado);
    return {potenciacion, absoluto, raiz}
    }
};



const c1 = calculadora();
