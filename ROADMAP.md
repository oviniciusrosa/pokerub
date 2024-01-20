# PokeRub - Roadmap

O desafio consistia na resolução de três histórias de usuário:

- **História 1**: Eu como usuário do PokeRub, quero visualizar todos os pokemons existentes por nome, havendo a possibilidade de filtrar pelo nome e consultar suas características (tipo, altura, peso, categoria e habilidades), para entendermos do que o pokemon é capaz.

- **História 2**: Eu como usuário do PokeRub, quero poder visualizar quais evoluções são possíveis de um pokemon específico, havendo a possibilidade de evoluir o pokemon se desejado para que eu tenha o pokemon evoluído.

- **História 3**: Eu como usuário do PokeRub, quero salvar meus pokemons favoritos em uma lista a parte para que eu possa consultar sempre que desejado.

### História 01

Para atender à esta história, foi necessário uma página inicial com a listagem de Pokémons obtidas pelo endpoint "/pokemon". A requisição está limitada à 20 elementos por página e, sempre que a lista atinge o fim da rolagem, uma nova requisição é efetuada para obter a próxima página de Pokemóns.

Para consultar as características e demais informações de cada Pokemón basta pressionar o card do mesmo e o usuário visualizará a tela de detalhe.

#### O que você faria diferente se tivesse mais tempo?

No iOS, a tela de detalhes do Pokemóns é exibida no modo de apresentação "modal" e isso ocasionou um comportamento estranho ao exibir as mensagens de Snackbar e o Loading. Apesar de encontrar um paleativo, em uma situação diferente alteraria o mecanismo de exibição destes componentes.

### História 02

Para atender à esta história, foi adicionado na tela de detalhes do Pokemón uma aba chamada "Evoluções", onde estão presente todas as suas evoluções.

Para obter os dados utilizei o endpoint "/pokemon-species/" para obter o id do _evolution_chain_ e, por fim, utilizar a rota "/evolution-chain/" para encontrar os dados necessários.

Uma vez obtido os dados, foi necessário aplicar uma operação recursiva na lista para obter a espécie de cada evolução e exibí-las numa listagem de textos.

Uma vez que o Pokemón está salvo como favorito, há a possibilidade de evoluí-lo. É permitido se "transformar" apenas numa versão superior do Pokemón, nunca inferior.

#### O que você adicionaria se tivesse mais tempo;

Em uma situação com mais tempo, eu adicionaria um modal de confirmação na ação de evoluir o Pokemón.

### História 03

Para atender à esta história, foi necessário uma página de favoritos com a listagem de Pokémons salvos na store da aplicação (_useFavoritePokemons_).

Também foi necessário adicionar à tela de detalhe do Pokemón um botão para atribuir o mesmo aos favoritos ou removê-lo. Também é possível remover um Pokemón pela própria tela de favoritos.

#### O que você adicionaria se tivesse mais tempo;

Com mais tempo, adicionaria uma barra de pesquisa à listagem de favoritos.
