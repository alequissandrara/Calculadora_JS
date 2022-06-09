function calcular (tipo,valor) {
if(tipo === 'acao'){
    //Limpando o visor da tela da calculadora
    if(valor === 'c'){

        document.getElementById('resultado').value = ''
    }
    //concatenar os digitos com os caracters 
    if(valor === '+' || valor === '-' || valor === '*' || valor === '/' || valor === '.'){
        document.getElementById('resultado').value += valor
    }
    /*Efetuar o eval para que a página reconheça às concatenações 
    dos valores com os simbolos n. como um calculo*/
    if(valor === '='){
        var valor_campo = eval(document.getElementById('resultado').value)
        document.getElementById('resultado').value = valor_campo
    }

}else if(tipo === 'valor'){
     //efetua a comcatenação ao digitar os valores   
    document.getElementById('resultado').value +=valor

}


}

