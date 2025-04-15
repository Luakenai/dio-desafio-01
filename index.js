const turnipBoy = "Turnip Boy"

let nivelDoTurnipBoy = 2500
let nivel = ""

if (nivelDoTurnipBoy <= 1000) {
    nivel = "Ferro"
} else if (nivelDoTurnipBoy <= 2000) {
    nivel = "Bronze"
} else if (nivelDoTurnipBoy <= 5000) {
    nivel = "Prata"
} else if (nivelDoTurnipBoy <= 7000) {
    nivel = "Ouro"
} else if (nivelDoTurnipBoy <= 8000) {
    nivel = "Platina"
} else if (nivelDoTurnipBoy <= 9000) {
    nivel = "Ascendente"
} else if (nivelDoTurnipBoy <= 10000) {
    nivel = "Imortal"
} else {
    nivel = "Radiante"
}

console.log("O Herói de nome " + turnipBoy + " " + "está no nível de " + nivel + " de " + nivelDoTurnipBoy + " XP.")
