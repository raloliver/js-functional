# JAVASCRIPT FUNCIONAL

> Versões mais recentes do Google Chrome já suportam o carregamento nativos de módulos através da tag `<script type="module">`.

Um modulo em javascript é uma únidade de código confinada, e somente é acessada se o mesmo for exportado/importado.

- é necessário colocar o .js ao final do arquivo na importação por conta da exigência para uso de módulos nativamente
- no arquivo principal da SPA é necessário apenas importar o arquivo principal, e o sistema de módulos se encarrega de carregar os arquivos importados

> Functor é simplesmente algo mapeável, ou seja, que suporta a operação `map`.

O `Array` é um Functor, pois permite realizar operações de mapeamento em seus itens, isto é, nos dados que possui.

### REDUCE RIGHT

Esse método aplica à uma função com um acumulador e cada valor do array (da direita para esquerda) é reduzido para um valor único.

### POINT FREE FUNCTION

A função em nenhum momento referência um parâmetro.

### SINGLE RESPONSABILITY PRINCIPLE

```
const trim = text => text.trim();
const toUpperCase = text => text.toUpperCase();
const split = separator => text => text.split(separator);

const words =
  split(' ')(
    toUpperCase(
      trim(' Alura Cursos ')
    )
  );

console.log(words);
```

A função split em sua essência precisa de pois parâmetros, mas para que seja possível realizar a composição ela deve receber um parâmetro apenas. Ela recebe o separador e internamente tenta operar com a variável text que sequer existe.

### BIND

Partial Application example.

> Toda função pode implementar o método `bind` onde é possível substituir o `this` e receber valores default para parametros.

```
const divisible = (divider, number) => !(number % divider);

const divisibleByTwo = divisible.bind(null, 2);
```

### MAP

```
const numbers = [1,2,3,4,5,6,7,8,9,10];
const newNumbers = numbers.map(number => {
    if(number % 2) return ++number
    return number;
});
```

### FILTER

```
const numbers = [1,2,3,4,5,6,7,8,9,10];
const filteredNumbers = numbers.filter(number => number % 2);
```

A função Array.filter itera sob os dados do Array, assim como a função Array.forEach. No entanto, ela permite aplicar uma regra para decidir se o elemento fará parte do novo array retornado por ela, isto é, do array filtrado. Se a lógica retornar true ou qualquer valor que o represente, o item fará parte do novo array, caso contrário será excluído. No caso, passamos a lógica como parâmetro através de uma arrow function. Quando chamada, teremos acesso ao elemento que esta sendo iterado naquele momento. O retorno de number % 2 será o resto da divisão por dois. Se o número for divisível por dois, será 0. Todavia, 0 é considerado false e por isso todos os números que forem divisíveis por dois não farão parte do array. Qualquer número diferente de 0 é considerado true. Em suma, no final teremos uma lista com apenas números ímpares.

### REDUCE

```
const sum = numbers
    .reduce((previous, number) =>
        previous + number, 0);

```

Retornando o total da soma dos números.

### FLATMAP

Garante que os dados tenham apenas uma dimensão. No código usamos um exemplo de criação de um flatMap a partir de um reduce e adicionamos ao prototype do Array, pois qualquer modificação realizada no prototype é disponibilizada para todos os objetos daquele tipo, pois eles compartilham o mesmo prototype.

### PROMISE

- Nativamente não é possível implementar um mecanismo de timeout.
- Promises não possuem nativamente um mecanismo de retry.
- Uma Promise após resolvida ou rejeitada, não pode ser executada novamente.

**Promise.race**: Em suma, estamos interessados no resultado da primeira promise resolvida, mas se algum erro acontecer antes de qualquer resultado válido, caímos dentro do catch.

```
const promise1 = new Promise((resolve, reject) =>
    setTimeout(() => resolve('promise 1 resolvida'), 3000));

const promise2 = new Promise((resolve, reject) =>
    setTimeout(() => reject('promise 2 resolvida'), 1000));

Promise.race([promise1, promise2]
)
.then(console.log)
.catch(console.log);
```

**delay**: Entre cada nova tentativa será preciso realizar um pequeno delay e por este motivo foi criado esse mecanismo de delay que será utilizado entre chamadas de Promises.

```
export const delay = milliseconds => data
    new Promise((resolve, reject) =>
        setTimeout(() => resolve(data), milliseconds)
    );
```

**retry** (recursivo): É importante lembrar que as chamadas recursivas terminarão quando a condição de um leave event for atendida. O leave event abaixo foi representado pela instrução if(counter < 0) return;.

```
const showCountDown = counter => {
  if (counter < 0) return;
  console.log(counter);
  showCountDown(--counter);
};
showCountDown(3);
```

### PUBLISHER AND SUBSCRIBER

_subscribe_(topico): realiza a inscrição para um tópico. É possível haver um ou mais inscritos e todos eles serão notificados toda vez que houver uma publicação para este tópico.

_publish_(topico, dado): notifica todos que estejam inscritos ao tópico passado como primeiro parâmetro. O segundo parâmetro é qualquer informação que queiramos fornecer para os inscritos.

**Event Emitter (from NodeJS)**

> `EventEmitter` implementa o pattern Publisher/Subscribe. Ele possui os métodos `emit` e `on` que equivalem respectivamente aos métodos `publish` e `subscribe`.

A imlementação desse patter reduz o acoplamento do código. As classes envolvidas ficarão acopladas apenas com barramento de eventos (event bus).

### Estrutura de dados Map

- Através do método get obtermos o dado associado à chave passada como parâmetro para o método.
- Adicionamos novas chaves/valores através do método set.
