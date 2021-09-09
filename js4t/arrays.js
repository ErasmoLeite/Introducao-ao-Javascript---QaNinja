//var avangers = new Array();

var avangers = ['Homem de ferro', 'Capitão América', "Thor"]

console.log(avangers)

avangers.push('Hulk')

console.log(avangers)

avangers.push('Homem Aranha')
//avangers.pop();  // pop remove o ultimo registro do meu array
//avangers.shift(); // shift remove o primeiro registro do meu array

var indice = avangers.indexOf('Homem Aranha')
avangers.splice(indice)

avangers.push('Viúva Negra')
avangers.push('Gavião Arqueiro')

console.log(avangers)

var newAvangers = ['Homem Aranha', 'Capitã Marvel', 'Miss Marvel', 'Pantera Negra']

var result = avangers.concat(newAvangers)
console.log(result)