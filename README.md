# Book
Aplicativo para pesquisar livros por título e/ou autor

<p>
Desenvolvi esse aplicativo com o intuito de aplicar meus estudos em relação ao Node JS e ao React JS.
Criei um book search que permite ao usuário fazer uma busca por livros a partir do título e/ou do autor da obra.</br>

O projeto foi dividido em duas partes: </br>
<ul>
  <li>O backend - responsável por receber os parâmetros passados, enviar para o google api book que fará a pesquisa, receber e mandar a resposta para o frontend.</li>
  <li>O frontend - tela de pesquisa onde o usuário vai digitar o que busca, enviar para o backend e apresentar o resultado final.</li>
</ul>
O projeto não teve dificuldades, mas, um desafio interessante para se mencionar foi criar uma estratégia para separar os parâmetros do usuário 
(que vem como uma única string) em título e autor e montar a url.
</p>

<p>
Este aplicativo está disponível no GitHub: https://github.com/jean113/book
</p>

<hr/>
<b>Ferramentas utilizadas:</b>

<ul>
  <li>Visual Studio Code - Editor de código-fonte</li>
  <li>Node JS - backend </li>
  <li>React JS - frontend</li>
</ul>

</p>

<hr/>

<p>

<b>Preview</b></br>
<img src = "https://github.com/jean113/book/blob/master/frontend/src/assets/apresentacao.gif" />

</p>

<hr/>

<p>
<b>Requisitos:</b><br/>
<ul>Para baixar e rodar esta aplicação, você precisará  do Git, Node.js v12.16.1 ou superior.</ul>
</p>

<hr/>

<p>
<b>Como usar:</b><br/>
<ul>

Baixar repositório</br>
$ git clone https://github.com/jean113/book.git</br>

Através de um prompt de comando:

#Entrar na pasta raiz do projeto </br>
$ npm install -g yarn

#Entrar na pasta do backend</br>
$ yarn install
$ yarn start

#Entrar na pasta do frontend</br>
$ yarn install
$ yarn start

</ul>

Lembrando que os comandos npm e yarn podem ser executados no terminal do Visual Studio Code
</p>

