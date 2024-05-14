// 1. Crie um script que exiba a mensagem "Hello World!" em um alerta no navegador.

alert('Hello World!')

//2. Crie um script que declare duas variáveis e exiba o resultado da soma entre elas.

let a = 10
let b = 20
let c = a + b
alert(c)


//3. Crie um script que declare uma variável e verifique se o seu valor é um número. Se for, exiba a mensagem "É um número", caso contrário, exiba a mensagem "Não é um número".
    
//Para saber o tipo de dado você pode usar o operador `typeof`

let d = 10

if (typeof d === 'number') {
  alert('É um número')
} else {
  alert('Não é um número')
}

// 4. Crie um script que declare uma variável e verifique se o seu valor é uma string. Se for, exiba a mensagem "É uma string", caso contrário, exiba a mensagem "Não é uma string".

let e = "Olá meu povo"

if (typeof e === 'string') {
  alert('É uma string')
}else {
  alert("Não é uma string")
} 

// 5. Crie um script que declare uma variável e verifique se o seu valor é um booleano. Se for, exiba a mensagem "É um booleano", caso contrário, exiba a mensagem "Não é um booleano".

let f = true

if (typeof f === 'boolean') {
  alert('É um booleano')
}else {
  alert('Não é um booleano')
}

//6. Crie um script que declare duas variáveis e exiba o resultado da subtração entre elas.

let num1 = 10
let num2 = 5
let resultado = num1 - num2

alert(`O resultado da subtração entre ${num1} e ${num2} é ${resultado}`)

//7. Crie um script que declare duas variáveis e exiba o resultado da multiplicação entre elas.

let n1 = 5
let n2 = 6
let mult = n1 * n2
alert(mult)

//8. Crie um script que declare duas variáveis e exiba o resultado da divisão entre elas.

let nu3 = 30
let nu4 = 2
let re = nu3 / nu4
alert(re)

//9. Crie um script que declare uma variável e verifique se o seu valor é um número par. Se for, exiba a mensagem "É um número par", caso contrário, exiba a mensagem "Não é um número par".

let n6 = 6

if (n6 % 2 === 0) {
  alert('É um número par')
}else {
  alert('Não é um número par')
}

//10. Crie um script que declare uma variável e verifique se o seu valor é um número ímpar. Se for, exiba a mensagem "É um número ímpar", caso contrário, exiba a mensagem "Não é um número ímpar".

let n7 = 7

if (n7 % 2 != 0) {
  alert('É um número ímpar')
} else {
  alert('Não é um número ímpar')
}