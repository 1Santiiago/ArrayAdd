const numbers = [1, 2, 3];

// adicionar no inico do array

numbers.unshift(0);

// ""   no meio do array

numbers.splice(1, 0, "San");

//"" no final do array

numbers.push("fim do array");

//testando o splice pra remover o nome san

numbers.splice(1, 1, "removido");
console.log(numbers);
