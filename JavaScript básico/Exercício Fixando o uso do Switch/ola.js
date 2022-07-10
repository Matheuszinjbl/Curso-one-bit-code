let distanceInly = prompt("Digite a distância em anos-luz")

let choseOption = prompt("Para qual unidade deseja converter?\n1. Parse(pc)\n2. Unidade Astronômica (AU)" +
                          "\n3. Quilômetros (km) \n\n(Digite o número da opção desejada)")

let choseUnity
let convertedDistance

switch(choseOption) {
    case "1":
        choseUnity = "Parsec"
        convertedDistance = distanceInly * 0.306601
        break
    case "2":
        choseUnity = "Unidade Astronômica"
        convertedDistance = distanceInly * 63241.1
        break
    case "3":
        choseUnity = "Quilônmetros"
        convertedDistance =  distanceInly * 9.5 * Math.pow(10, 12)
        break
    default:
        choseUnity = "Unidade não identificada"
        convertedDistance = "Conversão fora do escopo"
}

alert("Distância em Anos-luz: " + distanceInly + "\n" + choseUnity + ":" + convertedDistance)