# Desenvolvimento Web com HTML, CSS e JavaScript

Algumas anotações que considero pertinentes. 

# Capítulo 1 - O complexo mundo do front-end

## Bibliografias

- **A Arte E A Ciência Do CSS** - Adams & Cols;
- **The Smashing Book** - smashingmagazine

---

# Caítulo 2 - Introdução a HTML e CSS

> O HTML foi desenvolvido para exibição de documentos cienctíficos. Para termos uma comparação, é como se a Web fosse desenvolvida para exibir monografias redigidas e formatadas pe Metodologia do Trabalho Científico ABNT. Porém, com o otempo e aevoluçõa da Web e de seu potencial comercial, tornou-se necessário a exibição de informações com grande riqueza de lementos gráficos e de interação.

## A instrução DOCTYPE

O **DOCTYPE** não é uma tag HTML, mas uma instrução especial. Ela indica para o navegador **qual versão do HTML** deve ser utilizada para renderizar a página. Utilizamos `<!DOCTYPE html>` , que indica para o navegador a utilização da versão mais recente fo HTML - a versão 5, atualmente.

## TAGS HTML

O HTML 5 introduziu duas novas tags esécíficas para imagem: `<figure>` e `<figcaption>` . A tag `<figure>` define uma imagem com a conhecida datg `<img>` . Além disso, permite adicionar uma legenda para a imagem por mio da tag `<figcaption>` . Veja:

```html
<figure>
	<img src="img/produto.png" alt="Foto do adidas b2">
	<figcaption>Adidas B2 por R$ 200,20</figcaption>
</figure>
```

## LISTAS EM HTML

Há basicamente três tipos de listas em HTML: listas ordenadas `<ol>` , listas não-ordenadas `<ul>` e listas de definições `<dl>` .

- **Lista ordenadas**

    ```html
    <ol>
    	<li>Primeiro item</li>
    	<li>Segundo item </li>
    	<li>Terceiro item</li>
    </ol>
    ```

- **Lista não-ordenadas**

    ```html
    <ul>
    	<li>Primeiro item</li>
    	<li>Segundo item </li>
    	<li>Terceiro item</li>
    </ul>
    ```

- **Lista de definições**

    ```html
    <dl>
    	<dt>HTML</dt>
    	<dd>
    	    HTML é a linguagem de marcação de textos utilizada
    	    para exibir textos como páginas na Internet.
    	</dd>
    	<dt>Navegador</dt>
    	<dd>
    	   Navegador é um software que requisita um documento
    	   HTML através do portoculo HTTP e exibe seu conteúdo
    	   em uma janela
    	</dd>
    </dl>
    ```

## MARGIN E PADDING

💡Dica: Para centralizar o body podemos usar um truque de colocar um tamanho fixo e margens `<auto>` na esquerda e na direita. Assim:

```css
body{
	margin-left:auto;
	margin-right:auto;
	width:940px;
}
```

# Capítulo 3 - HTML semântico e posicionamento no CSS

## O PROCESSO DE DESENVOLVIMENTO DE UMA TELA

> "Um projeto de site ou aplicação web envolve muitas disciplinas em sua execução, pois são diversas características a serem analisadas e diversas as possibilidades apresentadas pela plataforma. Por exemplo, devemos conhecer muito bem as características do público alvo, pois ele define qual a melhor abordagem para definir a navegação, tom linguístico e visual a ser adotado, entre outras. A afinidade do público com a Internet e o computador pode inclusive definir o tipo e a intensidade das inovações que podem ser utilizadas.
**Por isso, a primeira etapa do desenvolvimento do projeto fica a cargo da área de User Experience Design (UX) ou Interaction Design (IxD), normalmente composta de pessoas com formação na área de comunicação. Essa equipe, ou pessoa, analisa e endereça uma série de informações da característica
humana do projeto, definindo a quantidade, conteúdo e localização de cada informação." *.pg 51*

Veja um esboço de um site, também podemos chamar de **wireframes**

![wirefrime.png](wirefrime.png)

## CSS RESET

