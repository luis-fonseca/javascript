# javascript Padding
Utilitários para JavaScript

## Sobre 

padding -> Preenche uma string para um determinado tamanho com outra string. Padding foi baseada na versão str_pad para PHP.

## Descrição

Esta função retorna a string padInput preenchida na esquerda, direita ou em ambos os lados até o tamanho especificado. Se o argumento opcional padString não for especificado, padInput será preenchido com espaços, caso contrário será preenchido com os caracteres de padString até o limite.

Se o valor de padLength for negativo, inválido ou menor do que o tamanho da string, não haverá qualquer preenchimento.

O parâmetro opcional padSide pode ser RIGHT (preencher à direita), LEFT (preencher à esquerda), ou BOTH (preencher de ambos os lados). Se padSide não for especificado ou inválido será atribuído o valor RIGHT, além disso, padSide ignora o caso do argumento.

## Exemplos de uso

`var name = "Alien";` <br />
`console.log(padding({padInput: name, padLength: 10}));`
<br />// retorna "Alien&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;"

`console.log(padding({padInput: name, padLength: 10, padString: "-=", padSide: "LEFT"}));` 
<br />// retorna "-=-=-Alien" <br />

`console.log(padding({padInput: name, padLength: 10, padString: "_", padSide: "BOTH"}));` 
<br />// retorna "\_\_Alien\_\_\_"

`console.log(padding({padInput: name, padLength: 6, padString: "_"}));` 
<br />// retorna "Alien_"
