let spaceship = prompt("Digite o nome da nave")

let charToReplace = prompt("Qual caracter você deseja substituir?")

let replacementChar = prompt("Por qual caracter você deseja substituir?")

let newSpaceship = ""

for(let pos = 0; pos < spaceship.length; pos++) {
    if(spaceship[pos] == charToReplace) {
        newSpaceship += replacementChar
    } else {
        newSpaceship += spaceship[pos]
    }
}

alert("O novo nome da nave é " + newSpaceship)

// Elemental
// e
// h

// pos 0  E  e   newSpaceship = E
// pos 1  l  e   newSpaceship = El
// pos 2  e  e   newSpaceship = Elh
// pos 3  m  e   newSpaceship = Elhm
// pos 4  e  e   newSpaceship = Elhmh
// pos 5  n  e   newSpaceship = Elhmhn
// pos 6  t  e   newSpaceship = Elhmhnt
// pos 7  a  e   newSpaceship = Elhmhnta
// pos 8  l  e   newSpaceship = Elhmhntal

