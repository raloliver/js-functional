# JAVASCRIPT FUNCIONAL

> Versões mais recentes do Google Chrome já suportam o carregamento nativos de módulos através da tag `<script type="module">`.

Um modulo em javascript é uma únidade de código confinada, e somente é acessada se o mesmo for exportado/importado.

- é necessário colocar o .js ao final do arquivo na importação por conta da exigência para uso de módulos nativamente
- no arquivo principal da SPA é necessário apenas importar o arquivo principal, e o sistema de módulos se encarrega de carregar os arquivos importados

> Functor é simplesmente algo mapeável, ou seja, que suporta a operação `map`.

O `Array` é um Functor, pois permite realizar operações de mapeamento em seus itens, isto é, nos dados que possui.

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
