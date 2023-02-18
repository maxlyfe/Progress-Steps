Funções JavaScript utilizada no codigo, as mesmas foram detalhadas utilizando ChatGPT para melhor clareza dos comandos utilizados.

´querySelectorAll()´
O método ‘document.querySelectorAll()’ é uma função nativa do JavaScript que é usada para selecionar um ou mais elementos HTML em uma pagina da web. Ele retorna um objeto NodeList que contêm todos os elementos que correspondem ao seletor especificado.
O método ‘querySelectorAll’ recebe como parâmetro uma string contendo um seletor CSS, e retorna uma lista de elementos que correspondem a esse seletor. O seletor CSS funciona da mesma maneira que seria usado em um arquivo CSS normal, permitindo selecionar elementos com base em seus atributos, classes, ID, tipo, entre outras propriedades.
Por exemplo, se você quiser selecionar todos os elementos ‘p’ em uma página, você pode usar a seguinte sintaxe:
 ![image](https://user-images.githubusercontent.com/85650989/219820365-5e18382a-3230-459c-8b9a-e1a845000e03.png)


Se você quiser selecionar apenas os elementos com uma classe específica, você pode usar o seletor de classe CSS, que começa com um ponto:
![image](https://user-images.githubusercontent.com/85650989/219820403-ea6f4573-967d-498f-8780-a8b2dc1b7379.png)

 
O método ‘querySelectorAll’ é muito útil quando se trabalha com JavaScript e manipulação dos DOM de uma página da web, pois permite selecionar facilmente um ou mais elementos HTML e aplicar alterações ou interatividades a eles. Além disso, a NodeList retornada é uma dinâmica, o que significa que ela atualiza automaticamente quando novos elementos que correspondem ao seletor são adicionados ou removidos da página.

´forEach()´
O método ‘forEach()’  é uma função nativa do JavaScript que permite percorrer e executar uma função em cada elemento de um array. O método ‘forEach()’ recebe como parâmetro uma função de call-back que será chamada para cada elemento do array, permitindo executar uma ação específica para cada um deles. A sintaxe geral do método ‘forEach()’ é a seguinte:
 ![image](https://user-images.githubusercontent.com/85650989/219820420-c1bcfec5-9f0c-4ebc-bac2-d494238b031f.png)


O primeiro parâmetro da função de call-back é o elemento atual do array, o segundo é o índice do elemento atual e o terceiro é o próprio array completo. No entanto, você só precisa especificar os parâmetros que precisar na função de callback.
Por exemplo, se você quiser percorrer um array de números e exibir cada número no console, você pode usar o método ‘forEach()’ da seguinte maneira:
![image](https://user-images.githubusercontent.com/85650989/219820430-3985515f-b9de-4d3a-9a4a-dda340356e5e.png)

 

Este código percorre o array ‘numeros’ e executa a função de call-back para cada elemento do array. A função de call-back recebe o parâmetro ‘numero’, que é o elemento atual do array, e exibe cada número no console.

O método ‘forEach()’ é muito útil quando se trabalha com arrays em JavaScript, pois permite percorrer cada elemento de um array e executar uma ação específica em cada um deles, como exibir na  tela, modificar, ou fazer cálculos. Além disso, é uma forma mais legível e simplificada do que usar um loop ‘for’ para percorrer o array.


´addEventListener()´
O método ‘addEventListener()’ é uma função nativa do JavaScript que permite vincular um ouvinte de evento a um elemento HTML. O método ‘addEventListener()’ recebe dois parâmetros: o tipo de evento e a função de retorno de chamada, que será executada quando o evento acorrer.

A sintaxe geral do método ‘addEventListener()’ é a seguinte:
 ![image](https://user-images.githubusercontent.com/85650989/219820443-d27aafef-361a-41c2-b457-485332e66b5c.png)


O primeiro parâmetro, ‘tipoDeEvento’, é uma string que representa o tipo de evento que você deja ouvir, como “click”, “keyup”, “Submit”, entre outros. O segundo parâmetro, ‘funçãoRetornoDeChamada’, é a função que será executada quando o evento ocorrer.

Por exemplo, se você quiser adicionar um ouvinte de evento de clique a um botão, você pode usar o método ‘addEventListener()’ da seguinte maneira:
 ![image](https://user-images.githubusercontent.com/85650989/219820474-d5b7724e-7e2c-4b8f-bb85-c0735276f11b.png)


Este código adiciona um ouvinte de evento de clique ao botão com o ID ´meuBotao’.
Quando o botão é clicado, a função de retorno de chamada é executada.

O método ‘addEventListener()’ é muito útil quando se trabalha com eventos em JavaScript, pois permite detectar e responder  a eventos do usuário, como cliques, pressionamentos de tecla, envios de formulário, entre outros. Além disso, você pode adicionar vários ouvintes de eventos ao mesmo elemento, o que permite executar várias ações diferentes em resposta a um único evento.


´getElementById´
É uma função do JavaScript que permite buscar elementos HTML por seu identificador uníco. Ele usa o ID atribuído ao elemento especificado no DOM (Document Object Model) e retorna esse elemento como um ovjeto dos tipos HTML, Element ou null.

Exemplo:
´document.getElementById('elementId');´

Aqui, estamos buscando um elemento com o ID elementId e armazenando-o na variável element. Se o elemento existir, essa variável terá o valor do elemento; caso contrátio, o valor da variável será null.

classList.add()
O método ‘classList.add()’ é uma função nativa do JavaScript que permite adicionar uma ou mais classes a um elemento HTML. A função ‘classList’ é um objeto que representa as classes de um elemento e fornece vários métodos para manipulá-las, incluindo o método ‘add()’.
A sintaxe geral do método ‘add()’ é a seguinte:
 ![image](https://user-images.githubusercontent.com/85650989/219820507-cb02230a-af0a-4353-86cf-06b290ad8eb9.png)


O método ‘add()’ adiciona uma ou mais classes ao elemento especificado. Cada classe é especificada como um parâmetro separado por vírgulas. Se a classe já estiver presente no elemento, ela não será adicionada novamente.

Por exemplo, se você quiser adicionar a classe ‘ativo’ a um elemento HTML quando um botão for clicado, você pode usar o método ‘classList.add()’ da seguinte maneira:
 ![image](https://user-images.githubusercontent.com/85650989/219820525-5036ccc1-7909-403e-8eff-7e056a5d42fd.png)

Este código adiciona um ouvinte de evento de clique ao botão com o ID ‘meuBotao’. Quando o botão é clicado, a função de retorno de chamada adiciona a classe ‘ativo’ ao elemento com o ID ‘meuElemento’.

O método ‘classList.add()’ é muito útil quando se trabalha com classes em JavaScriptt, pois permite adicionar ou remover classes dinamicamente em um elemento HTML, o que permite alterar o estilo ou comportamento de um elemento. Além disso, a manipulação de classes é uma prática comum na construção de interfaces de usuário dinâmicas e interativas em JavaScript.

classList.remove()
O método ‘classList.remove()’ é uma função nativa do JavaScript que permite remover uma ou mais classes de um elemento HTML. A função ‘classList’ é um objeto que representa as classes de um elemento e fornece vários métodos para manipulá-las, incluindo o método ‘remove()’.

A sintaxe geral do método ‘remove()’ é a seguinte:
 ![image](https://user-images.githubusercontent.com/85650989/219820543-d0cb9374-e7ad-4fa2-a0b1-f151529bc6b3.png)


O método ‘remove()’ remove uma ou mais classes do elemento especificado. Cada classe é especificada como um parâmetro separado por vírgulas. Se a classe não estiver presente no elemento, nada acontecerá.

Por exemplo, se você quiser remover a classe ‘ativo’ de um elemento HTML quando um botão for clicado, você pode usar o método ‘classList.remove()’ da seguinte maneira:
 ![image](https://user-images.githubusercontent.com/85650989/219820565-0e7221f2-7061-49a9-bfcd-1ab23f449649.png)

Este código adiciona um ouvinte de evento de clique ao botão com o ID ‘meuBotao’.
Quando o botão é clicado, a função de retorno de chamada remove a classe ‘ativo’ do elemento com o ID ‘meuElemento’.

O método ‘classList.remove()’ é muito útil quando se trabalha com classes em JavaScript, pois permite adicionar ou remover classes dinamicamento em um elemento HTML, o que permite alterar o estilo ou comportamento de um elemento. Além disso, a manipulação de classes é uma prática comum na construção de interfaces de usuário dinâmicas e interativas em JavaScript.