Quando não especificamos nenhum estilo apara nossos elementos do HTML os navegadores se encarregam de acionar alguns estilos básicos padrão. Esses estilos variam para cada navegador. Sendo assim, um layout pode está conforme especificamos em um navegador, porém ficar quebrado em um outro navegador. Para solucionar esse "problema" podemos setar um valor básico para algumas atributos do CSS. Veja algumas poções para resetar os valores do CSS

- HTML5 Boilerplate
- YUI3 CSS Reset
- [Eric Meyer CSS Reset](https://meyerweb.com/eric/tools/css/reset/)

## Block Vs Inline

Basicamente elementos block ocupa toda largura da página independente do tamanho conteúdo. Já elementos Inline ocupa apenas o espaço do conteúdo. Para auterar o modo como nossos elementos serão exibidos basta usar a propriedade `display` mudando seu valor para `inline` , `block` ou `inline-block` .

## Position: Static, Relative, Absolute e fixed

> Existe um conjunto de propriedades que podemos utilizar para posicionar um elemento na página, que são top , left , bottom e right . Porém essas propriedades, por padrão, não são obedecidas por nenhum elemento, pois elas dependem de uma outra propriedade, a position .

- `static`

    Permanece sempre em seu local original no documento, aquele que o navegador entende como sendo sua posição de renderização. Se passarmos valores para as propriedades de coordenadas, elas não serão respeitadas.

- `relative`

    Um dos valores para propriedade `position` que aceitam coordenadas é o `relative` . Com ele, as coordenadas que passamos são obedecidas em relação à posição original do elemento. Por exemplo:

    ```css
    .logotipo{
    	position: relative;
    	top: 20px;
    	left: 50px;
    }
    ```

- `absolute`

    Existemalgumas regras que alteram seu comportamento em determinadas circunstâncias. Por definição, o elemento que tem o modo de posicionamento absolute toma como referência qualquer elemento que seja seu pai na estrutura do HTML cujo modo de posicionamento seja diferente de static (que é o padrão), e obedece às coordenadas de acordo com o tamanho total desse elemento pai.
    Quando não há nenhum elemento em toda a hierarquia daquele que recebe o posicionamento `absolute` que seja diferente de `static` , o elento vai aplicar as coordenadas tendo como referência a porção visível da página no navegador. Exemplo:

    ```html
    <div class="quadrado"></div>
    <div class="quadrado absoluto"></div>
    ```

    ```css
    .quadrado{
    	background-color: green;
    	height: 200px;
    	width: 200px;
    }
    .absoluto{
    	position: absolute;
    	top: 20px;
    	right: 20px;
    }
    ```

    No exemplo acima, o segundo elemento `<div>` , que recebe o calor "absoluto" em seu atributo calss, ,não tem nenhum elemento como seu "Pai" na hierarquia do cocumento, portanto ele vai alinhar-se ao topo e à direita do limite visível da página do navegador. Agora vejamos esse outro exemplo:

    ```html
    <div class = "quadrado relativo">
    	<div class="quadrado absolulto"></div>
    </div> 
    ```

    ```css
    .quadrado{
    	background-color: green;
    	height: 200px;
    	width:200px;
    }
    .absoluto{
    	position: absolute;
    	top: 20px;
    	right: 30px;
    }
    .relativo{
    	position: relative;
    }
    ```

    Nesse caso, o elemento que recebe o posicionamento absoluto é "filho" do elemento  que recebe o posicionamento `relative` na estrutura do documento, portanto, o elmento `absolute` vai usar como ponto de referência suas coordenadas o elemento `relative` e se posicionar 20px ao top e 30px à direita da **posição original** desse elemento.

- `fixed`

    Sempre vai tomar como referência a porção visível do documento no navegador, e mantém essa posição inclusive quando há rolagem na tela. É uma propriedade útil para avisos importantes que devem ser visíveis com certeza.

---

# Capítulo 4 - Mais HTML e CSS

## CLEAR

Existe uma propriedade que determina qual vai ser o comportamento de outros elementos que vêm ao redor daquele que a recebe e estão flutuando, essa propriedade é a `clear` . A propriedade `clear` quer dizer "limpe o fluxo do documento ao meu lado" e pode receber os valores `left` , `right` ou `both` .

O valor `left` impede que elementos flutuantes fiquem à esquerda do elemento que recebe essa
propriedade, o valor `right` impede que elementos flutuem à direita desse, e o valor `both` impede que elementos flutuem em ambos os lados do elemento. É importante sabermos que a propriedade `clear` de um elemento só interfere no layout da página caso outros elementos à sua volta estiverem flutuando.

## INHERIT

Imagine que temos a seguinte divisão com uma imagem:

```html
<div>
	<img src="box-model.png" alt="box model">
</div>
```

```css
div {
	border: 2px solid;
	border-color: red;
	width: 30px;
	height: 30px;
}
```

Queremos que a imagem preencha todo o espaçamento da `<div>` , mas as propriedades `width` e `height` não são aplicadas em cascata, sendo assim, somos obrigados a definir o tamanho da imagem manualmente:

```css
img {
	width: 30px;
	height: 30px;
}
```

Esta não é uma solução elegante, porque, se alteramos o tamanho da `<div>` , teremos que lembrar de alterar também o tamanho da imagem. Uma forma d resolver este problema é utilizando o valor `inherit` para as propriedades `width` e `height` da imagem:

```css
img {
	width: inherit;
	height: inherit;
}
```

O valor `inherit` indica para o elemento filho que ele deve utilizar o mesmo valor presente no
elemento pai, sendo assim, toda vez que o tamanho do elemento pai for alterado, automaticamente o elemento filho herdará o novo valor, facilitando assim, a manutenção do código.

## Seletor de atributo do CSS

Além dos seletores de **tag**, **classe** e **id**  existe uma série de seletores avançados do CSS.

Um dos seletores mais versáteis é o seletor de atributo, com ele podemos verificar a presença ou valor de um atributo para lecioná-lo. Por exemplo:

```css
input[value]{
	color: #CC0000;
}
```

O seletor acima age em todos os elementos da tag `<input>` que têm o atributo "value". Também é possível verificar se o atributo tem um valor específico:

```css
input[type="text"]{
	border-radius: 4px;
}
```

Além de verificar um valor integralmente, é possível utilizar alguns operadores para selecionar valores em determinadas condições, como por exemplo o seletor de atributo com prefixo:

```css
div[class|="menu"]{
	border-radius: 4px;
}
```

O seletor acima vai agir em todas as tags `<div>` cujo atributo "class" comece com a palavra **menu** seguida de um hífene qualquer outro valor na sequência, como por exemplo **menu-principal, menu-departamentos** e **menu-teste.**

Também é possível buscar uma palavra específica no valor, nãao importando o valor completo do atributo. Por exemplo:

```css
input[value~="problema"]{
	color: #CC0000;
}
```

O seletor acima agirá sobre todos os elementos da tag `<input>` que contiverem a palavra "problema" em seu conteúdo.

Um fato interessante sobre CSS é que possível utilizar operadores com sinais que  se assemelham aos das expressões regulares:

```css
/* busca por inputs com valor de "name" iniciando em "usuario" */
input[name^="usuario"] {
color: #99FFCC;
}
/* busca por inputs com valor de "name" terminando em "teste" */
input[name$="teste"] {
background-color: #CCFF00;
}
/* busca por inputs com valor do atributo "name".
contendo "tela" em qualquer posição */
input[name*="tela"] {
color: #666666;
}
```

# Capítulo 5 - CSS Avançado

## SELETOR DE IRMÃOS

Veja o seguinte HTML, que simula um texto com vários parágrafos, títulos e subtítulos no meio do documento:

```html
<article>
	<h1>Título</h1>
	<p>Início</p>
	<h2>Subtítulo</h2>
	<p>Texto</p>
	<p>Mais texto</p>
</article>
```

Como faremos se quisermos estilizar de uma certa maneira todos os parágrafos após o subtítulo ?

O Seletor **irmãos** (siblings) `~` serve pra isso ! Elevem do CSS3 e funciona em todos os navegadores modernos.

```css
h2 ~ p{
	font-style: italic;
}
```

Isso indica que queremos selecionar todos os `p` que foram precedidos por algum `h2` e são irmãos do subtítulo (ou seja, estão sob a mesma tag pai). No HTML anterior, serão selecionados os dois últimos parágrafos (Texto e Mais texto).

## SELETOR DE IRMÃO ADJACENTE

Ainda com o HTML anterior o que fazer se quisermos selecionar apenas o parágrafo imediatamente seguinte ao subtítulo ? Ou seja, em um `p` irmão do `h2` mas que aparece logo na sequência.

Simples, fazemos isso:

```css
h2 + p {
	font-variant: small-caps;
}
```

## SELETOR DE FILHO DIRETO

Se tivermos o seguinte HTML com título e seções de um artigo:

```html
<article>
	<h1>Título principal</h1>
	<section>
		<h1>Título da seção</h1>
	</section>
</article>
```

Queremos deixar o título principal de outra cor. Como fazer ? Dessa  forma:

```css
article > h1{
	color:blue;
}
```

## NEGAÇÃO

Imagine o seguinte HTML com vários parágrafos simples:

```html
<p>Texto</p>
<p>Outro texto</p>
<p>Texto especial</p>
<p>Mais texto</p>
```

Queremos fazer todos os parágrafos de cor cinza, exceto o que tem o texto *especial.* Precisamos destacá-lo de alguma forma forma no HTML para depois selecioná-lo no CSS. Uma classe ou ID resolve:

```html
<p>Texto</p>
<p>Outro texto</p>
<p class="especial">Texto especial</p>
<p>Mais texto</p>
```

Poderíamos usar o **seletor de negação** no CSS dessa forma:

```css
p:not(.especial){
	color: gray;
}
```

Isso diz que queremos todos os parágrafos que não têm a classe especial. A sintaxe do :`not()` recebe como argumento algum outro seletor simples (como classes, IDs ou tags).

## PSEUDO-CLASSES

Imagine o seguinte elemento:

```html
<ul>
	<li>Primeiro item</li>
	<li>Segundo item</li>
	<li>Terceiro item</li>
	<li>Quarto item</li>
</ul>
```

Como selecionar o primeiro e último elemento da `ul` acima, sem usar classes diretamente no HTML? Bem, podemos usar as pseudos classes `first:child` e `last:child` assim :

```css
li:first-child{
	color: blue;
}

li:last-child{
	color: tomato;
}
```

Legal né ? Mas não para por aí veja, pois temos um seletor mais genérico:  `:nth-child()` esse seletor permite que passamos um determinado índice do elemento, veja:

```css
li:nth-child(1){ /* Muda a cor do primeiro elemento*/
	color: tomato;
}
```

Porém, podemos ir além! Pois os `:nth-child()` aceita expressões aritiméticas, e isso nos dá um poder incrível como permutar cores de elementos ímpares e pares. Veja:

```css
li:nth-child(2n){ /* seleciona todos os itens pares*/
	background-color: gray;
}

li:nth-child(2n+1){ /* seleciona todos os itens ímpares*/
	background-color: tomato;
}
```

Legal né? Hehe

## PSEUDO-CLASSES DE ESTADOS

```css
a:hover{ /* muda a cor do item quando passamos o mouse sbore*/
	background-color: gold;
}
```

```css
a:link{ /* seleciona todas as âncoras que têm o atributo "href" ,ou seja, links*/
	background-color: blue;
}
```

```css
a:visited{ /* seleciona todos os liknks cujo valor de "href" é um endereço já visitado*/
	background-color: tomato;
}
```

```css
a:active{ /* seleciona todos os liknk no exato momento em que clicamos nele*/
	background-color: tomato;
}
```

## PSEUDO ELEMENTOS

Como selecionar a primeira letra de um parágrafo, sem adicionar nenhuma tag sobre essa letra que precisamos estilizar ? Simples! Podemos utilizar *pesudo elementos.* Veja:

```jsx
<p>Estou lendo a apostila da Caelum!</p>
```

Podemos estilizar dessa forma:

```css
p::first-letter{ /* seleciona a primeira letra dos parágrafos*/
	font-size: 200px;
}

p::first-line{ /* seleciona a primeira linha dos parágrafos*/
	font-style: italic;
}
```

## Novos Conteúdos

Há ainda outro tipo de pseudo-elemento mais poderoso que nos permite gerar conteúdo novo via CSS. Imagine uma lista de itens de uma **`ul`** que queremos, visualmente, colocar entre colchetes:

[ ITEM 1 ]

[ ITEM 2 ]

[ ITEM 3 ]

Po demos, claro, apenas adicionar os colchetes diretamente no HTML. Mas não precisamos que esses colchetes sejam lidos por leitores de tela. Ou seja, será algo apenas VISUAL. Podemos gerá-lo com CSS usando os pseudo lementos **`after`** e **`berore` .**

O HTML seria assim:

```html
<ul>
	<li>ITEM 1</li>
	<li>ITEM 2</li>
	<li>ITEM 3</li>
</ul>
```

E o CSS assim:

```css
li:before{
	content: '[';
}

li:after{
	content: ']';
}
```

Você pode fazer diversos layouts legais com essa técnica, só depende da sua criatividade. 

## CSS3: Progressive enhacement e graceful degradation

A ideia é fazer seu dite funcionar em qualquer navegador, sem prejudicar os navegadores mais antigos e sem deixar de usar os novos recursos em navegadores novos. Graceful degradation foi nome da primeir atécnica a pregar isso; o objetivoera montar seu site voltado aos navegadores modernos e fazer com que ele degradasse *graciosamente* , removendo funcionalidades não suportadas.

A abordagem masi recente, chamada **progressive enhancement** tem uma ideia parecida mas ao contrário, comece desenvolvendo as funcionalidades normalmente e vá acrescentando pequenas melhorias mesmo que só funcionem nos navegadores modernos.

Com o CSS 3, modemos usar progressice enhacement. Não é possível ainda te um site que dependa hoje totalmente do CSS.  

Ou seja, faça um layout que fique usável como bordas quadradas mas use bordas redondas para deixá-lo melhor, mais bonito, nos navegadores mais modernos.EXERCÍCIOS: VISUAL CSS3EXERCÍCIOS: VISUAL CSS3

## CSS3 TRANSITIONS

Com as transition, conseguimos animar o processo de mudança de algum valor do CSS.

Por exemplo: temos elementos na posição `top:10px` e, quando passamos o mouse em cima (hover), queremos que o elemento vá para `top:30px`  sutilmente. 

```css
#teeste{
	position: relative;
	top:10px;
}

#teste:hover{
	top: 30px;
	transition: top 2s;
}
```

Por padrão, a animação é linear, mas temos outros tipos para animação mais suaves:

- `linear` - velocidade constante na animação;
- `ease` - redução gradual na velocidade da animação;
- `ease-in` - aumento gradual na velocidade da animação;
- `ease-in-out` - aumento gradual, depois redução gradual na velocidade da animação;
- `cubic-bezier(x1, y1, x2, y2)` - curva de velocidade para animação sutomizada

DICA: Para criar curvas de forma interativa [clique aqui](http://www.roblaplaca.com/examples/bezierBuilder/) 

## CSS3 TRANSFORM

Com essa nova especificação, agora é possível alterar propriedades visuais dos elementos antes impossível. Por exemplo, agora podemos alterar o ângulo de um elemento, mostrá-lo em uma escala maior ou meno que seu tamanho padrão ou alterar a posição do elemento dem sofrer interferência de sua estrutura.

### TRANSLATE

- `transforme: translateX (50px);` — move o elemento no eixo horizontal
- `transforme: translateY (-20px);` — move o elemento no eixo vertical
- `transforme: translate (40px, -45px);` — move o elemento nos dois eixos (x,y)

### ROTATE

- `transforme: rotate (-50deg);` — rotaciona o elemento no sentido horário.

### SCALE

- `transforme: scale (1.5);` — altera a escala total de elemento
- `transforme: scale (1, 0.5);` — altera a escala vertical e horizontal do elemento

### SKEW

- `transforme: skewX (10deg);` — distorce o elemento no eixo horizontal vertical
