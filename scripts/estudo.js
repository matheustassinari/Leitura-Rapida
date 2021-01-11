/**Hello-World */
/**
 * 
 * Barra duas estrelinhas e enter
 * 
 * 
 */

/**Mostra informações no console do navegador */
console.log("Olá Mundo");

/**const define uma constante */
const data = "08/01/2021";

/**var define uma variavel */
var textLog = "Hello World!";

console.log(textLog);
console.log(textLog);
console.log(textLog);
console.log(data);

/**
 * operador igual , = atribuí, == compara,
 *  === campara considerando o tipo de variável,
 * e temos as variantes como (!=)(!==)(<=)(>=) 
 * o retorno sempre vai ser true ou false.
 * 
 * 
 * && AND, as duas condições deve ser verdadeiras.
 * || OR, nome pipe, apenas uma das condições precisam ser verdadeiras.
 * 
 * let é a declaração de uma variavel,
 * que se declarada dentro de um bloco {}
 * só pode ser utilizada dentro dele.
 * 
 *  
 */

let a = 10;
const b = "10";

console.log(a == b);
console.log(a === b);
console.log(a != b);
console.log(a !== b);

/**typeof confere o tipo da variavel*/
console.log(a == b && typeof b == "string");
console.log(a == b || typeof a == "string");


let cor = "amarelo";

/**if = se sa condição forem respeitadas ele executa algo
 * else = caso não ele executa outra coisa
 */

if (cor === "verde"){

    console.log("siga");

} else if(cor === "amarelo") {

    console.log("cuidado");

} else {

    console.log("pare");

}

/**
 * switch é uma alternativa ao if
 */

 switch (cor) {

    case "verde" :
        console.log("siga");
        break;

    case "amarelo" :
        console.log("cuidado");
        break;

    case "vermelho" : 
        console.log("pare");
        break;
    
    default:
        console.log("faça o que quiser");

 }


let n = 5;

/**(variavel de contagem, condição de loop, incremento) */
for (let i = 0; i <=10; i++){

    /**(´´) = crase, interpreta com texto
     * ${} faz uma abertura no texto e inseri codigo java script
     */
    console.log(`${i} X ${n} = ${i*n}`);

    /**sem isso teria que concatenar o codigo */

    console.log(i + " X " + n + " = " + (i * n));

}

/** função comu utilizar o nome reservado function,
 *  seguido como nome da função. Para chamar ela,
 *  é só invocar ela com os parametros necessários.
 * 
 * 
 * 
 */


function calc (x, y, operator){

    /**para executar uma string precisamos utilizar 
     * a função nativa eval.
     * 
     */
    return eval(`${x} ${operator} ${y}`);

}

let resultado = calc(1, 2, "+");

console.log(resultado)

/** Para criar uma função anônima,
 *  precisamos colocar ela dentro de um valor (). 
 * 
 * Pode ser chamada logo em seguida,
 * colocando seus parametros(1, 5).
 * 
 */
//(function(x, y, opera){

  //  return eval(`${x} ${opera} ${y}`);

//    })(1, 5, "-");

/** Arrow function, uma forma reduzida 
 * com algumas propriedades a mais.
 */

let divsao = (x, y) => {

    return x / y;

}

console.log(divsao(4, 2));

/**
 * Eventos
 * 
 */


 /**Fica escutanto a janela do browser, 
  *quando voltamos para o foco ele ativa uma função 
  * 
  * No segundo exemplo se refere ao documento (site)
  * 
  */

 window.addEventListener('focus', event =>{

    console.log("focus");

 });

 document.addEventListener('click', event =>{

    console.log("click");
 });

 /**
  * O javaScript ja possui uma classe para datas
  *
  */
//metodo estatico 
let agora = Date.now();
    console.log(agora);

//instanciar
let agoraInstacia = new Date();
    console.log(agoraInstacia);
    console.log(agoraInstacia.toLocaleDateString("pt-BR"));

//Criando uma classe, o certo é criar em um arquivo separado.    
class TesteClasse{

    /**
     * O metodo Construtor é chamado automaticamente.
     * Toda classe deve chamar o metodo constructor() que já é nativo,
     * dentro do () vai todos os parametros que a classe necessita,
     * depois inserir os mesmos nos this para serem usadas internamente.  
     * 
     */
    constructor(){

        /**
         * Para utilizar atributos (variáveis) em varias partes da classe
         * utilizamoso comando this.
         * 
         * A conveção para deixar a informação privada é utilizar o _
         * exemplo _variavel.
         * 
         * Um atributo só é possivel fazer duas coisas ver ele ou modificar ele
         * ai utilizamos o get e set.
         * 
         */

        //Atributos
        this._dateEl = document.querySelector('#data');
        this._timeEl = document.querySelector('#hora');
        this._currentDate;

        this._variavel = "0";


        //chama um metodo no construtor
        this.initialize();




    }

    get exemplo(){

        //Já retorna o elemento html modificado
        return this._variavel.innerHTML;

    }

    set exemplo(valor){

        this._variavel.innerHTML = valor;

    }

    get exemplo(){

        return this._variavel;

    }

    set exemplo(valor){

        this._variavel = valor;

    }
    

    initialize(){


        console.log("Função qualquer");
    }

}

/**
 * Para instaciar um objeto (representar uma classe), colocamos dentro de uma
 * variável e usamos o comado new. 
 */

 let testeClasse = new TesteClasse();

 




/**
 * Para amarrar uma parte do me html a uma variável
 * utilizamos o El no final para identificar um elemento HTML
 */
let conteudoEl = document.querySelector('#conteudo');

//modifica o DOM

conteudo.innerHTML = "<p>Texto trocado.</p>";



