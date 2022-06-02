/*
1 - Faça cinco programas, um para cada operação aritmética básica. 
Seu programa deve ter duas constantes, a e b, definidas no começo com os valores que serão operados.
Faça programas para:

Adição (a + b)
Subtração (a - b)
Multiplicação (a * b)
Divisão (a / b)
Módulo (a % b)
*/

//Função de adição.

function adicao(a,b){
    return a + b;
}
console.log(adicao(2,2))

/////////////////////////////////





//funcao de subtracao.

function subtracao(a,b){
    return a - b;
}
console.log(subtracao(4,2))

/////////////////////////////////


//funcao multiplicacao.

function multiply(a,b){
return a * b 

}

console.log(multiply(2,2))

/////////////////////////////////



// 2. Criar programa que retorna o maior de dois numeros;
 function maiorNum(...arr1){
    return Math.max(...arr1);
 }
 console.log(maiorNum(1,2,30))

///////////////////////////////

/** 3. Faça um programa que, dado um valor definido numa constante, 
 * retorne "positive" se esse valor for positivo, 
 * "negative" se for negativo e "zero" caso contrário.
 */
function boleann(){
    const valorNum = 1
    if(valorNum > 0){
        return "positive"
    }else if(valorNum < 0){
        return "negative"
    }else{
        return "zero"
    }
}
console.log(boleann())

////////////////////////


//4. angulos de triangulo.

function myTriangle(){
    const lado1 = 60;
    const lado2 = 60;
    const lado3 = 60;
    const triangulo = lado1 + lado2 + lado3;
        
    switch(triangulo){
        case (180):
            console.log(true)
            break;
            default:
                console.log(false)
                break;

    }
    
}
myTriangle()
/////////////////////////////////////

//5. programa de peças de xadrez

function bispo(direcoes){
   return direcoes.toLowerCase()   
    
}
console.log(bispo("DIAGONAIS"))

/////////////////////////////////

//6. programa que confere se pelo menos 1 numero é par, se for retorna true

function numberPar(){
 const num1 = 1;
 const num2 = 2;
 const num3 = 3;

    if(num1 % 2 === 0 || num2 % 2 === 0 || num3 % 2 === 0){
        return true
    }else{
     return false
    }
}
console.log(numberPar())        
/////////////////////////////////////


//6. Programa que confere se pelo menos 1 numero é impar, se for retorna true.

function numberImpar(){
    const num1 = 2;
    const num2 = 2;
    const num3 = 3;
   
       if(num1 % 2 !== 0 || num2 % 2 !== 0 || num3 % 2 !== 0){
           return true
       }else{
        return false
       }
   }
   console.log(numberImpar())        
   ////////////////////////////////////////

   //7. Programa para calcular o total de lucro de uma empresa, de mil vendas.
   function lucroProduto(){
       const valorCompraProduto = 100;
       const valorVendaProduto = 150;
       let impostoProduto = 20;
       let totalCompraComImposto = valorCompraProduto + impostoProduto;
       let totalLucro = valorVendaProduto - totalCompraComImposto;
       let totalLucroMilVendas = totalLucro * 1000;
       return totalLucroMilVendas
   }
   console.log("A empresa teve um total de " + lucroProduto() + " vendas")

   //////////////////////////////////
