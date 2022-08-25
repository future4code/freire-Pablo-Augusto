type Sufixo = "AC" | "DC"

enum Eras {
    PREHISTORIA = "Pré-história",
    ANTIGA = "Idade Antiga",
    MEDIA = "Idade Média",
    MODERNA = "Idade Moderna",
    CONTEMPORANEA = "Idade Contemporânea"
}

function defineIdade(ano: number, sufixo?: Sufixo): void {
    switch(sufixo) {
        case "AC":
            if (ano > 4000) {
                console.log(`Ano ${ano} AC, ${Eras.PREHISTORIA}`)
            } else {
                console.log(`Ano ${ano} AC, ${Eras.ANTIGA}`)
            }
            break
        default:
            if (ano < 476) {
                console.log(`Ano ${ano} DC, ${Eras.ANTIGA}`)
            } else if (ano >= 476 && ano < 1453) {
                console.log(`Ano ${ano} DC, ${Eras.MEDIA}`)
            } else if (ano >= 1453 && ano < 1789) {
                console.log(`Ano ${ano} DC, ${Eras.MODERNA}`)
            } else if (ano >= 1789) {
                console.log(`Ano ${ano} DC, ${Eras.CONTEMPORANEA}`)
            }
    }
}

defineIdade(4500, "AC")
defineIdade(4000, "AC") 
defineIdade(200, "AC")
defineIdade(10, "DC")
defineIdade(476)
defineIdade(500)
defineIdade(1453, "DC")
defineIdade(1500)
defineIdade(1789)
defineIdade(2022)

